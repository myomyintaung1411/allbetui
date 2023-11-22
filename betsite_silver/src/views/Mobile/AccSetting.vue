<template>
    <div class="w-full h-screen bg-[#0a030b]   relative">
        <div class="h-[60px] w-full px-6 flex justify-between items-center">
            <img @click="goUser()" src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4">
            <img src="@/assets/mobile/user/zhh.png" alt="" class="w-[5rem] h-[1rem]">
            <div @click="goService">
                <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-6">
            </div>
        </div>
        <section class="px-5 py-2 w-full">

            <div v-if="userValue?.is_set_phone === 0" @click="goBind(4)"
                class="flex justify-between my-3 items-center px-4 py-7 bg-[#14151a]"
            >
                <div class="flex space-x-3 items-center">
                    <img src="@/assets/mobile/user/phone.png" alt="" class="w-5 h-8">
                    <img src="@/assets/mobile/user/shj.png" alt="" class="w-13 h-4">
                </div>

                <div class="flex items-center space-x-3">
                    <img src="@/assets/mobile/user/ggg.png" alt="" class="w-12 h-4">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
                </div>
            </div>
            <div v-if="userValue?.is_set_phone === 1" @click="goBind(5)"
                class="flex justify-between my-3 items-center px-4 py-7 bg-[#14151a]"
            >
                <div class="flex space-x-3 items-center">
                    <img src="@/assets/mobile/user/phone.png" alt="" class="w-5 h-8">
                    <img src="@/assets/mobile/user/shj.png" alt="" class="w-13 h-4">
                </div>
                

                <div class="flex items-center space-x-3">
                    <img src="@/assets/mobile/user/gg.png" alt="" class="w-8 h-4">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
                </div>
            </div>

            <div v-if="userValue?.user_type == 2" @click="goBind(0)"
                class="flex justify-between my-3 items-center px-4 py-7 bg-[#14151a]"
            >
                <div class="flex space-x-3 items-center">
                    <img src="@/assets/mobile/user/lock.png" alt="" class="w-6 h-6">
                    <img src="@/assets/mobile/user/mima.png" alt="" class="w-16 h-4">
                </div>
                
                <div class="flex items-center space-x-3">
                    <img src="@/assets/mobile/user/ggg.png" alt="" class="w-12 h-4">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
                </div>
            </div>
            <div v-if="userValue?.user_type == 1 || userValue?.user_type == 4" @click="goBind(1)"
                class="flex justify-between my-3 items-center px-4 py-7 bg-[#14151a]"
            >
                <div class="flex space-x-3 items-center">
                    <img src="@/assets/mobile/user/lock.png" alt="" class="w-6 h-6">
                    <img src="@/assets/mobile/user/mima.png" alt="" class="w-16 h-4">
                </div>
                

                <div class="flex items-center space-x-3">
                    <img src="@/assets/mobile/user/gg.png" alt="" class="w-8 h-4">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
                </div>
            </div>

            <div v-if="userValue?.is_set_cash_password === 0"
                class="flex justify-between my-3 items-center px-4 py-7 bg-[#14151a]" @click="goBind(2)"
            >
                <div class="flex space-x-3 items-center">
                    <img src="@/assets/mobile/user/lock1.png" alt="" class="w-5 h-6">
                    <img src="@/assets/mobile/user/quk.png" alt="" class="w-17 h-4">
                </div>

                <div class="flex items-center space-x-3">
                    <img src="@/assets/mobile/user/ggg.png" alt="" class="w-12 h-4">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
                </div>
            </div>
            <div v-if="userValue?.is_set_cash_password === 1" @click="goBind(3)"
                class="flex justify-between my-3 items-center px-4 py-7 bg-[#14151a]"
            >
                <div class="flex space-x-3 items-center">
                    <img src="@/assets/mobile/user/lock1.png" alt="" class="w-5 h-6">
                    <img src="@/assets/mobile/user/quk.png" alt="" class="w-17 h-4">
                </div>

                <div class="flex items-center space-x-3">
                    <img src="@/assets/mobile/user/gg.png" alt="" class="w-8 h-4">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
                </div>
            </div>

            <div @click="goBind(6)" class="flex justify-between my-3 items-center px-4 py-7 bg-[#14151a]">
                <div class="flex space-x-3 items-center">
                    <img src="@/assets/mobile/user/zz.png" alt="" class="w-6 h-8">
                    <img src="@/assets/mobile/user/zl.png" alt="" class="w-17 h-4">
                </div>
                
                <div class="flex items-center space-x-3">
                    <img src="@/assets/mobile/user/ggg.png" alt="" class="w-12 h-4">
                    <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import globaljs from '@/utils/global'
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const store = useStore()
const router = useRouter()

const user = computed(() => store.getters["user/LOGIN"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);


const goUser = () => {
 router.push('/user')
}

const goBind = (number) => {

    switch (number) {
        case 0:
            router.push('/set_pass')
            break;
        case 1:
            router.push('/changePass')
            break;
        case 2:
            if (userValue?.value?.is_set_phone == 1) {
                router.push('/setmoneypass')
            } else {
                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                router.push('/setPhonenum')
            }
            break;
        case 3:
            if (userValue?.value?.is_set_phone == 1) {
                router.push('/changemoneypass')
            } else {
                instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
                router.push('/setPhonenum')
            }

            break;
        case 4:
            router.push('/setPhonenum')
            break;
        case 5:

            router.push('/changePhonenum')
            break;
        case 6:
            router.push('/setSecurityInfo')
            break;

        default:
            break;
    }
}

const goService = () => {
    globaljs.customerService()
}

onMounted(() => {
    globaljs.getUserInfo()
    if (!token.value) {
        router.push('/login')
    }
})

</script>
  
<style scoped>

</style>