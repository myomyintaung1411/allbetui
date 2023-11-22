<template>
    <div class="w-full h-screen bg-[#171a23]   relative">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]">消息</p>

            <div class="">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
        </div>

        <div v-for="(list, index) in lists" :key="index">
            <div class="bg-gray-300/10 m-2 px-3 py-3 rounded">
                <div class="flex justify-between items-center">
                    <div class="text-lg">{{ list.title }}</div>
                    <div v-if="list?.is_do == 0 && (list?.type == 10 || list?.type == 11 || list?.type == 12)" @click="collectGift(list)" class="px-3 bg-[#eed0a4]  h-7 flex justify-center items-center rounded cursor-pointer  text-black">
                                <span class="text-center tracking-wide">点击领取</span>
                    </div>
                </div>
                <div class="text-gray-400 py-1">{{ list.description }}</div>
                <div class="text-end text-xs">{{ dateTime(list.created_at) }}</div>
            </div>
        </div>

        <section v-if="lists.length < 1" class="">
            <div class="pt-[200px] text-center text-[#97989d] text-base">暂无消息</div>
        </section>

    </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import allApi from "@/network/allApi.js";
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';
import moment from 'moment'
import Loading from "@/utils/loader";
const router = useRouter()
const store = useStore()
const instance = getCurrentInstance()
const lists = ref([])


const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);
const goUser = () => {
    router.go(-1)
}


const collectGift = (list) => {
    console.log(user?.value?.info);
    let data = {
        "player": user?.value?.info?.username,
        "id": list?.id,
        "gift_type":list?.type,
        "amount":Number(list?.amount),
        // "key": user?.value?.key
    }
    Loading.showLoading()
    allApi.CollectGift({ data: data, key: user?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
            console.log("res of CollectGift data", res);
            getAlert()
            //washData.value = res?.data?.data
            //store.commit('user/UserInfo', res.data.data)
        }
    }).catch((e) => {
        instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
        Loading.hideLoading()
        console.log(e);
    })
}

const getAlert = () => {
    if (token?.value) {
        let data = {
            "player": user?.value?.info?.username,
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        allApi.GetAlert({ data: data }).then((res) => {
            if (res.data.code == '1') {
                console.log("res of get alert", res);

                lists.value = res.data?.data?.list;
                // store.commit('user/UserInfo', res.data.data)

                submitAlert()
            }

        }).catch((e) => {
            console.log(e);
        })
    }
}

const submitAlert = () => {
    if (token?.value) {
        let data = {
            "player": user?.value?.info?.username,
            "ids": lists.value.map(list => list.id),
        }
        const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
        allApi.SubmitAlert({ data: data }).then((res) => {
            if (res.data.code == '1') {
                console.log("res of get alert", res);

                // store.commit('user/UserInfo', res.data.data)
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}

const dateTime = (time) => {
    time = moment(new Date(time)).format("Y-MM-DD HH:mm:ss")
    return time
}

onMounted(() => {
    if (!token?.value) return router.push('/login')
    getAlert()

})

</script>

<style scoped>

</style>