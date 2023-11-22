<template>
    <div class="hidden sm:block relative flex-auto mx-[19px] bg-[#0d0d0f] cursor-pointer">
        <div class="main">
            <div class="main-content w-full relative">
                <div
                    class="w-full pt-2 tabs flex items-center justify-between space-x-5   border-b border-[#7e7e7e] border-dashed">
                    <div
                        class="text-base link_phone text-[#d0d0d0] text-center py-3 cursor-pointer w-[120px] tracking-wider border-b border-[#eed0a4] ">
                        我的账户

                    </div>
                </div>
                <div class="flex justify-between  h-[230px] w-full my-2 ">
                    <div class="w-[300px] text-[12px] text-[#a6a6a6] px-2 py-2 bg-[#1f2129]">
                        <div class="h-[70px] border-b border-[#4c4c54] border-dashed ">
                            <div class="flex items-center justify-between">
                                <p class="text-[#cbcbcb] text-[14px] first-letter:text-red-700">{{
                                    userValue?.username
                                }}
                                </p>
                                <div>晋级条件 ></div>
                            </div>
                            <div class="flex items-center justify-between pt-2">
                                <div class="w-16 relative h-7 ">
                                    <img src="@/assets/mobile/user/level.png" alt="" class="w-full h-6">
                                    <div
                                        class=" text-right absolute top-[2px] right-1 w-full h-7 text-[#5e3f15] text-[13px] ">
                                        {{ userValue?.user_level }}</div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-around items-center px-4 h-[70px] border-b border-[#4c4c54] border-dashed">
                        </div>
                        <div class="flex justify-around items-center px-4 h-[70px]">
                            <a>
                                <div class="h-[29px] w-[74px] flex items-center justify-center text-[12px] text-[#a6a6a6]
                                 border border-[#5b5b5b]
                                ">修改限红</div>
                            </a>
                            <div class="h-[29px] border-r border-[#282b30]"></div>
                            <a class="text-center">
                                <router-link to="/pc/feedback" class="h-[29px] flex items-center justify-center  w-[74px] text-[12px] text-[#a6a6a6]
                                 border border-[#5b5b5b]
                                ">问题反馈</router-link>
                            </a>
                        </div>
                    </div>
                    <!--  -->
                    <section class="h-full w-[475px] bg-[#1f2129] mx-1">
                        <div class="h-full">
                            <div class="relative px-2 py-2 h-[80px] border-b border-[#282b30] mb-3">
                                <div class="flex items-center text-[#a6a6a6] text-base">
                                    <p>账户总额度</p>
                                </div>
                                <div class="py-2 flex items-center space-x-5">
                                    <div class="flex items-center space-x-2">
                                        <img src="@/assets/USDT.svg" alt="" class="w-5 h-5">
                                        <div class="fon-bold text-xl">{{ (userValue?.balance || 0) }}</div>
                                    </div>

                                    <div class="flex items-center space-x-2">
                                        <img src="@/assets/mobile/user/usdtCircle.png" alt=""
                                            class="w-[1.3rem] h-[1.3rem]">
                                        <div class="fon-bold text-xl">{{ (userValue?.coin || 0) }}</div>
                                    </div>
                                    <div @click="reload()">
                                        <img src="@/assets/mobile/user/load.png" alt="" class="w-4 h-4 transition z-10"
                                            v-bind:style="{ transform: `rotate(${deg}deg)` }">
                                    </div>

                                    <!-- <img src="@/assets/mobile/user/load.png" alt="" class="w-4 h-4"> -->
                                </div>
                            </div>
                            <div class="h-[120px]  flex items-center justify-around px-2">
                                <div class="flex flex-col items-center h-full  justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">用户名</p>
                                    <span class="text-[#eed0a4] text-sm">{{ userValue?.username }}</span>
                                </div>
                                <div class="flex  flex-col items-center justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">真实姓名</p>
                                    <span class="text-[#eed0a4] text-sm">{{ hideWord(userValue?.realname) }}</span>
                                </div>
                                <div class="flex flex-col items-center  justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">等级</p>
                                    <span class="text-[#eed0a4] text-sm">{{ userValue?.user_level }}</span>
                                </div>
                                <div class="flex flex-col  items-center justify-center">
                                    <p class="text-[#7e7e7e] text-[18px]">手机号</p>
                                    <span class="text-[#eed0a4] text-sm">{{ hideMiddle(userValue?.phone, 2, 2) }}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="w-[140px] ml-2 relative flex flex-col justify-between">
                        <router-link :to="activeTab == 1 ? '/pc/moneyDeposit' : '/pc/usdtDeposit'"
                            class="h-[97px] flex text-[18px] flex-col justify-center items-center w-full text-[#272c33] border-none outline-none"
                            style="background-image: linear-gradient(-14deg,#a0511a,#ff7f27);">
                            <CreditCardIcon class="w-9 h-9"></CreditCardIcon>
                            <span>存款</span>
                        </router-link>
                        <a @click="goWithDraw"
                            class="bg-[#282b30] border-none text-[#7e7e7e] h-[45px] text-[17px] flex items-center justify-center">
                            取款
                        </a>
                        <a @click="goWash"
                            class="bg-[#282b30] border-none text-[#7e7e7e] h-[45px] text-[17px] flex items-center justify-center">
                            洗码
                        </a>
                    </section>
                </div>
            </div>
        </div>
<!-- 
        <div class="bg-[#1f2129] flex justify-between px-[5rem] py-6 mr-[9.5rem]">
            <div class="space-y-2">
                <div>欧博余额</div>
                <div class="text-center">{{ ab_balance }}</div>
                <div class="flex justify-center">
                    <div @click="transferIn()">转入</div>
                </div>
            </div>
            <div>
                <div>欧博余额</div>
                <div class="text-center">{{ ab_coin }}</div>
                <div class="flex justify-center">
                    <div @click="transferUsdt()">转入</div>
                </div>
            </div>
        </div> -->

        <NotCloseDialog :show="transferDialog" @close="transferDialog = false">
            <div class="w-[500px] py-10 text-white px-3">
                <p class="text-center text-lg">提示</p>
                <div class="w-full text-start py-3">
                    <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">下分到本平台</p>
                </div>
                <div class="flex justify-center items-center">
                    <input v-model="transferAmount" type="number"
                        class="bg-transparent border-[1px] border-gray-200/30 w-[300px]">
                </div>

                <div v-if="errMsg != ''" class="text-red-500 text-xs text-end">{{ errMsg }}</div>
                <div class="flex pt-5 items-center w-full  justify-evenly">
                    <div @click="transferDialog = false"
                        class="btn flex items-center justify-center btn-outline h-[50px] border border-solid border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap ">
                        取消
                    </div>
                    <div @click="confirmTransferIn()"
                        class="btn flex cursor-pointer px-12 whitespace-nowrap items-center justify-center text-[#101114] font-bold text-md text-center btn-primary h-[50px]">
                        确认
                    </div>
                </div>
            </div>
        </NotCloseDialog>

        <!-- <NotCloseDialog :show="transferOutDialog" @close="transferOutDialog = false">
            <div class="w-[500px] py-10 text-white px-3">
                <p class="text-center text-lg">提示</p>
                <div class="w-full text-start py-3">
                    <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">上分到欧博平台</p>
                </div>
                <div class="flex justify-center items-center">
                    <input v-model="transferOutAmount" type="number" class="bg-transparent border-[1px] border-gray-200/30 w-[300px]">
                </div>
                
                <div v-if="errMsg != ''" class="text-red-500 text-xs text-end">{{ errMsg }}</div>
                <div class="flex pt-5 items-center w-full  justify-evenly">
                    <div @click="transferOutDialog = false" class="btn flex items-center justify-center btn-outline h-[50px] border border-solid border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap ">
                        取消
                    </div>
                    <div @click="confirmTransferOut()" class="btn flex cursor-pointer px-12 whitespace-nowrap items-center justify-center text-[#101114] font-bold text-md text-center btn-primary h-[50px]">
                        确认
                    </div>
                </div>
            </div>
        </NotCloseDialog> -->

        <!-- usdt transfer -->
        <NotCloseDialog :show="transferUsdtDialog" @close="transferUsdtDialog = false">
            <div class="w-[500px] py-10 text-white px-3">
                <p class="text-center text-lg">提示</p>
                <div class="w-full text-start py-3">
                    <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">是否要将币额转到本平台？</p>
                </div>
                <div class="flex justify-center items-center">
                    <input v-model="transferUsdtAmount" type="number"
                        class="bg-transparent border-[1px] border-gray-200/30 w-[300px]">
                </div>

                <div v-if="errMsg != ''" class="text-red-500 text-xs text-end">{{ errMsg }}</div>
                <div class="flex pt-5 items-center w-full  justify-evenly">
                    <div @click="transferUsdtDialog = false"
                        class="btn flex items-center justify-center btn-outline h-[50px] border border-solid border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap ">
                        取消
                    </div>
                    <div @click="confirmTransferUsdt()"
                        class="btn flex cursor-pointer px-12 whitespace-nowrap items-center justify-center text-[#101114] font-bold text-md text-center btn-primary h-[50px]">
                        确认
                    </div>
                </div>
            </div>
        </NotCloseDialog>

        <!-- <NotCloseDialog :show="receiveUsdtDialog" @close="receiveUsdtDialog = false">
            <div class="w-[500px] py-10 text-white px-3">
                <p class="text-center text-lg">提示</p>
                <div class="w-full text-start py-3">
                    <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">是否要将币额转到本平台？</p>
                </div>
                <div class="flex justify-center items-center">
                    <input v-model="receiveUsdtAmount" type="number" class="bg-transparent border-[1px] border-gray-200/30 w-[300px]">
                </div>
                
                <div v-if="errMsg != ''" class="text-red-500 text-xs text-end">{{ errMsg }}</div>
                <div class="flex pt-5 items-center w-full  justify-evenly">
                    <div @click="receiveUsdtDialog = false" class="btn flex items-center justify-center btn-outline h-[50px] border border-solid border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap ">
                        取消
                    </div>
                    <div @click="confirmReceiveUsdt()" class="btn flex cursor-pointer px-12 whitespace-nowrap items-center justify-center text-[#101114] font-bold text-md text-center btn-primary h-[50px]">
                        确认
                    </div>
                </div>
            </div>
        </NotCloseDialog> -->
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import { CreditCardIcon } from "@heroicons/vue/solid";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import userApi from "@/network/user.js";
import global from "@/utils/global";
import Loading from "@/utils/loader";

const instance = getCurrentInstance()
const router = useRouter()
const activeRoute = ref("");
const route = useRoute();
const store = useStore()
const deg = ref(0);
const activeTab = ref(1)

const transferDialog = ref(false);
const transferAmount = ref('')
const errMsg = ref("")
const transferOutDialog = ref(false);
const transferOutAmount = ref('')
const transferUsdtDialog = ref(false)
const transferUsdtAmount = ref('')
const receiveUsdtDialog = ref(false)
const receiveUsdtAmount = ref('')
const ab_balance = ref(0)
const ab_coin = ref(0)


const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const marquee = computed(() => store.getters["app/marqueeData"]);
const login = computed(() => store.getters["user/LOGIN"]);


const transferIn = () => {
    if (ab_balance.value <= 0) {
        return instance.proxy.$message({ message: '余额不足', duration: 2 })
    }
    transferDialog.value = true;
}

const transferOut = () => {
    transferOutDialog.value = true;
}

const transferUsdt = () => {
    if (ab_coin.value <= 0) {
        return instance.proxy.$message({ message: '余额不足', duration: 2 })
    }
    transferUsdtDialog.value = true;
}

const receiveUsdt = () => {
    receiveUsdtDialog.value = true;
}
function hideWord(w) {
    if (w?.length < 1) return w;
    return w?.substring(0, 1) + '*'.repeat(w?.length - 1);
}

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle?.length) + suffix;
    });
}

if (localStorage.getItem('tab')) {
    activeTab.value = localStorage.getItem('tab')
}

const goWithDraw = () => {
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
}

const goWash = () => {
    router.push('/pc/wash')
}

const reload = () => {
    if (!token?.value) router.push('/login')
    deg.value += 360;
    return global.getUserInfo()
}

const GetABBalance = async (agent_type) => {
    let data = {
        player: userValue?.value.username,
        agent_type: agent_type
    }
    userApi.GetABBalance({ data: data, key: user?.value?.key }).then((res) => {
        if (res.data.code == '1') {
            console.log("res of GetABBalance data", res);
            if (agent_type == 'cny') {
                ab_balance.value = res.data?.data?.amount;
                transferAmount.value = ab_balance.value;
            } else {
                ab_coin.value = res.data?.data?.amount;
                transferUsdtAmount.value = ab_coin.value;
            }
            global.getUserInfo()
        }
    }).catch((e) => {
        console.log(e);
    })
}

const confirmTransferIn = async () => {

    if (transferAmount.value <= 0) {
        errMsg.value = "金额必须大于 0";
        setTimeout(() => {
            errMsg.value = "";
        }, 3000);
        return
    }

    let data = {
        player: userValue?.value.username,
        amount: transferAmount.value,
        type: 10,
        key: login?.value?.key
    }
    transferDialog.value = false
    Loading.showLoading()

    userApi.TransferCny({ data: data, key: login?.value?.key }).then(res => {
        console.log("response", res);

        Loading.hideLoading()
        if (res.data?.code == 1) {
            transferAmount.value = ab_balance.value - transferAmount.value;
            global.getUserInfo()
            GetABBalance('cny');
        }
    }).catch(err => {
        console.error(err)
        Loading.hideLoading()
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })

}

// const confirmTransferOut = async() => {
//     if (transferOutAmount.value <= 0) {
//         errMsg.value = "金额必须大于 0";
//         setTimeout(() => {
//             errMsg.value = "";
//         }, 3000);
//         return
//     }
//     let data = {
//         player: userValue?.value.username,
//         amount: transferOutAmount.value,
//         type: 10,
//         key: login?.value?.key
//     }

//     transferOutDialog.value = false
//     Loading.showLoading()

//     userApi.TransferCny({ data: data, key: login?.value?.key }).then(res => {
//         console.log("response",res);
//         transferOutAmount.value = '';
//         Loading.hideLoading()
//         if (res.data?.code == 1) {
//             return global.getUserInfo()
//         }

//     }).catch(err => {
//             console.error(err)
//             Loading.hideLoading()
//             return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
//     })
// }

const confirmTransferUsdt = async () => {

    // if(ab_coin.value <= 0){
    //     return instance.proxy.$message({ message: '余额不足够', duration: 2 })
    // }

    if (transferUsdtAmount.value <= 0) {
        errMsg.value = "金额必须大于 0";
        setTimeout(() => {
            errMsg.value = '';
        }, 3000);
        return
    }

    let data = {
        player: userValue?.value.username,
        amount: transferUsdtAmount.value,
        type: 30,
        key: login?.value?.key
    }

    transferUsdtDialog.value = false
    Loading.showLoading()

    userApi.TransferUsdt({ data: data, key: login?.value?.key }).then(res => {
        console.log("reeeeeee", res);
        transferUsdtAmount.value = ab_coin.value - transferUsdtAmount.value;
        Loading.hideLoading()
        if (res.data?.code == 1) {
            global.getUserInfo()
            GetABBalance('usdt');
        }
    }).catch(err => {
        console.error(err)
        Loading.hideLoading()
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })

}

// const confirmReceiveUsdt = async() => {
//     if(receiveUsdtAmount.value <= 0) {
//         errMsg.value = "金额必须大于 0"
//         setTimeout(() => {
//             errMsg.value = ''
//         }, 3000);
//         return
//     }

//     let data = {
//         player: userValue?.value.username,
//         amount: receiveUsdtAmount.value,
//         type: 30,
//         key: login?.value?.key
//     }

//     receiveUsdtDialog.value = false
//     Loading.showLoading()

//     userApi.TransferUsdt({data: data, key:login?.value?.key}).then(res => {
//         receiveUsdtAmount.value = '';
//         Loading.hideLoading()

//         if(res.data?.code == 1){
//             return global.getUserInfo()
//         }
//     }).catch(err => {
//         console.log(err)
//         Loading.hideLoading()
//         return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
//     })
// }

onMounted(() => {
    if (!token?.value) return router.push('/login')
    transferAmount.value = ab_balance.value;
    transferUsdtAmount.value = ab_coin.value;
    GetABBalance('cny')
    GetABBalance('usdt')

})

</script>