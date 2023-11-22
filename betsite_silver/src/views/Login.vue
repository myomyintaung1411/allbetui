<template>
    <div class="hidden sm:block min-h-screen bg-[#16181f]">
        <Header></Header>
        <div class="register-fame">
            <div class="relative w-[946px] pt-20 mx-auto flex justify-between ">
                <div class="h-[600px] w-auto">
                    <img src="@/assets/mobile/home/register2.png" alt="" class="w-full h-full">
                </div>
                <div class="pc-reg-container min-h-[550px] absolute bottom-30 right-[7rem] pt-14">
                    <div class="flex flex-col items-center  h-full px-6 py-6">
                        <section class="w-full  px-8 py-2">
                            <div class="flex items-center justify-evenly">
                                <div @click="Tabclick(0)" class="relative text-lg cursor-pointer text-center h-9 w-[105px]"
                                    :class="activeTab == 0 ? 'before:absolute before:h-[2px] before:left-0 before:w-full before:bottom-0 before:bg-[#d7d4d4]' : 'text-[#656569]'">
                                    账号登录
                                </div>
                                <div @click="Tabclick(1)" class="relative text-lg cursor-pointer text-center h-9 w-[105px]"
                                    :class="activeTab == 1 ? 'before:absolute before:h-[2px] before:left-0 before:w-full before:bottom-0 before:bg-[#d7d4d4]' : 'text-[#656569]'">
                                    手机登录
                                </div>
                            </div>
                        </section>
                        <div class="relative pt-[10px] pb-[40px] h-full">
                            <form @click.prevent>
                                <div class="w-[377px] h-full flex flex-col items-stretch mx-auto">
                                    <div v-if="activeTab == 0" class="form-now relative flex items-end my-5 w-full  ">
                                        <div class="relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class="h-full w-full  relative overflow-hidden flex items-center mx-auto  ">
                                                <div
                                                    class="border-none w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model="name" autocomplete="off"
                                                        class="placeholder-[#d7d4d4]  pc-input bg-transparent w-full h-full"
                                                        id="pcusername" pattern="" name="username" placeholder="请输入用户名"
                                                        min="6" max="12" maxlength="17" type="text">
                                                    <XIcon v-if="name" @click="name = ''"
                                                        class="h-5 w-5 cursor-pointer  absolute right-3  "></XIcon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="activeTab == 0" class="form-now relative flex items-end w-full  ">
                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div
                                                    class="w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model="pass" autocomplete="off" :type="passwordField"
                                                        class=" pc-input bg-transparent placeholder-[#d7d4d4] w-full h-full "
                                                        id="pcpassword" pattern="" name="username" placeholder="请输入密码"
                                                        min="6" max="12" maxlength="12">
                                                    <XIcon v-if="pass" @click="pass = ''"
                                                        class="h-5 w-5 cursor-pointer   absolute right-10  "></XIcon>
                                                    <div class="absolute right-3">
                                                        <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile"
                                                            class="w-5 h-5 " />
                                                        <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="activeTab == 1" class="form-now relative flex items-end w-full my-5  ">

                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div @click="showPhoneDialog = !showPhoneDialog"
                                                    class="w-[130px] text-sm whitespace-nowrap cursor-pointer border-[#7e7e7e] mx-2  border-b h-full text-center flex justify-center items-center space-x-2">
                                                    <p>{{ selectPhone || '中国+86' }}</p>
                                                    <img src="@/assets/mobile/user/down.png" alt="" class="w-4 h-3">
                                                </div>
                                                <div
                                                    class="w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model="phoneNum" autocomplete="off" type="tel"
                                                        class=" pc-input bg-transparent placeholder-[#d7d4d4] w-full h-full "
                                                        id="pcphoneNum" pattern="" name="phoneNum" placeholder="手机号码"
                                                        min="11" max="11" maxlength="11">
                                                    <XIcon v-if="phoneNum" @click="phoneNum = ''"
                                                        class="h-5 w-5 cursor-pointer   absolute right-10  "></XIcon>
                                                </div>
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div v-if="showPhoneDialog" @click="showPhoneDialog = false"
                                            class="absolute -bottom-8 z-20 w-[250px] h-[40px]  ">
                                            <div class="max-h-[300px] overflow-y-auto">
                                                <div v-for="phone in listPhone" :key="phone.id"
                                                    @click="selectPhoneNumber(phone)"
                                                    class=" h-[40px] cursor-pointer text-sm w-full px-4  flex  bg-[#1f2129] border-b border-[#3a3a43] items-center justify-start text-white">
                                                    {{ phone.phone }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="activeTab == 1" class="form-now relative flex items-end w-full my-3  ">

                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div
                                                    class="w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model="codeNum" autocomplete="off" type="text"
                                                        class=" pc-input bg-transparent placeholder-[#d7d4d4] w-full h-full "
                                                        id="pccodeNum" pattern="" name="codeNum" placeholder="6位短信校验码"
                                                        min="6" max="6" maxlength="6">
                                                    <div class="absolute right-3 z-10 cursor-pointer ">
                                                        <button :disabled="codeDisable" @click="getCode()"
                                                            class=" whitespace-nowrap px-3 py-[10px]"
                                                            :class="!codeDisable ? 'border border-solid border-[#d7d4d4]' : ' opacity-80 cursor-not-allowed'">{{
                                                                codeMsg
                                                            }}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between my-6">
                                        <div>
                                            <router-link to="/forgetpass"> 忘记密码? </router-link>
                                        </div>
                                        <div class="flex justify-start space-x-2 items-center"
                                            @click="rememberMe = !rememberMe">
                                            <img v-if="rememberMe" src="@/assets/mobile/home/check_box1.png" alt=""
                                                class="w-5 h-5">
                                            <img v-else src="@/assets/mobile/home/check_box.png" alt="" class="w-5 h-5">
                                            <div>记住用户名</div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between mt-[30px] -mx-[11px] mb-0">
                                        <router-link to="/"
                                            class="btn flex items-center justify-center w-full btn-outline mx-[11px] h-[50px] border border-solid border-[#d7d4d4] cursor-pointer">
                                            取消
                                        </router-link>
                                        <div @click="activeTab == 0 ? login() : PhoneLogin()"
                                            class="btn flex cursor-pointer items-center justify-center text-[#272c33] text-center w-full btn-primary mx-[11px] h-[50px]">
                                            登录
                                        </div>
                                    </div>
                                    <div class="mx-auto flex justify-center  leading-5 text-[13px] text-[#747782]">
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class=" text-[#747782] text-left w-full">没有帐户？点击这里
                            <router-link to="/register" class="switcher transition-3s  cursor-pointer text-[#d7d4d4]">注册
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="absolute left-[35rem] bottom-[17rem]">
                <div>如果登录遇到问题， 请 <span class="underline underline-offset-2"> 联系客服 </span> </div>
                <div class="text-center">还示创建账户？点击
                    <router-link to="/register"><span class="underline underline-offset-2"> 注册 </span></router-link>
                </div>
            </div> -->
        </div>
    </div>

    <div class=" min-h-screen overflow-y-scroll sm:hidden">
        <div class="login px-5 w-full">
            <div class="topbar flex justify-between items-center py-5">
                <router-link to="/" class="p-[6px]">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4">
                </router-link>
                <a href="/register" class="text-xl">
                    注册
                </a>
            </div>
            <section class="py-8 px-6 w-full">
                <div class="flex items-center justify-evenly">
                    <a @click="Tabclick(0)" class="text-xl tracking-wide relative "
                        :class="activeTab == 0 ? 'font-medium before:absolute before:w-12 before:h-[1px]  before:bg-[#d7d4d4] before:bottom-0 before:-mb-1' : 'text-[#656569]'">
                        账号登录
                    </a>
                    <a @click="Tabclick(1)" class=" text-xl tracking-wide relative "
                        :class="activeTab == 1 ? 'font-medium before:absolute before:w-12 before:h-[1px]  before:bg-[#d7d4d4] before:bottom-0 before:-mb-1' : 'text-[#656569]'">
                        手机登录
                    </a>
                </div>
            </section>
            <form @click.prevent class="py-3">
                <div v-if="activeTab == 0"
                    class="bg-[#13151b] my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20 h-5   border-r border-[#d7d4d4] border-solid">
                        <UserIcon class="w-5 h-5"></UserIcon>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="name" autocomplete="off"
                            class=" input-name placeholder-[#d7d4d4] border-none outline-none focus:outline-none focus:border-none w-full h-full"
                            id="username" pattern="" name="username" placeholder="请输入用户名" min="6" max="12" maxlength="17"
                            type="text">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer  absolute right-3"></XIcon>
                    </div>
                </div>
                <div v-if="activeTab == 0"
                    class="bg-[#13151b] formDiv relative overflow-hidden border border-solid border-[#272c33] flex items-center mx-auto px-2 h-16">
                    <div class="relative flex items-center justify-center w-20 h-5 border-r border-[#d7d4d4] border-solid">
                        <LockClosedIcon class="w-5 h-5"></LockClosedIcon>
                    </div>
                    <div class="w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="pass" autocomplete="off" :type="passwordField"
                            class=" input-name  focus:border-none border-none outline-none focus:outline-none placeholder-[#d7d4d4] w-full h-full "
                            id="password" pattern="" name="username" placeholder="请输入密码" min="6" max="12" maxlength="12">
                        <XIcon v-if="pass" @click="pass = ''" class="h-5 w-5 cursor-pointer  absolute right-10"></XIcon>
                        <div class="absolute right-3">
                            <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile" class="w-5 h-5 " />
                            <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                        </div>
                    </div>
                </div>

                <div v-if="activeTab == 1"
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv   relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div class="relative flex items-center justify-center w-20 h-5 border-r border-[#d7d4d4] border-solid">
                        <img src="@/assets/mobile/user/phone.png" alt="" class="w-4 h-7">
                    </div>
                    <div class="px-3 w-auto whitespace-nowrap flex items-center space-x-2">
                        <p @click="showPhoneDialog = !showPhoneDialog" class="">{{ selectPhone || '中国 +86' }}</p>
                        <img src="@/assets/mobile/user/down.png" alt="" class="w-4 h-3">
                    </div>
                    <div class="formInput w-full   h-full text-sm flex justify-center items-center relative">
                        <input v-model="phoneNum" autocomplete="off"
                            class=" input-name  focus:border-none  border-none outline-none bg-transparent focus:outline-none placeholder-[#d7d4d4] w-full h-full"
                            id="phoneNum" pattern="" name="phoneNum" placeholder="手机号码" min="11" max="11" maxlength="11"
                            type="tel">
                        <XIcon v-if="phoneNum" @click="phoneNum = ''" class="h-5 w-5 cursor-pointer  absolute right-3 ">
                        </XIcon>
                    </div>
                </div>
                <div v-if="activeTab == 1"
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv  relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-14 py-1 h-5 border-r border-[#d7d4d4] border-solid">
                        <ChatAltIcon class="w-5 h-5 "></ChatAltIcon>
                    </div>

                    <div class="formInput w-full  h-full text-sm flex justify-center items-center relative">
                        <input v-model="codeNum" autocomplete="off"
                            class=" input-name  focus:border-none  border-none w-full outline-none bg-transparent focus:outline-none placeholder-[#d7d4d4] h-full"
                            id="codeNum" pattern="" name="codeNum" placeholder="6位短信校验码" min="6" max="6" maxlength="6"
                            type="tel">
                        <div class="absolute right-2 cursor-pointer">
                            <button :disabled="codeDisable" @click="getCode()" class=""
                                :class="!codeDisable ? '' : ' opacity-80 cursor-not-allowed'">{{
                                    codeMsg
                                }}</button>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between my-6">
                    <div>
                        <router-link to="/forgetpass"> 忘记密码? </router-link>
                    </div>
                    <div class="flex justify-start space-x-2 items-center" @click="rememberMe = !rememberMe">
                        <img v-if="rememberMe" src="@/assets/mobile/home/check_box1.png" alt="" class="w-5 h-5">
                        <img v-else src="@/assets/mobile/home/check_box.png" alt="" class="w-5 h-5">
                        <div>记住用户名</div>
                    </div>
                </div>

                <div class="py-7 w-full">
                    <button @click="activeTab == 0 ? login() : PhoneLogin()"
                        class="w-full btn_login text-base py-3 text-[#373c33] text-[19px]">
                        登录
                    </button>
                </div>
            </form>
            <div class="w-full">
                <img src="@/assets/pc/Home/reg.png" alt="" class="w-full h-[130px]">
            </div>
        </div>
        <div v-if="showPhoneDialog"
            class="absolute z-10 bottom-[0px] w-full overflow-y-hidden  h-full bg-[rgba(0,0,0,0.72)]">
            <div class="px-5 w-full fixed h-[screen]  bottom-0 z-20  bg-[rgba(0,0,0,0.72)]">
                <div class="max-h-[300px] overflow-y-auto">
                    <div v-for="phone in listPhone" :key="phone.id" @click="selectPhoneNumber(phone)"
                        class="flex items-center text-center text-base text-[#d0d0d0] justify-center py-3 mb-1 bg-[#272c33] px-2 w-full">
                        {{ phone.phone }}
                    </div>
                </div>

                <div @click="showPhoneDialog = false"
                    class="flex items-center py-3 my-3 text-center text-base justify-center bg-[#272c33] px-2 w-full">
                    取消
                </div>
            </div>
        </div>
    </div>

    <NotCloseDialog :show="hasMoreLoginDialog" @close="hasMoreLoginDialog = false">
        <div class="w-[90vw] sm:w-[500px] py-10 px-3">
            <p class="text-center text-xl">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-sm text-[#d0d0d0] py-2 px-1">绑定有多账号, 请选择账户名登录。</p>
            </div>

            <div class="w-full h-auto cursor-pointer  ">
                <div v-for="name in moreLogin_UserList" :key="name.username" @click="moreLogin(name.username)"
                    class="py-2 mb-2 bg-[#13151b] px-2 tracking-widest">
                    {{ name.username }}
                </div>
            </div>
        </div>
    </NotCloseDialog>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, EyeIcon, EyeOffIcon, ChatAltIcon, ChevronDownIcon } from "@heroicons/vue/outline";
import Header from '@/components/Header.vue';
import userApi from "@/network/user.js";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import Loading from "@/utils/loader";
import NoticeMsg from "@/utils/alert";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import AES from '@/utils/aes';
import global from '@/utils/global'
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const showPhoneDialog = ref(false)
const phoneNum = ref('')
const codeNum = ref('')
const activeTab = ref(0)
const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)
const rememberMe = ref(false)
const name = ref('')
const pass = ref('')
const passwordField = ref('password')
const innerWidth = ref(0)
const store = useStore()
const router = useRouter()

const hasMoreLoginDialog = ref(false)//for more login
const moreLogin_UserList = ref(null)
const moreLoginUsername = ref('')

const selectPhone = ref('')
const selectCode = ref(86) //for phone number select

const listPhone = ref([
    {
        id: 1,
        phone: '中国 +86',
        code: 86
    },
    {
        id: 2,
        phone: '缅甸 +95',
        code: 95
    },
    {
        id: 3,
        phone: '日本 +81',
        code: 81
    },
    {
        id: 4,
        phone: '香港 +852',
        code: 852
    },
    {
        id: 5,
        phone: '澳门 +853',
        code: 853
    },
    {
        id: 6,
        phone: '台湾 +886',
        code: 886
    },
    {
        id: 7,
        phone: '阿联酋 +971',
        code: 971
    },
    {
        id: 8,
        phone: '菲律宾 +63',
        code: 63
    },
    {
        id: 9,
        phone: '泰国 +66',
        code: 66
    },
    {
        id: 10,
        phone: '新加坡 +65',
        code: 65
    },
    {
        id: 11,
        phone: '越南 +84',
        code: 84
    },
    {
        id: 12,
        phone: '马来西亚 +60',
        code: 60
    },
    {
        id: 13,
        phone: '印度尼西亚 +62',
        code: 62
    },
    {
        id: 14,
        phone: '柬埔寨 +855',
        code: 855
    },
    {
        id: 15,
        phone: '老挝 +856',
        code: 856
    },
])


const userValue = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};

const Tabclick = (number) => {
    activeTab.value = number;

}

const selectPhoneNumber = (phone) => {
    selectPhone.value = phone.phone;
    selectCode.value = phone.code;

    showPhoneDialog.value = false
}


const getCode = () => {
    if (phoneNum.value == '') return instance.proxy.$message({ message: '请输入电话号码', duration: 2 })

    if (!global.validatePhoneNumber(phoneNum.value, selectCode.value)) return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 });
    getValidStr()
}

const getValidStr = () => {
    console.log(phoneNum.value, "ttttttttttt");

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

const createPhoneCode = () => {
    let data = {
        "type": 6,
        "phone": phoneNum.value,
        "country_code": selectCode.value, // country code
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    userApi.GetRegLoginSmsCode({ data: data }).then((res) => {
        console.log(res, "login sms code");
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

const moreLogin = (name) => {
    let data = {
        "phone": phoneNum.value,
        "code": codeNum.value,
        "username": name,
        "country_code": selectCode.value, // country code
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.PhoneMoreAccountLogin({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            store.commit('user/Login', res.data.data)
            instance.proxy.$message({ message: res?.data.message, duration: 2 })
            console.log(res, 'phone more login loginnnnnnnnn');
            router.push('/')
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response?.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

const PhoneLogin = () => {
    if (phoneNum.value == '' || codeNum.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let data = {
        "phone": phoneNum.value,
        "code": codeNum.value,
        "country_code": selectCode.value, // country code
    }
    console.log(data, "phoneLogin request ----------->");
    //const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.PhoneLogin({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;

            instance.proxy.$message({ message: res?.data.message, duration: 2 })
            console.log(typeof (res.data.data?.hasMore), 'phone loginnnnnnnnn');
            if (res.data.data?.hasMore == "true") {
                hasMoreLoginDialog.value = true
                moreLogin_UserList.value = res?.data?.data?.userList
                return
            } else {
                store.commit('user/Login', res.data.data)
                router.push('/')
            }
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response?.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}


const login = () => {
    if (name.value == '' || pass.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })

    let data = {
        "player": name.value,
        "language": "",
        "gameHall": "",
        "appType": innerWidth.value > 640 ? 6 : 3,
        "tableName": "",
        "returnUrl": "",
        "password": pass.value
    };

    //const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
    //console.log(encrypttxt);
    Loading.showLoading()
    userApi.UserLogin({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {

            console.log(res, "login resp ********");
            store.commit('user/Login', res.data.data)
            store.commit('user/LOGIN_USERNAME', pass.value)
            instance.proxy.$message({ message: '登录成功', duration: 2 })
            if (res.data?.data?.info?.is_set_phone == 0) {
                router.push('/login/success')
            } else {
                router.push('/')
            }
            name.value = ''
            pass.value = ''

        } else {
            console.log(res.data);
            instance.proxy.$message({ message: '登录失败', duration: 2 })
        }
    }).catch((err) => {
        console.log(err.toString());
        Loading.hideLoading()
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

onMounted(() => {
    console.log(token.value, "from login ****");
    innerWidth.value = window.innerWidth
    if (token.value) {
        router.push('/')
    }
})

</script>

<style scoped>
.formDiv:focus-within {
    background: transparent !important;
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
    background: transparent !important;

}

.btn_login {
    width: 100%;
    background-image: linear-gradient(#aca8a8, #fef5f6, #dcd8d7);
    border: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: #272c33;
    outline: none;
}

/* pc login */
.register-fame {
    background-image: url("@/assets/pc/Home/register-fame.webp");
    background-color: #16181f;
    background-size: 1920px 304px;
    background-position: top;
    background-repeat: no-repeat;
}

.pc-input:focus-within {
    /* border: 0; */
    outline: none;
    box-shadow: none;
}

.pc-input {
    outline: 0;
    border-width: 0 0 1px;
    border-color: grey
}
</style>