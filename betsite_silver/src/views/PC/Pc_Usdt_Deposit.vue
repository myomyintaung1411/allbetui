<template>
    <section class="w-full h-auto flex-auto relative mx-[19px] ">
        <div class="bg-[#1f2129] w-full flex h-full overscroll-x-auto">
            <section class="left_section w-[274px] min-w-[274px] h-full relative flex flex-col">
                <div class="pay_mentsection  mx-0  bg-[rgba(40,43,48,.5)] relative h-full flex flex-col">
                    <div class=" pl-3 py-5 border-b border-[#2f343c] title__ text-left text-base ">
                        USDT存款
                    </div>
                    <!-- <section @click="usdtMore = !usdtMore" class=" cursor-pointer h-auto border-b border-[#2f343c]">
                        <div class="img_div relative w-[120px] h-7">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAA0CAYAAADL/afBAAAAAXNSR0IArs4c6QAAAyhJREFUeAHt3T9uE0EUx/F5u7ZEk8NQg5xwDm7AKSgRFaKiDDhpSO4QKiJEcEH+GLgBVKloh3mQsSYr787KQ2HP+7rZsWfX8vtofvLLru3I2dOH3nFDAIFeAXFy2fTOMoEAAv8ERE4ICosBgYyAiD8lKBkkpm0LiMjV/nyxJCi21wHV5wS8nOguBCUHxbxpgcZNThWAoJheBhQ/JKBt1+z4043uQ1CGpJizLXDXdikCQbG9FKh+QCC2XboLQRmAYsq0wHVsu1SBoJheCxTfJ9CEi4zpHEFJNRgjcCcgfkpQWA0IZATutV26L+8oGTGm7Ql02y4VICj21gEVZwTatv17kTHdjaCkGozNC4i4m8dvP193IQhKV4T7pgXCd0/erwMgKOtUeMysQPdsV4QgKFGCrXmB8NmuZXqRMQUhKKkGY9MC4Tvxa9suRSEoppcGxacC07a9d5ExnSMoqQZjswLadq072xVBCEqUYGtaYKjtUhiCYnp5UHwUGGq7dB+CEqXYmhUI106+DbVdCkNQzC4PCl8JNL73bFfch6BECbZmBbzrP9sVUSZxwBYBiwLadh3ML65ytfOOkhNivm6BEW2XAhCUupcB1WUExrRd+hS0XhlIpusVGNt2qQDvKPWuAyrLCYjv/chK91CC0hXhvhkBL232tHDEIChRgq0tAZHvT0ac7YooBCVKsDUlIC5/kTEFISipBmMzAjJpRv99oigExczSoNCVQGi79g+/XK7ujxgQlBFI7FKXQJP8Sv3YygjKWCn2q0dg2v+V374iCUqfDI/XKbBB26UQBKXO5UBVPQKbtF36VASlB5SH6xSQdvzV+FSAoKQajKsWCD+X+mP2bvF1kyIJyiZqHLOTAuKb0R9Z6RZIULoi3K9WYNO2S0EISrXLgsJSgZK2S5+HoKSajOsV8M1xSXF8catEj2N3QiC8m9z6yd7rkhdLUEr0OHYnBMS5FweHH25LXiytV4kex269QOOaN7P54mXpCyUopYIcv5UC4Ue3f4d/Wvp8dnTxLIzDTwuX3Wi9yvw4ersEfoa/R5bOu/OpPHj1aP7xlzsKjdd/uP0BJjNzWLqUnPIAAAAASUVORK5CYII="
                                alt="" class="w-full h-full">
                            <div class=" absolute top-0  w-full h-full text-center leading-[28px] text-white  ">
                                USDT存款
                            </div>
                        </div>
                        <div class="py-3 px-3">
                            <div class="flex items-center text-sm w-full justify-between">
                                <p>到交易所用人民币买到钱包</p>
                                <ChevronDownIcon v-if="!usdtMore" class="w-6 h-6 text-white"></ChevronDownIcon>
                                <ChevronUpIcon v-else class="w-6 h-6 text-white"></ChevronUpIcon>
                            </div>

                        </div>
                    </section> -->
                    <!-- <section v-if="usdtMore" class="flex flex-wrap mx-[11px]">
                        <div v-for="n in usdtPic" :key="n.id" class=" ">
                            <div class="relative w-[120px] m-[3px] h-[70px] 
                                    bg-[#d0d0d0] cursor-pointer  flex items-center justify-center 
                                    " style="transition:0.3s;">
                                <div @click="goSite(n.link)" class="w-[110px]">
                                    <img :src="n.pic"
                                        alt="" loading="lazy" class="w-full h-full">
                                </div>
                            </div>
                        </div>
                    </section> -->
                    <section class="">
                        <div class="img_div relative w-[120px] h-7">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAA0CAYAAADL/afBAAAAAXNSR0IArs4c6QAAAxNJREFUeAHt3b9u1EAQx3GP8UkgRE3No4E4TqKjJeISKhAlVV6AhuQheAbyD6goIt2lS0W7eI5MWIztNV6KO883zdq3dnTz0f6UOdtJ5OHhQSj4QgCBbgGRk7J7lhkEEFABKYojgsJaQCAhIGV5TFASSEz7Fqh/mpyu5q8uCIrvdUD1KYGyPNJDCEoKinnfAlV1rAAExfcyoPoeAW271k9enushBKUHiinnAjdtlyoQFOdrgfJ7BG7aLj2CoPQ4MeVXQETOrO1SBYLidy1Qeb/A5mqXHUJQTIIRgVhgNiMosQfbCDQFmm2XzvMTpanEPgL1s11NBILSFGEfAZHNTcYYgqDEGmy7F6hvMp6vny3PmhAEpSnCvm8BkY9tAASlTYXX/Ao0rnYZBEExCUb3AvXVrov4JmMMQlBiDba9C7S2XYpCULwvDer/LSDy12VhmyQoJsHoWmDTdrVc7TIUgmISjN4FOtsuhSEo3pcH9f8S6Gm79ACCwkJxLyBSfGm7yRjDEJRYg22fAqHobbsUhaD4XBpUHQmE6s9H6qOp202CckvBhkcBbbuunu6dpmonKCkh5qctMKDtUgCCMu1lQHUJgSFtl34LgpKAZHq6AkPbLhUgKNNdB1SWFOh+ZKV5KkFpirDvRiDcqZKXhQ2DoJgEoysBKeTrkKtdhkJQTILRl4CkbzLGIAQl1mDbjUBVDP98oigExc3SoFAT0LbrcrE8sf0hI0EZosQxkxIIZej8Ba2uQglKlwyvT1ZgFsrBV7sMgaCYBKMLgTFtl8IQFBfLgyJNYEzbpecSFBNkdCEwk/Qj9W0QBKVNhdcmKVA/2/Xtcr73eUxxBGWMGufspED4x5uMcZEEJdZge9ICY9suRSEok14aFGcCOW2Xfg+CYpKM0xaQ8kNOgQQlR49zd0NAiuu7swfvc94sQcnR49ydEJAgb78/fnGd82YJSo4e5269gJTF4WqxfJf7RglKriDnb6VA/eH9R/2Htw9W8/3n9Rhy3yRByRXk/O0RELmq/wfjp7KQN+He/Ufrxf7r/xESLfAnQDtrjjUHLisAAAAASUVORK5CYII="
                                alt="" class="w-full h-full">
                            <div class=" absolute top-0  w-full h-full text-center leading-[28px] text-white  ">
                                USDT存款
                            </div>
                        </div>
                        <div class="text-sm my-3 px-3 text-[11px]">用USDT钱包存款</div>
                        <div class="py-[20px] px-[13px]">
                            <!-- <div @click="clickBank(0)" class="h-[45px] w-full px-3  relative cursor-pointer border border-solid
                 flex items-center  mb-[15px]
                " :class="activeBank == 0 ? ' border-[#eed0a4]' : ' border-[#2f343c] text-white'">
                                <div class="flex items-center">
                                    <img src="@/assets/pc/Home/dcoin.webp"
                                        alt="" class="h-[24px] w-[24px]">
                                    <div class="flex flex-col px-3 text-[13px]">
                                        <span class="p-0 m-0">小金库</span>
                                        <span class="text-[11px] p-0 m-0 text-gray-400 ">官方合作，到账快</span>
                                    </div>
                                </div>
                            </div> -->
                            <div @click="clickBank(1)" class="h-[45px] w-full px-3  relative cursor-pointer border border-solid
                 flex items-center  mb-[10px]
                " :class="activeBank == 1 ? ' border-[#eed0a4]' : ' border-[#2f343c] text-white'">
                                <div class="flex items-center">
                                    <img src="@/assets/pc/Home/tcoin.webp"
                                        alt="" class="h-[24px] w-[24px]">
                                    <div class="flex flex-col px-3 text-[13px]">
                                        <span class="p-0 m-0">其他钱包</span>
                                        <span class="text-[11px] p-0 m-0 text-gray-400  ">任意支持USDT的钱包</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section class="right__section flex-auto h-full">
                <div v-if="!verify" class="relative mx-auto">
                    <div class="flex flex-col">
                        <div class="pay_body w-[390px] mx-auto pt-[20%]">
                            <div class="form_input relative">

                                <section class="py-0 px- w-full  ">
                                    <div class="mx-auto  py-2">
                                        <div class="bg-[#13151b] py-1 flex items-center  px-2 space-x-2">
                                            <!-- <p>我的地址</p> -->
                                            <input :value="userValue?.realname" disabled autocomplete="off" type="text"
                                                class=" input-name placeholder:text-[#9b9b9b] focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-[80%] h-[50%]" />
                                        </div>
                                    </div>
                                </section>

                                <section class="w-full  py-3">
                                    <div class="mx-auto bg-[#13151b] py-2 px-3 flex items-center space-x-4">
                                        <h3>协议选择</h3>
                                        <RadioGroup v-model="usdtType">
                                            <div class="flex  space-x-3">
                                                <RadioGroupOption v-slot="{ checked,active }" value="TRC20">
                                                    <div class="flex space-x-3 items-center">
                                                        <div class="w-4 h-4 " :class="[
                                                          active
                                                            ? ''
                                                            : '',
                                                          checked ? 'bg-[rgba(196,146,100)] ' : 'bg-white ',
                                                        ]">
                                                            <div v-show="checked"
                                                                class="shrink-0 text-white flex justify-center items-center h-full">
                                                                <CheckIcon class="w-3 h-3"></CheckIcon>
                                                            </div>
                                                        </div>

                                                        <span :class="checked ? '' : 'text-white'">TRC20</span>
                                                    </div>

                                                </RadioGroupOption>
                                                <RadioGroupOption v-slot="{ checked,active }" value="ERC20">
                                                    <div class="flex space-x-3 items-center">
                                                        <div class="w-4 h-4 " :class="[
                                                          active
                                                            ? ''
                                                            : '',
                                                          checked ? 'bg-[rgba(196,146,100)] ' : 'bg-white ',
                                                        ]">
                                                            <div v-show="checked"
                                                                class="shrink-0 text-white flex justify-center items-center h-full">
                                                                <CheckIcon class="w-3 h-3"></CheckIcon>
                                                            </div>
                                                        </div>

                                                        <span :class="checked ? '' : 'text-white'">ERC20</span>
                                                    </div>
                                                </RadioGroupOption>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </section>

                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto px-2 h-14">
                                    <div
                                        class="relative flex items-center justify-center w-20 py-1   border-r border-gray-300 border-solid">
                                        <CurrencyYenIcon class="w-5 h-5 "></CurrencyYenIcon>
                                    </div>
                                    <div
                                        class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input v-model="amount" autocomplete="off" 
                                            class=" input-name text-[#d0d0d0] border-none outline-none focus:outline-none focus:border-none w-full h-full"    
                                            id="amount" pattern="" name="amount"
                                            placeholder="其他金额 20USDT起，最多100万 USDT" min="1" max="100000000" maxlength="9"
                                            type="number" @input="eventName">
                                        <XIcon v-if="amount" @click="amount = ''"
                                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                        </XIcon>
                                    </div>
                                </div>
      
                                <div class="money_sec mx-auto my-[20px]">
                                    <div class="w-full p-0 m-0 flex flex-wrap">
                                        <div v-for="(mon, n) in money" :key="n" @click="moneyClick(n,mon)" class="relative w-[117px] h-[44px] text-center
                                         leading-[44px]  text-[17px] mt-[10px] mr-[10px]
                                         border border-solid cursor-pointer
                                        "
                                            :class="activeMoney == n ? '  border-[#eed0a4]': 'text-white  border-[#4a4a4a] '">
                                            {{mon}}</div>
                                    </div>
                                </div>
                            </div>
                            <section class="btn py-5">
                                <div @click="gonext()" class="py-3 cursor-pointer text-base w-full btn_login text-center">
                                    下一步
                                </div>
                            </section>
                        </div>
                        <hr class="hr__">
                    </div>
                    
                </div>
                <div v-if="verify" class="relative mx-auto">
                    <div class="flex flex-col px-5">
                        <div class="pt-[42px] text-[#858585] text-[13px]">
                            <div class="pt-[50px] leading-[50px] text-white text-[20px]">请向以下账号付款：</div>
                            <hr class=" border-dashed border-b border-[#575757]">
                            <div class="flex justify-between items-center">
                                <div class="pl-3">
                                    <div class="flex flex-wrap text-sm text-[#787878] leading-[60px]">
                                        <div class="w-[70px]">收款银行</div>
                                        <div
                                            class="w-[240px] text-white leading-[32px] h-[32px] my-auto mx-0 pr-[20px]">
                                            {{moneyRecord?.merchantOrder}}</div>
                                    </div>
                                    <div class="flex flex-wrap text-sm text-[#787878] leading-[60px] relative ">
                                        <div class="w-[70px]">收款卡号</div>
                                        <div
                                            class="w-[240px] text-white leading-[32px] h-[32px] my-auto mx-0 pr-[20px]  relative">
                                            {{moneyRecord?.accountCard}}
                                        </div>
                                        <div @click="copy(moneyRecord?.accountCard)" class="absolute right-0 underline text-[#9f5b3b] cursor-pointer">复制</div>
                                    </div>
                                    <div class="flex flex-wrap text-sm text-[#787878] leading-[60px] relative ">
                                        <div class="w-[70px]">收款姓名</div>
                                        <div
                                            class="w-[240px] text-white flex items-center leading-[32px] h-[32px] my-auto mx-0 pr-[20px]  relative">
                                            <span>{{moneyRecord?.accountHolder}}</span>
                                            <a href="https://www.baidu.com/#wd=王帅的拼音" target="_blank" class=" underline pl-3 text-[#44d7b6] cursor-pointer">收款人拼音</a>
                                        </div>
                                        <div @click="copy(moneyRecord?.accountHolder)" class="absolute right-0 underline text-[#9f5b3b] cursor-pointer">复制</div>
                                    </div>
                                    <div class="flex flex-wrap text-sm text-[#787878] leading-[60px] relative ">
                                        <div class="w-[70px]">开户行</div>
                                        <div
                                            class="w-[240px] text-white flex items-center leading-[32px] h-[32px] my-auto mx-0 pr-[20px]  relative">
                                            {{moneyRecord?.accountBank}}
                                        </div>
                                        <div @click="copy(moneyRecord?.accountBank)" class="absolute right-0 underline text-[#9f5b3b] cursor-pointer">复制</div>
                                    </div>
                                    <div class="flex flex-wrap text-sm text-[#787878] leading-[60px] relative ">
                                        <div class="w-[70px]">汇款金额</div>
                                        <div
                                            class="w-[240px] text-white flex items-center leading-[32px] h-[32px] my-auto mx-0 pr-[20px]  relative">
                                            <span class="text-[28px] text-[#f2c992]">{{moneyRecord?.amount}}</span>&nbsp; 元
                                        </div>
                                        <div @click="copy(moneyRecord?.money)" class="absolute right-0 underline text-[#9f5b3b] cursor-pointer">复制</div>
                                    </div>
                                    <div class="text-[#e74747] text-[13px] leading-[50px]">注：金额须完全一致，否则无法到账，实际转账金额不包含手续费
                                    </div>
                                </div>
                                <!--  -->
                                <div class="qrcode my-auto mx-0">
                                    <div class="w-[130px] h-[130px] bg-slate-400">
                                        <vue-qr class=" h-full" v-bind:text="moneyRecord?.accountBank +  '\n' + moneyRecord?.accountHolder + '\n' +   moneyRecord?.accountCard  +'\n'   + moneyRecord?.money"  :margin="2" />
                                    </div>
                                    <p class="text-[#858585] pt-[15px] text-sm text-center">{{'扫码获取账号信息'}}</p>
                                </div>
                            </div>
                            <hr class="border-b border-dashed border-[#575757]">
                            <div class="pt-[20px] text-left text-[12px] text-[#858585] leading-4">
                                <p>温馨提示：</p>
                                <p>1. 请及时使用手机银行或网银完成转账，<span class="text-[#9f5b3b]">
                                        若多次未存后续将会关闭相应存款渠道；
                                    </span></p>
                                <p>2. 您存款完成后 <span class="text-[#9f5b3b]">15分钟</span>左右到账。</p>
                            </div>
                            <div class="py-3 w-full  flex justify-center items-center">
                                <div class="py-3 w-[380px]">
                                    <div @click="goHome" class="py-3 text-base cursor-pointer w-full btn_login text-center">
                                        已付款，去游戏
                                    </div>
                                    <div class="flex items-center justify-center space-x-5 cursor-pointer text-[#a6a6a6] mt-[20px] text-sm">
                                        <p @click="verify = false, moneyRecord = null" class="underline ">继续存款</p>
                                        <p @click="gomoneyHistory" class="underline ">查存款记录</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
        </div>
    </section>
</template>
  
<script setup>
import { ChevronUpIcon, ChevronDownIcon, XIcon, CurrencyYenIcon, CheckIcon } from "@heroicons/vue/solid";
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted,computed } from 'vue'
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
} from '@headlessui/vue'
import Loading from "@/utils/loader";
import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import bankApi from "@/network/bank.js";
import useClipboard from 'vue-clipboard3'
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import globaljs from '@/utils/global'
import userApi from "@/network/user.js";


const store = useStore()
const router = useRouter()
const activeBank = ref(0)
const activeMoney = ref(0)
const amount = ref('')
const usdtType = ref('TRC20')
const usdtMore = ref(false)
const name = ref('')
const verify = ref(false)
const instance = getCurrentInstance()
const { toClipboard } = useClipboard()
const moneyRecord = ref(null) //reponse of usdt deposit


const usdtPic = reactive([
    {id:1,pic:'/public/usdt1.webp',link:'https://bitpie.com/'},
    {id:2,pic:'/public/usdt2.webp',link:'https://www.bixin.com/cn/'},
    {id:3,pic:'/public/usdt3.webp',link:'https://www.coinw.com/'},
    {id:4,pic:'/public/usdt4.webp',link:'https://coins.co.th/'},
    {id:5,pic:'/public/usdt5.webp',link:'https://www.okcoin.com/'},
    {id:6,pic:'/public/usdt6.webp',link:'https://www.gateio.ch/'},
    {id:7,pic:'/public/usdt7.webp',link:'https://pro.coinbase.com/'},
    {id:8,pic:'/public/usdt8.webp',link:'https://coincheck.com/exchange'},
])
const money = ref(["200", "500", "1000", "3000", "5000", "10000"])
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);

const goUser = () => {
    router.go(-1)
}

const goSite = (link) => {
     window.open(link)
}

const goHome = () => {
    router.push('/home')
}

const eventName = (e) => {
    if (!/^[0-9]+$/.test(amount.value)) amount.value = amount.value.replace(/\D/g, '');
    if (amount.value > 100000000) amount.value = 100000000;
    if (amount.value < 0) amount.value = null
}

const clickBank = (n) => {
    activeBank.value = n
    console.log(activeBank.value);
}


const gomoneyHistory = () => {
    router.push({path:'/pc/transRecord'})
}

const gonext = () => {

    if (amount.value == '' || amount.value <= 0) {
        instance.proxy.$message({ message: '请选择币额', duration: 2 })
        return
    }

    // if (user_address.value.trim() == '') {
    //     instance.proxy.$message({ message: '请输入您的钱包地址', duration: 2 })
    //     return
    // }

    let data = {
        "payType":'alipay',
	     "username":userValue.value?.username,
	    "amount":amount.value
    }
    Loading.showLoading()
    bankApi.USDTDepositRequest({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            // router.push('/usdtdepositConfirm')
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            verify.value =true
            moneyRecord.value = res?.data?.data?.info
                //store.commit('pay/SetUSDTAddress', res.data?.data)
                //router.push({ path: '/pc/usdtdepositConfirm'})
                
        } else {
            instance.proxy.$message({ message: res?.data.message, duration: 2 })
        }
        
    }).catch((err) => {
        verify.value = false
        Loading.hideLoading()
        console.log(err.response.data.message);
        instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

const moneyClick = (n, mon) => {
    activeMoney.value = n
    amount.value = mon
}

const copy = async (copyTxt) => {
    try {
        await toClipboard(copyTxt.toString())
        return instance.proxy.$message({ message: '复制成功', duration: 2 })
    } catch (e) {
        alert('copy error')
        console.error(e)
    }
}

onMounted(() => {
    if (!token?.value) return router.push('/login')
   
    return globaljs.getUserInfo()
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
    /* color: black !important; */
}
.hr__ {
    padding-top: 10%;
    width: 546px;
    margin: 0 auto;
    border: 0;
    border-bottom-width: 1px;
    border-bottom-style: dashed;
    border-bottom-color: #2f343c;
}
</style>