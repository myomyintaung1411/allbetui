<template>
  <div class="w-full h-full  relative sm:overflow-x-auto ">
    <Header class="hidden sm:block"></Header>
    <div class="relative  h-[calc(100vh_-_80px)]  sm:h-full
           
        mx-auto w-full sm:max-w-xl md:max-w-screen-md  lg:max-w-[1380px]  flex main
        sm:mt-6  ">
      <LeftSideBar class="hidden sm:block"></LeftSideBar>

      <router-view></router-view>
      <RightSideBar class="hidden sm:block"></RightSideBar>
      <BottomNavi class="sm:hidden"></BottomNavi>

    </div>
    <Footer class="hidden sm:block"></Footer>
    <div class="hidden sm:block fixed top-[110px] cursor-pointer  h-auto right-3 z-50">
      <div v-if="show_servie_long">
        <div class="h-[60px] w-[200px] mb-3">
          <img src="@/assets/pc/Home/phone.png" alt="" class="w-full h-full">
        </div>
        <div @click="goService()" class="h-[60px] w-[200px] mb-3">
          <img src="@/assets/pc/Home/service.png" alt="" class="w-full h-full">
        </div>
        <div @click="goDown()" class="h-[60px] w-[200px] mb-3">
          <img src="@/assets/pc/Home/app.png" alt="" class="w-full h-full">
        </div>
      </div>
      <div v-else>
        <div class="h-[60px] w-[80px] flex items-center justify-center mb-3 bg-black">
          <img src="@/assets/s_ph.png" alt="" class="w-auto h-[40px]">
        </div>
        <div @click="goService()" class="h-[60px] w-[80px] flex items-center justify-center mb-3 bg-black">
          <img src="@/assets/s_ser.png" alt="" class="w-auto h-[40px]">
        </div>
        <div @click="goDown()" class="h-[60px] w-[80px] flex items-center justify-center mb-3 bg-black">
          <img src="@/assets/s_q.png" alt="" class="w-auto h-[35px]">
        </div>
      </div>
      <div 
        class="text-white text-center tracking-widest text-[17px] cursor-pointer">
        <p class=" w-auto inline-block" @click="(show_servie_long = !show_servie_long)">{{ show_servie_long == true ? '收起' : '展开' }}</p>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import BottomNavi from "@/components/BottomNavi.vue";
import Header from "@/components/Header.vue";
import LeftSideBar from "../components/LeftSideBar.vue";
import RightSideBar from "../components/RightSideBar.vue";
import allApi from "@/network/allApi.js";
import userApi from "@/network/user.js";
import { useStore } from "vuex";
import Footer from '@/components/Footer.vue';
import AES from '@/utils/aes';
import {useRoute} from 'vue-router'
import global from '@/utils/global'
const store = useStore()
const userValue = computed(() => store.getters["user/USERINFO"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const getBaseData = ref(null)

const show_servie_long = ref(true)
const route = useRoute()
const marqueeText = () => {
  let data = {
    "type": 1
  }
  const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

  allApi.getMarqueeText({ data: data }).then((res) => {
    if (res.data.code == '1') {
      console.log("res of marquee text", res);
      store.commit('app/MarqueeData', res.data.data)
    }

  }).catch((e) => {
    console.log(e);
  })
}
const bannerImage = () => {
  let data = {}
  const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
  allApi.GetCarouselImages({ data: data }).then((res) => {
    if (res.data.code == '1') {
      console.log("res of banner image", res);
      store.commit('app/BannerImage', res.data.data)
    }

  }).catch((e) => {
    console.log(e);
  })
}

const goService = () => {
  //console.log("dddddddddddd");
  //console.log(userValue?.value);
  global.customerService()
}

const goDown = () => {
  if(getBaseData.value?.downloadLink) {
    window.open(getBaseData.value?.downloadLink)
  }
}

if (route?.query !== undefined && route.query?.inviteCode !== undefined) {
  const inviteCode = route.query.inviteCode;
  localStorage.setItem('inviteCode', inviteCode);
  // console.error(route.query.inviteCode + " route query from main.vue");
} 

const getBaseUrl = () => {
  let data = {}
    allApi.GetBaseSetting({ data: data }).then((res) => {
    if (res.data.code == '1') {
      console.log("res of getBaseUrl", res);
      store.commit('app/GeT_BaseData', res?.data?.data)
      getBaseData.value = res?.data?.data
    }

  }).catch((e) => {
    console.log(e);
  })
}
const getRankingData = () => {
  let data = {}
    allApi.GetRanking({ data: data }).then((res) => {
    if (res.data.code == '1') {
      console.log("res of get ranking data ****", res);
      store.commit('app/RankingData', res?.data?.data?.list)
      //getBaseData.value = res?.data?.data
    }

  }).catch((e) => {
    console.log(e);
  })
}


onMounted(() => {
  // if(!userValue?.value){
  //   global.getUserInfo()
  // }
  getRankingData()
  getBaseUrl()
  marqueeText()
  bannerImage()
})

</script>

<style scoped>
.main {
  @apply overflow-y-scroll sm:overflow-y-visible
}
</style>