<template>
    <section class="w-full h-auto flex-auto relative mx-[19px] text-[#dfa009]">
        <div class="bg-[#0f0510] w-full flex overscroll-x-auto h-full">
            <section class="left_section w-[274px] min-w-[274px] relative flex flex-col ">
                <div class="pay_mentsection mx-0 relative h-full flex flex-col">
                    <div class="title__ text-center text-base leading-[60px] pt-[31px] ">
                        —— 选择存款方式 ——
                    </div>
                    <div class="py-[20px] px-[13px]">
                        <div @click="clickBank(0)" 
                            class="h-[50px] w-full px-3 relative cursor-pointer border border-solid flex justify-between items-center mb-[10px] border-[#dfa009] rounded-md">
                            <img src="@/assets/pc/Home/depo11.png" alt="" class="w-[9rem] h-[2rem]">
                            <img src="@/assets/pc/Home/cg.png" alt="" class="w-10 h-3">
                            <img v-if="activeBank == 0" src="@/assets/pc/Home/fillCircle.png" alt="" class="w-4 h-4">
                            <img v-else src="@/assets/pc/Home/circle.png" alt="" class="w-4 h-4">
                            <img src="@/assets/pc/Home/t1.png" alt="" class="absolute -top-2 right-3 w-8 h-4">
                        </div>
                        <div @click="clickBank(1)" 
                            class="h-[50px] w-full px-3 relative cursor-pointer border border-solid flex justify-between items-center mb-[10px] border-[#dfa009] rounded-md">
                            <img src="@/assets/pc/Home/depo22.png" alt="" class="w-[6rem] h-[2rem]">
                            <img v-if="activeBank == 1" src="@/assets/pc/Home/fillCircle.png" alt="" class="w-4 h-4">
                            <img v-else src="@/assets/pc/Home/circle.png" alt="" class="w-4 h-4">
                        </div>
                        <div @click="clickBank(2)" 
                            class="h-[50px] w-full px-3 relative cursor-pointer border border-solid flex justify-between items-center mb-[10px] border-[#dfa009] rounded-md">
                            <img src="@/assets/pc/Home/depo33.png" alt="" class="w-[10rem] h-[2rem]">
                            <img v-if="activeBank == 2" src="@/assets/pc/Home/fillCircle.png" alt="" class="w-4 h-4">
                            <img v-else src="@/assets/pc/Home/circle.png" alt="" class="w-4 h-4">
                        </div>
                        <div @click="clickBank(3)" 
                            class="h-[50px] w-full px-3 relative cursor-pointer border border-solid flex justify-between items-center mb-[10px] border-[#dfa009] rounded-md">
                            <img src="@/assets/pc/Home/depo44.png" alt="" class="w-[9rem] h-[2rem]">
                            <img v-if="activeBank == 3" src="@/assets/pc/Home/fillCircle.png" alt="" class="w-4 h-4">
                            <img v-else src="@/assets/pc/Home/circle.png" alt="" class="w-4 h-4">
                        </div>
                    </div>
                    
                </div>
            </section>
            <section class="right__section flex-auto h-full">
                <div v-if="!verify" class="relative mx-auto">
                    <div class="flex flex-col">
                        <div class="pay_body w-[390px] mx-auto pt-[20%]">
                            <div class="form_input relative">
                                <div class="bg-[#13151b]  formDiv relative overflow-hidden flex items-center mx-auto px-2 h-14">
                                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input disabled autocomplete="off" 
                                        class=" input-name placeholder-[#dfa009] text-[#dfa009] border-none outline-none focus:outline-none focus:border-none w-full h-full"    
                                        id="name" pattern="" name="name" :placeholder="hideWord(userValue?.realname)"
                                        min="3" max="12" maxlength="17" type="text">
                                    </div>
                                </div>

                                <div class="flex justify-end w-full items-center  py-1 text-sm">
                                    若姓名包含
                                    <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                                    请点
                                    <span class="text-[#858585]">复制</span>
                                    <span>后粘贴</span>
                                </div>

                                <section class="text-base py-3">
                                    <div class="  text-[12px] text-start  ">
                                        请使用户名为
                                        <span class="text-[#fff44c]">提*</span>
                                        的银行卡转账，否则将无法到账，修改姓名请联系客服
                                    </div>
                                </section>
                                <div class="text-start text-base">
                                    存款金额
                                </div>

                                <div
                                    class="bg-[#13151b] my-2   formDiv relative overflow-hidden flex items-center mx-auto px-2 h-14">
                                    <div
                                        class="relative flex items-center justify-center w-20 py-1 border-r border-text-[#dfa009] border-solid">
                                        <CurrencyYenIcon class="w-5 h-5 "></CurrencyYenIcon>
                                    </div>
                                    <div
                                        class="border-none w-full h-full text-sm flex justify-center items-center relative">
                                        <input v-model="amount" autocomplete="off" class=" input-name text-[#dfa009] placeholder-[#dfa009] 
                                                        border-none outline-none focus:outline-none focus:border-none    
                                                        w-full h-full" id="amount" pattern="" name="amount"
                                            placeholder="限额100-3万元" min="1" max="100000000" maxlength="9" type="number"
                                            @input="eventName">
                                        <XIcon v-if="amount" @click="amount = ''"
                                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                                        </XIcon>
                                    </div>
                                </div>

                                <div class="money_sec mx-auto my-[20px]">
                                    <div class="w-full p-0 m-0 flex flex-wrap">
                                        <div v-for="(mon, n) in money" :key="n" @click="moneyClick(n, mon)" 
                                        class="relative w-[117px] h-[44px] text-center leading-[44px]  text-[17px] mt-[10px] mr-[10px] border border-solid border-[#d0d0d0] cursor-pointer"
                                        :class="activeMoney == n ? 'selected' : '  '">
                                            {{ mon }}元</div>
                                    </div>
                                </div>
                            </div>
                            <div  class="relative cursor-pointer">
                                <button @click="Deposit()"
                        class="w-full btn_login text-base py-3 text-[#373c33] text-[19px]">
                        下一步
                </button>
                                <!-- <img src="@/assets/pc/Home/bg.png" alt="" class="w-auto h-auto">
                                <div class="absolute bottom-0  w-full h-full flex justify-center items-center text-base text-black">下一步</div> -->
                            </div>
                        </div>
                        <hr class="hr__">

                    </div>
                    <p class="text-center py-4 text-[12px]">温馨提示：获取卡号后请及时存款，若多次未存后续将会关闭相应存款渠道。</p>
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
                                            {{moneyRecord?.accountBank}}</div>
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
                                            <span class="text-[28px] text-[#f2c992]">{{moneyRecord?.money}}</span>&nbsp; 元
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

    <!-- dialog -->
    <NotCloseDialog :show="depo_Dialog" @close="depo_Dialog = false">
        <div class="w-[500px] min-w-[300px]   py-10 text-white px-3  ">
            <p class="text-center text-xl">提示</p>
            <div class="w-full  py-3 text-center">
                <p class="text-sm text-[#7e7e7e]">人民币存款前请实名认证，并只用该实名账户存取款。</p>
                <p class="text-[#ff1818] text-sm">注：实名不可随意更改，如需变更请联系在线客服。</p>
            </div>
            <div class="w-full h-12 bg-[#13151b] my-2">
                <form @click.prevent>
                    <input v-model="realname" type="text" placeholder="真实姓名" name="username" id="usr" class="w-full focus:border-none  focus:outline-0 focus:shadow-none 
                    bg-transparent h-12 outline-0 border-none  focus-within:outline-0 focus-within:shadow-none">
                </form>
            </div>
            <div class="flex justify-end w-full items-center text-[#858585]">
                若姓名包含
                <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                请点
                <span class="text-[#eed0a4]">复制</span>
                <span>后粘贴</span>
            </div>
            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <router-link to="/" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#eed0a4] cursor-pointer px-16  whitespace-nowrap
                              ">
                    取消
                </router-link>
                <div @click="requestName" class="btn flex cursor-pointer px-16 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>
</template>
  
<script setup>
import {  XIcon, CurrencyYenIcon } from "@heroicons/vue/solid";
import { useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue'
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import { getCurrentInstance } from 'vue';
import globaljs from '@/utils/global'
import { useStore } from "vuex";
import userApi from "@/network/user.js";
import AES from '@/utils/aes';
import bankApi from "@/network/bank.js";
import useClipboard from 'vue-clipboard3'
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

const instance = getCurrentInstance()
const { toClipboard } = useClipboard()

const store = useStore()
const router = useRouter()
const activeBank = ref(0)
const activeMoney = ref(0)
const amount = ref('200')
const name = ref('')
const realname = ref('')
const depo_Dialog = ref(false)
const verify = ref(false)

const moneyRecord = ref(null) //reponse of money deposit


const money = ref(["200", "500", "1000", "3000", "5000", "10000"])

const login_info = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const goUser = () => {
    router.go(-1)
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

const clickBank = (n) => {
    activeBank.value = n
    console.log(activeBank.value);
    verify.value = false
}

const moneyClick = (n, mon) => {
    activeMoney.value = n
    amount.value = mon
}

const goHome = () => {
    router.push('/home')
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

const gomoneyHistory = () => {
    router.push({path:'/pc/transRecord'})
}

const Deposit = () => {
    try {
	 if (amount.value == '') return instance.proxy.$message({ message: '请选择金额', duration: 2 })
	    let data = {
	        "payType":'bankCard',
	        "username":userValue.value?.username,
	        "amount":amount.value
	    }
	    const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
	
	    bankApi.MoneyDeposit({data: data,key:login_info?.value?.key}).then((res) => {
	            console.log(res, "Deposit rrrrrrrrrrrrrr");
	            if (res.data.code == '1') {
	                instance.proxy.$message({ message: res?.data?.message, duration: 2 })
                    verify.value =true
	                moneyRecord.value = res?.data?.data?.info
	                //depo_Dialog.value = false;
	            }
	        }).catch((e) => {
	            console.log(e.response, "ee");
	            instance.proxy.$message({ message: e.response?.data.message, duration: 2 })
	        })
	
} catch (error) {
	console.log(error);
}

}

const requestName = () => {
    if (realname.value == '') return instance.proxy.$message({ message: '请输入真实姓名', duration: 2 })
    if (!realname.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '只允许使用汉字', duration: 2 })
    if (token?.value) {
        let data = {
            "player": login_info?.value?.info?.username,
            "realname": realname.value
        }
        const encrypttxt =  AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        userApi.BindRealName({data: data,key:login_info?.value?.key}).then((res) => {
            console.log(res, "rrrrrrrrr");
            if (res.data.code == '1') {
                instance.proxy.$message({ message: res?.data?.message, duration: 2 })
                globaljs.getUserInfo()
                depo_Dialog.value = false;
            }
        }).catch((e) => {
            console.log(e.response, "ee");
            instance.proxy.$message({ message: e.response?.data.message, duration: 2 })
        })
    }

}

onMounted(() => {
    if (!token?.value) return router.push('/login')

    if (userValue?.value?.realname == '' || userValue?.value?.realname == undefined || userValue?.value?.realname == null) {
        depo_Dialog.value = true
    }
    return globaljs.getUserInfo()
})

</script>
  
<style scoped>
.formDiv:focus-within {
    /* background-color: #ffffff !important; */
    /* color: #272c33 !important; */
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
    border-bottom-color: #dfa009;
}
.selected {
    background: linear-gradient(#d1970b,#dbce5b,#b18202);
    color: #000;
    border: none;
}
</style>