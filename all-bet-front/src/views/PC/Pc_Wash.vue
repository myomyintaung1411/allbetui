<template>
    <div class="w-full h-auto bg-[#1f2129]  relative mx-[19px]">
        <!-- <div class="h-[60px] border-b border-gray-800 text-center  w-full text-gray-200   px-2 flex justify-center items-center">
            <p class=" text-xl text-center"> 结算洗码 </p>
        </div> -->
        <div class="w-full tabs flex items-center space-x-5  border-b border-gray-800">
            <div @click="Tabclick(0)" :class="Tab == 0 ? 'border-b border-[#eed0a4]' : 'text-[#c9c9c9]'"
                class="text-base text-center py-1 cursor-pointer w-[140px] tracking-wider ">
                今日洗码量
            </div>
            <div @click="Tabclick(1)" :class="Tab == 1 ? 'border-b border-[#eed0a4]' : 'text-[#c9c9c9]'"
                class="text-base text-center py-1 cursor-pointer w-[140px] tracking-wider">
                昨日洗码结算领取
            </div>
        </div>
        <section v-if="Tab == 0">
            <section class="px-3 w-full py-2">
                <div class="flex flex-col">
                    <div class="overflow-x-auto">
                        <div class="py-2 inline-block min-w-full ">
                            <div class="overflow-hidden">
                                <table class="min-w-full border border-slate-800 text-center">
                                    <thead class="border-b border-slate-800">
                                        <tr class="border-b border-slate-800">
                                            <td
                                                class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                                游戏
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                比例
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                洗码投注额
                                            </td>
                                            <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                                洗码费(元)
                                            </td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-slate-800">
                                            <td
                                                class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                                {{ getTodayWashData?.gameName || '真人' }}
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                {{ getTodayWashData?.xmb }}%
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                {{ getTodayWashData?.xml }} {{ activeTab == 1  ? 'CNY' : 'USDT' }} 

                                            </td>
                                            <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                                {{ getTodayWashData?.xmf }} {{ activeTab == 1  ? 'CNY' : 'USDT' }} 
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-3 text-[#7e7e7e]">
                    <p>温馨提示</p>
                    <span>单一游戏类型可洗码投注额需≥300元才可结算洗码。</span>
                </div>
            </section>
        </section>
        <section v-if="Tab == 1">
            <section class="px-3 w-full py-3">
                <div class="text-center w-full py-3">
                    <h1 class=" text-2xl text-white">可结算洗码</h1>
                    <div class="flex justify-center py-3 items-center text-base">
                        <CurrencyYenIcon v-if="activeTab == 1" class="w-8 h-8"></CurrencyYenIcon>
                        <img v-else src="@/assets/USDT.svg" class="w-6 h-6" alt="">
                        <h1 class="text-[22px] px-3 pt-1">{{ washData?.wash?.xmf?.toFixed(2) || '0.00' }}</h1>
                        <p class="-mb-3 -ml-2 text-[12px]">{{ activeTab == 1  ? 'CNY' : 'USDT' }} </p>
                    </div>
                    <div class=" py-2 flex justify-center items-center w-full  ">
                        <div class="w-[300px]">
                            <button @click="washCode()" class="btn_login w-[300px] py-3">一键申请结算</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-3 w-full py-2">
                <div class="flex flex-col">
                    <div class="overflow-x-auto">
                        <div class="py-2 inline-block min-w-full ">
                            <div class="overflow-hidden">
                                <table class="min-w-full border border-slate-800 text-center">
                                    <thead class="border-b border-slate-800">
                                        <tr class="border-b border-slate-800">
                                            <td
                                                class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                                比例
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                比例
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                洗码投注额
                                            </td>
                                            <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                                可结算金额(元)
                                            </td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(wash, n) in washData?.list" :key="n" class="border-b border-slate-800">
                                            <td
                                                class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                                {{ wash?.gameName || '真人' }}
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                {{ wash?.xmb }}%
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                {{ wash?.total_valid_amount }} {{ activeTab == 1  ? 'CNY' : 'USDT' }} 

                                            </td>
                                            <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                                {{ wash?.total_xmf }} {{ activeTab == 1  ? 'CNY' : 'USDT' }} 
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-3 text-[#7e7e7e]">
                    <p>温馨提示</p>
                    <span>单一游戏类型可洗码投注额需≥300元才可结算洗码。</span>
                </div>
            </section>
        </section>

        <!-- <section v-if="Tab == 1">
            <section class="px-3 w-full py-3">
                <div class="text-center w-full py-3">
                    <h1 class=" text-2xl text-white">可结算反水费</h1>
                    <div v-if="activeTab == 1" class="flex justify-center py-3 items-center text-base">
                        <CurrencyYenIcon  class="w-8 h-8"></CurrencyYenIcon>
                        <h1 class="text-[22px] px-3 pt-1">{{ FanshuiData?.fsf?.toFixed(2) || '0.00' }}</h1>
                        <p class="-mb-3 -ml-2 text-[12px]">{{ FanshuiData?.currency == 'CNY'  ? 'CNY' : 'USDT' }} </p>
                    </div>
                    <div v-else class="flex justify-center py-3 items-center text-base">
                        <img  src="@/assets/USDT.svg" class="w-6 h-6" alt="">
                        <h1 class="text-[22px] px-3 pt-1">{{ FanshuiData?.fsf?.toFixed(2) || '0.00' }}</h1>
                        <p class="-mb-3 -ml-2 text-[12px]">{{ FanshuiData?.currency == 'CNY'  ? 'CNY' : 'USDT' }} </p>
                    </div>
                    <div class=" py-2 flex justify-center items-center w-full  ">
                        <div class="w-[300px]">
                            <button @click="washFanshui()" class="btn_login w-[300px] py-3">一键申请结算</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-3 w-full py-2">
                <div class="flex flex-col">
                    <div class="overflow-x-auto">
                        <div class="py-2 inline-block min-w-full ">
                            <div class="overflow-hidden">
                                <table class="min-w-full border border-slate-800 text-center">
                                    <thead class="border-b border-slate-800">
                                        <tr class="border-b border-slate-800">
                                            <td
                                                class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                                反水比例
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                昨日总输赢
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                昨日最高充值
                                            </td>
                                            <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                                领取时间
                                            </td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  class="border-b border-slate-800">
                                            <td
                                                class="px-1 py-4 whitespace-nowrap text-sm font-medium  border-r border-slate-800">
                                                {{ FanshuiData?.lose_return_rate }}%
                                            </td>
                                            <td
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                {{ FanshuiData?.total_win_lose }} {{ FanshuiData?.currency == 'CNY'  ? 'CNY' : 'USDT' }}
                                            </td>
                                            <td v-if="FanshuiData?.currency == 'CNY'"
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                {{ FanshuiData?.amount_cny }} CNY 
                                            </td>
                                            <td v-else
                                                class="text-sm  font-light px-1 py-4 whitespace-nowrap border-r border-slate-800">
                                                {{ FanshuiData?.amount_usdt }} USDT
                                            </td>
                                            <td class="text-sm  font-light px-1 py-4 whitespace-nowrap">
                                                {{ FanshuiData?.wash_time }}
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section> -->
    </div>
</template>

<script setup>
import { ChevronLeftIcon, CurrencyYenIcon } from "@heroicons/vue/outline";
import { computed, onMounted, reactive, ref,watch } from 'vue'
import { useStore } from "vuex";
import { useRouter, useRoute } from 'vue-router';
import { getCurrentInstance } from 'vue';
import allApi from "@/network/allApi.js";
import Loading from "@/utils/loader";
import globaljs from '@/utils/global'
const instance = getCurrentInstance()
const store = useStore()
const router = useRouter()
const route = useRoute()

const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const user = computed(() => store.getters["user/LOGIN"]);
const activeTab = computed(() => store.getters["app/ACtiveTab"]);
const Tab = ref(0)
const moneyType = ref('')

const goUser = () => {
    router.go(-1)
}

const washData = ref(null) //yesterday
const getTodayWashData = ref(null) ///today
const FanshuiData = ref(null)

const goService = () => {
    globaljs.customerService()
}

const Tabclick = (number) => {
    Tab.value = number
    if(number == 0) {
        getTodayWashMoney(moneyType.value)
    }
    if(number == 1){
        getWashData(moneyType.value)
        //getFanshuiMoney()
    }
}



const getFanshuiMoney = () => {
    let data = {
        "player": userValue?.value?.username,
        "currency": moneyType.value
    }
   // Loading.showLoading()

    allApi.GetFanShuiMoney({ data: data, key: user?.value?.key }).then((res) => {
        //Loading.hideLoading()
        if (res.data.code == '1') {
            console.log("res of GetFanShuiMoney data", res);
            FanshuiData.value = res?.data?.data
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
    }).catch((e) => {
       // Loading.hideLoading()
        console.log(e);
        instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}

const washCode = () => {
    let data;
        if (washData?.value?.wash?.xmf <= 0) return instance.proxy.$message({ message: '没有可结算洗码费', duration: 2 })
        data = {
            "player": userValue?.value?.username,
            "amount": washData?.value?.wash?.xmf,
            "ids": washData?.value?.wash?.ids,
            "currency": moneyType.value
        }
    Loading.showLoading()

    allApi.RequestWashMoney({ data: data, key: user?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log("res of RequestWashMoney data", res);
            //store.commit('user/UserInfo', res.data.data)
            getWashData(moneyType.value)
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
    }).catch((e) => {
        Loading.hideLoading()
        console.log(e);
        instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })

}

const washFanshui = () => {
    if (FanshuiData.value?.currency == 'CNY') {
        if (FanshuiData.value?.amount_cny === 0 && FanshuiData.value?.fsf === 0) {
            instance.proxy.$message({ message: '金额为0，无法结算', duration: 2 })
            return;
        }
        if (!(FanshuiData.value?.amount_cny * 3 <= FanshuiData.value?.total_valid_amount)) {
            instance.proxy.$message({ message: '总输赢应为投注金额的3倍', duration: 2 })
            return;
        }
    }
    if (FanshuiData.value?.currency == 'USDT') {
        if (FanshuiData.value?.amount_usdt === 0 && FanshuiData.value?.fsf === 0) {
            instance.proxy.$message({ message: '金额为0，无法结算', duration: 2 })
            return;
        }
        if (!(FanshuiData.value?.amount_usdt * 3 <= FanshuiData.value?.total_valid_amount)) {
            instance.proxy.$message({ message: '总输赢应为投注金额的3倍', duration: 2 })
            return;
        }
    }

    let data = {
        "player": userValue?.value?.username,
        "amount": FanshuiData.value?.currency == 'CNY' ? FanshuiData?.value?.amount_cny : FanshuiData?.value?.amount_usdt,
        "currency": moneyType.value,
        "wash_amount":FanshuiData?.value?.fsf,
        "wash_time":FanshuiData?.value?.wash_time
    }

    Loading.showLoading()
    allApi.DoFanShuiMoney({ data: data, key: user?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log("res of DoFanShuiMoney data", res);
            //store.commit('user/UserInfo', res.data.data)
            getFanshuiMoney()
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        }
    }).catch((e) => {
        Loading.hideLoading()
        console.log(e);
        instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}

const getWashData = (money) => {
    let data = {
        "player": userValue?.value?.username,
        "currency": money
    }

    allApi.GetWashMoney({ data: data, key: user?.value?.key }).then((res) => {
        if (res.data.code == '1') {
            console.log("res of getwashmoney data", res);
            washData.value = res?.data?.data
            //store.commit('user/UserInfo', res.data.data)
        }
    }).catch((e) => {
        console.log(e);
    })
}

const getTodayWashMoney = (money) => {
    let data = {
        "player": userValue?.value?.username,
        "currency": money
    }

        allApi.GetTodayWashMoney({ data: data, key: user?.value?.key }).then((res) => {
        if (res.data.code == '1') {
            console.log("res of getTodayWashData data", res);
            getTodayWashData.value = res?.data?.data
            //store.commit('user/UserInfo', res.data.data)
        }
    }).catch((e) => {
        console.log(e);
    })
}
// watching for activeTab change and call api
watch(
  activeTab,
  (newValue) => {
   console.log(newValue,"ffff");
   if(newValue == 1){
    if(Tab.value == 0){
        moneyType.value = 'CNY'
        getTodayWashMoney('CNY')
       
    }
    if(Tab.value == 1){
        moneyType.value = 'CNY'
         getWashData('CNY')
        //getFanshuiMoney('CNY')
    }
   }
   if(newValue == 2){
    if(Tab.value == 0){
        moneyType.value = 'USDT'
       getTodayWashMoney('USDT')
    }
    if(Tab.value == 1){
        moneyType.value = 'USDT'
         getWashData('USDT')
        //getFanshuiMoney('USDT')
    }
   }
  },
  { immediate: true, deep: true }
);

onMounted(() => {
    moneyType.value = route.query.type
    getTodayWashMoney(route.query.type)
    getWashData(route.query.type)
})


</script>
  