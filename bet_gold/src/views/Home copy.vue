<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import userApi from "@/network/user.js";
import allApi from "@/network/allApi.js";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import globaljs from '@/utils/global'
import { Swiper, SwiperSlide } from "swiper/vue";
import AES from '@/utils/aes';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { getCurrentInstance } from 'vue';

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation, EffectFade
} from 'swiper';

import {
  ChevronDoubleRightIcon
} from "@heroicons/vue/outline";
import ModalDialog from '@/components/ModalDialog.vue';

const deg = ref(0);
const activeYen = ref(true)
const activeUSDT = ref(false)
const innerWidth = ref(0)
const router = useRouter()
const store = useStore()
const gameDialog = ref(false)
const user = computed(() => store.getters["user/LOGIN"]);//login data
const userValue = computed(() => store.getters["user/USERINFO"]); //user info data
const interval_ = ref(null)
const marquee = computed(() => store.getters["app/marqueeData"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const randomNum = ref(1020)

const instance = getCurrentInstance()
const activeTab = ref(1)

if (localStorage.getItem('tab')) {
  activeTab.value = localStorage.getItem('tab')
}

const moneyActive = (number) => {
  activeTab.value = number
  localStorage.setItem('tab', number)
}
const userDetail = () => {
  if (!token?.value) return router.push('/login')
  router.push('/userdetail')
}

//get random user from localstore
if (localStorage.getItem('random')) {
  randomNum.value = localStorage.getItem('random')
} else {
  generateRandom()
}



function generateRandom(min = 1000, max = 3000) {

  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor(rand * difference);

  // add with min value 
  rand = rand + min;
  randomNum.value = rand;
  localStorage.setItem('random', rand)
  //return rand;
}

function randonNumEverysec() {
  interval_.value = setInterval(() => {
    generateRandom()
    console.log("3 log second");
  }, 600000);
  // }
}

onBeforeUnmount(() => {
  clearInterval(interval_.value)
  interval_.value = null
})
//only withdraw when user level is >= 1 & is_set_phone = 1
const goUserInfo = (number) => {
  if (!token?.value) return router.push('/login')

  console.log("number", number);
  switch (number) {
    case 1:
      if (userValue?.value?.is_set_phone == 0) {

        instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
        setTimeout(() => {
          router.push('/setPhonenum')
        }, 1000);
        return
      }
      if (activeTab.value == 1) {
        router.push('/moneyDeposit')
      } else {
        router.push('/usdtDeposit')
      }
      break;
    case 2:
      router.push('/wash')
      break;
    case 3:
      if (userValue?.value?.is_set_phone == 0) {

        instance.proxy.$message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
        setTimeout(() => {
          router.push('/setPhonenum')
        }, 1000);
        return
      }


      if (activeTab.value == 1 && userValue?.value?.user_level < 1) {
        return instance.proxy.$message({ message: '您尚未到达取款等级', duration: 2 })
      }

      if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
        == 0) {
        router.push({ path: '/user/bindPhoneForWithdraw', query: { type: 'BANK' } })
      }

      if (activeTab.value == 1 && userValue?.value?.user_level >= 1 && userValue?.value?.is_set_phone == 1 && userValue?.value?.is_set_cash_password
        == 1) {
        router.push('/user/bindWithdrawPass')
      }
      //usdt withdrawal
      if (activeTab.value == 2 && userValue?.value?.is_add_usdt_info == 0) return instance.proxy.$message({ message: '请先添加USDT地址', duration: 2 })
      if (activeTab.value == 2 && userValue?.value?.is_set_phone == 1) {
        router.push({ path: '/user/bindPhoneForWithdraw', query: { type: 'USDT' } })
      }
      break;
    case 4:
      router.push('/user/usdtBuy')
      break;
    case 5:
      router.push('/user/usdtSell')
      break;

    default:
      break;
  }
}

const goService = () => {
  globaljs.customerService()

}

const getUserInfo = () => {
  if (token?.value) {
    let data = {
      "player": user?.value?.info?.username,
    }

    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)


    userApi.GetUserInfo({ data: data, key: user?.value?.key }).then((res) => {
      if (res.data.code == '1') {
        console.log("res of userinfo data", res);
        store.commit('user/UserInfo', res.data.data)
      }
    }).catch((e) => {
      console.log(e);
    })
  }
}

const reload = () => {
  if (!token?.value) router.push('/login')
  deg.value += 360;
  getUserInfo()
}


const GetGameUrl = (number) => {
  if (token?.value) {
    let data = {
      "player": user?.value?.info?.username,
      "language": "",
      "gameHall": number || '',
      "appType": innerWidth.value > 640 ? 6 : 3,
      "tableName": "",
      "returnUrl": ""
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
    allApi.GetGameUrl({ data: data }).then((res) => {
      if (res.data.code == '1') {
        console.log("res of GetGameUrl data", res);
        window.open(res.data.data.gameLoginUrl)
      }
    }).catch((e) => {

      console.log(e);
    })
  }
}

const loginTrail = () => {
  let data = {
    "targetUrl": "",
    "language": "",
    "returnUrl": "https://www.returnback.com/hn"
  }
  const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
  userApi.LoginTrial({ data: data }).then((res) => {
    if (res.data.code == '1') {
      console.log("loginTrail", res);
      window.open(res.data.data.gameLoginUrl)
    }

  }).catch((e) => {
    console.log(e);
    instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
  })
}

const demoPlay = () => {
  loginTrail()
  gameDialog.value = false
}

const goGame = (number) => {
  if (user?.value) {
    GetGameUrl(number)
  } else {
    gameDialog.value = true
  }
}

onMounted(() => {
  randonNumEverysec()
  //generateRandom()
  innerWidth.value = window.innerWidth
  getUserInfo()
})

const goReg = () => {
  router.push('/register')
}
const goLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class=" sm:hidden overflow-y-auto relative home_bg">
    <div class="w-full px-3">
      <div class="w-full flex justify-between items-center space-x-4 p-1 header_bg">
        <div class="">
          <img src="@/assets/mobile/home/logo.png" alt="" class=" w-[90px]  ">
        </div>
        <div class="w-[30%]  ">
          <img src="@/assets/mobile/home/head-b.png" alt="" class="w-full">
        </div>
        <div @click="goService()" class="w-[13%] pr-3">
          <img src="@/assets/mobile/home/service.png" alt="" class="h-6 w-8">
        </div>
      </div>
    </div>
    <div v-if="!token" class="px-3 py-2 w-full flex items-center justify-between">
      <div
        class="w-[49%] h-[65px] flex justify-center items-center  bg-gradient-to-tr from-[#1a0c1b] via-[#1a0c1b] to-[#766c76]"
        @click="goLogin()">
        <img src="@/assets/pc/Home/txt2.png" alt="" class="w-11 h-5">
      </div>
      <div class="w-[49%] h-[65px] relative bg-gradient-to-tl from-[#1a0c1b] via-[#1a0c1b] to-[#766c76]"
        @click="goReg()">
        <!-- <img src="@/assets/mobile/home/btn2.jpg" alt="" class="w-full">
        <div class="absolute right-0 top-0">
          <img src="@/assets/mobile/home/btn33.png" alt="" class="w-[60px] h-full">
        </div> -->
        <div class="flex flex-col justify-center items-center pt-2">
          <img src="@/assets/mobile/home/silver_logo.png" alt="" class="w-[6rem] h-6">
          <img src="@/assets/mobile/home/silver_reg.png" alt="" class="w-auto h-auto">
        </div>

        <div class="absolute right-0 top-0">
          <img src="@/assets/mobile/home/btn33.png" alt="" class="w-[60px] h-full">
        </div>
      </div>
    </div>
    <section v-if="token" class="px-3 w-full py-1  relative">
      <div class="user_bg bg-gradient-to-r from-[#1e101f] to-[#655b64] relative flex flex-col  py-1  px-3">
        <div>
          <div class=" first-letter:text-red-700 tracking-[3px] text-[#cac8c8]">{{ userValue?.username }}</div>
          <div class="flex relative items-center space-x-3">
            <div class="w-16 relative h-7 ">
              <img src="@/assets/mobile/user/level.png" alt="" class="w-full h-5">
              <div class=" text-right absolute top-0 right-1 w-full h-7 text-[#5e3f15] text-[13px] ">
                {{ userValue?.user_level }}</div>
            </div>
            <div class="-mt-[6px]">
              <img src="@/assets/mobile/user/gurad.png" alt="" class="w-4 h-4">
            </div>
          </div>
        </div>
        <div class="absolute right-3  bg__money  top-3 flex items-center  ">
          <div class="w-full flex items-center justify-center space-x-6">
            <div @click="moneyActive(1)" class="">
              <img v-if="(activeTab == 1)" src="@/assets/mobile/user/yena.png" alt="" class="w-8 h-8">
              <img v-else src="@/assets/mobile/user/yen.png" alt="" class="w-8 h-8">
            </div>
            <div class="h-4 w-[2px] bg-[#585757]">

            </div>
            <div @click="moneyActive(2)">
              <img v-if="(activeTab == 2)" src="@/assets/mobile/user/usdta.png" alt="" class="w-8 h-8">
              <img v-else src="@/assets/mobile/user/usdt.png" alt="" class="w-8 h-8">
            </div>
          </div>

        </div>
        <div class="flex items-center relative py-1 mt-0 px-1 ">
          <div class="flex items-center ">
            <div v-if="activeTab == 1" class="flex justify-start items-center">
              <img src="@/assets/mobile/user/money.png" alt="" class="w-5 h-5" />
              <div class="text-base pt-1 px-2 text-white text-[13px]">{{ userValue?.balance || 0 }}</div>
            </div>
            <div v-else class="flex justify-start items-center">
              <img src="@/assets/mobile/user/coin.png" alt="" class="w-5 h-5">
              <div class="text-base pt-1 px-2 text-white text-[13px]">{{ userValue?.coin || 0 }}</div>
            </div>
            
            <div class="text-base pt-1 px-7">
              <img @click="reload()" src="@/assets/mobile/user/load.png" alt="" class="w-4 h-4 transition"
                v-bind:style="{ transform: `rotate(${deg}deg)` }">
            </div>
          </div>
          <div @click="userDetail()" class="absolute right-0  flex justify-start items-center space-x-1">
            <img src="@/assets/mobile/user/more.png" alt="" class="w-8 h-3">
            <img src="@/assets/mobile/user/rightArrow.png" alt="" class="w-2 h-4">
          </div>
        </div>
        <div class="">
          <img src="@/assets/mobile/home/line.png" alt="" class="w-[130px]">
        </div>

        <section class="px-4 w-full pt-2 relative flex items-center"
          :class="activeTab == 1 ? ' justify-around' : 'justify-between'">
          <div @click="goUserInfo(1)" class="flex flex-col items-center justify-center">
            <img src="@/assets/mobile/home/l11.png" alt="" class="w-auto h-[38px]">
          </div>
          <div @click="goUserInfo(2)" class="flex flex-col items-center justify-center">
            <img src="@/assets/mobile/home/l22.png" alt="" class="w-auto h-[38px]">
          </div>
          <div @click="goUserInfo(3)" class="flex flex-col items-center justify-center">
            <img src="@/assets/mobile/home/l33.png" alt="" class="w-auto h-[38px]">
          </div>
          <div @click="goUserInfo(4)" v-if="(activeTab == 2)" class="flex flex-col items-center justify-center">
            <img src="@/assets/mobile/home/l44.png" alt="" class="w-auto h-[38px]">
          </div>
          <div @click="goUserInfo(5)" v-if="(activeTab == 2)" class="flex flex-col items-center justify-center">
            <img src="@/assets/mobile/home/l55.png" alt="" class="w-auto h-[38px]">
          </div>
        </section>
      </div>
    </section>

    <div class="py-1 mt-2 px-3 w-full h-[180px]">
      <swiper :loop="true" :effect="'fade'" :modules="[Autoplay, EffectFade]" class="mySwiper h-full w-full " :autoplay='{
        "delay": 2500,
        "disableOnInteraction": false,
      }'>
        <swiper-slide class="bg-[#101113]">
          <img src="@/assets/mobile/home/banner.png" alt="" class="w-full h-full">
        </swiper-slide>
        <swiper-slide class="bg-[#101113]">
          <img src="@/assets/mobile/coporation/1111.webp" alt="" class="w-full h-full">
        </swiper-slide>
        <swiper-slide class="bg-[#101113]">
          <img src="@/assets/mobile/coporation/3333.webp" alt="" class="w-full h-full">
        </swiper-slide>
        <swiper-slide class="bg-[#101113]">
          <img src="@/assets/mobile/coporation/4444.webp" alt="" class="w-full h-full">
        </swiper-slide>
        <swiper-slide class="bg-[#101113]">
          <img src="@/assets/mobile/coporation/6666.png" alt="" class="w-full h-full">
        </swiper-slide>
      </swiper>
    </div>

    <div class=" px-5  my-1  ">
      <router-link to="/notice" class="flex h-full w-full justify-between items-center">
        <div class="pr-2">
          <img src="@/assets/mobile/home/speaker.png" alt="" class="h-4 w-6">
        </div>
        <Vue3Marquee class="w-full text-[13px]  tracking-[3px]">
          {{ marquee?.content }}
        </Vue3Marquee>
        <img src="@/assets/mobile/user/gd.png" alt="" class="w-16 h-6 ml-2">
      </router-link>
    </div>

    <div @click="goGame(100)" class=" px-2 pt-1 relative">
      <img src="@/assets/mobile/home/banner2.png" alt="" class="w-full h-auto  ">
      <div class="h-[40px] text-center absolute text-[#d7d4d4] left-5 bottom-1 w-[100px]   ">
        <div class="flex items-center">
          <img src="@/assets/mobile/home/persontxt.png" alt="" class="w-[80px] h-4">
          <p class="text-[12px] text-[#d04c44] px-1 pt-[6px]">{{ randomNum }}</p>
        </div>
      </div>
    </div>

    <div class="px-2 w-full flex items-center justify-between">
      <div @click="goGame(102)">
        <img src="@/assets/mobile/home/girl1.png" alt="" class="w-auto h-auto">
      </div>
      <div @click="goGame(103)">
        <img src="@/assets/mobile/home/girl2.png" alt="" class="w-auto h-auto">
      </div>
    </div>

    <div class="pl-3 w-full flex items-center justify-between pt-1.5 pb-3 bg-[#14171e]">
      <img src="@/assets/mobile/home/fire.png" alt="" class="w-[6rem] h-5">
      <img src="@/assets/mobile/home/fire1.png" alt="" class="w-[9rem] h-3">
    </div>

    <section class="pl-2 pb-2 w-full flex items-center justify-end bg-[#14171e]">
      <div @click="goGame()" class="w-[34%] h-auto">
        <img src="@/assets/mobile/home/1.png" alt="" class="w-full h-auto ">
      </div>
      <div @click="goGame()" class="w-[34%] h-auto">
        <img src="@/assets/mobile/home/2.png" alt="" class="w-full h-auto ">
      </div>
      <div @click="goGame()" class="w-[34%] h-auto">
        <img src="@/assets/mobile/home/3.png" alt="" class="w-full h-auto ">
      </div>
    </section>

    <!-- <router-link to="/ranking">
      <div class="w-full px-3 py-3 relative">
        <img src="@/assets/mobile/home/1111.png" alt="" class="w-full h-[40px]">
        <div class="absolute w-full h-[40px]   bottom-3 right-3 flex justify-end items-center px-4 ">
          <img src="@/assets/mobile/home/arrow.png" alt="" class="w-4 h-4">
        </div>
      </div>
    </router-link> -->
    <router-link to="/ranking ">
      <div class="flex justify-between items-center px-2 mx-2 bg-gradient-to-r from-[#190b1a] to-[#4e434e]">
        <img src="@/assets/mobile/home/1111.png" alt="" class="w-[110px] h-[40px]">
        <img src="@/assets/mobile/home/arrow.png" alt="" class="w-3 h-3">
      </div>
    </router-link>

    <section class="w-full px-3 py-1 relative bg-[#05172f]">
      <div class="flex justify-center items-center my-2">
        <img src="@/assets/mobile/home/ranking.png" alt="" class="w-[100px] h-full">
      </div>
      <div class="flex items-center py-2 w-full justify-between px-3 ">
        <div class="w-[28%] relative mt-5">
          <img src="@/assets/mobile/home/rank2.png" alt="" class="w-full h-[90px]">
          <div class="absolute w-full  h-[40px] bottom-0 text-center text-black text-[11px]">
            <p class=" tracking-wider">m***01</p>
            <p class=" tracking-wider ">¥ 436,700</p>
          </div>
        </div>
        <div class="w-[38%] relative">
          <img src="@/assets/mobile/home/rank1.png" alt="" class="w-full h-[110px]">
          <div class="absolute w-full  h-[40px] bottom-2 text-center text-black text-sm">
            <p class=" tracking-wider">m***i3</p>
            <p class=" tracking-wider ">￥511 , 355</p>
          </div>
        </div>
        <div class="w-[28%] relative mt-5">
          <img src="@/assets/mobile/home/rank3.png" alt="" class="w-full h-[90px]">
          <div class="absolute w-full  h-[40px] bottom-0 text-center text-black text-[11px]">
            <p class=" tracking-wider">c***ru</p>
            <p class=" tracking-wider ">￥333 , 655</p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full px-3 pt-1 pb-2 relative flex justify-between items-center bg-[#14171e]">
      <div class="flex justify-between items-center space-x-6">
        <img src="@/assets/mobile/home/2222.png" alt="" class="w-24 h-6">
        <img src="@/assets/mobile/home/3333.png" alt="" class="w-12 h-3">
        <img src="@/assets/mobile/home/4444.png" alt="" class="w-10 h-3">
      </div>
      <img src="@/assets/mobile/home/arrow.png" alt="" class="w-3 h-3">
    </section>

    <section class="w-full px-3 bg-gradient-to-r from-[#363636] to-[#141414]">
      <swiper :loop="true" :modules="[Autoplay]" :slides-per-view="4" :space-between="50" :initial-slide="1"
        class="mySwiper h-[55px] w-full justify-center mx-auto" :autoplay='{
          "delay": 2500,
          "disableOnInteraction": false,
        }'>
        <swiper-slide class=" h-[55px] flex flex-col items-center justify-center    ">
          <div class="flex flex-col justify-center items-center h-full  whitespace-nowrap">
            <img src="@/assets/c1.webp" alt="" class="h-auto w-[40px]">
            <p class="text-[10px] text-[#7e7e7e]">阿贾克斯</p>
          </div>
        </swiper-slide>
        <swiper-slide class=" h-[55px] flex flex-col items-center justify-center    ">
          <div class="flex flex-col justify-center items-center h-full  whitespace-nowrap">
            <img src="@/assets/c2.webp" alt="" class="h-auto w-[40px]">
            <p class="text-[10px] text-[#7e7e7e]">罗马</p>
          </div>
        </swiper-slide>
        <swiper-slide class=" h-[55px] flex flex-col items-center justify-center    ">
          <div class="flex flex-col justify-center items-center h-full  whitespace-nowrap">
            <img src="@/assets/c3.webp" alt="" class="h-auto w-[40px]">
            <p class="text-[10px] text-[#7e7e7e]">弗鲁米嫩塞</p>
          </div>
        </swiper-slide>
        <swiper-slide class=" h-[55px] flex flex-col items-center justify-center    ">
          <div class="flex flex-col justify-center items-center h-full  whitespace-nowrap">
            <img src="@/assets/c4.webp" alt="" class="h-auto w-[40px]">
            <p class="text-[10px] text-[#7e7e7e]">维冈竞技</p>
          </div>
        </swiper-slide>
        <swiper-slide class=" h-[55px] flex flex-col items-center justify-center    ">
          <div class="flex flex-col justify-center items-center h-full  whitespace-nowrap">
            <img src="@/assets/c5.webp" alt="" class="h-auto w-[40px]">
            <p class="text-[10px] text-[#7e7e7e]">QPR</p>
          </div>
        </swiper-slide>
        <swiper-slide class=" h-[55px] flex flex-col items-center justify-center    ">
          <div class="flex flex-col justify-center items-center h-full  whitespace-nowrap">
            <img src="@/assets/c6.webp" alt="" class="h-auto w-[40px]">
            <p class="text-[10px] text-[#7e7e7e]">ONE冠名赛</p>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <ModalDialog :show="gameDialog" @close="gameDialog = false">
      <div class="w-[90vw] sm:w-[500px]  py-10 text-white  ">
        <p class="text-center">试玩的额度不能用于取款哦</p>
        <div class="flex pt-5 sm:py-10 items-center w-full  justify-evenly px-3">
          <router-link to="/login" class="btn flex items-center justify-center 
          btn-outline  h-[50px]  border border-solid 
                              border-[#d7d4d4] cursor-pointer px-12  whitespace-nowrap
                              ">
            登录
          </router-link>
          <div @click="demoPlay" class="btn flex cursor-pointer px-12 whitespace-nowrap 
           items-center justify-center text-[#272c33] text-center  btn-primary  h-[50px]  
              ">
            立即试玩
          </div>
        </div>
      </div>
    </ModalDialog>
  </div>

  <div class="hidden sm:block relative flex-auto mx-[16px]">
    <div class="main">
      <div class="main-content w-full">
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
            <swiper-slide class="bg-[#101113]">
              <img src="@/assets/pc/Home/ccc.png" alt="" class="w-full h-full ">
            </swiper-slide>

          </swiper>
        </div>
        <section class="flex justify-between items-center mt-4">
          <div @click="goGame(100)" class="relative cursor-pointer">
            <div class=" overflow-hidden  h-[167px] w-[474px] relative">
              <img src="@/assets/pc/Home/111.png" alt="" class="w-full h-full">
              <div class="absolute bottom-2 w-[140px] left-2">
                <div class="flex items-center">
                  <!-- <img src="@/assets/pc/Home/persontxt.png" alt="" class="h-4"> -->
                  <img src="@/assets/pc/Home/person.png" alt="" class="h-4 w-4">
                  <p class="pt-[6px] text-[12px] pl-2">在线人数： 2154</p>
                </div>
              </div>
            </div>
          </div>
          <div @click="goGame(100)" class="relative cursor-pointer">
            <div class=" relative overflow-hidden h-[170px] w-[474px]">
              <img src="@/assets/pc/Home/222.png" alt="" class="w-full h-full">
              <div class="absolute bottom-0 h-[60px]    left-2 ">
                <img src="@/assets/pc/Home/txt11.png" alt="" class="h-[15px] w-auto">
                <div class="flex items-center absolute bottom-2">
                  <img src="@/assets/pc/Home/person.png" alt="" class="h-4 w-4">
                  <p class="pt-[6px] text-[12px] pl-2">在线人数： 3010</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="flex justify-start items-center mt-4">
          <div @click="goGame(100)" class="relative cursor-pointer">
            <div class="  rounded h-[170px] w-[485px] relative">
              <img src="@/assets/pc/Home/11.png" alt="" class="w-full h-full">
              <div class="absolute bottom-0 h-[60px]    left-2 ">
                <img src="@/assets/pc/Home/txt22.png" alt="" class="h-[15px] w-auto">
                <div class="flex items-center absolute bottom-2">
                  <img src="@/assets/pc/Home/person.png" alt="" class="h-4 w-4">
                  <p class="pt-[6px] text-[12px] pl-2">在线人数： 535</p>
                </div>
              </div>
            </div>
          </div>
          <div @click="goGame(103)" class="relative cursor-pointer">
            <div class=" relative overflow-hidden pt-3 h-[168px] w-[470px]">
              <img src="@/assets/pc/Home/22.png" alt="" class="w-full h-full">
              <div class="absolute bottom-0 h-[60px]    left-2 ">
                <img src="@/assets/pc/Home/txt33.png" alt="" class="h-[15px] w-auto">
                <div class="flex items-center absolute bottom-2">
                  <img src="@/assets/pc/Home/person.png" alt="" class="h-4 w-4">
                  <p class="pt-[6px] text-[12px] pl-2">在线人数： 2133</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex justify-between items-center mt-4">
          <div @click="goGame(104)" class="relative cursor-pointer">
            <div class=" relative overflow-hidden  h-[170px] w-[474px]">
              <img src="@/assets/pc/Home/33.png" alt="" class="w-full h-full">
              <div class="absolute bottom-0 h-[60px] left-2 ">
                <img src="@/assets/pc/Home/txt44.png" alt="" class="h-[15px] w-auto">
                <div class="flex items-center absolute bottom-2">
                  <img src="@/assets/pc/Home/person.png" alt="" class="h-4 w-4">
                  <p class="pt-[6px] text-[12px] pl-2">在线人数： 753</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div @click="goGame(106)" class=" cursor-pointer relative overflow-hidden  h-[170px] w-[474px]">
              <img src="@/assets/pc/Home/44.png" alt="" class="w-full h-full">
              <div class="absolute bottom-0 h-[60px]    left-2 ">
                <img src="@/assets/pc/Home/txt55.png" alt="" class="h-[15px] w-auto">
                <div class="flex items-center absolute bottom-2">
                  <img src="@/assets/pc/Home/person.png" alt="" class="h-4 w-4">
                  <p class="pt-[6px] text-[12px] pl-2">在线人数： 546</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  </div>
</template>

<style scoped>
.home_bg {
  height: 100%;
  width: 100%;
  background-color: #14171e;
}

.header_bg {
  background-image: url(@/assets/pc/Home/headerBg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.more {
  color: #4a4a4a;
  border: .005rem solid #4a4a4a;
  text-align: center;

}
</style>

<style>
.swiper-pagination-bullet {
  background-color: #b95c13;
}

.btn-primary {
  background-image: linear-gradient(#aca8a8, #fef5f6, #dcd8d7);
}

.user_bg {
  height: 155px;
  width: 100%;
}
</style>