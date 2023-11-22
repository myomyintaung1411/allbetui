<template>
    <div class="w-full h-auto bg-[#171a21] relative">
        <div class="h-[60px]  w-full px-6 flex justify-between items-center">
           <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <!-- <p class=" text-[17px] mr-7"> 设置 </p> -->
            <img src="@/assets/mobile/home/sh.png" alt="" class="w-10 h-5">
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
            </div>
        </div>
       <div class="py-3  w-full space-y-3">
        <div @click="goSetting(1)" class="py-6 px-6 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <img src="@/assets/mobile/home/sh1.png" alt="" class="w-24 h-4">
            <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
        </div>
        <div @click="goSetting(2)" class="py-6 px-6 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <img src="@/assets/mobile/home/sh2.png" alt="" class="w-16 h-4">
            <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
        </div>
        <div @click="goSetting(3)" class="py-6 px-6 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <img src="@/assets/mobile/home/sh3.png" alt="" class="w-20 h-4">
            <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
        </div>
        <div @click="goSetting(4)" class="py-6 px-6 flex text-gray-400 justify-between items-center bg-[#4b494a]">
            <img src="@/assets/mobile/home/sh4.png" alt="" class="w-16 h-4">
            <img src="@/assets/mobile/home/back.png" alt="" class="w-2 h-4 rotate-180">
        </div>
       </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import {ref,onMounted,computed} from 'vue'
import { XIcon,UserIcon,LockClosedIcon,EyeIcon,EyeOffIcon ,ChevronLeftIcon ,ChevronRightIcon } from "@heroicons/vue/outline";

const router = useRouter()
const store = useStore()

const token = computed(() => store.getters["user/LToken"]);

const goUser = () => {
    router.go(-1)
}

const goSetting = (num) => {
    switch (num) {
        case 1:
            // router.push('/aggrement')
            break;
        case 2:
            router.push('/feedback')
            break;
        case 3:
            router.push('/aggrement')
            break;
        case 4:
            router.push('/about')
            break;
    
        default:
            break;
    }
}

onMounted(()=>{
    if (!token?.value) return router.push('/login')
})
</script>