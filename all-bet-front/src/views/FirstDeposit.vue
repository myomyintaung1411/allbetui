<template>
  <div class="hidden sm:block relative overflow-x-hidden">
    <Header></Header>
    <div id="activity" class="firstDeposit overflow-y-hidden">
      <div class="firstDeposit" header-fixed="true" params="[object Object]">
        <div class="block">
          <div class="mainTitle"></div>
          <div class="w-full  flex justify-center items-center">
            <button
            @click="activeBtn = 0"
            class=""
            :class="activeBtn == 0 ? 'jml btn_active ' : 'jml btn'"
          >
            新人见面礼
          </button>
          </div>
          <!-- <button
            @click="activeBtn = 1"
            :class="activeBtn == 1 ? 'csq btn_active' : 'csq btn'"
          >
            超值存送券
          </button> -->

          <div class="aniBox relative">
            <div class="boxCover switch"></div>
            <div class="light" style=""></div>
            <div v-if="activeBtn == 0" class="boxBody jmlb" style=""></div>
            <div v-if="activeBtn == 1" class="boxBody ticket"></div>
            <div v-if="activeBtn == 0" class="card switch">
              <!---->
              <div class="tag">一重礼</div>
              <h2>新人见面礼</h2>
              <div class="con">
                <p>
                  首存7天内，单笔存款≥<span>168元</span>即可申请16.8%新人礼金，最高可享<span
                    class="r"
                    >16,888元</span
                  >，祝您一路发！
                </p>
              </div>
              <div class="redBtn">16.8% 一路发</div>
            </div>

            <div v-if="activeBtn == 1" class="card switch">
              <div class="tag">二重礼</div>
              <h2>超值存送券</h2>
              <div class="con">
                <p>
                  每单笔存款满足以下要求，即可对应使用一张存送券，每张限使用一次。
                </p>
              </div>
              <div class="redBtn">三张</div>
              <!---->
            </div>
          </div>
        </div>

        <section class="giftBox relative">
          <h1><i class="zline mirror"></i>新人见面礼<i class="zline"></i></h1>
          <section v-if="token" class="w-full px-5 ">
            <div v-if="getAlertData?.length > 0" class="mx-3 max-h-[700px] overflow-y-auto">
                <div v-for="(list, index) in getAlertData" :key="index" class="bg-gray-300/10 my-2 px-3 py-2 w-full">
                        <div class="flex justify-between">
                            <div>
                                <div class="text-lg">{{ list.title }}</div>
                        <div class="text-gray-400">{{ list.description }}</div>
                            </div>
                            <div v-if="list?.is_do == 0 && (list?.type == 10 || list?.type == 11 || list?.type == 12)" @click="collectGift(list)" class="px-3 bg-[#272c33] h-8 flex justify-center items-center rounded cursor-pointer hover:bg-black text-white">
                                <span class="text-center">点击领取</span>
                            </div>
                        </div>
                        <div class="text-end text-xs">{{ dateTime(list.created_at) }}</div>
                    </div>


                    
            </div>
             <section v-else class="relative w-full py-20     px-[18px] ">
                    <div class=" text-center text-[#eed6b3] text-xl  
                    flex flex-col justify-center items-center">暂无消息</div>
               </section>

          </section>

          <section v-else>
          <div  class="step step0">
            <p class="title">单笔存款≥168元</p>
            <div class="right">
              <p class="subTit">最近一笔存款</p>
              <div class="amount">
                <p><span class="f48 text-[48px]">?</span><b class="unit ml-[10px]">元</b></p>
                <!---->
              </div>
              <button @click="goLogin"   class="btn2">立即登录领取</button>
            </div>
            <!---->
          </div>
          <div  class="step step1_cny">
            <!-- <p class="title">单笔存款≥168元</p> -->
            <div class="right">
              <p class="subTit">可申请礼金</p>
              <div class="amount">
                <p><span class="f48 text-[48px]">?</span><b class="unit ml-[10px]">元</b></p>
                <!---->
              </div>
              <button  @click="goLogin"  class="btn2">立即登录领取</button>
            </div>
            <!---->
          </div>
          </section>

          <p  class="tip">完成（存款+礼金）*16倍流水即可取款</p>
         <p  class="f18 text-[18px]">*存款指申请优惠的本金</p>
        </section>

        <div class="rule">
          <h2>活动规则:</h2>

          <dl>
            <dt><StarIcon class="w-5 mr-2"></StarIcon>新人见面礼：</dt>
            <dd>
              <span>1）</span
              >新人见面礼可在首笔存款后的7天内申请，超过7天未申请视为自动放弃；
            </dd>
            <dd>
              <span>2）</span
              >申请优惠时仅计算最后一笔满足条件的单笔存款，取款后无法领取此优惠；
            </dd>
            <dd>
              <span>3）</span
              >申请礼金前需先完善相关资料（姓名、手机号码及取款账户），申请成功后礼金将在24小时内自动派发到账；
            </dd>
            <!-- <dt><StarIcon class="w-5 mr-2"></StarIcon>超值存送券：</dt>
            <dd>
              <span>1）</span
              >超值存送券于注册日起30天内有效，超过30天视为自动放弃；
            </dd>
            <dd>
              <span>2）</span
              >参与新人见面礼后即可激活超值存送券，完成单笔存款（不计算申请新人见面礼的存款）后，即可选择其中一张存送券，于活动页点击立即领取，礼金自动派发到账；
            </dd>
            <dt>
              <StarIcon class="w-5 mr-2"></StarIcon
              >该活动优惠与洗码共享，但不可与其他首存优惠共享；
            </dt>
            <dt>
              <StarIcon class="w-5 mr-2"></StarIcon
              >该活动CNY账户或USDT账户均可参与，但只可参与一次；
            </dt>
            <dt>
              <StarIcon class="w-5 mr-2"></StarIcon
              >同一台设备、同一联系方式、同一支付方式及IP地址等只可享受一次；
            </dt>
            <dt>
              <StarIcon class="w-5 mr-2"></StarIcon
              >为避免文字理解差异，博冠将保留对该活动的最终解释权。
            </dt> -->
          </dl>

          <div class="rightImg"></div>
        </div>
      </div>
    </div>
  </div>

  <section
    id="activity_mobile"
    class="w-full h-auto bg-[#171a21] relative sm:hidden"
  >
    <div
      class="h-[60px] w-full text-gray-400 px-2 flex justify-between items-center"
    >
      <ChevronLeftIcon @click="goBack()" class="w-7 h-7"></ChevronLeftIcon>
      <p class="text-[17px]">新人双重礼</p>
      <div
        class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap"
      >
        <img src="@/assets/mobile/user/service.png" alt="" class="h-7 w-7" />
        <p>客服</p>
      </div>
    </div>
    <div class="first-deposit child-view">
      <div class="img-loading banner animation">
        <img
          class="lozad w-full h-full"
          src="@/assets/firstdepoImage/pctitle.png"
          data-loaded="true"
          style="border-radius: 0.08rem"
        />
      </div>

      <div class="tab-group">
        <div
          @click="activeBtn = 0"
          class="animation text-center text-sm leading-[46px]"
          :class="activeBtn == 0 ? 'tab active' : 'tab'"
        >
          新人见面礼
        </div>
        <!-- <div
          @click="activeBtn = 1"
          class="animation text-sm leading-[46px] text-center"
          :class="activeBtn == 1 ? 'tab active' : 'tab'"
        >
          超值存送券
        </div> -->
      </div>

      <div class="condition-box">
        <div v-if="activeBtn == 0" class="condition-content">
          <div class="condition-ani-box">
            <div class="condition-text animation text-black text-sm">
              <div class="mt-[150px] w-fit __bg mx-auto h-fit">
                <div
                  class="flex items-center justify-between w-full space-x-3 text-[12px] font-bold"
                >
                  <span>一重礼</span>
                  <span>新人见面礼</span>
                  <span class="bg-[#da1717] p-1 text-white">16.8% 一路发</span>
                </div>
                <div class="max-w-[250px] py-1 text-[11px]">
                  <span>
                    首存7天内，单笔存款≥168元即可申请16.8%新人礼金，最高可享</span
                  >
                  <span class="text-[#da1717]">16,888元</span>，祝您一路发！
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeBtn == 1" class="condition-content send">
          <div class="condition-ani-box">
            <div class="condition-text animation text-black text-sm">
              <div class="mt-[150px] w-fit __bg mx-auto h-fit">
                <div
                  class="flex items-center justify-between w-full space-x-3 text-[12px] font-bold"
                >
                  <span> 二重礼</span>
                  <span>超值存送券 </span>
                  <span class="bg-[#da1717] p-1 text-white">三张</span>
                </div>
                <div class="max-w-[250px] py-1 text-[11px]">
                  <span>
                    每单笔存款满足以下要求，即可对应使用一张存送券，每张限使用一次。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-3 mt-16">

        <section v-if="token">
         <div
          class="flex w-full pt-14 items-center text-[#eed6b3] font-bold text-base space-x-2 justify-center"
        >
          <div class="title-line"></div>
          <span class="px-2 font-bold text-base">新人见面礼</span>
          <div class="title-line"></div>
        </div>
        <div v-if="getAlertData?.length > 0">
        <div v-for="(list, index) in getAlertData" :key="index">
            <div class="bg-gray-300/10 m-2 px-3 py-3 rounded text-white">
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
        </div>
        <div v-else>
           <div class="py-5 text-center text-[#eed6b3] text-base">暂无消息</div>
        </div>

         <p class="text-base text-[#eed6b3] text-center">完成（存款+礼金）*16倍流水即可取款</p>
        <p class="text-sm text-[#eed6b3] text-center">*存款指申请优惠的本金</p>
        </section>

        <div v-else class="mobile_box text-center relative pb-5">
         <div
          class="flex w-full pt-14 items-center text-[#eed6b3] font-bold text-base space-x-2 justify-center"
        >
          <div class="title-line"></div>
          <span class="px-2 font-bold text-base">新人见面礼</span>
          <div class="title-line"></div>
        </div>
        <section class="px-3 py-5">
        <div class="mobile_step h-28  relative w-full ">
          <div class="absolute right-0 h-20  w-1/2 flex flex-col justify-center items-center">
                 <span class="mt-4">最近一笔存款</span>
                 <span class="text-red-500">? 元</span>
                 <span @click="goLogin"  class="px-1 py-1 __bg mx-5 rounded">立即登录领取</span>
          </div>
        </div>
        <div class="mobile_step image__2 h-28  relative w-full ">
          <div class="absolute right-0 h-20  w-1/2 flex flex-col justify-center items-center">
                 <span class="mt-4">最近一笔存款</span>
                 <span class="text-red-500">? 元</span>
                 <span @click="goLogin"   class="px-1 py-1 __bg mx-5 rounded">立即登录领取</span>
          </div>
        </div>
        <p class="text-[12px] text-[#eed6b3]">完成（存款+礼金）*16倍流水即可取款</p>
        <p class="text-[10px] text-[#eed6b3]">*存款指申请优惠的本金</p>
        </section>
        </div>

      </div>

      <div class="py-3 task-title mt-10 px-3">
        <div
          class="flex w-full items-center text-[#eed6b3] font-bold text-base space-x-2 justify-center"
        >
          <div class="title-line"></div>
          <span class="px-2">活动规则</span>
          <div class="title-line"></div>
        </div>
      </div>
      <div class="para px-2 text-[#eed6b3] text-sm space-y-2">
        <div class="flex items-center">
          <StarIcon class="w-3 mr-2"></StarIcon>
          <span> 新人见面礼：</span>
        </div>
        <p class="text-[13px] px-4">
          1) 新人见面礼可在首笔存款后的7天内申请，超过7天未申请视为自动放弃；
        </p>
        <p class="text-[13px] px-4">
          2) 申请优惠时仅计算最后一笔满足条件的单笔存款，取款后无法领取此优惠；
        </p>
        <p class="text-[13px] px-4">
          3)
          申请礼金前需先完善相关资料（姓名、手机号码及取款账户），申请成功后礼金将在24小时内自动派发到账；
        </p>
        <!-- <div class="flex items-center">
          <StarIcon class="w-3 mr-2"></StarIcon> <span> 超值存送券：</span>
        </div>
        <p class="text-[13px] px-4">
          1) 超值存送券于注册日起30天内有效，超过30天视为自动放弃；
        </p>
        <p class="text-[13px] px-4">
          2)
          参与新人见面礼后即可激活超值存送券，完成单笔存款（不计算申请新人见面礼的存款）后，即可选择其中一张存送券，于活动页点击立即领取，礼金自动派发到账；
        </p>
        <div class="flex items-center">
          <StarIcon class="w-3 mr-2"></StarIcon>
          <p class="text-[12px]">
            该活动优惠与洗码共享，但不可与其他首存优惠共享；
          </p>
        </div>
        <div class="flex items-center">
          <StarIcon class="w-3 mr-2"></StarIcon>
          <p class="text-[12px]">
            该活动CNY账户或USDT账户均可参与，但只可参与一次；
          </p>
        </div>
        <div class="flex items-center">
          <StarIcon class="w-3 mr-2"></StarIcon>
          <p class="text-[12px]">
            同一台设备、同一联系方式、同一支付方式及IP地址等只可享受一次；
          </p>
        </div>
        <div class="flex items-center">
          <StarIcon class="w-3 mr-2"></StarIcon>
          <p class="text-[12px]">
            为避免文字理解差异，博冠将保留对该活动的最终解释权。
          </p>
        </div> -->
      </div>
      <div class="pb-5"></div>
    </div>
  </section>
</template>

<script setup>
import { ref,computed,onMounted } from "vue";
import Header from "@/components/Header.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import globaljs from '@/utils/global'
import moment from 'moment'
import allApi from "@/network/allApi.js";
import { getCurrentInstance } from 'vue';
import Loading from "@/utils/loader";

const router = useRouter();
const store = useStore()
const instance = getCurrentInstance()

import { StarIcon, ChevronLeftIcon } from "@heroicons/vue/outline";
const activeBtn = ref(0);
const token = computed(() => store.getters["user/LToken"]);
const getAlertData = computed(() => store.getters["app/GetAlertMsg"]);
const user = computed(() => store.getters["user/LOGIN"]);

const goBack = () => {
  router.go(-1);
};
onMounted(()=>{
 globaljs.getAlert('gift168')
})

const dateTime = (time) => {
    time = moment(new Date(time)).format("Y-MM-DD HH:mm:ss")
    return time
}

const goLogin = () => {
  router.push('/login')
}

const collectGift = (list) => {
    console.log(user?.value?.info);
    let data = {
        "player": user?.value?.info?.username,
        "id": list?.id,
        "gift_type":list?.type,
        "amount":list?.amount,
        // "key": user?.value?.key
    }
    Loading.showLoading()
    allApi.CollectGift({ data: data, key: user?.value?.key }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            instance.proxy.$message({ message: res?.data?.message, duration: 2 })
             globaljs.getAlert('gift168')

            //washData.value = res?.data?.data
            //store.commit('user/UserInfo', res.data.data)
        }
    }).catch((e) => {
        instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
        Loading.hideLoading()
        console.log(e);
    })
}
</script>

<style scoped>
#activity_mobile .child-view {
  margin-top: 0.54rem;
}

.first-deposit {
  /* font-size: 0.14rem; */
  color: #000;
  background-image: url(@/assets/firstdepoImage/bg1.webp),
    url(@/assets/firstdepoImage/bg2.webp),
    url(@/assets/firstdepoImage/bg3.webp);
  background-position: 0 0, 0 4.355rem, 0 8.75rem;
  background-repeat: no-repeat, no-repeat, repeat-y;
  /* background-size: 100% 4.355rem, 100% 4.395rem, 100% 4.05rem; */
  background-size: 100%;
  background-color: #1b1b1b;
  /* height: 100vh; */
}

@keyframes flyUp-404378b2 {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    top: 1rem;
    opacity: 0;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    top: 0;
    opacity: 1;
  }
}

.first-deposit .banner.animation {
  -webkit-animation: flyUp-404378b2 0.4s ease-in-out forwards;
  animation: flyUp-404378b2 0.4s ease-in-out forwards;
}

.first-deposit .banner {
  margin: 0 auto;
  width: 100%;
  height: 140px;
  position: relative;
  z-index: 4;
  top: 0;
  opacity: 0;
}

.first-deposit .tab-group {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
}

.first-deposit .tab-group .tab.active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAABYCAMAAAAHtijVAAADAFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4XDz++/f8+vayiVqZdkz7+PRFNSL+/PhyWDn59vHm3dHXwafLnGW3i1zfyKazhlTo1rbs2rzLqoDVuZPZvpncxKDPr4fAmm27kWPl0bDKpXiwgU/FoXfStI3jzavEnnL//vq+lmjl18Swj2ngz7qhfVWddkzIrouqe0mPZjvz6t4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTKf3mAAAAFnRSTlMAY3aFIjRMkwgTydUx38laq6eWiL3P7RqsMQAAAAlwSFlzAAALEwAACxMBAJqcGAAABvBJREFUeJztnG1z2koSRk+P3kYgG3IDyaaSCp93////2brZ2srdmBgHC2n0gmY/aITBBt/c3bJxJD+yC0sDVOu4ezTTmpZwWomnShaPvOGX1e+Eqv7xyBvkVEMSmV4S2dPX5iQZ//jhJPgAI3P7W416KqvOp4YifxNmH6j9E2COeksSfAAVNIL3lNadU1tsc/Up43dJjzUfw/L2PaPSenhsn9i4M8qDrb1+n/F1daT1CJbxAiUegOXb7ImtO5dUe+r2P78ddZgHWBK7GG0tYBvSgGz+DDY+uzbZqEpQCGyjjH8/6GHuY0k+o8TDfpvVt/MsR4DieWx9NkVgsTM2EUqw2+Yhl3tYks8oT+y3WTFeihTTivzZrH1GxRDcRM1sUyVKrK0fcDnEknzGF2iK8VLFVX56VPPryxIHN+HbTaTgIZeDK3Bip77Q3I7WZsSmlh5TQaQuRvq2Sn4EIqq5zMv91oPBml0ooSmm3yt/nfcaCgBi1v74OiwaxMceNO17y9uPo600hdyOvF72KEdUF4mpci3CpDZ7x/ewJB/Jw6bIt3GVA8gANigi4+X6ahzrsjiKJZj6ni1y5agMRUFovPwt36PLq7uDd33LZDGyFLmKKyAeyk8MTCtZMVW8ucNy16+OF+mkEBNXbj+Pn/Sf9GKUxwS5tlEa82U3C9h5y2ShJuk4v4uvgVAhBmIzLhKfYHdw17f409u6yqspjTsQNAxCQRPAppysy+BiN3jp0lDJ55FXhAbukAUPvqGfCgBkad9IHXVRpHZtZTrOi+lZDDu/poXMC4/33X7nLSVelQk357HqBUiWtho3Ezc1ct6SLEZmPqjhyn0VMg7Wu+BxrxHlNutdYuWvKJIs03xwey6IDN54qaKzGfUSJLON6qLIecuCTZ+TKz+nLFt2btK+JIz+GDoVSzancNPodjgXX25NWJ/RphcggaJR09saXBBpn+U8O69VZ5eFiJELn7ZvaQhX9/JTg5MFMuPCp4VTYl3DgGUB1aANrbdogdmwL85Ocw6CCChGZzPm5ejqG6Dp4Pw9A1654HuIWECBlgqu/vQjQ9BujNLNoHU95AlRp/k1gDa7vsU88ubh6KoYUQn0cQnY/6d2DuSjpRKYv3YuAO/ca+stZjT0ob9Tl9ZvsVyT6/PZ8nKkNQZEuytRQxm+cmmdRKqg85aQdwqUUcP+Jeu6XEFLJe//ZspHIA5G5t3qKreBNa23TND9XZn88/Iucd7R9i1fFrrHK7Z/XproYAa9RF7HuaSYdftXC0c0fvHKZcKa9i506y1+ZnT12AcGoUBj3KL1bk60pB56vmWkSPnS/t0G0WruM8sGziV7S03Q5ldabwny0uhhrSR8oDwiXXc7Lg0lVHqSDZqLn5ia5J/tYifXt/isBt7pbjS3a5Zuz2FZQcVkczajzq5NGJoc/MDawJpdLjePV5GW4XKZxSaFPHULBhXtmroAMvNpAuNBbnhmme2tohTQUolU/7hCX5IN01+Unak/IN9YF0S7FPe/wNQkg0x5q/ATGRC0VNjL/KfAtWqsUqCGtalwbtI15DctCuOCiEpRXWi41NyGR+ul+6zwgmoFlOsuhlBgLFhI57C+4aJMzm3m8yrpqJj1LobwAF8akUbSELbVKLyxF8PJYCZh6ajID/DAo1vfAq3v5ECZqdl7P0noNpI+b8k2vlDpCqCwNrDWXaI9oHbuUi8yKNJIVOaHhGmSJmniXvq4EV7U2qosBUiz1lmsAZf/11KJUMllCEA0QXnC7XM68zl0ka5nrNukpNk4Z2mxeAA+3hZppGxCgK13Ezf2ezaLot52MhdRVC0vRmrV5lfyzNo9Z3F3izp3kbG7tzjSPiwnZfbxLEY/ub5O0zcNqnAPKcnL2rrL0AEWpBKpROi4cFlO2/vUPRz3tidW2+7JLY4K7ZgFdiWcWnBcorthSyjVu55W5qkfTbRLxZmitpZ9Z9nVP+zCyPfuDecun8nSZ9T6YC/d1pb9/pa9R2bZoEKw1JTb+PR39E7JdUeFOyp31TIujBDxue8wPZYpaKmwF0J3Bb/a+NKA14BtRFUnHrzWM+XWHKWyw1Lj4zku0jRbVX3o/bqx3BZ13Ryjsl9yppGKNo7wgbiZ9TjHkG/DHGqs5SGVg0o8x4VKENcXxz0d5oY5QI3lKJXDAsUdl/bZJj3vX2qwlsD5y+F6jcMKRY3zFQemt2RqwMIpKvfLWXWLRKhAQGxvCzs7KNiAB1QeVPlqEOcq1SOPjf3VZYEWCseoHDlx5zCuqbf3pQNOQznqDxp2QfT05p1FVtrazAB7vDjm6IlrXBD1tnOxYjkN5aQ/aNfU5xg6DeWxMGnzUf10lzaIHqkte/Sk+1wd8brc9n/QfwFW3o3bK7hFxgAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: 100%;
  color: #272228;
}

.first-deposit .tab-group .tab.animation {
  -webkit-animation: flyIn-404378b2 0.5s ease-in-out 0.15s forwards;
  animation: flyIn-404378b2 0.5s ease-in-out 0.15s forwards;
}

.first-deposit .tab-group .tab {
  width: 160px;
  height: 88px;
  font-weight: 600;
  color: #fffefe;
  background: url(data:image/png;base64,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)
    no-repeat;
  background-size: 100%;
  position: relative;
  z-index: 4;
  top: 0;
  opacity: 0;
}

@keyframes flyIn-404378b2 {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    top: 0.5rem;
    opacity: 0;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    top: 0;
    opacity: 1;
  }
}

@keyframes flyUp-404378b2 {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    top: 1rem;
    opacity: 0;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    top: 0;
    opacity: 1;
  }
}

.first-deposit .condition-box {
  margin-top: -90px;
  position: relative;
  z-index: 3;
}

.first-deposit .condition-box .condition-content {
  background: url(@/assets/firstdepoImage/mobileimg1.webp)
    no-repeat;
  background-size: 100%;
}
.first-deposit .condition-box .send {
  background: url(@/assets/firstdepoImage/mobileimg2.webp)
    no-repeat;
  background-size: 100%;
}

.first-deposit .condition-box .condition-content {
  margin: 0 auto;
  padding-top: 1px;
  width: 100%;
  height: 280px;
  position: relative;
  /* z-index: 0; */
}

.first-deposit .condition-box .condition-content .condition-text.animation {
  animation: opacity0-404378b2 0.3s linear forwards;
}

.__bg {
  background-image: linear-gradient(0deg, #ffe7c4, #fef3db);
}

 .title-line {
  width: 100px;
  height: 20px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAAfCAMAAAB+isk4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAKUUExURQAAAO7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws+7Ws20Eog4AAADbdFJOUwA8yPHe38sPIB4mKPX53fjYR/QBGDDvKUHlwOj71S9OPqHrLODP+roDH2YlK+dq6TRRNlRL9lYt7NQx4cSMlJr+Mu6nta/3BgrHGyo6w11hQ9xEvtd0m2h4hUhZyj/Wzkw1NwIIBB0QFW9FbCestHuV84KYY4imrnCPsZHS2oDjWjODT1O5QM2OfYdfOJ/G6jt1eor9/KOp8Mxlu9mEwSQMvJdztrc5vZzRqn7bXHKJqEYjpZZKpMJxf7h2LnnkWPLmxWJNW6tXi52T7UmwhpKZBa2zBxwSIREUGQNTbHgAAAM8SURBVFjD3djVWhtBFADgCYEiSYgACYTg7u7u7u5OKUVLCy2FlgpQWtyttNTd3d3d2/Mynd1lsTeYnIvs+WZysf+3owchYiPvMFKS0AkCGFMSSjAIBPBZRwkoFSEgLDURwJcK4im2ZsAXIyTmg5ktkQANucZSVhUBEn0q0ZdARBWJFEtQYzAxUcDlMI0cLnyLIZEiZDCVkRBexjaXS+H7D/IocZoqoGaHYm3A3J9q0lrQwr9hvmATSxZFDeLUkTrGJMjB0IJq0jMEQz389DEE+VHiKIjCCMGARzUNSwFAOowzngEEqhNHwZkEFEVUks8HKvj5OD8SAIV/yKGoMJQaK2oBsEPIWwBMCLypP6hCyV/CKLpGIEqgFoDZCWBjYhZ3VM+Dny5RlHgRGOlScyY8FFYidAR3/SsGUTy65qCFgyeTyRwtLHyMjY319Pz3uLqWuZf3n0rkcDimRUX6qenptWJx/s1SE5N9bm77PTy8H3d1XUw+lPJ8q719jrPz5k3bL2Vl3c8dbew7v2vL3ryD2y6/ObBjZ3DTjZbs7LcDZpOtEVOv6tui2hsiT3bPnc6Q304KfKZSONNrdbbDrzgzc77zQpq2mmXA7kdPnZxcXMx9w6VSLvdJM98rWmgdCtaajGoRFAn4YWcNqyM0l+pLUMAccnDAmLo6nszR0dHH5wFrcXd370+kLT09+qmp6bVXxR88PV+wltcFL5OxJWXZcud41kjuw8a+u4xlLAhb3jUdawnJPjNgdut665Vz9W0f2xtO3Ou2yciQJyUFDqoU9paUWHX4YYyoMy1NVRVbDAwYi+/7aS63WSLxio4WKFRhw+rvsnEDaI+OL1PGc9jRF0/AINNcxlBvLMMUTVTAfhvrAqrjJ61ERGHodUybGnKeXjTFyxMx65hVDSGL8grmNx8UpnRmysUULp3j/WXmFzGbJYvBcyV6ad9HYUMwFIaI2/dZDDXtZQtL5zHEG6RRFoSdxxiMHT3tl8/JTISZk3ZOpjEKZtqvv79EVhJ3GcMY7Wr2Xjm9cq+MIu9eiTGL1UvZ1ynC7/tr6jCThNdh1mDo+pgQQsivj7F1y2BlqFsy9eQg5aDg+LS+zv8fOE1FU5AEqHEAAAAASUVORK5CYII=)
    no-repeat 50%;
  background-size: 100%;
}

.mobile_box{
    background: url(@/assets/firstdepoImage/m_box.webp) no-repeat;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;


}
.mobile_step{
  /* width: 100%; */
  background: url(@/assets/firstdepoImage/m_step1.webp);
  background-repeat: no-repeat;
      background-size: 100%;
}
.image__2{
  background-image: url(@/assets/firstdepoImage/m_step2.webp);
}
</style>

<style scoped>
#activity {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-height: 100vh;
}
.firstDeposit {
  clear: both;
  min-height: 1600px;
  background-image: url(@/assets/firstdepoImage/pcbg1.jpg),
    url(@/assets/firstdepoImage/pcbg2.jpg);
  background-position-y: 0, 1440px;
  background-position-x: center;
  background-repeat: no-repeat;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
}

.firstDeposit .block {
  width: 1180px;
  height: 1265px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding-top: 520px;
  box-sizing: border-box;
}

.firstDeposit .block,
.firstDeposit .tabs {
  display: flex;
}

.firstDeposit .mainTitle {
  position: absolute;
  top: 0;
  left: -20px;
  opacity: 0;
  animation: titUp-be9fa19c 0.8s ease 0.5s forwards;
  width: 1151px;
  height: 420px;
  background-image: url(@/assets/firstdepoImage/pctitle.png);
}

@keyframes titUp-be9fa19c {
  0% {
    top: 700px;
    -webkit-transform: scale(0) translateZ(0);
    transform: scale(0) translateZ(0);
    opacity: 0;
  }

  to {
    top: 0;
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
    opacity: 1;
  }
}

.firstDeposit .block .btn_active {
  background-image: url(@/assets/firstdepoImage/pcAcitvebtn.webp);
  color: #272228;
}

.firstDeposit .block .btn {
  background-image: url(@/assets/firstdepoImage/pcBtn.webp);
  color: #fffefe;
}

.firstDeposit .block .csq {
  right: 290px;
  -webkit-animation: btnUp2-be9fa19c 1s ease 0.5s forwards;
  animation: btnUp2-be9fa19c 1s ease 0.5s forwards;
}

.firstDeposit .block .jml {
  left: 290px;
  -webkit-animation: btnUp-be9fa19c 1s ease 0.5s forwards;
  animation: btnUp-be9fa19c 1s ease 0.5s forwards;
}

.firstDeposit .block button {
  display: block;
  /* margin: 0 75px; */
  margin: 0 auto;
  width: 438px;
  height: 139px;
  padding-bottom: 30px;
  box-sizing: border-box;
  font-size: 42px;
  font-weight: 700;
  cursor: pointer;
  /* position: absolute;
  top: 892px; */ 
  /* currently close of positon top and margin */
  opacity: 0;

}
button {
  background-color: transparent;
  outline: none;
  border: 0;
}

@keyframes btnUp-be9fa19c {
  0% {
    left: 290px;
    top: 892px;
    opacity: 0;
    z-index: 2;
    -webkit-transform: scale(0) translateZ(0);
    transform: scale(0) translateZ(0);
  }

  10% {
    opacity: 0;
  }

  to {
    left: 10px;
    top: 457px;
    opacity: 1;
    z-index: 2;
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
  }
}

@keyframes btnUp2-be9fa19c {
  0% {
    right: 290px;
    top: 892px;
    opacity: 0;
    z-index: 2;
    -webkit-transform: scale(0) translateZ(0);
    transform: scale(0) translateZ(0);
  }

  10% {
    opacity: 0;
  }

  to {
    right: 10px;
    top: 457px;
    opacity: 1;
    z-index: 2;
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
  }
}

.btn {
  align-items: center;
  font-family: inherit;
}

@keyframes openCover-be9fa19c {
  0% {
    -webkit-transform: rotate(0deg) translateZ(0);
    transform: rotate(0deg) translateZ(0);
    left: 150px;
    top: -20px;
  }

  to {
    -webkit-transform: rotate(-55deg) translateZ(0);
    transform: rotate(-55deg) translateZ(0);
    left: -292px;
    top: 141px;
  }
}

.aniBox .boxCover.switch {
  -webkit-animation: openCover-be9fa19c 0.8s ease 0s forwards;
  animation: openCover-be9fa19c 0.8s ease 0s forwards;
}

.aniBox .boxCover {
  width: 660px;
  height: 299px;
  background-image: url(@/assets/firstdepoImage/pcGiftbox.png);
  position: absolute;
  transform: rotate(0deg) translateZ(0);
  left: 150px;
  top: -20px;
  z-index: 1;
}

@keyframes flashing2-be9fa19c {
  0%,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.aniBox .light {
  width: 940px;
  height: 580px;
  background-image: url(@/assets/firstdepoImage/pcLight.png);
  position: absolute;
  top: -22px;
  left: 0;
  z-index: 0;
  opacity: 0;
  animation: flashing2-be9fa19c 1.8s ease 0.5s infinite;
}

.aniBox .jmlb {
  background-image: url(@/assets/firstdepoImage/pcimg1.png);
}
.aniBox .boxBody {
  width: 940px;
  height: 580px;
}

.aniBox .ticket {
  background-image: url(@/assets/firstdepoImage/pcimg2.png) !important;
}

.aniBox .card.switch {
  -webkit-animation: flashing-be9fa19c 1s ease 0.3s forwards;
  animation: flashing-be9fa19c 1s ease 0.3s forwards;
}

@keyframes flashing-be9fa19c {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.aniBox .card {
  width: 520px;
  height: 200px;
  background-image: linear-gradient(0deg, #ffe7c4, #fef3db);
  border-radius: 14px;
  box-shadow: 2px 3.46px 10px rgba(42, 42, 42, 0.6);
  position: absolute;
  bottom: 72px;
  left: 223px;
  box-sizing: border-box;
  padding: 10px 30px;
  opacity: 0;
}

.aniBox .card:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 10px;
  width: 500px;
  height: 180px;
  border: 1px solid #dca366;
  border-radius: 10px;
  box-sizing: border-box;
}

.aniBox .card .tag {
  position: absolute;
  left: 0;
  top: 20px;
  width: 104px;
  height: 40px;
  line-height: 40px;
  background-image: url(data:image/png;base64,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);
  color: #fff;
  font-size: 24px;
  padding-left: 10px;
  box-sizing: border-box;
}

.aniBox .card h2 {
  font-size: 32px;
  line-height: 42px;
  background-image: linear-gradient(0deg, #5f5f5f, #181714);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 7px 0 10px 85px;
}

.aniBox .card .con {
  height: 100px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}

.aniBox .card p {
  color: #49464e;
  font-size: 20px;
  line-height: 28px;
}

.r {
  color: #e53240;
}

.aniBox .card .redBtn {
  position: absolute;
  right: 30px;
  top: 23px;
  height: 34px;
  line-height: 34px;
  padding: 0 8px;
  background-color: #da1717;
  border-radius: 4px;
  color: #fef1d8;
  font-size: 20px;
  font-weight: 700;
}

.firstDeposit .rule {
  width: 1180px;
  padding-bottom: 100px;
  padding-left: 28px;
  box-sizing: border-box;
  margin-top: 52px;
  position: relative;
}

.firstDeposit .rule h2 {
  color: #eed6b3;
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 22px;
}

.firstDeposit .rule dl {
  color: #eed6b3;
  font-size: 16px;
  width: 760px;
}

.firstDeposit .rule dt {
  line-height: 21px;
  margin-bottom: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.firstDeposit .rule .rightImg {
  width: 337px;
  height: 483px;
  background-image: url(@/assets/firstdepoImage/pcboll.png);
  position: absolute;
  right: 20px;
  top: 80px;
}

.firstDeposit .giftBox {
  width: 1180px;
  height: 970px;
  background-image: url(@/assets/firstdepoImage/pc_giftbox.webp);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 168px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.firstDeposit .giftBox h1 {
  color: #eed6b3;
  font-size: 42px;
  line-height: 55px;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 27px;
}

.firstDeposit .giftBox .zline {
  display: inline-block;
  width: 285px;
  height: 42px;
  background-image: url(data:image/png;base64,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);
  margin-left: 3px;
}

.firstDeposit .giftBox .zline.mirror {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  margin-right: 8px;
  margin-left: 0;
}

.firstDeposit .giftBox .step0 {
    background-image: url(@/assets/firstdepoImage/pc_step1.webp);
}

.firstDeposit .giftBox .step {
    width: 1074px;
    height: 258px;
    margin: 16px auto;
    position: relative;
}

.firstDeposit .giftBox .step .title {
    position: absolute;
    left: 272px;
    top: 85px;
    font-size: 36px;
    line-height: 45px;
    font-weight: 700;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.firstDeposit .giftBox .step .right {
    width: 346px;
    position: absolute;
    right: 52px;
    top: 40px;
}

.firstDeposit .giftBox .step .subTit {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    color: #2c272e;
}

.firstDeposit .giftBox .step .amount {
    color: #da1717;
    font-weight: 700;
    font-size: 40px;
    min-height: 82px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    -webkit-box-align: start;
    align-items: flex-start;
}

.firstDeposit .giftBox .step .amount p {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 40px;
    line-height: 40px;
}

.firstDeposit .giftBox .step .btn2{
    background-image: url(@/assets/firstdepoImage/pc_step_btn.png);
}

.firstDeposit .giftBox .step button {
    width: 346px;
    height: 60px;
    font-size: 24px;
    letter-spacing: 2px;
    padding-bottom: 4px;
    box-sizing: border-box;
    cursor: pointer;
    color:#333;
}

.firstDeposit .giftBox .step1_cny {
    background-image: url(@/assets/firstdepoImage/pc_step2.webp);
}
.firstDeposit .giftBox .tip {
    margin-bottom: 10px;
    line-height: 31px;
}
.firstDeposit .giftBox>p{
    color: #eed6b3;
    font-size: 20px;
    line-height: 26px;
}
</style>