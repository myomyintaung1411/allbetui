<template>
    <div class="hidden sm:block relative  mx-[19px] w-full h-auto overflow-x-hidden ">
        <div class="main">
            <div class="main-content w-full relative">
                <div class="w-full tabs   border-b border-gray-800">
                    <div
                        class="text-base text-center py-1 cursor-pointer w-[140px] tracking-wider border-b border-[#eed0a4]">
                        USDT取款
                    </div>
                </div>
                <section v-if="!verifyWith" class="relative w-full bg-[#1f2129]  my-2 py-[20px] px-[18px]">

                    <div class="py-5 flex flex-col justify-center items-center">
                        <form @click.prevent>
                            <section class="form w-[381px] relative">
                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div class=" border-none w-full px-3 h-full text-sm flex  items-center relative">
                                        <p class=" whitespace-nowrap text-[#d0d0d0]">{{userValue?.realname}}</p>
                                    </div>

                                </div>
                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                    <div class=" border-none w-full px-3 h-full text-sm flex  items-center relative">
                                        <p class=" whitespace-nowrap text-[#d0d0d0]">可取款金额</p>
                                        <div class="flex items-center pl-3 space-x-3">
                                            <img src="@/assets/usdt.svg" alt="" class="w-8 h-8">
                                            <p class="text-2xl">{{ userValue?.coin }}</p>
                                        </div>
                                    </div>

                                </div>


                                <div
                                class="bg-[#13151b] my-3   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                                <div
                                    class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                    <input v-model.trim="amount" autocomplete="off" 
                                        class=" input-name text-[#d0d0d0] border-none outline-none focus:outline-none focus:border-none w-full h-full"   
                                        id="amount" pattern="" name="amount" placeholder="请输入取款余额" type="number" min="1" max="100000000"
                                        @input="eventName">
                                    <XIcon v-if="amount" @click="amount = ''"
                                        class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                    </XIcon>

                                </div>
                            </div>
                                <div v-if="moneyAddData?.length > 0" @click="usdt_dialog = true">
                                    <p>使用取款户进行取款</p>
                                    <div 
                                        class="bg-[#13151b] my-3 cursor-pointer z-10   formDiv relative overflow-hidden flex items-center mx-auto  h-14">

                                        <div
                                            class=" border-none w-full h-full text-sm flex justify-between px-4 items-center relative">
                                            <div class=" space-x-3">
                                                <span>取款至</span>
                                                <!-- <span>工商银行({{ hideWord(moneyAddData[0]?.ma_id) }})</span> -->
                                                <span>{{ usdtType }}({{ hideWord(usdtAddress) }})</span>
                                            </div>
                                            <div>
                                                <ChevronRightIcon class="w-7 h-7"></ChevronRightIcon>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <section class="btn py-5">
                                    <button @click="withUsdt()"
                                        class="py-3 cursor-pointer text-base w-full btn_login text-center">
                                        提交
                                    </button>
                                </section>

                            </section>
                        </form>
                    </div>
                </section>
                <section v-if="verifyWith" class="relative w-full bg-[#1f2129]   my-2 py-[20px] px-[18px]">
                    <div class="flex flex-col space-y-3 items-center justify-center py-5 text-lg w-full ">
                        <div class=" flex items-center justify-center  h-14 w-14 bg-[#bc6013] rounded-full">
                            <CheckIcon class="w-6 h-6 text-white"></CheckIcon>
                        </div>
                        <p>提现成功</p>
                        <div class="py-3 w-[300px]">
                            <div @click="goHome"
                                class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]">
                                去游戏</div>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>

        <NotCloseDialog :show="usdt_dialog" @close="usdt_dialog = false">
        <div class="w-[700px] min-w-[300px]   py-10 text-white px-3  ">
            <div v-if="usdt_dialog" 
                class=" max-w-full w-[350px] justify-center mx-auto cursor-pointer flex items-center overflow-y-hidden"
            >
                <div class="px-0 w-full  cursor-pointer   flex flex-col items-center justify-center  ">
                    <div v-for="(bank) in moneyAddData" :key="bank.id" @click="chooseBank(bank)"
                        class="flex justify-start space-x-4 border-b border-[#202330] items-center text-[18px] text-[#d0d0d0] center z-20 py-4 bg-[#272c33] px-3 w-full">
                        <span class="text-[18px]">{{ bank.type }}</span>
                        <span class="text-[12px]  overflow-hidden text-ellipsis whitespace-nowrap">{{ bank.ma_id }}</span>
                    </div>
                    <div @click="usdt_dialog = false"
                        class="flex cursor-pointer items-center py-3 my-3 text-center text-[18px] justify-center bg-[#272c33] px-2 w-full">
                        取消
                    </div>
                </div>
            </div>
        </div>
    </NotCloseDialog>
        
    </div>

</template>

<script setup>
import {  XIcon} from "@heroicons/vue/solid";
import {  ChevronRightIcon ,ChevronLeftIcon,CheckIcon} from "@heroicons/vue/outline";
import { useRouter, useRoute } from 'vue-router';
import { ref,  onMounted, computed } from 'vue'
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { getCurrentInstance } from 'vue';
import { useStore } from "vuex";
import bankApi from "@/network/bank.js";
import Loading from "@/utils/loader";
import AES from '@/utils/aes';
import global from "@/utils/global";

const instance = getCurrentInstance()
const usdt_dialog = ref(false)
const amount = ref('')
const moneyAddData = ref(null)
const store = useStore()
const router = useRouter()
const route = useRoute();
const login = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const usdtType = ref('')
const usdtAddress = ref('')
const verifyWith = ref(false)

const goUser = () => {
    router.go(-1)
}

const chooseBank = (bank) => {
    console.log(bank);
    usdtAddress.value = bank.ma_id
    usdtType.value = bank.type
    usdt_dialog.value = false
}

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
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

const withUsdt = () => {
    if (userValue?.value.coin < 300) return instance.proxy.$message({ message: '最低取款币额 300币', duration: 2 })
    if (amount.value < 300) return instance.proxy.$message({ message: '最低取款币额 300币', duration: 2 })
    if (usdtAddress.value == '') return instance.proxy.$message({ message: '请输入您的收币地址', duration: 2 })
    let data_ = {
        // player: userValue?.value.username,
        // id: userValue?.value.id,
        // amount: amount.value,
        // user_address: usdtAddress.value,
        // coin_type: usdtType.value
        "channelCode": 'alipay',
        "username": userValue.value?.username,
        "amount": amount.value,
        "realName":userValue.value?.realname,
        "alipayAccount":usdtAddress.value
        // "accountHolder": userValue.value?.realname,
        // "bankCardAccount": usdtAddress.value,//bank account
        // "openAccountBank": usdtType.value // bank name
    }
    Loading.showLoading()
    
    bankApi.USDTWithdrawRequest({ data: data_, key: login?.value?.key }).then(res => {
        console.log('res ', res)
        Loading.hideLoading()
        if (res.data?.code == '1') {
            verifyWith.value = true
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            global.getUserInfo()
        } else {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
        
    }).catch(err => {
        verifyWith.value = false
        console.error(err)
        Loading.hideLoading()
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })

}

const goHome = () => {
    router.push('/home')
}

const GetMoneyAddress = () => {
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "type": 'USDT'
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        bankApi.GetMoneyAddress({data: data,key:login?.value?.key}).then((res) => {
            if (res.data.code == '1') {
                console.log("res of GetMoneyAddress data", res);
                moneyAddData.value = res?.data?.data
            }
        }).catch((e) => {

            console.log(e);
        })
    }
}

onMounted(() => {
    if (!token?.value) return router.push('/login')
    GetMoneyAddress()
    if (userValue?.value?.user_level < 1) {
        router.push('/')
    }
})
</script>

<style scoped>
.formDiv:focus-within {
    background-color: #ffffff !important;
    color: #272c33 !important;
    outline: 0;
}
.formDiv input {
    border: none;
    outline: none;
    background: no-repeat;
}
.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}
.input-name:focus {
    outline: 0 !important;
    outline: none !important;
    border: none !important;
    color: black !important;
}
</style>