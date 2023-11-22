<template>
    <div class="w-full h-auto relative sm:hidden">
        <div class="h-[60px] w-full text-gray-200 px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-7"> 支付信息确认 </p>
            <div @click="goService">
            </div>
        </div>
        <section class="py-3 w-full text-[#d0d0d0]">
            <div class="w-full px-3 py-5 flex justify-between items-center bg-[#13151b]">
                <div class="flex items-center space-x-2">
                    <img src="@/assets/pc/home/dcoin.webp" alt="" class="w-8 h-8">
                    <p class="text-base tracking-widest"> 金额 {{amount || 0}} USDT</p>
                </div>
                <!-- <div class="flex flex-col items-center text-[#c15410]">
                    <p>约人民币</p>
                    <p> ¥ 717</p>
                </div> -->
            </div>
            <div class="py-2 ">
                <div class="py-2 px-3 w-full text-sm tracking-wider text-[#7e7e7e] bg-[#20232c]">
                    请复制以下地址，进行转账后并上传凭证提交
                </div>
                <div class="py-4 px-3 w-full text-md overflow-ellipsis tracking-wider text-[#7e7e7e] bg-[#20232c]">
                    <span class="text-[#c15410]">官方地址：<span class="text-[#e6e6e6]">点击地址进行复制</span></span>
                    <br>
                    <span class="text-md" @click="copyAddress(xaddress)">{{ xaddress }}</span>
                </div>
            </div>
            <div class="py-2 bg-[#13151b] text-white border-b border-[#333]">
                <div class="px-3 py-2">
                    <div class="bg-red-500 px-1 rounded-b rounded-bl-lg  w-fit">上传付款截图</div>
                    <!-- <div class="py-2 tracking-wider text-sm">
                        用唤起的小金库APP直接支付或截屏扫码
                    </div> -->
                </div>
                <div class="flex flex-col py-2 items-center justify-center w-full relative">
                    <p>{{ coin_type }}</p>
                    <div v-if="!upload_state" class="flex items-center justify-center w-full px-4">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 
                            border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 
                            hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-4 pb-5">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">点击上传付款截图</span></p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG 格式</p>
                            </div>
                            <input id="dropzone-file" type="file" v-on:change="onFileChange" class="hidden" />
                        </label>
                    </div>
                    <div v-if="upload_state" 
                        class="flex items-center justify-center w-[80%] h-auto px-4 border-2
                            border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 
                            hover:bg-gray-100 dark:border-gray-500 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <span style="position: absolute; font-size: 30px; z-index: 1000;right: 12%; top: 7%; color: gray" @click="delPhoto()">x</span>
                        <img src="https://serversideup.net/wp-content/themes/serversideup/images/social/twitter.svg" alt="" class="w-full h-auto">
                    </div>
                    <!-- <div class="flex items-center text-sm space-x-2">
                       <span>没有小金库?</span>
                       <span class="text-[#c15410] underline">去下载</span>
                    </div> -->
                </div>
            </div>
            <!-- <div class="py-2 bg-[#13151b] text-white">
                <div class="px-3 py-2 ">
                    <div class="bg-red-500 px-1 rounded-b rounded-bl-lg  w-fit">方式2</div>
                    <div class="flex items-center space-x-1">
                        <div class="py-2 tracking-wider text-sm">
                        若小金库无法使用,但有账号和余额,请点
                    </div>
                    <div class="py-1 bg-[#c15410] px-2 rounded-lg">
                        网页支付
                    </div>
                    </div>
                </div>
            </div> -->
            <div class="px-3 py-2">
                <div class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]" @click="submitRequest()">已付款, 提交</div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import {onMounted, computed, ref } from 'vue'
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
import useClipboard from 'vue-clipboard3'
import { getCurrentInstance } from 'vue';
import bankApi from "@/network/bank.js";
import Loading from "@/utils/loader";
import globaljs from '@/utils/global'
const store = useStore()
const router = useRouter()
const route = useRoute()
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const login = computed(() => store.getters["user/LOGIN"]);
const { toClipboard } = useClipboard()
const instance = getCurrentInstance()
// const xaddress = computed(() => store.getters["pay/USDT_ADDRESS"]);
const xaddress = ref('')
const user_address = ref('')
const file_ = ref('')

const goUser = () => {
    router.go(-1)
}

const amount = ref(0)
const coin_type = ref('')
let upload_state = ref(false)
const link = ref('')

function numberFormat(x){
    return x.replace(/(.{4})/g, "$1-");
}

const goService = () => {
    globaljs.customerService()
}
onMounted(()=>{
    if (!token?.value) return router.push('/login')
    coin_type.value = route.query.coin_type
    amount.value = route.query.amount
    xaddress.value = route.query.address
    user_address.value = route.query.user_address
    link.value = ''
})

const copyAddress = async (copyTxt) => {
    try {
        await toClipboard(copyTxt)
        return instance.proxy.$message({ message: '复制USDT地址成功', duration: 2 })
    } catch (e) {
        alert('copy error')
        console.error(e)
    }
}

const delPhoto = () => {
    upload_state.value = false
    link.value = ''
}

const onFileChange = async (e) => {
//   link.value = ''
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return
//   console.log('file ', files)
  file_.value = files[0]
  if (
        file_.value.type !== "image/png" && file_.value.type !== "image/jpg" &&
        file_.value.type !== "image/jpeg"
    ) return instance.proxy.$message({ message: '图片格式不支持', duration: 2 })
  UploadDepositImage(file_.value);
}

const UploadDepositImage = (raw) => {
    const fd = new FormData()
    fd.append('file', raw) // 因为要上传多个文件，所以需要遍历一下才行
    // 不要直接使用我们的文件数组进行上传，你会发现传给后台的是两个Object
    Loading.showLoading()
    bankApi.UploadImage(fd).then(res => {
        console.log('res ', res)
        Loading.hideLoading()
        if (res.data?.code == '1') {
            console.log('res ', res)
            upload_state.value = true
            link.value = res.data?.data?.name
            console.log('state ', upload_state.value, link.value)
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        } else {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
    }).catch(err => {
        console.error(err)
        Loading.hideLoading()
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

const submitRequest = async () => {
    if (amount.value <= 0) return instance.proxy.$message({ message: '请输入金额', duration: 2 })
    if (xaddress.value == '') return instance.proxy.$message({ message: '请输入您的付款地址', duration: 2 })
    if (link.value == '') return instance.proxy.$message({ message: '请输上传支付凭证', duration: 2 })
    console.log('link ', link.value)
    let data_ = {
        player: userValue?.value.username,
        id: userValue?.value.id,
        amount: amount.value,
        user_address: user_address.value,
        coin_type: coin_type.value == 'TRC20' ? 0 : 1,
        link: link.value
    }
    Loading.showLoading()
    bankApi.USDTDepositRequest({ data: data_, key: login?.value?.key }).then(res => {
        console.log('res ', res)
        Loading.hideLoading()
        if (res.data?.code == '1') {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        } else {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
    }).catch(err => {
        console.error(err)
        Loading.hideLoading()
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}
</script>






























<!-- <template>
    <div class="w-full h-auto   relative sm:hidden">
        <div class="h-[60px]   w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-7"> 支付信息确认 </p>
            <div @click="goService">
            </div>
        </div>
        <section class="py-3 w-full text-[#d0d0d0]">
            <div class="w-full px-3 py-5 flex justify-between items-center bg-[#13151b]">
                <div class="flex items-center space-x-2">
                    <img src="@/assets/pc/home/dcoin.webp" alt="" class="w-8 h-8">
                    <p class="text-base tracking-widest"> 金额 100 USDT</p>
                </div>
                <div class="flex flex-col items-center text-[#c15410]">
                    <p>约人民币</p>
                    <p> ¥ 717</p>
                </div>
            </div>
            <div class="py-2 ">
                <div class="py-2 px-3 w-full text-sm tracking-wider text-[#7e7e7e] bg-[#20232c]">
                    汇率波动,到账金额以实时汇率计算为准
                </div>
            </div>
            <div class="py-2 bg-[#13151b] text-white border-b border-[#333]">
                <div class="px-3 py-2">
                    <div class="bg-red-500 px-1 rounded-b rounded-bl-lg  w-fit">方式1</div>
                    <div class="py-2 tracking-wider text-sm">
                        用唤起的小金库APP直接支付或截屏扫码
                    </div>
                </div>
                <div class="flex flex-col py-2 items-center justify-center w-full">
                    <p>TRC 20</p>
                    <div class="w-[200px] h-[150px] my-2 bg-red-500"></div>
                    <div class="flex items-center text-sm space-x-2">
                       <span>没有小金库?</span>
                       <span class="text-[#c15410] underline">去下载</span>
                    </div>
                </div>
            </div>
            <div class="py-2 bg-[#13151b] text-white">
                <div class="px-3 py-2 ">
                    <div class="bg-red-500 px-1 rounded-b rounded-bl-lg  w-fit">方式2</div>
                    <div class="flex items-center space-x-1">
                        <div class="py-2 tracking-wider text-sm">
                        若小金库无法使用,但有账号和余额,请点
                    </div>
                    <div class="py-1 bg-[#c15410] px-2 rounded-lg">
                        网页支付
                    </div>
                    </div>
                </div>
            </div>
            <div class="px-3 py-2">
                <div class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]">已付款，去游戏</div>
            </div>
        </section>
    </div>
</template>

<script setup>
import {ChevronLeftIcon  } from "@heroicons/vue/outline";
import {onMounted, computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);

const goUser = () => {
    router.go(-1)
}

function numberFormat(x){
    return x.replace(/(.{4})/g, "$1-");
}

const goService = () => {
  if(token?.value){
    window.open(`http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293&nick_name=${userValue?.value.username}`)
  }else{
    window.open('http://kf-libertexa.co/#/?visiter_id=&avatar=&business_id=8&groupid=8&special=293')
  }
}
onMounted(()=>{
    if (!token?.value) return router.push('/login')
})
</script> -->