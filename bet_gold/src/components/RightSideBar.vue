<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import NoticeMsg from "@/utils/alert";
import {ref} from 'vue'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, EffectCube, EffectFade
} from 'swiper';
import { useRouter } from 'vue-router';
import {getCurrentInstance} from 'vue';

const activeTab = ref(0)

const ranking = ref([
    {
    id:'4',
    username:'c***23',
    money:'323 , 565',
  },
    {
    id:'5',
    username:'m***52',
    money:'311 , 565',
  },
    {
    id:'6',
    username:'r***73',
    money:'310 , 065',
  },
    {
    id:'7',
    username:'s***36',
    money:'300 , 786',
  },
    {
    id:'8',
    username:'d***27',
    money:'299 , 988',
  },
    {
    id:'9',
    username:'r***96',
    money:'298 , 760',
  },
    {
    id:'10',
    username:'g***37',
    money:'289 , 760',
  },
    {
    id:'11',
    username:'j***07',
    money:'279 , 760',
  },
    {
    id:'12',
    username:'w***24',
    money:'265 , 760',
  },
    {
    id:'13',
    username:'h***28',
    money:'258 , 890',
  },
    {
    id:'14',
    username:'b***34',
    money:'238 , 390',
  },
    {
    id:'15',
    username:'n***34',
    money:'222 , 890',
  },
    {
    id:'16',
    username:'o***54',
    money:'218 , 698',
  },
    {
    id:'17',
    username:'p***76',
    money:'208 , 890',
  },
    {
    id:'18',
    username:'w***64',
    money:'198 , 856',
  },
])
const ranking2 = ref([
    {
    id:'4',
    username:'a***11',
    money:'354 , 503',
  },
    {
    id:'5',
    username:'i***52',
    money:'334 , 603',
  },
    {
    id:'6',
    username:'e***34',
    money:'314 , 812',
  },
    {
    id:'7',
    username:'h***7g',
    money:'301 , 786',
  },
    {
    id:'8',
    username:'c***tw',
    money:'299 , 873',
  },
    {
    id:'9',
    username:'w***4a',
    money:'287 , 873',
  },
    {
    id:'10',
    username:'5***rw',
    money:'276 , 873',
  },
    {
    id:'11',
    username:'w***89',
    money:'266 , 573',
  },
    {
    id:'12',
    username:'a***24',
    money:'248 , 573',
  },
    {
    id:'13',
    username:'h***28',
    money:'232 , 473',
  },
    {
    id:'14',
    username:'r***op',
    money:'222 , 890',
  },
    {
    id:'15',
    username:'n***34',
    money:'212 , 009',
  },
    {
    id:'16',
    username:'l***54',
    money:'200 , 435',
  },
    {
    id:'17',
    username:'g***76',
    money:'198 , 446',
  },
    {
    id:'18',
    username:'w***ut',
    money:'196 , 846',
  },
  
])
const ranking3 = ref([
    {
    id:'4',
    username:'y***12',
    money:'441 , 365',
  },
    {
    id:'5',
    username:'v***q2',
    money:'410 , 523',
  },
    {
    id:'6',
    username:'k***re',
    money:'398 , 125',
  },
    {
    id:'7',
    username:'g***7q',
    money:'367 , 470',
  },
    {
    id:'8',
    username:'r***tq',
    money:'333 , 108',
  },
    {
    id:'9',
    username:'g***4b',
    money:'301 , 000',
  },
    {
    id:'10',
    username:'t***rs',
    money:'297 , 456',
  },
    {
    id:'11',
    username:'h***88',
    money:'268 , 470',
  },
    {
    id:'12',
    username:'l***20',
    money:'240 , 780',
  },
    {
    id:'13',
    username:'k***80',
    money:'231 , 784',
  },
    {
    id:'14',
    username:'z***ow',
    money:'210 , 328',
  },
    {
    id:'15',
    username:'s***34',
    money:'202 , 169',
  },
    {
    id:'16',
    username:'e***fo',
    money:'198 , 100',
  },
    {
    id:'17',
    username:'y***02',
    money:'180 , 785',
  },
    {
    id:'18',
    username:'b***cx',
    money:'170 , 483',
  },
  
])
const instance = getCurrentInstance()
const router = useRouter()

const rightBtn = () => {
    return instance.proxy.$message({message: '该功能正在维护，敬请期待更劲爆的晒单方式', duration:2})
}

const Tabclick = (number) => {
    activeTab.value = number
}

const goVip = () => {
    router.push('/pc/vip')
}

</script>
    
<template>
    <div class="h-full w-[212px] min-w-[212px] flex flex-col pr-3">
        <div class="">
          <router-link to="/brand">
            <div class="mb-1 flex justify-start space-x-2 px-3 items-center bg_gradient">
                <img src="@/assets/pc/Home/trust.png" alt="" class="w-[60px] h-[60px] mt-4">
                <img src="@/assets/pc/Home/trust1.png" alt="" class="w-[110px] h-[40px] mt-2">
            </div>
          </router-link>

            <div @click="goVip" class="h-[75px] pl-5 w-full cursor-pointer flex justify-start items-center space-x-1 bg_gradient">
                <img src="@/assets/pc/Home/viptrust.png" alt="" class="w-[50px] h-[60px] mt-4 mr-2">
                <img src="@/assets/pc/Home/viptrust1.png" alt="" class="w-[110px] h-[40px]">
            </div>
            <router-link to="/upgrade">
                <div class="h-[80px] mb-3 w-full mt-1 bg_gradient">
                    <div class="w-full flex items-center py-2  text-[#7e7e7e]">
                        <img src="https://344front.jianmeis.com/cdn/344a78FW2/assets/img/advance-superman2.aad19a21.png_.webp" alt="" class="w-16">
                        <p class="px-1 text-[12px]">每周一更新星级</p>
                        <p class=" text-[12px] text-[#ffa43c]">升级Lv.1</p>
                        
                    </div>
                </div>
            </router-link>
        </div>
        <section class="h-[620px] text-sm relative rounded-t-lg bg-[#1f2129]">
          <img src="@/assets/pc/Home/rankt.png" alt="" >
            <div class="top-wanner ">
                <div class="tab flex  justify-between items-center mb-3 px-2 pt-4 text-[#7e7e7e] cursor-pointer">
                  
                    <p @click="Tabclick(0)"  :class="(activeTab == 0) ? 'text-[#c1c1c1]' : ''">今日</p>
                    <p @click="Tabclick(1)" :class="(activeTab == 1) ? 'text-[#c1c1c1]' : ''">昨日</p>
                    <p @click="Tabclick(2)" :class="(activeTab == 2) ? 'text-[#c1c1c1]' : ''">前日</p>
                </div>
            </div>
            <div class="content h-[385px] relative w-full">
                <div class="table-count-down h-[385px] ">
                    <div class="pr-[6px] top3">
                        <div class="flex justify-start items-center space-x-2 data-row mx-1" style="transition: is 1s;">
                          <div class="flex relative w-10">
                            <span class="rank-icon rank-1"></span>
                            <span class="absolute -top-1 left-[1.1rem] text-black font-bold ">1</span>
                          </div>
                          <div class="flex  test-xs space-x-4">
                              <span v-if="(activeTab == 0)">m***i3</span>
                              <span v-if="(activeTab == 1)">c***y4</span>
                              <span v-if="(activeTab == 2)">d***54</span>
                              <span v-if="(activeTab == 0)"> ¥ 511 , 355</span>
                              <span v-if="(activeTab == 1)"> ¥ 486 , 740</span>
                              <span v-if="(activeTab == 2)"> ¥ 542 , 154</span>
                          </div>
                        </div>

                        <div class="flex justify-start items-center space-x-2 data-row mx-1" style="transition: is 1s;">
                          <div class="flex relative w-10">
                            <span class="rank-icon rank-2"></span>
                            <span class="absolute -top-1 left-[1.1rem] text-black font-bold ">2</span>
                          </div>
                          <div class="flex test-xs space-x-4">
                              <span v-if="(activeTab == 0)">c***0z</span>
                              <span v-if="(activeTab == 1)">c***y4</span>
                              <span v-if="(activeTab == 2)">c***wu</span>
                              <span v-if="(activeTab == 0)"> ¥ 441 , 655</span>
                              <span v-if="(activeTab == 1)"> ¥ 461 , 040</span>
                              <span v-if="(activeTab == 2)"> ¥ 506 , 532</span>
                          </div>
                        </div>

                        <div class="flex justify-start items-center space-x-2 data-row mx-1" style="transition: is 1s;">
                          <div class="flex relative w-10">
                            <span class="rank-icon rank-3"></span>
                            <span class="absolute -top-1 left-[1.1rem] text-black font-bold ">3</span>
                          </div>
                          <div class="flex  test-xs space-x-4">
                              <span v-if="(activeTab == 0)">c***0z</span>
                              <span v-if="(activeTab == 1)">c***y4</span>
                              <span v-if="(activeTab == 2)">c***wu</span>
                              <span v-if="(activeTab == 0)"> ¥ 423 , 185</span>
                              <span v-if="(activeTab == 1)"> ¥ 429 , 888</span>
                              <span v-if="(activeTab == 2)"> ¥ 486 , 730</span>
                          </div>
                        </div>
                    </div>
                    <div class="table-data flex w-full h-full relative text-center">
                        <div class="header"></div>
                        <div class="table-body  relative overflow-hidden flex-auto">
                            <div v-if="(activeTab == 0)" class="absolute left-0 right-0 top-0 h-full ">
                                <swiper :loop="true" direction="vertical" :modules="[Autoplay]" :slides-per-view="10"
                                    class="mySwiper h-full   w-full  text-base" :autoplay='{
                                      "delay": 2000,
                                      "disableOnInteraction": false, 
                                    }'>
                                    <swiper-slide v-for="data in ranking " :key="data.id" class="data-row bg-transparent">
                                        <div :key="data.id" class="flex justify-between space-x-1  data-row ">
                                            <span class="text-center">{{data.id}}</span>
                                            <span>{{data.username}}</span>
                                            <span class="pl-2"> ¥ {{data.money}}</span>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div v-else-if="(activeTab == 1)" class="absolute left-0 right-0 top-0 h-full text-[#c1c1c1]">
                                <swiper :loop="true" direction="vertical" :modules="[Autoplay]" :slides-per-view="10"
                                    class="mySwiper h-full   w-full  text-base" :autoplay='{
                                      "delay": 2000,
                                      "disableOnInteraction": false, 
                                    }'>
                                    <swiper-slide v-for="data in ranking2 " :key="data.id" class="data-row bg-transparent">
                                        <div :key="data.id" class="flex justify-between space-x-1 data-row ">
                                            <span class="text-center">{{data.id}}</span>
                                            <span>{{data.username}}</span>
                                            <span class="pl-2"> ¥ {{data.money}}</span>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div v-else class="absolute left-0 right-0 top-0 h-full text-[#c1c1c1]">
                                <swiper :loop="true" direction="vertical" :modules="[Autoplay]" :slides-per-view="10"
                                    class="mySwiper h-full   w-full  text-base" :autoplay='{
                                      "delay": 2000,
                                      "disableOnInteraction": false, 
                                    }'>
                                    <swiper-slide v-for="data in ranking3" :key="data.id" class="data-row bg-transparent">
                                        <div :key="data.id" class="flex justify-between space-x-1 data-row ">
                                            <span class="text-center">{{data.id}}</span>
                                            <span>{{data.username}}</span>
                                            <span class="pl-2"> ¥ {{data.money}}</span>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-4 cursor-pointer left-4 flex items-center justify-center ">
                <img @click="rightBtn()" src="@/assets/pc/Home/btn.png" alt="" class="w-[170px] h-6">
            </div>
        </section>

    </div>
</template>
    
<style scoped>
.ranking-area {
    background-image: url("@/assets/pc/Home/ranki.png");
    background-color: #1f2129;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 610px;
    width: 100%;
}

.tab p.active:after {
    content: "";
    margin: auto;
    width: 28px;
    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #c15410;
}

.data-row,
.pending {
    text-align: left;
    height: 33px;
    letter-spacing: .75px;
    font-size: 12px;
    line-height: 33px;
}

.data-row span {
    -webkit-box-flex: 1.5;
    -ms-flex: 1.5;
    flex: 1.5;
}

.data-row span:last-child {
    -webkit-box-flex: 2.5;
    -ms-flex: 2.5;
    flex: 2.5;
    padding-right: .5rem;
    text-overflow: ellipsis;
    text-align: left;
    white-space: nowrap;
    box-sizing: border-box;
}

.rank-icon {
    height: 25px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 29px 25px;
}

.rank-1 {
    background-image: url("@/assets/pc/Home/rank1.png");
}

.rank-2 {
    background-image: url("@/assets/pc/Home/rank2.png");
}

.rank-3 {
    background-image: url("@/assets/pc/Home/rank3.png");
}

.bg_gradient {
  @apply bg-gradient-to-tr from-[#04162f] via-[#04162f] to-[#212225];
}

</style>