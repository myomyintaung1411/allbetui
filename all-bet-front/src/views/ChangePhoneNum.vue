<template>
    <div class="w-full h-screen bg-black   relative sm:hidden sm:mx-[19px]">
        <div class="h-[60px]  w-full text-gray-400    px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]"> 更改手机号 </p>
            <div class="flex flex-col pt-2 text-center mr-7 items-center whitespace-nowrap ">

            </div>
        </div>
        <div v-if="!changePhone" class="py-5 w-full">
            <form @click.prevent>
                <div class="pt-8 bg-[#13151b] text-base">
                    <div
                        class=" formDiv border-b border-solid border-[#5a5b5d]   relative overflow-hidden flex items-center mx-2 px-2 h-16">
                        <div class="relative flex items-center h-full justify-center w-32 text-[#9b9b9b] ">
                            <p>已绑定手机</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input disabled autocomplete="off" :type="passwordField"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="password" pattern="" name="username"
                                :placeholder="hideMiddle(userValue?.phone, 2, 2)" min="6" max="16" maxlength="16">
                        </div>
                    </div>
                </div>
                <div class="bg-[#13151b] text-base">

                    <div class=" formDiv   relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div class="relative flex items-center h-full justify-center w-32 text-[#9b9b9b] ">
                            <p>短信校验码</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model.trim="phonecode" autocomplete="off" type="text"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="phonecode" pattern="" name="username" min="6" max="6" maxlength="6">

                            <div class="absolute right-3 z-10">
                                <button :disabled="codeDisable" class=" whitespace-nowrap text-sm text-[#e06c24]"
                                    :class="!codeDisable ? ' ' : ' opacity-80 cursor-not-allowed'" @click="getCode()">{{
                                        codeMsg
                                    }}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="userValue?.balance == 0" class="px-5 pt-5">
                    <router-link to="/unbindphone">
                        未绑定电话
                    </router-link>
                </div>

                <div class="pt-5 w-full px-5">
                    <button @click="BindcheckCode" class="w-full btn_login text-base py-4">
                        下一步
                    </button>
                    <div class="w-full py-6 flex items-center justify-center text-[#9b9b9b] space-x-2">
                        <img src="@/assets/ser.png" alt="" class="h-10 w-auto mt-2">
                        <p>手机号码不正确？</p>
                        <p @click="goService" class="text-[#e06c24] z-10">联系客服</p>
                    </div>
                </div>
            </form>
        </div>

        <!-- next section -->
        <div v-if="changePhone" class="py-5 w-full">
            <form @click.prevent>
                <div class="bg-[#13151b] text-base relative">

                    <div
                        class=" formDiv border-b border-solid border-[#5a5b5d]  relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div
                            class="relative whitespace-nowrap flex items-center h-full justify-center w-40 text-[#9b9b9b] ">
                            <p>请输入新手机</p>
                        </div>
                        <div @click="showPhoneDialog = !showPhoneDialog"
                            class="w-[100px] text-[12px] whitespace-nowrap cursor-pointer text-white  mx-2   h-full text-center flex justify-center items-center">
                            <p>{{ selectPhone || '中国+86'}}</p>
                            <ChevronDownIcon class="w-5 h-5"></ChevronDownIcon>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model.trim="newphone" autocomplete="off" type="text"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                id="newphone" pattern="" name="username" min="11" max="11" maxlength="11">


                        </div>

                    </div>
                    <!-- change phone num dialog -->
                    <div v-if="showPhoneDialog" @click="showPhoneDialog = false"
                        class="absolute  left-1/2 transform -translate-x-1/2 -bottom-8 z-20 w-[250px] h-[40px]   ">
                       <div class="max-h-[300px] overflow-y-auto">
                        <div v-for="phone in listPhone" :key="phone.id" @click="selectPhoneNumber(phone)"
                            class=" h-[40px] w-full px-4 text-[12px]  flex whitespace-nowrap z-30 items-center justify-start text-white bg-[#1f2129] border-b border-[#3a3a43]">
                            {{ phone.phone }}
                        </div>
                       </div>
                    </div>

                </div>
                <div class="bg-[#13151b] text-base">

                    <div class=" formDiv   relative overflow-hidden flex items-center mx-2 px-2 h-20">
                        <div class="relative flex items-center h-full justify-center w-32 text-[#9b9b9b] ">
                            <p>短信校验码</p>
                        </div>
                        <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model.trim="phonecode" autocomplete="off" type="text"
                                class=" input-name placeholder:text-[#9b9b9b]  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#9b9b9b] w-full h-full"
                                pattern="" name="username" min="6" max="6" maxlength="6">

                            <div class="absolute right-3 z-10">
                                <button :disabled="codeDisable" class=" whitespace-nowrap text-sm text-[#e06c24]"
                                    :class="!codeDisable ? ' ' : ' opacity-80 cursor-not-allowed'" @click="getCode()">{{
                                        codeMsg
                                    }}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-7 w-full px-5">
                    <button @click="changePhoneNum" class="w-full btn_login text-base py-4">
                        修改手机号
                    </button>
                    <div class="w-full py-6 flex items-center justify-center text-[#9b9b9b] space-x-2">
                        <img src="@/assets/ser.png" alt="" class="h-10 w-auto mt-2">
                        <p>手机号码不正确？</p>
                        <p class="text-[#e06c24]">联系客服</p>
                    </div>
                </div>
            </form>
        </div>


    </div>

    <!-- pc -->
    <div class="hidden sm:block relative w-full bg-[#1f2129] my-2 py-[20px] px-[18px]">
        <div v-if="!changePhone" class="py-5 flex flex-col justify-center items-center">
            <div class="mb-[40px] flex space-x-3 items-center justify-center">
                <div class=" py-2 rounded-full bg-slate-500 px-2 border-[#7e7e7e]">
                    <LockClosedIcon class="w-10 h-10"></LockClosedIcon>
                </div>
                <span class="text-base text-white">为保障您的账号安全，请绑定手机号</span>
            </div>
            <section class="form w-[381px]">
                <form @click.prevent>
                    <div class="bg-[#13151b] my-5   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                        <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                            <input disabled type="tel" autocomplete="off" class=" input-name text-[#d0d0d0]   
                               border-none outline-none focus:outline-none focus:border-none    
                             w-full h-full" pattern="" name="code" :placeholder="hideMiddle(userValue?.phone, 2, 2)"
                                maxlength="11" min="11" max="11">

                        </div>
                    </div>
                    <div class="bg-[#13151b] my-5   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                        <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model.trim="phonecode" autocomplete="off" class=" input-name text-[#d0d0d0]   
                             border-none outline-none focus:outline-none focus:border-none    
                             w-full h-full" pattern="" name="code" placeholder="6位短信校验码" type="text" maxlength="6"
                                min="6" max="6">
                            <XIcon v-if="phonecode" @click="phonecode = ''"
                                class="h-5 w-5 cursor-pointer  absolute right-28  ">
                            </XIcon>
                            <button :disabled="codeDisable"
                                :class="!codeDisable ? ' ' : ' opacity-80 cursor-not-allowed'" @click="getCode()"
                                class="h-10 px-2 text-[#eed0a4] absolute right-2 whitespace-nowrap flex items-center justify-center cursor-pointer border border-solid border-[#eed0a4] ">
                                {{ codeMsg }}
                            </button>
                        </div>
                    </div>



                    <section class="btn py-5">
                        <div @click="BindcheckCode" class="py-3 cursor-pointer text-base w-full btn_login text-center">
                            下一步
                        </div>
                    </section>
                    <div v-if="userValue?.balance == 0" class="px-1 py-2">
                        <router-link to="/pc/unbindphone">
                            未绑定电话
                        </router-link>
                    </div>
                </form>
            </section>
            <section class=" mt-40 pb-5 w-full mx-8 border-t border-dashed text-center">
                <div class="pt-5">
                    <p>温馨提示：手机号码不正确?联系客服</p>
                </div>
            </section>

        </div>
        <div v-if="changePhone" class="py-5 flex flex-col justify-center items-center">
            <div class="mb-[40px] flex space-x-3 items-center justify-center">
                <div class=" py-2 rounded-full bg-slate-500 px-2 border-[#7e7e7e]">
                    <LockClosedIcon class="w-10 h-10"></LockClosedIcon>
                </div>
                <span class="text-base text-white">更改手机号</span>
            </div>
            <section class="form w-[381px]">
                <form @click.prevent>
                    <div class="bg-[#13151b] my-5   formDiv relative  flex items-center mx-auto  h-14">
                        <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                            <div @click="showPhoneDialog = !showPhoneDialog"
                                class="w-[100px] text-[12px] whitespace-nowrap cursor-pointer text-white  mx-2   h-full text-center flex justify-center items-center">
                                <p>{{ selectPhone || '中国+86'}}</p>
                                <ChevronDownIcon class="w-5 h-5"></ChevronDownIcon>
                            </div>
                            <input v-model.trim="newphone" type="tel" autocomplete="off" class=" input-name text-[#d0d0d0]   
                               border-none outline-none focus:outline-none focus:border-none    
                             w-full h-full" placeholder="请输入新手机" maxlength="11" min="11" max="11">


                            <XIcon v-if="newphone" @click="newphone = ''"
                                class="h-5 w-5 cursor-pointer text-[#eed0a4]  absolute right-3  ">
                            </XIcon>
                        </div>
                        <!-- change phone num dialog -->
                        <div v-if="showPhoneDialog" @click="showPhoneDialog = false"
                            class="absolute  left-1/2 transform -translate-x-1/2 -bottom-8 z-20 w-[250px] h-[40px]   ">
                            <div class="max-h-[300px] overflow-y-auto">
                                <div v-for="phone in listPhone" :key="phone.id" @click="selectPhoneNumber(phone)"
                                class=" h-[40px] w-full px-4 text-[12px]  flex whitespace-nowrap z-30 items-center justify-start text-white bg-[#1f2129] border-b border-[#3a3a43]">
                                {{ phone.phone }}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#13151b] my-5   formDiv relative overflow-hidden flex items-center mx-auto  h-14">
                        <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                            <input v-model.trim="phonecode" autocomplete="off" class=" input-name text-[#d0d0d0]   
                             border-none outline-none focus:outline-none focus:border-none    
                             w-full h-full" placeholder="6位短信校验码" type="text" maxlength="6" min="6" max="6">
                            <XIcon v-if="phonecode" @click="phonecode = ''"
                                class="h-5 w-5 cursor-pointer text-[#eed0a4]  absolute right-28  ">
                            </XIcon>
                            <button :disabled="codeDisable"
                                :class="!codeDisable ? ' ' : ' opacity-80 cursor-not-allowed'" @click="getCode()"
                                class="h-10 px-2 text-[#eed0a4] absolute right-2 whitespace-nowrap flex items-center justify-center cursor-pointer border border-solid border-[#eed0a4] ">
                                {{ codeMsg }}
                            </button>
                        </div>
                    </div>

                    <section class="btn py-5">
                        <div @click="changePhoneNum" class="py-3 cursor-pointer text-base w-full btn_login text-center">
                            修改手机号
                        </div>
                    </section>
                </form>
            </section>
            <section class=" mt-40 pb-5 w-full mx-8 border-t border-dashed text-center">
                <div class="pt-5">
                    <p>温馨提示：手机号码不正确?联系客服</p>
                </div>
            </section>
        </div>

    </div>
</template>

<script setup>
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import AES from '@/utils/aes';
import NoticeMsg from "@/utils/alert";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import global from '@/utils/global'
import { ref, onMounted, computed } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, EyeIcon, EyeOffIcon, ChevronLeftIcon, ChevronDownIcon, PhoneIcon, CodeIcon } from "@heroicons/vue/outline";
const name = ref('')
const pass = ref('')
const newphone = ref('')
const phonecode = ref('')
const router = useRouter()
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

//drop down phone
const showPhoneDialog = ref(false)
const selectPhone = ref('')
const selectCode = ref(86) //for phone number select

const listPhone = ref([
    {
        id:1,
        phone:'中国 +86',
        code:86
    },
    {
        id:2,
        phone:'缅甸 +95',
        code:95
    },
    {
        id:3,
        phone:'日本 +81',
        code:81
    },
    {
        id:4,
        phone:'香港 +852',
        code:852
    },
    {
        id:5,
        phone:'澳门 +853',
        code:853
    },
    {
        id:6,
        phone:'台湾 +886',
        code:886
    },
    {
        id:7,
        phone:'阿联酋 +971',
        code:971
    },
    {
        id:8,
        phone:'菲律宾 +63',
        code:63
    },
    {
        id:9,
        phone:'泰国 +66',
        code:66
    },
    {
        id:10,
        phone:'新加坡 +65',
        code:65
    },
    {
        id:11,
        phone:'越南 +84',
        code:84
    },
    {
        id:12,
        phone:'马来西亚 +60',
        code:60
    },
    {
        id:13,
        phone:'印度尼西亚 +62',
        code:62
    },
    {
        id:14,
        phone:'柬埔寨 +855',
        code:855
    },
    {
        id:15,
        phone:'老挝 +856',
        code:856
    },
])

const innerWidth = ref(0)

const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)

const instance = getCurrentInstance()

const passwordField = ref('password')
const con_passField = ref('password')

const changePhone = ref(false)

const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};
const confirmshowVisibile = () => {
    con_passField.value = con_passField.value === "password" ? "text" : "password";
};

const goUser = () => {
    router.go(-1)
}

const selectPhoneNumber = (phone) => {
    console.log("leeeeeeeee");
    selectPhone.value = phone.phone;
    selectCode.value = phone.code;

    showPhoneDialog.value = false
}



const goService = () => {
    global.customerService()
}

function getCode() {
    if (changePhone.value) {
        if (newphone.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
        if(!global.validatePhoneNumber(newphone.value,selectCode.value))  return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 });

    }
    getValidStr()
}

const getValidStr = () => {

    console.log(codeDisable.value, "disable");
    codeMsg.value = "重发(" + countdown.value + ")";
    countdown.value--;
    if (countdown.value == 59) {
        console.log("countdown value is", countdown.value);
        createPhoneCode()
    }
    if (countdown.value <= 0) {
        countdown.value = 60;
        codeMsg.value = "获取校验码";
        codeDisable.value = false
    } else {
        codeDisable.value = true;
        timer.value = setTimeout(() => {
            getValidStr()
        }, 1000);
    }
}
function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle?.length) + suffix;
    });
}
const BindcheckCode = () => {
    if (phonecode.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let data = {
        "phone": userValue?.value?.phone,
        "type": 4,
        "code": phonecode.value,
        "player": userValue.value?.username,
        "country_code":  userValue?.value?.country_code ,
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.CheckCode({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            phonecode.value = ''
            changePhone.value = true
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;
            console.log(res, "CheckCode resp ********");
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

//if change phone num newphone send otherwise old phone send
const createPhoneCode = () => {
    let phone = ''
    if (changePhone.value) {
        phone = newphone.value
    } else {
        phone = userValue.value?.phone
    }
    let data = {
        "type": changePhone.value ? 13: 4,
        "player": userValue.value?.username,
        "phone": phone,
        "country_code": changePhone.value ? selectCode.value : userValue?.value?.country_code ,

    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    userApi.GetSmsCode({ data: data, key: login?.value?.key }, userValue.value?.id).then((res) => {
        console.log(res, "sms code");
        if (res.data.code == '1') {
            console.log("success *************************")
            return instance.proxy.$message({ message: '手机验证码发送成功，请查收手机', duration: 2 })
        }
    }).catch((e) => {
        console.log(e);
        //catch error then reset timer
        clearTimeout(timer.value)
        codeMsg.value = "获取校验码";
        codeDisable.value = false
        countdown.value = 60;
        return instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}

const changePhoneNum = () => {
    if (phonecode.value == '' || newphone.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let data = {
        "player": userValue.value?.username,
        "phone": newphone.value,
        "type": 13,
        "code": phonecode.value,
        "is_new":1,
        "country_code":selectCode.value, // country code
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.ChangePhoneNumber({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log(res, "setphone resp ********");
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            if (innerWidth.value > 640) {
                router.push('/')
            } else {
                router.go(-1)
            }
        } else {
            return instance.proxy.$message({ message: '更改电话号码失败', duration: 2 })
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

onMounted(() => {
    innerWidth.value = window.innerWidth

    if (!token?.value) return router.push('/login')
})
</script>

<style scoped>
.formDiv:focus-within {
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
}
</style>