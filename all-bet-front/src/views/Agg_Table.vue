<template>
<div class="hidden sm:block relative overflow-x-hidden ">
        <Header></Header>
  <div class="_agget">
    <!-- <section class="banner moveStyle relative max-h-[1080px] min-h-[640px] mb-[25px]">
    </section> -->
    <div class="pb-5 pt-20">
      <div class="flex items-center justify-center total space-x-10">
        <li class="list-none" data-text="累计参与人数">
          <div class="num"><span>2,731</span> 人</div>
        </li>
        <li class="list-none" data-text="累计派发奖金">
          <div class="num"><span>451,188</span> 元</div>
        </li>
      </div>
      <div data-date="活动时间：4月3日～7月30日" class="date"></div>

      <div class="tip-block">
        活动期间，会员进入<span>旗舰厅</span>在博冠特别赞助的桌台（B018+B019+B219）投注任意玩法，满足条件将获得额外加码。
      </div>

      <div class="table-block">
        <div class="table">
          <div class="t-row">
            <div class="t-col">B018+B019+B219桌台累计周洗码投注</div>
            <div class="t-col">奖金（元）</div>
          </div>
          <div class="t-row">
            <div class="t-col">≥200万</div>
            <div class="t-col">2,888</div>
          </div>
          <div class="t-row">
            <div class="t-col">≥100万</div>
            <div class="t-col">588</div>
          </div>
          <div class="t-row">
            <div class="t-col">≥10万</div>
            <div class="t-col">58</div>
          </div>
          <!-- <div class="t-row">
            <div class="t-col">≥1万</div>
            <div class="t-col">28</div>
          </div> -->
        </div>
      </div>

      <button data-text="登录参与" class="login-button"></button>

      <div class="rule-title"></div>

      <ol class="rule-block list-none">
        <li>活动时间：4月3日-7月30日；</li>
        <li>活动对象：博冠1星级及以上会员即可参与；</li>
        <li>
          洗码投注统计周期：周一00:00-周日24:00，CNY与USDT账户1:7比例合并计算；
        </li>
        <li>周期内达到指定档投注即可享受对应加码奖励，1倍流水即可取款；</li>
        <li>
          优惠将于次周一凌晨2:00后开放领取，只需于活动页自行点击领取，7天内未领取则视为放弃，不予补发；
        </li>
        <li>
          此活动仅适用于一个账号的会员，相同资料会员若有多个账号仅可择一账号参与活动；
        </li>
        <li>
          对于各种非正常投注行为，如无风险投注、对冲等，一经发现将取消优惠资格；
        </li>
        <li>为避免文字理解差异，博冠将保留最终解释权。</li>
      </ol>

    </div>
  </div>
</div>

  <section
    id="activity_mobile "
    class="w-full h-auto bg-[#171a21] relative sm:hidden "
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
      <div class="  py-3">
        <div class="flex items-center justify-center w-full px-3 space-x-2">
            <div class=" flex flex-col border items-center border-[#fff2d7] w-[40%] py-2">
                <span >累计参与人数</span>
                <span class="text-base font-bold">2743 人</span>
            </div>
            <div class=" flex flex-col border items-center border-[#fff2d7] w-[40%] py-2">
                <span>累计参与人数</span>
                <span class="text-base font-bold">2743 人</span>
            </div>
        </div>
        <div class="py-2 px-3 mt-3">
            <div class="bg_eventDate">
                <div class="w-full text-center leading-[40px]">活动时间：4月3日～7月30日</div>
            </div>
        </div>
        <div class="mt-3 px-3">
            <div class="event_image text-white">
                <span class="w-full text-center  h-full flex justify-center items-center  ">
                      活动期间，会员进入
                    旗舰厅
                    在博冠特别赞助的桌台（B018+B019+B219）投注任意玩法，满足条件将获得额外加码。
                </span>
            </div>
        </div>

        <div class="mt-5 px-3">
                            <div class="overflow-hidden">
                            <table class="min-w-full relative">
                                <thead class="  border border-[#c99f62] text-[#c99f62]   sticky top-0">
                                    <tr>
                                        <th scope="col"
                                            class="text-sm font-bod    px-2 py-4 text-left border-r border-[#6f4515]">
                                            <div class="flex flex-col items-center">
                                                <p class="py-2">B018+B019+B219桌台累计周洗码投注</p>
                                            </div>
                                        </th>
                                        <th scope="col"
                                            class="text-sm font-bod   px-2 py-4 text-left border-r border-[#6f4515]">
                                            <div class="flex flex-col items-center">
                                                <p class="py-2"> 奖金（元） </p>
                                            </div>
                                        </th>
    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in tableData" :key="data.id"
                                        class="border border-[#c99f62] text-[#c99f62]">
                                        <td
                                            class="px-3 py-4 font-bold  whitespace-nowrap text-center text-sm  border-r border-[#6f4515] ">
                                            {{ data.level }}
                                        </td>
                                        <td
                                            class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#6f4515]">
                                            {{ data.title }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        </div>

    
       <div class="px-10 mt-5">
        <div class=" btn_bg relative ">
            <div class="w-full text-center leading-[45px] text-xl font-bold tracking-wide">登录参与</div>
        </div>
       </div>

       <div class="px-10  -mt-5 ">
        <div class=" rule_bg relative ">
        </div>
       </div>

              <div class="py-3 px-6 space-y-3 ">
                    <ul class="space-y-3">
                        <li> 1. 活动时间：4月3日-7月30日 ；</li>
                        <li>  2.  活动对象：博冠1星级及以上会员即可参与； </li>
                        <li> 3.  洗码投注统计周期：周一00:00-周日24:00，CNY与USDT账户1:7比例合并计算；</li>
                        <li> 4.  周期内达到指定档投注即可享受对应加码奖励，1倍流水即可取款； </li>
      
                        <li>  5.  优惠将于次周一凌晨2:00后开放领取，只需于活动页自行点击领取，7天内未领取则视为放弃，不予补发；
      
                        </li>
                        <li>
                            6.  此活动仅适用于一个账号的会员，相同资料会员若有多个账号仅可择一账号参与活动；
      
                        </li>
                        <li>
                            7.  对于各种非正常投注行为，如无风险投注、对冲等，一经发现将取消优惠资格；
      
                        </li>
                        <li> 8.   为避免文字理解差异，博冠将保留最终解释权。 </li>
                    </ul>
                </div>

      </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import { useRouter } from "vue-router";
const router = useRouter();

import { StarIcon, ChevronLeftIcon } from "@heroicons/vue/outline";
const activeBtn = ref(0);

const goBack = () => {
  router.go(-1);
};

const tableData = ref([
    {
        id: 1,
        level: '≥200万',
        title: '2,888',
    },
    {
        id: 2,
        level: '≥100万',
        title: '588',
    },
    {
        id: 3,
        level: '≥10万',
        title: '58',
    },
    // {
    //     id: 4,
    //     level: '≥1万',
    //     title: '28',
    // },
])
</script>

<style scoped>
    .bg_eventDate{
        background-image: url(@/assets/aggetImage/m_1.webp);
        width: 80%;
        height: 40px;
        background-size: 100%;
        background-repeat:  no-repeat;
        position: relative;
        margin:0 auto;
    }
    .event_image{
               background-image: url(@/assets/aggetImage/m_2.webp);
        width: 100%;
        height: 100px;
        background-size: 100%;
        background-repeat:  no-repeat;
        position: relative;
        /* margin:0 auto; */
    }
    .btn_bg{
        background-image: url(@/assets/aggetImage/m_3.webp);
        width: 70%;
        height: 100px;
        background-size: 100%;
        background-repeat:  no-repeat;
        position: relative;
        margin:0 auto;
    }

    .rule_bg{
               background-image: url(@/assets/aggetImage/m_4.webp);
        width: auto;
        height: 50px;
        background-size: 100% 100%;
        background-repeat:  no-repeat;
        position: relative;
        margin:0 auto;
    }

</style>

<style scoped>
._agget {
  background: url(@/assets/rulebg.webp) #0d0b15 top no-repeat;
  background-size: 1920px;
  width: 100%;
  min-width: 1200px;
  padding-bottom: 100px;
  margin: auto;
}
.moveStyle {
  transition: all 0.3s ease-in-out;
}
.total li {
  position: relative;
  width: 480px;
  height: 85px;
  border-left: 1px solid;
  border-right: 1px solid;
  border-top: 1px solid;
  border-image: linear-gradient(
      90deg,
      #fff2d7 25%,
      transparent 26%,
      transparent 74%,
      #fff2d7 75%
    )
    1;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.total li:before {
  position: absolute;
  content: attr(data-text);
  font-size: 30px;
  text-align: center;
  letter-spacing: 1px;
  margin: auto;
  left: 0;
  right: 0;
  top: -25px;
}

.total li .num {
  font-size: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  transform: translateY(50%);
}
.total li .num:before {
  margin: 0 30px 0 -1px;
}
.total li .num:after {
  margin: 0 -1px 0 30px;
}
.total li .num:after,
.total li .num:before {
  content: "";
  -webkit-box-flex: 1;
  flex: 1;
  height: 1px;
  background: #fff2d7;
}
.total li .num span {
  font-family: Impact;
  font-size: 72px;
  color: #fff;
  letter-spacing: 4px;
  text-align: center;
  font-weight: 900;
  margin-right: 10px;
}

.date {
  position: relative;
    background: url(@/assets/aggetImage/pc_1.webp)
    50% no-repeat;
  width: 532px;
  height: 62px;
  margin: 0 auto 45px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  background-size: 100%;
}
.date:before {
  content: attr(data-date);
  font-size: 24px;
  letter-spacing: 0.8px;
  color: #f0ca8e;
}
.date:before,
.total li .num,
.total li:before {
  background-image: -webkit-linear-gradient(
    bottom,
    #f0ca8e,
    #fffbec 50%,
    #f0ca8e
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tip-block {
  text-indent: 2em;
  width: 1120px;
  height: 140px;
  font-size: 24px;
  margin: 0 auto 30px;
  padding: 35px;
  line-height: 1.6;
  position: relative;
  background: linear-gradient(#323a49 30%, #0f1219 80%);
  background-size: 100%;
  border-left: 1px solid #e7c99d;
  border-right: 1px solid #e7c99d;
  box-sizing: border-box;
}
.tip-block:before {
     background: url(@/assets/aggetImage/pc_2.webp)

    top no-repeat;
  background-size: 100%;
}
.tip-block:before {
  content: "";
  position: absolute;
  top: 0;
  transform: translateY(-47%) translateX(-50%);
  height: 35px;
}
.tip-block:after,
.tip-block:before {
  left: 50%;
  width: 1120px;
}
.tip-block span {
  color: #ffbf5a;
}
.tip-block:after {
  content: "";
  position: absolute;
     background: url(@/assets/aggetImage/pc_3.webp)

    bottom no-repeat;
  background-size: 100%;
  bottom: 0;
  transform: translateX(-50%);
  height: 20px;
}

.table-block {
  width: 1120px;
  margin: auto;
  margin-bottom: 30px;
  padding: 30px 40px;
  text-align: center;
  position: relative;
  background: linear-gradient(#323a49 30%, #0f1219 80%);
  background-size: 100%;
  border-left: 1px solid #e7c99d;
  border-right: 1px solid #e7c99d;
  box-sizing: border-box;
}

.table-block:before {
  content: "";
  position: absolute;
      background: url(@/assets/aggetImage/pc_4.jpg)

    top no-repeat;
  background-size: 100%;
  top: 0;
  transform: translateY(-47%) translateX(-50%);
  height: 20px;
}

.table-block:after {
  content: "";
  position: absolute;
      background: url(@/assets/aggetImage/pc_5.jpg)

    bottom no-repeat;
  background-size: 100%;
  bottom: 0;
  transform: translateX(-50%);
  height: 20px;
}
.table-block:after,
.table-block:before {
  left: 50%;
  width: 1120px;
}
.table-block .table {
  border: 1px solid #667181;
  font-size: 20px;
  background: #15171f;
  width: 100%;
}

.table-block .table .t-row:not(.t-body):first-of-type {
  font-size: 24px;
  height: 58px;
  background-image: linear-gradient(180deg, #3e4556, #1f2433);
}

.table-block .table .t-row:nth-of-type(n):not(:first-of-type) {
  border-top: 1px solid #32384b;
}

.table-block .table .t-row {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
}

.table-block .table .t-col {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table-block .table .t-col:nth-of-type(n):not(:first-of-type) {
  border-left: 1px solid #32384b;
}

.login-button {
      background: url(@/assets/aggetImage/pc_6.webp)
    50% no-repeat;
  width: 521px;
  height: 100px;
  background-size: 100%;
  display: block;
  border: none;
  cursor: pointer;
  font-size: 48px;
  color: #000;
  font-weight: 600;
  transition: background-image 0.3s ease-in-out;
  padding-bottom: 5px;
  margin: 60px auto 80px;
}
.login-button:before {
  background-image: -webkit-linear-gradient(top, #fffbec, #f0ca8e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.login-button:before {
  content: attr(data-text);
  color: #f0ca8e;
}

.rule-title {
  background: url(@/assets/aggetImage/pc_7.png)    50% no-repeat;
  width: 1052px;
  height: 104px;
  background-size: 100%;
  margin: 50px auto 30px;
}

.rule-block {
    width: 1120px;
    font-size: 16px;
    margin: 0 auto;
    line-height: 1.6;
    position: relative;
    background: linear-gradient(#323a49 30%,#0f1219 80%);
    background-size: 100%;
    border-left: 1px solid #e7c99d;
    border-right: 1px solid #e7c99d;
    box-sizing: border-box;
    padding: 60px 90px 50px;
    counter-reset: num;
    color: #fff;
    list-style: none;
}

.rule-block:before {
    content: "";
    position: absolute;
    background: url(@/assets/aggetImage/pc_8.png)  top no-repeat;
    background-size: 100%;
    top: 0;
    transform: translateY(-47%) translateX(-50%);
    height: 35px;
}

.rule-block:after {
    content: "";
    position: absolute;
     background: url(@/assets/aggetImage/pc_9.jpg)  bottom no-repeat;
    background-size: 100%;
    bottom: 0;
    transform: translateX(-50%);
    height: 20px;
}

.rule-block:after, .rule-block:before {
    left: 50%;
    width: 1120px;
}

.rule-block li:nth-of-type(n):not(:last-of-type) {
    margin-bottom: 20px;
}

.rule-block li:nth-of-type(n):not(:last-of-type) {
    margin-bottom: 20px;
}

.rule-block li:before {
    content: counter(num);
    background-image: linear-gradient(180deg,#fff2d7,#c99a6c);
    counter-increment: num;
    display: block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 14px;
    color: #000;
    text-align: center;
    border-radius: 50%;
    margin-right: 20px;
}

.rule-block li {
    display: flex;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
}
</style>