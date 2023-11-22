<template>
    <div class="w-full h-auto relative sm:flex-auto sm:mx-[19px] sm:bg-black text-[#d7d4d4]">
        <div class="h-[60px] w-full px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goUser()" class="w-7 h-7 text-[#d7d4d4]"></ChevronLeftIcon>
            <p class=" text-[17px] mr-5">下载游戏客户端</p>
            <div></div>
        </div>
        <section class="py-3 px-4  border-b border-[#202330]">
            <h3 class="text-lg">体育投注</h3>
            <div class="flex items-center py-3 space-x-4">
                <div class="flex justify-center items-center  relative">
                    <img src="@/assets/mobile/user/logo.png" alt="" class="h-16">
                    <div class="text-black absolute top-0 flex justify-center items-center w-full h-full">logo</div>
                </div>
                
                <div class="flex flex-col">
                    <p class="text-base">沙巴体育</p>
                    <div class="flex items-center space-x-1">
                        <img src="@/assets/mobile/user/ios.png" alt="" class="w-6">
                        <img src="@/assets/mobile/user/and.png" alt="" class="w-6">
                        
                    </div>
                </div>
            </div>
        </section>
        <section class="py-3 px-4  ">
            <h3 class="text-lg">彩票娱乐</h3>
            <div class="flex items-center py-3 space-x-4">
                <div class="flex justify-center items-center relative">
                    <img src="@/assets/mobile/user/logo.png" alt="" class="h-16">
                    <div class="text-black absolute top-0 flex justify-center items-center w-full h-full">logo</div>
                </div>
                <div class="flex flex-col">
                    <p class="text-base">AG彩票</p>
                    <div class="flex items-center space-x-1">
                        <img src="@/assets/mobile/user/ios.png" alt="" class="w-6">
                        <img src="@/assets/mobile/user/and.png" alt="" class="w-6">
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { XIcon, CreditCardIcon, ChevronLeftIcon, ChevronRightIcon, ArrowNarrowRightIcon } from "@heroicons/vue/outline";
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from "vuex";

const store = useStore()

const router = useRouter()
const token = computed(() => store.getters["user/LToken"]);

const goUser = () => {
    router.go(-1)
}

onMounted(() => {
    if (!token?.value) return router.push('/login')
})
</script>

<style scoped>

</style>