<template>
    <div class="w-full h-auto   relative">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] mr-5"> 卡信息 </p>
            <div @click="goService">

                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7">
            </div>
        </div>
        <section v-if="bankInfo && typeofBank == 'BANK'" class="px-3 w-full py-3">
            <div v-for="bank in bankInfo" :key="bank.id"
                class="w-full h-56 m-auto mb-3 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform">

                <img class="relative object-cover w-full h-full rounded-xl" draggable="false" src="@/assets/bank.png">

                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                地址
                            </p>
                            <p class="font-medium tracking-widest">
                                {{ bank.ma_address }}
                            </p>
                        </div>
                        <img class="w-14 h-14" src="@/assets/bankcard.png" draggable="false" />
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            银行卡号
                        </p>
                        <p class="font-medium tracking-wider">
                            {{ numberFormat(bank?.ma_id) }}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    地址名称
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {{ bank.ma_name }}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section v-if="bankInfo && typeofBank == 'USDT'" class="px-3 w-full py-3">
            <div class="mx-auto my-3 py-3 h-fit w-full bg-[#393b42] rounded-lg" v-for="(card, i) in bankInfo" :key="i">
                <div class="w-full mx-auto">
                    <div class="mx-2 my-2  
          bg-gradient-to-b from-buttonLinearFrom to-buttonLinearTo py-3 px-3">
                        <p class="text-xl font-bold text-white">{{ card.name }}</p>
                        <div class="space-x-2 flex items-center justify-between">
                            <span id="textToBecopied"
                                class="text-md overflow-hidden text-ellipsis w-11/12 text-gray-100 py-2 leading-tight">{{
                                        card.ma_id
                                }}</span>
                            <div @click="copyAddress(card.ma_id)" title="copy address"
                                class="text-md text-black rounded-full bg-black cursor-pointer shadow-lg px-1 inline-block w-fit bg-HomecardBg py-1 leading-tight">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
  
<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted, computed, reactive } from 'vue'
import bankApi from "@/network/bank.js";
import useClipboard from 'vue-clipboard3'
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';
import globaljs from '@/utils/global'

const store = useStore()
const router = useRouter()
const route = useRoute();
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const login = computed(() => store.getters["user/LOGIN"]);
const { toClipboard } = useClipboard()
const instance = getCurrentInstance()



const bankInfo = ref(null)

const typeofBank = ref('')

const goUser = () => {
    router.go(-1)
}

const goService = () => {
    globaljs.customerService()
}

function numberFormat(x) {
    return x.replace(/(.{4})/g, "$1-");
}

const edit = () => {
    router.push({ path: '/edit_money_address', query: { type: typeofBank.value } })

}

const add = () => {
    router.push({ path: '/add_money_address', query: { type: typeofBank.value } })

}

const copyAddress = async (copyTxt) => {
    try {
        await toClipboard(copyTxt)
        return instance.proxy.$message({ message: '复制USDT地址成功', duration: 2 })
    } catch (e) {
        alert('copy error')
        console.error(e)
    }
}


const GetMoneyAddress = (type) => {
    if (token?.value) {
        let data = {
            "player": login?.value?.info?.username,
            "type": type
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

        bankApi.GetMoneyAddress({ data: data, key: login?.value?.key }).then((res) => {
            if (res.data.code == '1') {
                console.log("res of GetMoneyAddress data", res);
                bankInfo.value = res?.data?.data
            }
        }).catch((e) => {

            console.log(e);
        })
    }
}
onMounted(() => {
    if (!token?.value) router.push('/login')
    typeofBank.value = route.query.type
    if (bankInfo.value == null) {
        GetMoneyAddress(route.query.type)
    }
})

</script>