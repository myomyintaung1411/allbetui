<template>
    <div class="w-full  relative sm:flex-auto sm:mx-[19px]">
        <div class="h-[60px]  w-full px-4 flex justify-between items-center">
            <img @click="goUser()" src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4">
            <p class=" text-[17px]">人民币取款</p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-6">
            </div>
        </div>
        <section class="px-5 py-3 w-full bg-[#13151b]">
            <div class="w-full flex items-center">
                <img src="@/assets/mobile/user/num11.png" alt="" class="w-12">

                <p class="px-2">为了您的账户资金安全，请您先验证您的提现密码</p>
            </div>
            <div v-if="userValue?.realname" class="py-3 flex items-center w-full relative border-b border-[#272c33] ">
                <p class=" whitespace-nowrap">真实姓名</p>
                <form @click.prevent class="w-full">
                    <div class="relative w-full  ">
                        <div class="h-5 px-6 tracking-widest">
                            {{ hideWord(userValue?.realname) }}
                        </div>

                    </div>
                </form>
            </div>
            <div v-else @click="openDialog" class="py-3 flex items-center w-full relative border-b border-[#272c33] ">
                <p class=" whitespace-nowrap">真实姓名</p>
                <form @click.prevent class="w-full">
                    <div class="relative w-full  ">
                        <input disabled v-model="name" type="text" placeholder="真实姓名填写后无法修改"
                            class="w-full input_foucs left-11 px-6 placeholder-[#d7d4d4] h-10 bg-transparent border-none border-0 ">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer top-3  absolute right-0  ">
                        </XIcon>

                    </div>
                </form>
            </div>
        </section>
        <section v-if="userValue?.realname == ''" class="flex justify-end w-full items-center py-3 text-sm px-5">
            若姓名包含
            <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
            请点
            <span class="text-[#f68e45]">复制</span>
            <span>后粘贴</span>
        </section>

        <section class="px-5 w-full  pt-3">
            <div class="py-3 my-3 px-5 flex items-center w-full relative bg-[#282b32]   ">

                <form @click.prevent class="w-full text-start">
                    <div class="relative w-full    ">
                        <input v-model="withdrawpass" type="password" placeholder="请输入取款密码" autocomplete="off"
                            maxlength="16" min="6" max="16"
                            class="w-full input_foucs placeholder-[#d7d4d4]  p-0 h-10 bg-transparent border-none border-0  text-start ">
                        <XIcon v-if="withdrawpass" @click="withdrawpass = ''"
                            class="h-5 w-5 cursor-pointer top-3  absolute right-3  "></XIcon>
                    </div>
                </form>
            </div>

        </section>

        <div class="py-1">
            <p @click="goBindPhone()" class=" cursor-pointer px-5">手机短信验证</p>
        </div>

        <section class="px-6 py-3 ">

            <div @click="BindWithPass" class="py-3 text-base w-full btn_login text-center">
                下一步
            </div>
        </section>

    </div>

    <!-- dialog -->
    <NotCloseDialog :show="depo_Dialog" @close="depo_Dialog = false">
        <div class="w-[90vw] py-1 px-3  ">
            <p class="text-center text-xl">提示</p>
            <div class="w-full text-start py-3">
                <p class="text-sm py-5">人民币存款前请实名认证，并只用该实名账户存取款。</p>
                <p class="text-[#ff1818] text-sm">注：实名不可随意更改，如需变更请联系在线客服。</p>
            </div>
            <div class="w-full h-12 bg-[#13151b] my-5">
                <form @click.prevent>
                    <input v-model="realname" type="text" placeholder="真实姓名" name="username" id="usr" class="w-full focus:border-none  focus:outline-0 focus:shadow-none 
                    bg-transparent h-12 outline-0 border-none focus-within:outline-0 focus-within:shadow-none">
                </form>
            </div>
            <div class="flex justify-end w-full items-center text-[#858585]">
                若姓名包含
                <span class="text-[#e74747] text-xl mx-2 -mt-2">.</span>
                请点
                <span class="text-[#bc6013]">复制</span>
                <span>后粘贴</span>
            </div>
            <div class="flex pt-5 items-center w-full  justify-evenly px-3">
                <div @click="depo_Dialog = false" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#d7d4d4] cursor-pointer px-12  whitespace-nowrap
                              ">
                    取消
                </div>
                <div @click="requestName" class="btn flex cursor-pointer px-12 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
                    确认
                </div>
            </div>
        </div>
    </NotCloseDialog>

</template>

<script setup>
import { XIcon } from "@heroicons/vue/outline";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import globaljs from '@/utils/global'
import AES from '@/utils/aes';

import { ref, computed, onMounted } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
const name = ref('')
const withdrawpass = ref('')
const depo_Dialog = ref(false)

const verify = ref(false)
const realname = ref('') //realname bind

const router = useRouter()
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const moneyAddData = ref(null)



const goService = () => {
    globaljs.customerService()
}



function hideWord(w) {
    if (w.length < 1) return w;
    return w.substring(0, 1) + '*'.repeat(w.length - 1);
}

function hideMiddle(string, prefixLength, suffixLength) {
    var re = new RegExp('^(\\+?\\d{' + prefixLength + '})(\\d+)(\\d{' + suffixLength + '})$');

    return string?.replace(re, function (match, prefix, middle, suffix) {
        return prefix + '*'.repeat(middle.length) + suffix;
    });
}


const goBindPhone = () => {
    router.push({ path: '/user/bindPhoneForWithdraw', query: { type: 'BANK' } })
}


const BindWithPass = () => {
    if (userValue.value?.user_level < 1) return instance.proxy.$message({ message: '账号未充值', duration: 2 })//userlevel must be greater than 1

    if (userValue.value?.realname == '' || userValue.value?.realname == undefined) {
        depo_Dialog.value = true
        return instance.proxy.$message({ message: '请先绑定实名', duration: 2 })
    }

    if (withdrawpass.value == '') return instance.proxy.$message({ message: '请输入提现密码', duration: 2 })

    let data = {
        "player": userValue?.value?.username,
        "money_password": withdrawpass.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()
    userApi.CheckMoneyPasswordForWithdraw({ data: data, key: login?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log("res of CheckMoneyPasswordForWithdraw data", res);
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })

            router.push('/moneyWithdraw')
        }
    }).catch((e) => {
        Loading.hideLoading()
        return instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}

const goUser = () => {
    router.go(-1)
}



const requestName = () => {
    if (realname.value == '') return instance.proxy.$message({ message: '请输入真实姓名', duration: 2 })
    if (!realname.value?.match(/^[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+$/g)) return instance.proxy.$message({ message: '只允许使用汉字', duration: 2 })
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "realname": realname.value
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        userApi.BindRealName({ data: data, key: login?.value?.key }).then((res) => {
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

const openDialog = () => {
    depo_Dialog.value = true
}

onMounted(() => {

    if (!token?.value) return router.push('/login')

    globaljs.getUserInfo()
})
</script>


<style scoped>
.input_foucs:focus {
    outline: 0 !important;
    outline: none !important;
    border: 1px solid gray;
}

.input_foucs:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}
</style>