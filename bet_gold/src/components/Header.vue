<template>
    <div class="h-[86px] w-full bg-gradient-to-r from-[#02162f] to-[#242323]">
        <div class="mx-auto sm:max-w-xl md:max-w-screen-md h-full lg:max-w-screen-xl  flex">
            <div class="h-full flex items-center w-[525px] relative ">
                <div class="h-[73px] w-[413px] ">
                    <a href="/home" class="flex space-x-2 items-center h-full w-full">
                        <img src="@/assets/pc/Home/logo.png" alt="" class="w-auto h-20 object-cover">
                        <div class="flex-col items-center space-y-1 w-full h-auto">
                            <div class="flex items-center">
                                <img src="@/assets/pc/Home/logoTitle2.png" alt="" class="w-[28px] h-[24px] object-cover" >
                                <img src="@/assets/pc/Home/logoTitle1.png" alt="" class="w-[24px] h-[24px] object-cover" >
                            </div>
                            <img src="@/assets/pc/Home/logoWord.png" alt="" class="w-auto h-[10px] object-cover" >
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex items-center justify-between  h-full ">
                <div @click="noticeDialog = true" class="h-full flex items-center w-[365px] whitespace-nowrap cursor-pointer
                    text-[#c1c1c1] text-[12px] mt-[2px] mr-5
                        ">
                    <Vue3Marquee class="w-full " :duration="30" :pauseOnHover="true">
                        {{ marquee?.content }}
                    </Vue3Marquee>
                </div>
                <section class="w-[390px]  club-hot-search">
                    <div class="flex items-center justify-between ">
                        <div class=" relative h-full w-[65px] pr-[10px] text-[12px] ">
                            <img src="@/assets/pc/Home/lebu.png" alt="" class="w-full h-full">
                            <img src="@/assets/pc/Home/headrs.png" alt="" class="w-auto h-4 mt-1">
                        </div>
                        <div class="relative whitespace-nowrap text-sm w-full flex items-center">
                            <img src="@/assets/pc/Home/line.png" alt="" class="h-7">
                            <div class="w-[310px] flex items-center pl-3   py-1 text-[#c1c1c1] h-[40px] ">
                                <swiper :loop="true" direction="vertical" :modules="[Autoplay]"
                                    class="mySwiper h-full w-full text-sm mt-3" :autoplay='{
                                        "delay": 2500,
                                        "disableOnInteraction": false,
                                    }'>
                                    <swiper-slide class="truncate">好运来了</swiper-slide>
                                    <swiper-slide class="truncate">今天冲不上去了停留在30个达不溜，就这样吧</swiper-slide>
                                    <swiper-slide class="truncate">富矿宝石 2000倍 一下爆了80万</swiper-slide>
                                </swiper>
                            </div>
                            <img src="@/assets/pc/Home/arrow.png" alt="" class="w-auto h-3">
                        </div>
                    </div>
                </section>

            </div>
            <div class="flex items-center space-x-10 h-full ml-3">
                <div class="bookmark cursor-pointer h-full flex justify-center items-center w-16" title="收藏本站" >
                    <img @click="bookMark" src="@/assets/pc/Home/bookmark.png" alt="" class="w-auto h-12 ">
                </div>
                <div class="flex items-center justify-center h-full ">
                    <div class="h-10 w-10">
                        <img @click="goService()"  src="@/assets/pc/Home/kefu.png" alt="" class="w-auto h-auto mt-1.5">
                    </div>
                </div>
            </div>
        </div>

        <!-- dialog -->
        <NotCloseDialog :show="noticeDialog" @close="noticeDialog = false">
            <div class="w-[500px] min-w-[300px]   py-10 text-white px-3  ">
                <p class="text-center text-xl">{{marquee?.title}}</p>
                <div class="w-full  py-3 text-center">
                    <p class="text-sm text-[#7e7e7e] break-words leading-7">{{marquee?.content}}</p>

                </div>

                <div class="flex pt-5 items-center w-full  justify-evenly px-3">

                    <div @click="noticeDialog = false" class="btn flex cursor-pointer px-16 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
                        确认
                    </div>
                </div>
            </div>
        </NotCloseDialog>
    </div>


</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import NoticeMsg from "@/utils/alert";
import NotCloseDialog from "@/components/NotCloseDialog.vue";
import globaljs from '@/utils/global'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, EffectCube, EffectFade
} from 'swiper';
import { computed, ref } from 'vue'

// Import Swiper styles
import {
    ChevronDoubleRightIcon
} from "@heroicons/vue/outline";

import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const store = useStore()
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);

const noticeDialog = ref(false)
const marquee = computed(() => store.getters["app/marqueeData"]);


const bookMark = () => {
    return instance.proxy.$message({ message: '加入收藏失败，请使用Ctrl+D进行添加', duration: 2 })
}

const goService = () => {
    globaljs.customerService()
}

</script>

<style scoped>
.club-hot-search {
    margin: 17px 0 10px 0;
    padding: 0 9px;
    height: 45px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
}
</style>