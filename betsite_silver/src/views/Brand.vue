<template>
    <div class="hidden sm:block relative flex-auto mx-[19px]  ">
        <div class="banner h-[280px] w-[956px] bg-[#1f2129]">
          <swiper :loop="true" :effect="'fade'" :pagination='{ "clickable": true }'
            :modules="[Autoplay, Pagination, Navigation, EffectFade]" class="mySwiper h-full w-full " :autoplay='{
              "delay": 2500,
              "disableOnInteraction": false,
            }'>
            <swiper-slide class="bg-[#101113]">
              <img src="@/assets/pc/Home/banner.png" alt="" class="w-full h-full ">
            </swiper-slide>
            <swiper-slide class="bg-[#101113]">
              <img src="@/assets/pc/Home/bbb.png" alt="" class="w-full h-full ">
            </swiper-slide>

          </swiper>
        </div>

        <div class="my-4 h-full  w-[956px]">
            <div class="border-b-[1px] border-[#e1d9d9] p-2 text-white text-[18px] ">全部</div>
            <div class="overflow-y-scroll w-full h-[600px] scrollbar-hide">
                <div class="h-[350px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic1.png" alt="" class="h-full w-full">
                </div>
                <div class="h-[300px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic2.png" alt="" class="h-full w-full">
                </div>
                <div class="h-[350px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic3.png" alt="" class="h-full w-full">
                </div>
                <div class="h-[350px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic4.jpg" alt="" class="h-full w-full  ">
                </div>
                <div class="h-[350px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic5.jpg" alt="" class="h-full w-full">
                </div>
                <div class="h-[320px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic6.jpg" alt="" class="h-full w-full object-cover">
                </div>
                <div class="h-[350px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic7.jpg" alt="" class="h-full w-full object-cover">
                </div>
                <div class="h-[320px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic8.png" alt="" class="h-full w-full object-cover">
                </div>
                <div class="h-[350px] w-full my-4 ">
                    <img src="@/assets/pc/brand/pic10.jpg" alt="" class="h-full w-full">
                </div>
            </div>
        </div>
    </div>

    <div class="block sm:hidden flex-auto">
        <div class="h-[50px] w-full text-gray-400 px-2 flex justify-between items-center bg-[#14171e] shadow-xl">
            <ChevronLeftIcon @click="goBack()" class="w-5 h-5 "></ChevronLeftIcon>
            <p class=" text-[17px]">博冠品牌赞助</p>
            <div></div>
        </div>
        <div class="w-full h-full px-[10px] my-4">
            <div class="w-full h-auto flex-col space-y-3 overflow-y-scroll" >
                <img src="@/assets/pc/brand/pic3.png" alt="" class="h-[200px] w-full ">
                <img src="@/assets/pc/brand/pic1.png" alt="" class="h-[200px] w-full ">
                <img src="@/assets/pc/brand/pic4.jpg" alt="" class="h-[200px] w-full ">
                <img src="@/assets/pc/brand/pic5.jpg" alt="" class="h-[200px] w-full ">
                <img src="@/assets/pc/brand/pic11.jpg" alt="" class="h-[200px] w-full ">
            </div>
        </div>
    </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AES from '@/utils/aes';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { getCurrentInstance } from 'vue';
import globaljs from '@/utils/global'
// import Swiper core and required modules
import SwiperCore, {Autoplay, Pagination, Navigation, EffectFade} from 'swiper';
import { ChevronLeftIcon,} from "@heroicons/vue/outline";
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = () => {
    router.go(-1);
}
</script> 

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

</style>