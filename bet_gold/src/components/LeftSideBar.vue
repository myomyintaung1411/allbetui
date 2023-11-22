<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import { useStore } from "vuex";
import globaljs from '@/utils/global'
import { CreditCardIcon, LogoutIcon } from "@heroicons/vue/outline";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';
import allApi from "@/network/allApi.js";

const instance = getCurrentInstance()
const router = useRouter()
const activeRoute = ref("");
const route = useRoute();
const store = useStore()
const deg = ref(0);
const activeYen = ref(true)
const activeUSDT = ref(false)
const logoutDialog_ = ref(false)
//const activeTab = ref(1)

const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);
const msgAlert = computed(() => store.getters["app/MsgAlert"]);
const activeTab = computed(() => store.getters["app/ACtiveTab"]);
watch(
    () => route.path,
    () => {
        console.log(route.path, "watching");
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

watch(
  activeTab,
  (newValue) => {
    localStorage.setItem('tab', newValue);
  },
  { immediate: true, deep: true }
);
const goReg = () => {
    router.push('/register')
}
const goLogin = () => {
    router.push('/login')
}

const logout = () => {
    logoutDialog_.value = false
    localStorage.clear()
    router.push('/')
    setTimeout(() => {
        window.location.reload()
    }, 1000);
}

if (localStorage.getItem('tab')) {
    store.commit('app/ActiveTab_Mutation', localStorage.getItem('tab'))
   // activeTab.value = localStorage.getItem('tab')
}

const moneyActive = (number) => {
    //activeTab.value = number
    store.commit('app/ActiveTab_Mutation', number)
    //localStorage.setItem('tab', number)
    if (number == 1 && (activeRoute.value === '/pc/addBankCard' || activeRoute.value === '/pc/addUsdtCard')) {
        router.push('/pc/addBankCard')
    }
    if (number == 2 && (activeRoute.value === '/pc/addBankCard' || activeRoute.value === '/pc/addUsdtCard')) {
        router.push('/pc/addUsdtCard')
    }
}

const getUserInfo = () => {
    console.log("clickedddddddddd");
    deg.value += 360;
    return globaljs.getUserInfo()
}

//bind phone
const addAccount = () => {
    if (!token.value) {
        router.push('/login')
    }
    if (userValue?.value?.is_set_phone == 0) {

        instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
        setTimeout(() => {
            router.push('/pc/accsetting')
        }, 1000);
        return
    }

    if (activeTab.value == 1) {
        router.push('/pc/addBankCard')
    } else {
        router.push('/pc/addUsdtCard')
    }
}

const goUserInfo = (number) => {
    if (!token?.value) return router.push('/login')
    console.log("number", number);
    switch (number) {
        case 1:
            if (userValue?.value?.is_set_phone == 0) {

                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                setTimeout(() => {
                    router.push('/pc/accsetting')
                }, 1000);
                return
            }

            if (activeTab.value == 1) {
                router.push('/pc/moneyDeposit')
            } else {
                router.push('/pc/usdtDeposit')
            }
            break;
        case 2:
            if (activeTab.value == 1) {
                router.push({ path: '/pc/wash', query: { type: 'CNY' } })
            } else {
                router.push({ path: '/pc/wash', query: { type: 'USDT' } })
            }
            // router.push('/pc/wash')
            break;
        case 3:
            if (userValue?.value?.is_set_phone == 0) {

                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                setTimeout(() => {
                    router.push('/pc/accsetting')
                }, 1000);
                return
            }

            if (activeTab.value == 1 && userValue?.value?.user_level < 1) {
                return instance.proxy.$message({ message: '您尚未到达取款等级', duration: 2 })
            }

            if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
                == 0) {
                router.push({ path: '/pc/PcbindPhoneForWithdraw', query: { type: 'BANK' } })
            }

            if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
                == 1) {
                router.push('/pc/bindWithdrawpass')
            }
            //usdt withdrawal
            if (activeTab.value == 2 && userValue?.value?.is_add_usdt_info == 0) return instance.proxy.$message({ message: '请先添加USDT地址', duration: 2 })
            if (activeTab.value == 2 && userValue?.value?.is_set_phone == 1) {
                router.push({ path: '/pc/PcbindPhoneForWithdraw', query: { type: 'USDT' } })
            }

            break;
        case 4:
            router.push('/pc/PcUsdtBuy')
            break;
        case 5:
            router.push('/pc/PcUsdtSell')
            break;

        default:
            break;
    }
}
</script>
    
<template>
    <div class="h-full w-[212px] min-w-[212px] flex flex-col relative">
        <div v-if="!token">
            <div @click="goReg()"
                class="h-[100px] cursor-pointer w-full bg-gradient-to-bl from-[#04162f] via-[#212225] to-[#212225] px-6 pt-4">
                <img src="@/assets/pc/Home/gold_logo.png" alt="" class="w-auto h-auto">
            </div>
            <div class="py-2">
                <div @click="goLogin()"
                    class="h-[70px] cursor-pointer w-full bg-[#212225] flex justify-center items-center">
                    <img src="@/assets/pc/Home/txt2.png" alt="" class="w-11 h-5">
                </div>
            </div>
        </div>
        <div v-else>
            <div class=" w-full h-[70px] __bginfo mb-2 px-2 py-1 cursor-pointer">
                <div class="first-letter:text-red-700 tracking-[5px] text-[#c1c1c1]">{{ userValue?.username }}</div>
                <div class="flex relative items-center space-x-3">
                    <div class="w-[67px] relative h-3 mt-1">
                        <img src="@/assets/mobile/user/level.png" alt="" class="w-auto h-6">
                        <div class=" text-right absolute top-[3px] right-1 text-sm w-full h-6 text-black">
                            {{ userValue?.user_level }}</div>
                    </div>
                    <div class="w-5 h-5 absolute mt-5 left-20">
                        <img src="@/assets/mobile/user/gurad.png" alt="" class="w-auto h-auto">
                    </div>
                    <router-link to="/pc/notification" class="w-4 h-4 absolute top-[4px] right-2">
                        <div class="relative">
                            <img src="@/assets/pc/notiii.png" alt="" class="w-auto h-auto" />
                            <div v-if="msgAlert?.alert > 0"
                                class="bg-red-500 absolute flex justify-center items-center -top-1 -right-3 rounded-full text-white p-[2px] text-xs w-4 h-4 text-center">
                                {{ msgAlert?.alert > 9 ? '9+' : msgAlert?.alert }}
                            </div>
                        </div>
                    </router-link>

                </div>
            </div>
            <div class="w-full  bg-[#24252a] border-b border-[#525050] py-2 relative cursor-pointer">
                <div class="w-full flex justify-center items-center space-x-7 ">
                    <div @click="moneyActive(1)">
                        <img v-if="(activeTab == 1)" src="@/assets/mobile/user/yena.png" alt="" class="w-8 h-9">
                        <img v-else src="@/assets/mobile/user/yen.png" alt="" class="w-8 h-9">
                    </div>
                    <div class="h-4 w-[1px] bg-[#585858]"></div>
                    <div @click="moneyActive(2)">
                        <img v-if="(activeTab == 2)" src="@/assets/mobile/user/USDTa.png" alt="" class="w-7 h-8">
                        <img v-else src="@/assets/mobile/user/USDT.png" alt="" class="w-7 h-8">

                    </div>

                </div>
                <div class="flex items-center relative pt-2 px-3 ">
                    <div v-if="activeTab == 1" class="flex justify-start items-center">
                        <img src="@/assets/mobile/user/money.png" alt="" class="w-5 h-5" />
                        <div class="text-base pt-1 px-3">{{ userValue?.balance || 0 }}</div>
                    </div>
                    <div v-else class="flex justify-start items-center">
                        <img src="@/assets/mobile/user/coin.png" alt="" class="w-5 h-5" />
                        <div class="text-base pt-1 px-3">{{ userValue?.coin || 0 }}</div>
                    </div>

                    <div class="text-base pt-1 px-3 absolute right-0">
                        <img @click="getUserInfo()" v-bind:style="{ transform: `rotate(${deg}deg)` }"
                            src="@/assets/mobile/user/load.png" alt="" class="w-4 h-4 transition ">
                    </div>
                </div>
            </div>
            <div class="bg-[#24252a] mb-2">
                <div class="h-[70px] cursor-pointer w-full  justify-evenly flex items-center ">
                    <div @click="goUserInfo(1)">
                        <img src="@/assets/mobile/user/card.png" alt="" class="w-7 h-8">
                    </div>
                    <div @click="goUserInfo(2)">
                        <img src="@/assets/mobile/user/card22.png" alt="" class="w-6 h-9">
                    </div>
                    <div @click="goUserInfo(3)">
                        <img src="@/assets/mobile/user/card33.png" alt="" class="w-7 h-8">
                    </div>

                </div>
                <div v-if="(activeTab == 2)" class="flex items-center pb-2 justify-between cursor-pointer ">
                    <div @click="goUserInfo(4)" class="w-[50%] flex items-center  space-x-2 ">
                        <img src="@/assets/USDT.svg" alt="" class="w-4 h-4 ml-1">
                        <span class="text-[11px] text-[#7e7e7e]">买币</span>
                        <img src="@/assets/mobile/home/usedbuytip.webp" alt="" class="h-5">
                    </div>
                    <div class="h-4 w-[1px] ml-1 bg-gray-600"></div>
                    <div @click="goUserInfo(5)" class="flex items-center  justify-center w-[45%] space-x-2">
                        <img src="@/assets/USDT.svg" alt="" class="w-4 h-4">
                        <span class="text-[11px] text-[#7e7e7e]">兑人民币</span>
                    </div>
                </div>
            </div>


        </div>

        <div class=" text-sm  relative meau-area"
            :class="token ? 'h-[625px]' : 'h-[675px]'">
            <nav class="relative px-1">
                <div class="pt-[10px] ">
                    <ul class=" p-0 ">
                        <li class="mb-[20px] relative border-b border-solid border-[#dfa009] py-3">
                            <router-link to="/home" class=" h-full w-full flex items-center">
                                <div class="px-4 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/home'" src="@/assets/pc/homea.png" alt=""
                                        class="w-[80px] h-auto">
                                    <img v-else src="@/assets/pc/homea.png" alt="" class="w-[70px] h-auto">
                                </div>
                            </router-link>
                        </li>
                        <li class="mb-[10px] relative py-2">
                            <router-link to="/promotion" class=" h-full w-full flex items-center    ">
                                <div class="px-4 h-[24px] flex items-center">
                                    <img v-if="activeRoute === '/promotion'" src="@/assets/pc/vipa.png" alt=""
                                        class="h-[25px] w-auto">
                                    <img v-else src="@/assets/pc/vipa.png" alt="" class="h-[22px] w-auto">
                                    <div class="absolute right-1">
                                        <img src="@/assets/pc/th.png" alt="" class="h-full w-[30px]">
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li class="mb-[20px] relative border-b border-solid border-[#dfa009] pb-4">
                            <router-link :to="token ? '/pc/userdetail' : '/login'"
                                class=" h-full w-full flex items-center    ">
                                <div class="px-4 h-[24px] flex items-center">
                                    <img v-if="activeRoute === '/pc/userdetail'" src="@/assets/pc/va.png" alt=""
                                        class="h-[25px] w-auto">
                                    <img v-else src="@/assets/pc/va.png" alt="" class="h-[23px] w-auto">
                                </div>
                            </router-link>
                        </li>
                        <li class="mb-[15px] relative pb-2 pt-2">
                            <router-link :to="token ? '/pc/transRecord' : '/login'"
                                class=" h-full w-full flex items-center">
                                <div class="px-4 h-[24px] flex items-center">
                                    <img v-if="activeRoute === '/pc/transRecord'" src="@/assets/pc/aa.png" alt=""
                                        class="h-[26px] w-auto">
                                    <img v-else src="@/assets/pc/aa.png" alt="" class="h-[23px] w-auto">
                                </div>
                            </router-link>
                        </li>
                        <li class="mb-[15px] relative pb-2">
                            <div @click="addAccount" class=" h-full w-full cursor-pointer flex items-center    ">
                                <div class="px-4 h-[24px] flex items-center">
                                    <img v-if="activeRoute === '/pc/addBankCard' || activeRoute === '/pc/addUsdtCard'"
                                        src="@/assets/pc/ba.png" alt="" class="h-[19px] w-auto">
                                    <img v-else src="@/assets/pc/ba.png" alt="" class="h-[18px] w-auto">
                                    <div class="absolute right-1">
                                        <img v-if="activeTab == 1" src="@/assets/pc/card.png" alt=""
                                            class="h-full w-[35px]">
                                        <img v-if="activeTab == 2" src="@/assets/USDT.svg" alt=""
                                            class="h-full w-[30px]">
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-[15px] relative pb-4 border-b border-solid border-[#dfa009]">
                            <router-link :to="token ? '/pc/accsetting' : '/login'"
                                class=" h-full w-full flex items-center    ">
                                <div class="px-4 flex items-center">
                                    <img v-if="activeRoute === '/pc/accsetting'" src="@/assets/pc/ca.png" alt=""
                                        class="h-[27px] w-auto">
                                    <img v-else src="@/assets/pc/ca.png" alt="" class="h-[25px] w-auto">
                                </div>
                            </router-link>
                        </li>



                        <li class="mb-[15px] relative pb-2 pt-4">
                            <router-link to="/about" class=" h-full w-full flex items-center    ">
                                <div class="px-4 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/about'" src="@/assets/pc/da.png" alt=""
                                        class="h-[24px] w-auto">
                                    <img v-else src="@/assets/pc/da.png" alt="" class="h-[22px] w-auto">
                                </div>
                            </router-link>
                        </li>
                        <li class="mb-[15px] relative pb-2">
                            <router-link to="/aggrement" class=" h-full w-full flex items-center    ">
                                <div class="px-4 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/aggrement'" src="@/assets/pc/ea.png" alt=""
                                        class="h-[27px] w-auto">
                                    <img v-else src="@/assets/pc/ea.png" alt="" class="h-[24px] w-auto">
                                </div>
                            </router-link>
                        </li>
                        <li class="mb-[15px] relative pb-5">
                            <router-link to="/pc/coporation" class=" h-full w-full flex items-center    ">
                                <div class="px-4 h-[20px] flex items-center">
                                    <img v-if="activeRoute === '/pc/coporation'" src="@/assets/pc/fa.png" alt=""
                                        class="h-[23px] w-auto">
                                    <img v-else src="@/assets/pc/fa.png" alt="" class="h-[21px] w-auto">
                                </div>
                            </router-link>
                        </li>
                        <li v-if="token" class="h-[40px] cursor-pointer px-2 relative" @click="logoutDialog_ = true">
                            <img src="@/assets/pc/bglog.png" alt="" class="w-auto h-auto">
                            <img src="@/assets/pc/logout.png" alt="" class="absolute top-1 left-4 w-auto h-[16px]">
                        </li>
                        <li v-if="token" class="h-[40px] cursor-pointer mb-[30px] relative pb-8 pt-4">
                            <router-link to="/pc/feedback" class=" h-full w-full flex items-center">
                                <div class=" h-full w-full flex  items-center px-4">
                                    <img v-if="activeRoute === '/pc/feedback'" src="@/assets/pc/home/info.png" alt=""
                                        class="w-auto h-[24px]">
                                    <img v-else src="@/assets/pc/home/info.png" alt="" class="w-auto h-[21px]">
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>

            </nav>

        </div>

        <NotCloseDialog :show="logoutDialog_" @close="logoutDialog_ = false">
            <div class="w-[500px] py-10 text-[#c1c1c1] px-3  ">
                <p class="text-center text-xl">提示</p>
                <div class="w-full text-start py-3">
                    <p class="text-[#c1c1c1] font-bold text-md text-center tracking-widest">您确定要退出账号吗？</p>
                </div>

                <div class="flex pt-5 items-center  w-full  justify-evenly px-3">
                    <div @click="logoutDialog_ = false"
                        class="btn z-10 flex items-center justify-center btn-outline  h-[50px]  border border-solid 
                              border-[#c1c1c1] text-[#c1c1c1] font-bold text-md cursor-pointer px-12  whitespace-nowrap">
                        取消
                    </div>
                    <div @click="logout" class="relative cursor-pointer">
                        <img src="@/assets/pc/Home/bg.png" alt="" class="w-[120px] h-[50px]">
                        <div
                            class="absolute bottom-0 w-full h-full flex justify-center items-center text-base text-black">
                            确认</div>
                    </div>
                </div>
            </div>
        </NotCloseDialog>
    </div>


</template>
    
<style scoped>
.bg_user {
    background-image: url("@/assets/pc/Home/1.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
}

.meau-area {
    background-image: url("@/assets/pc/menubg.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* height: 675px; */
    width: 100%;
}

.__bginfo {
    background-image: url("@/assets/pc/menubg.png");
    background-size: cover;
    background-repeat: no-repeat;
}
</style>