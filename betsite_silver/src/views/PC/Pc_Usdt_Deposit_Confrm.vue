<template>
    <div class="w-full h-auto relative sm:block hidden mx-[19px]">
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

            <div class="right__section flex-auto h-full w-full mx-20 mt-6">       
                <div class="relative mx-auto ">
                    <div class="h-[60px] w-full text-[17px] text-gray-200 px-2 flex justify-between items-center">
                        支付信息确认                    
                    </div>
                    <section class="py-3 w-full text-[#d0d0d0]">
                        <div class="w-full px-3 py-5 flex justify-between items-center bg-[#13151b]">
                            <div class="flex items-center space-x-2">
                                <img src="@/assets/pc/home/dcoin.webp" alt="" class="w-8 h-8">
                                <p class="text-base tracking-widest"> 金额 {{amount || 0}} USDT</p>
                            </div>
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
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 mx-6
                                        border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 
                                        hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-4 pb-5 ">
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
                        <div class="px-3 py-2 mt-4">
                            <div class="btn_login text-lg w-full py-3 text-center font-medium tracking-wider text-[#272c33]" @click="submitRequest()">已付款, 提交</div>
                        </div>
                    </section>
                </div>  
            </div>
        </div>
        
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