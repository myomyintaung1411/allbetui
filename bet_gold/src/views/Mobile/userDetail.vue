<template>
    <div class="w-full h-auto   relative sm:hidden">
        <div class="account_header relative w-full">
            <div class=" bg-transparent  relative">
                <div class="px-3 w-full flex justify-between items-center py-2">
                    <ChevronLeftIcon @click="goUser()" class="w-7 h-7  "></ChevronLeftIcon>
                    <p class=" text-[17px] mr-7"> 用户详情 </p>
                    <div class=""></div>
                </div>
                <div class="py-3 px-3">
                    <div class="">
                        <p class="text-[#7e7e7e] text-base">总额度</p>
                        <div class="flex items-center pt-8 space-x-5">
                            <div class="flex items-center space-x-1">
                                <img src="@/assets/mobile/user/money.png" alt="" class="w-7 h-7">
                                <div class="text-3xl text-[#d0d0d0]">{{ userValue?.balance || 0}}</div>
                            </div>
                            
                            <div class="flex items-center space-x-1">
                                <img src="@/assets/mobile/user/coin.png" alt="" class="w-[1.6rem] h-[1.5rem]">
                                <div class="text-3xl text-[#d0d0d0]">{{ userValue?.coin || 0}}</div>
                            </div>
                            
                            <div @click="reload()">
                                <img src="@/assets/mobile/user/load.png" alt="" class="w-5 h-5 transition z-10"
                                    v-bind:style="{ transform: `rotate(${deg}deg)` }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" px-3 z-10   w-full absolute -bottom-24    ">
            <div class="amounut__  w-full    ">
                <div class="w-full px-1  h-full  flex  items-center justify-around ">
                    <div class="flex flex-col items-center space-y-2 justify-center">
                        <p class="text-[#7e7e7e] text-[18px]">用户名</p>
                        <span class="text-[#dfa009] text-sm">{{ userValue?.username }}</span>
                    </div>
                    <div v-if="userValue?.realname" class="flex space-y-2 flex-col items-center justify-center">
                        <p class="text-[#7e7e7e] text-[18px]">真实姓名</p>
                        <span class="text-[#dfa009] text-sm">{{ hideWord(userValue?.realname) }}</span>
                    </div>
                    <div class="flex flex-col items-center space-y-2 justify-center">
                        <p class="text-[#7e7e7e] text-[18px]">等级</p>
                        <span class="text-[#dfa009] text-sm">{{ userValue?.user_level }}</span>
                    </div>
                    <div v-if="userValue?.phone" class="flex flex-col space-y-2 items-center justify-center">
                        <p class="text-[#7e7e7e] text-[18px]">手机号</p>
                        <span class="text-[#dfa009] text-sm">{{ hideMiddle(userValue?.phone, 2, 2) }}</span>
                    </div>
                </div>
                <!-- third party amount-->
                <!-- <div class="amounut__tp w-full relative">
                    <div class="w-full px-1  h-full  flex  items-center justify-evenly ">
                        <div class="flex flex-col items-center space-y-2 justify-center">
                            <p class="text-[#7e7e7e] text-[14px]">欧博余额</p>
                            <span class="text-[#dfa009] text-md">{{ ab_balance }}</span>
                            <div class="flex justify-center w-[100%]">
                                <button @click="transferIn()">转出</button>
                            </div>
                        </div>
                        <div v-if="userValue?.realname" class="flex space-y-2 flex-col items-center justify-center">
                            <p class="text-[#7e7e7e] text-[14px]">欧博币额</p>
                            <span class="text-[#dfa009] text-md">{{ ab_coin }}</span>
                            <div class="flex justify-center w-[100%]">
                                <button @click="transferUsdt()">转出</button>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>

    <div class="w-full h-auto bg-[#1f2129]   relative flex-auto mx-[19px] hidden sm:block">
        <div class="h-[60px] bg-[#1f2129]   w-full text-gray-200   px-2 flex justify-center items-center">
            <p class=" text-xl text-center"> 上级代理 </p>

        </div>
        <section class=" w-full py-7 mx-auto flex justify-center items-center">
            <div class="py-5 bg-[#16181f] tracking-wider px-8 rounded-lg max-w-lg w-[512px] ">
                <h1 class="text-center text-xl">User Inforamtion</h1>
                <div class="text-white">
                    <div class="flex items-center py-1 ">
                        <span>用户名:</span>
                        <span class="pl-2">{{ userValue?.username }}</span>
                    </div>
                    <div class="flex items-center py-1">
                        <span>数量:</span>
                        <span class="pl-2">{{ userValue?.ye }}</span>
                    </div>
                    <div class="flex items-center py-1">
                        <span>上级代理:</span>
                        <span class="pl-2">{{ refname }}</span>
                    </div>
                    <div class="flex items-center py-1">
                        <span>Level:</span>
                        <span class="pl-2">{{ userValue?.level }}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
<!-- cny transfer -->
    <NotCloseDialog :show="transferDialog" @close="transferDialog = false">
        <div class="w-[90vw] py-10 text-white px-3">
            <p class="text-center text-lg">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">下分到本平台</p>
            </div>
            <input v-model="transferAmount" type="number" class="bg-transparent border-[1px] border-gray-200/30 w-full">
            <div v-if="errMsg != ''" class="text-red-500 text-xs text-end">{{ errMsg }}</div>
            <div class="flex pt-5 items-center w-full  justify-evenly">
                <div @click="transferDialog = false" class="btn flex items-center justify-center btn-outline h-[50px] border border-solid border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap ">
                    取消
                </div>
                <div @click="confirmTransferIn()" class="btn flex cursor-pointer px-12 whitespace-nowrap items-center justify-center text-[#101114] font-bold text-md text-center btn-primary h-[50px]">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>

    <!-- <NotCloseDialog :show="transferOutDialog" @close="transferOutDialog = false">
        <div class="w-[90vw] py-10 text-white px-3">
            <p class="text-center text-lg">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">上分到欧博平台</p>
            </div>
            <input v-model="transferOutAmount" type="number" class="bg-transparent border-[1px] border-gray-200/30 w-full">
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
        <div class="w-[90vw] py-10 text-white px-3">
            <p class="text-center text-lg">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">是否要将币额转到本平台？</p>
            </div>
            <input v-model="transferUsdtAmount" type="number" class="bg-transparent border-[1px] border-gray-200/30 w-full">
            <div v-if="errMsg != ''" class="text-red-500 text-xs text-end">{{ errMsg }}</div>
            <div class="flex pt-5 items-center w-full  justify-evenly">
                <div @click="transferUsdtDialog = false" class="btn flex items-center justify-center btn-outline h-[50px] border border-solid border-[#bc6013] text-[#bc6013] font-bold text-md cursor-pointer px-12  whitespace-nowrap ">
                    取消
                </div>
                <div @click="confirmTransferUsdt()" class="btn flex cursor-pointer px-12 whitespace-nowrap items-center justify-center text-[#101114] font-bold text-md text-center btn-primary h-[50px]">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>

    <!-- <NotCloseDialog :show="receiveUsdtDialog" @close="receiveUsdtDialog = false">
        <div class="w-[90vw] py-10 text-white px-3">
            <p class="text-center text-lg">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-[#d04c44] font-bold text-md text-center tracking-widest">是否要将币额转到本平台？</p>
            </div>
            <input v-model="receiveUsdtAmount" type="number" class="bg-transparent border-[1px] border-gray-200/30 w-full">
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
</template>

<script setup>
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { SelectorIcon, CheckIcon, ChevronLeftIcon } from "@heroicons/vue/outline";
import { ref, onMounted, computed, reactive } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import userApi from "@/network/user.js";
import global from "@/utils/global";
import AES from '@/utils/aes';
import Loading from "@/utils/loader";
import { getCurrentInstance } from 'vue';

const store = useStore()
const router = useRouter()
const refname = ref('')
const bankInfo = ref(null)
const deg = ref(0);
const ab_balance = ref('')
const ab_coin = ref('')
const transferDialog = ref(false)
const transferOutDialog = ref(false)
const transferAmount = ref('');
const transferOutAmount = ref('');
const errMsg = ref('');
const transferUsdtDialog = ref(false)
const transferUsdtAmount = ref('')
const receiveUsdtDialog = ref(false)
const receiveUsdtAmount = ref('')

const Bankstatus = reactive([
    { id: 1, name: "BANK" },
    { id: 2, name: "USDT" },
]);
const selectOrderStatus = ref(Bankstatus[0]);

const userValue = computed(() => store.getters["user/USERINFO"]);
const user = computed(() => store.getters["user/LOGIN"]);//login key
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);
const login = computed(() => store.getters["user/LOGIN"]);
const instance = getCurrentInstance()

const transferIn = () => {
    if(ab_balance.value <= 0){
        return instance.proxy.$message({ message: '余额不足', duration: 2 })
    }
    transferDialog.value = true
}

const transferOut = () => {
    transferOutDialog.value = true
}

const transferUsdt = () => {
    if(ab_coin.value <= 0){
        return instance.proxy.$message({ message: '余额不足', duration: 2 })
    }
    transferUsdtDialog.value = true
}

const receiveUsdt = () => {
    receiveUsdtDialog.value = true
}


const goUser = () => {
    router.go(-1)
}

const edit = () => {
    router.push({ path: '/edit_money_address', query: { type: selectOrderStatus.value.id } })

}

const add = () => {
    router.push({ path: '/add_money_address', query: { type: selectOrderStatus.value.id } })

}

function hideWord(w) {
    if (w.length < 1) return w;
    return w.substring(0, 1) + '*'.repeat(w.length - 1);
}

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle.length) + suffix;
    });
}

const GetABBalance = async (agent_type) => {
    let data = {
        player: userValue?.value.username,
        agent_type: agent_type
    }
    userApi.GetABBalance({ data: data, key: user?.value?.key }).then((res) => {
        if (res.data.code == '1') {
            console.log("res of GetABBalance data", res);
            if(agent_type == 'cny') {
                ab_balance.value = res.data?.data?.amount;
                transferAmount.value = ab_balance.value;
            } else {
                ab_coin.value = res.data?.data?.amount;
                transferUsdtAmount.value = ab_coin.value;
            }

            // agent_type == 'cny' && (ab_balance.value = res.data?.data?.amount)
            // agent_type == 'usdt' && (ab_coin.value = res.data?.data?.amount)
        }
    }).catch((e) => {
        console.log(e);
    })
}

const GetReferenceInfo = () => {
    if (token?.value) {
        let data = {
            "player": userValue?.value?.username,
            "upper_agent": userValue?.value?.reference_name,
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        userApi.GetReferenceInfo({ data: data, key: user?.value?.key }).then((res) => {
            if (res.data.code == '1') {
                refname.value = res?.data?.data?.name
                console.log("res of GetReferenceInfo data", res);
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}

const reload = () => {
    console.log("leeeeeeeee");
    if (!token?.value) router.push('/login')
    deg.value += 360;
    return global.getUserInfo()
}

const confirmTransferIn = async() => {

    if(transferAmount.value <= 0) {
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
        console.log("response",res);
        
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

const confirmTransferUsdt = async() => {
    if(transferUsdtAmount.value <= 0) {
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

    userApi.TransferUsdt({data: data, key: login?.value?.key}).then(res => {
        console.log("reeeeeee",res);
        transferUsdtAmount.value = ab_coin.value - transferUsdtAmount.value;
        Loading.hideLoading()
        if(res.data?.code == 1) {
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
//         receiveUsdtAmount = '';
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

onMounted(async () => {
    if (!token?.value) return router.push('/login')
    // GetReferenceInfo()
    await GetABBalance('cny')
    await GetABBalance('usdt')
    
})


</script>

<style scoped>
.account_header {
    background-image: url("@/assets/ttt.webp");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    height: 220px;
    width: 100%;
    z-index: 1;

}

.amounut__ {
    width: 100%;
    height: 150px;
    background-image: url("@/assets/sss.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.amounut__tp {
    width: 100%;
    height: 140px;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #1b1c1d;
    margin-top: 10px;
}

.btn_login {
    background-image: linear-gradient(to right, #d4b48c, #cfaf87, #cbab83, #c6a67e, #c2a27a, #bd9d75, #b7996f, #b2946a, #aa8e62, #a3885b, #9b8253, #937c4c);
    border: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: #272c33;
    outline: none;
}
</style>