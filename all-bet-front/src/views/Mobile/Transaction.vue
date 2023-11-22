<template>
  <div class="w-full h-auto bg-[#171a21] relative">
    <div class="h-[60px] w-full text-gray-200 px-2 flex justify-between items-center">
      <ChevronLeftIcon @click="goUser()" class="w-7 h-7"></ChevronLeftIcon>
      <p class="text-[17px]">交易记录</p>
      <div @click="goService">
        <img src="@/assets/mobile/home/service.png" alt="" class="w-8 h-7" />
      </div>
    </div>
    <!-- 
    <div v-if="recordData?.list?.length > 10" class="flex items-center justify-center">
            <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)"
                :page-range="3" :margin-pages="1" :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'"
        :last-button-text	="'最后'" :first-button-text = "'第一'"
                :container-class="'pagination'" :hide-prev-next="true" :page-class="'page-item'"
                :first-last-button="true" class="flex items-center space-x-4" :no-li-surround="true"
                :page-link-class="'page-link'" :active-class="'active-class'">

            </Paginate>
        </div> -->
    <div class="flex justify-between  px-3 py-2 w-full max-w-lg overflow-x-auto">
      <div
        @click="Tabclick(0)"
        class="tracking-wide py-1 whitespace-nowrap min-w-[2rem]"
        :class="
          activeTab == 0
            ? 'text-[#aaa9a9] border-b-[3px] py-1 border-[#bc6013]'
            : 'text-white'
        "
      >
        取款
      </div>
      <div
        @click="Tabclick(1)"
        class="tracking-wide py-1 whitespace-nowrap min-w-[2rem]"
        :class="
          activeTab == 1
            ? 'text-[#aaa9a9] border-b-[3px] py-1 border-[#bc6013]'
            : 'text-white'
        "
      >
        存款
      </div>
      <div
        @click="Tabclick(2)"
        class="tracking-wide py-1 whitespace-nowrap min-w-[2rem]"
        :class="
          activeTab == 2
            ? 'text-[#aaa9a9] border-b-[3px] py-1 border-[#bc6013]'
            : 'text-white'
        "
      >
        洗码
      </div>
      <div
        @click="Tabclick(3)"
        class="tracking-wide py-1 whitespace-nowrap min-w-[2rem]"
        :class="
          activeTab == 3
            ? 'text-[#aaa9a9] border-b-[3px]  border-[#bc6013]'
            : 'text-white'
        "
      >
        优惠
      </div>
      <div
        @click="Tabclick(4)"
        class="tracking-wide py-1 whitespace-nowrap min-w-[3.5rem]"
        :class="
          activeTab == 4
            ? 'text-[#aaa9a9] border-b-[3px]  border-[#bc6013]'
            : 'text-white'
        "
      >
      游戏记录
      </div>
      <div
        @click="Tabclick(5)"
        class="tracking-wide py-1 whitespace-nowrap min-w-[3.5rem]"
        :class="
          activeTab == 5
            ? 'text-[#aaa9a9] border-b-[3px]  border-[#bc6013]'
            : 'text-white'
        "
      >
      日最大充值
      </div>
    </div>

    <section  class="py-4 w-full  flex justify-between items-center px-5">
      <div
        @click="clickDate(1)"
        :class="activeDate == 1 ? 'text-white' : 'text-[#aaa9a9]'"
        class="text-sm "
      >
        今天
      </div>
      <div
        @click="clickDate(2)"
        :class="activeDate == 2 ? 'text-white' : 'text-[#aaa9a9]'"
        class="text-sm"
      >
        7天
      </div>
      <div
        @click="clickDate(3)"
        :class="activeDate == 3 ? 'text-white' : 'text-[#aaa9a9]'"
        class="text-sm"
      >
        15天
      </div>
      <div
        @click="clickDate(4)"
        :class="activeDate == 4 ? 'text-white' : 'text-[#aaa9a9]'"
        class="text-sm"
      >
        30天
      </div>
      <div @click="request()" class="px-2 py-1 border border-[#dd6e13] text-[#dd6e13]">
        刷新记录
      </div>
    </section>

    <div
      v-if="activeTab != 4 && activeTab != 5"
      class="py-2 flex items-center w-full justify-between px-5 text-white text-base border border-solid border-[#7e7e7e]"
    >
      <div>时间</div>
      <div>金额，单号</div>
      <div>状态</div>
    </div>

    <section v-if="activeTab == 0 || activeTab == 1" class="py-3 w-full relative">
      <div
        v-for="record in recordData"
        :key="record.id"
        class="border-b border-[#7e7e7e] px-5"
      >
        <div class="py-2 flex items-center w-full justify-between text-[#aaa9a9]">
          <!-- <div>10:20</div> -->
          <div
            v-html="dateTime(record?.created_at)"
            class="text-ellipsis overflow-hidden max-w-[50px]"
          ></div>
          <div class="flex flex-col items-center justify-center text-white">
            <h1>{{ record?.amount }} 元</h1>
            <!-- <p>{{ record?.type_name }}</p> -->
            <p>{{ record?.sn }}</p>
          </div>
          <div class="flex flex-col items-center justify-center text-white">
            <!-- <h1>{{washStatus(record?.status)}}</h1> -->
            <p
              class="text-[16px]"
              :class="
                record?.status == 0
                  ? 'text-red-500'
                  : record?.status == 1
                  ? 'text-green-500'
                  : 'text-[#ffc179]'
              "
            >
              {{ washStatus(record?.status) }}
            </p>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div v-if="total > pageSize" class="flex items-center justify-center mt-[30px]">
        <Paginate
          v-model="pageNum"
          :page-count="Math.ceil(total / pageSize)"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'上一页'"
          :next-text="'下一个'"
          :last-button-text="'最后'"
          :first-button-text="'第一'"
          :container-class="'pagination'"
          :hide-prev-next="true"
          :page-class="'page-item'"
          :first-last-button="true"
          class="flex items-center space-x-4"
          :no-li-surround="true"
          :page-link-class="'page-link'"
          :active-class="'active-class'"
        >
        </Paginate>
      </div>
    </section>
    <section v-if="activeTab == 2" class="py-3 w-full relative">
      <div
        v-for="record in washrecordData"
        :key="record.id"
        class="border-b border-[#7e7e7e] px-5"
      >
        <div class="py-2 flex items-center w-full justify-between text-[#aaa9a9]">
          <!-- <div>10:20</div> -->
          <div
            v-html="dateTime(record?.created_at)"
            class="text-ellipsis overflow-hidden max-w-[50px]"
          ></div>
          <div class="flex flex-col items-center justify-center text-white">
            <h1>{{ record?.request_amount }} 元</h1>
            <p>{{ record?.type }}</p>
            <!-- <p>{{ record?.sn }}</p> -->
          </div>
          <div class="flex flex-col items-center justify-center text-white">
            <!-- <h1>35:24</h1> -->
            <p
              class="text-[16px]"
              :class="
                record?.status == 0
                  ? 'text-red-500'
                  : record?.status == 1
                  ? 'text-green-500'
                  : 'text-[#ffc179]'
              "
            >
              {{ washStatus(record?.status) }}
            </p>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div v-if="total > pageSize" class="flex items-center justify-center mt-[30px]">
        <Paginate
          v-model="pageNum"
          :page-count="Math.ceil(total / pageSize)"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'上一页'"
          :next-text="'下一个'"
          :last-button-text="'最后'"
          :first-button-text="'第一'"
          :container-class="'pagination'"
          :hide-prev-next="true"
          :page-class="'page-item'"
          :first-last-button="true"
          class="flex items-center space-x-4"
          :no-li-surround="true"
          :page-link-class="'page-link'"
          :active-class="'active-class'"
        >
        </Paginate>
      </div>
    </section>

    <section v-if="activeTab == 4" class="py-3 w-full relative">
      <div class="bg-[#1f2129] my-2 py-2">
        <div v-if="betRecordData?.count" class="  w-full min-w-full flex flex-wrap justify-between items-center px-5 py-0">
            <div class="flex flex-col items-center ">
                <span class="text-base">有效下注量</span>
                <span class="text-sm text-[#a6a6a6]">{{betRecordData?.count?.total_valid_amount || 0}}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-base">总输赢</span>
                <span v-if="parseFloat(betRecordData?.count?.total_win_lose) > 0" class="text-sm text-green-500">{{betRecordData?.count?.total_win_lose || 0}}</span>
                <span v-else class="text-sm text-red-500">{{betRecordData?.count?.total_win_lose || 0}}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-base">洗码量</span>
                <span class="text-sm text-[#a6a6a6]">{{betRecordData?.count?.total_xml || 0}}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-base">下注笔数</span>
                <span class="text-sm text-[#a6a6a6]">{{total}}</span>
            </div>
        </div>
      </div>
      <section
        v-for="(bet, index) in betRecordData?.list"
        :key="index"
        class="shadow mb-2 bg-black px-5 text-white"
      >
        <div class="flex justify-between items-center border-b border-gray-800 py-2">
          <div class="flex flex-col">
            <span>下注时间</span>
            <span class="text-[#aaa9a9]">{{ TranDate(bet?.betTime) }}</span>
          </div>
          <div class="flex flex-col">
            <span>下注金额</span>
            <span class="text-[#aaa9a9]">{{ bet?.betAmount }}</span>
          </div>
          <div class="flex flex-col">
            <span>币种</span>
            <span class="text-[#aaa9a9]">{{ bet?.currency }}</span>
          </div>
        </div>
        <div class="flex justify-between items-center py-2">
          <div class="flex flex-col">
            <span>游戏结果</span>
            <span v-if="bet?.gameType == 601" class="text-[#aaa9a9]">{{
              TranResult1(bet)
            }}</span>
            <span
              class="text-[#aaa9a9]"
              v-else-if="bet?.gameType == 201 || bet?.gameType == 401"
              >{{ bet?.gameResult }}</span
            >
            <span class="text-[#aaa9a9]" v-else>{{ TranResult(bet) }}</span>
          </div>
          <div class="flex flex-col">
            <span>游戏类型</span>
            <span class="text-[#aaa9a9]"> {{ bet?.tableName }}</span>
          </div>
          <div class="flex flex-col">
            <span>桌台号</span>
            <span v-if="parseFloat(bet?.winOrLossAmount) > 0" class="text-green-500">{{
              bet?.winOrLossAmount
            }}</span>
            <span v-else class="text-red-500">{{ bet?.winOrLossAmount }}</span>
          </div>
        </div>
      </section>
      <!-- pagination -->
      <div v-if="total > pageSize" class="flex items-center justify-center mt-[30px]">
        <Paginate
          v-model="pageNum"
          :page-count="Math.ceil(total / pageSize)"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'上一页'"
          :next-text="'下一个'"
          :last-button-text="'最后'"
          :first-button-text="'第一'"
          :container-class="'pagination'"
          :hide-prev-next="true"
          :page-class="'page-item'"
          :first-last-button="true"
          class="flex items-center space-x-4"
          :no-li-surround="true"
          :page-link-class="'page-link'"
          :active-class="'active-class'"
        >
        </Paginate>
      </div>
    </section>
    <section v-if="activeTab == 5" class="py-3 w-full relative">

      <section
        v-for="(bet, index) in maxDepoRecordData"
        :key="index"
        class="shadow mb-2 bg-black px-5 text-white"
      >
        <div class="flex justify-between items-center border-b border-gray-800 py-2">
          <div class="flex flex-col">
            <span>下注时间</span>
            <span class="text-[#aaa9a9]">{{ TranDate(bet?.created_at) }}</span>
          </div>
          <div class="flex flex-col">
            <span>金额</span>
            <span class="text-[#aaa9a9]">{{ bet?.amount }}</span>
          </div>
          <div class="flex flex-col">
            <span>币种</span>
            <span class="text-[#aaa9a9]">{{ bet?.currency }}</span>
          </div>
        </div>

      </section>
    </section>
  </div>
</template>

<script setup>
import {
  GAME_TYPE,
  // CURRENCY,
  // GAME_STATUS,
  // BET_METHOD,
  APP_TYPE,
  // COMMISION_TYPE,
  BET_TYPE,
} from "@/utils/const";
import {
  MapBac,
  MapLongHu,
  MapNiuNiu,
  MapGoldenFlower,
  MapBoDin,
  MapSJB,
} from "@/utils/tools";

import bankApi from "@/network/bank.js";
import allApi from "@/network/allApi.js";
import AES from "@/utils/aes";
import Loading from "@/utils/loader";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted, computed, reactive } from "vue";
import {
  XIcon,
  UserIcon,
  LockClosedIcon,
  EyeIcon,
  LibraryIcon,
  DocumentTextIcon,
  EyeOffIcon,
  ChevronLeftIcon,
  SelectorIcon,
  CheckIcon,
  SearchIcon,
  ViewGridAddIcon,
} from "@heroicons/vue/outline";
import moment from "moment";
import Paginate from "vuejs-paginate-next";
import globaljs from "@/utils/global";

const router = useRouter();
const route = useRoute();
const store = useStore();
const recordData = ref(null);
const washrecordData = ref(null);
const betRecordData = ref(null);
const maxDepoRecordData = ref(null);
const pageNum = ref(1);
const pageSize = ref(10);
const total = ref(0);
const req_type = ref(0); //1 is deposit and 0 is withdraw

const activeTab = ref(0);
const activeDate = ref(1);
const range = reactive({
  start: new Date(),
  end: new Date(),
});

const masks = reactive({
  input: "YYYY/MM/DD",
});
const login_info = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const Tabclick = (number) => {
  activeTab.value = number;
  betRecordData.value = null; //reset data
  recordData.value = null; //reset data
  washrecordData.value = null; //reset data
  maxDepoRecordData.value = null // reset data
  pageNum.value = 1; //reset pagination
  pageSize.value = 10; //reset pagination
  total.value = 0; //reset pagination
  switch (number) {
    case 0: //withdraw
      req_type.value = 0;
      GetUpDownRecord();
      break;
    case 1: //deposit
      req_type.value = 1;
      GetUpDownRecord();
      break;
    case 2:
      WashRecord();
      break;
    case 4:
      BetRecord();
      break;
    case 5:
      getMaxDepoRecord();
      break;

    default:
      break;
  }
};

const goService = () => {
  globaljs.customerService();
};

const washStatus = (status) => {
  if (status == 0) return "拒绝";
  if (status == 1) return "接受";
  if (status == 2) return "等待";
};

const goUser = () => {
  router.push("/user");
};

const updateDate = (r) => {
  range.start = r.start;
  range.end = r.end;
};

const TranResult1 = (row) => {
  return MapSJB(row);
};

const TranResult = (row) => {
  // 百家乐
  if (
    row.gameType === 101 ||
    row.gameType === 102 ||
    row.gameType === 103 ||
    row.gameType === 104 ||
    row.gameType === 110
  ) {
    return MapBac(row.gameResult2);
  }
  // 龙虎
  if (row.gameType === 301) {
    return MapLongHu(row.gameResult2);
  }
  // 牛牛
  if (row.gameType === 801) {
    return MapNiuNiu(row.gameResult2);
  }
  // 博丁
  if (row.gameType === 501) {
    return MapBoDin(row.gameResult2);
  }
  // 炸金花/三公
  if (row.gameType === 901) {
    return MapGoldenFlower(row.gameResult2);
  }
};

const TranShow = (cont, data) => {
  return cont[data];
};

const TranDate = (date) => {
  if (!date) return "";
  return moment(date).format("YYYY-MM-DD");
};

const dateTime = (time) => {
  time = moment(new Date(time)).format("MM-DD HH:mm");
  return time;
};

const clickCallback = (pageNum) => {
  console.log(pageNum, "from click callback");

  request();
};

//call date today , last 7 , last 15 and last month
const clickDate = (num) => {
  activeDate.value = num;
  betRecordData.value = null; //reset data
  recordData.value = null; //reset data
  washrecordData.value = null; //reset data
  maxDepoRecordData.value = null; //reset data
  pageNum.value = 1; //reset pagination
  pageSize.value = 10; //reset pagination
  total.value = 0; //reset pagination
  switch (num) {
    case 1:
      range.start = new Date();
      range.end = new Date();
      break;
    case 2:
      range.start = moment().subtract(7, "d").format("YYYY-MM-DD HH:mm:ss");
      range.end = new Date();
      break;
    case 3:
      range.start = moment().subtract(15, "d").format("YYYY-MM-DD HH:mm:ss");
      range.end = new Date();
      break;
    case 4:
      range.start = moment().subtract(30, "d").format("YYYY-MM-DD HH:mm:ss");
      range.end = new Date();
      break;

    default:
      break;
  }
  // GetUpDownRecord()
  request(); //call data base on tab
};

const BetRecord = () => {
  let startTime_ = moment(new Date(range.start))
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
  let endTime_ = moment(new Date(range.end)).endOf("day").format("YYYY-MM-DD HH:mm:ss");
  let data = {
    player: login_info?.value?.info?.username,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    startDate: startTime_,
    endDate: endTime_,
  };

  Loading.showLoading();

  allApi
    .GetBetRecord({ data: data, key: login_info?.value?.key })
    .then((res) => {
      Loading.hideLoading();
      if (res.data.code == "1") {
        console.log("res of bet record data", res);
        betRecordData.value = res.data?.data;
        total.value = res.data?.data?.total;
      }
    })
    .catch((e) => {
      console.log(e);
      Loading.hideLoading();
    });
};

const GetUpDownRecord = () => {
  let startTime_ = moment(new Date(range.start))
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
  let endTime_ = moment(new Date(range.end)).endOf("day").format("YYYY-MM-DD HH:mm:ss");
  let data = {
    player: login_info?.value?.info?.username,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    startDate: startTime_,
    endDate: endTime_,
    type: req_type.value, // 1 is depo and 0 is withdraw
  };
  const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k);

  Loading.showLoading();

  allApi
    .GetUpDownRecord({ data: data, key: login_info?.value?.key })
    .then((res) => {
      Loading.hideLoading();
      if (res.data.code == "1") {
        console.log("res of getupdown record data", res);
        recordData.value = res.data?.data?.list;
        total.value = res.data?.data?.total;
      }
    })
    .catch((e) => {
      console.log(e);
      Loading.hideLoading();
    });
};

const WashRecord = () => {
  let startTime_ = moment(new Date(range.start))
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
  let endTime_ = moment(new Date(range.end)).endOf("day").format("YYYY-MM-DD HH:mm:ss");
  let data = {
    player: login_info?.value?.info?.username,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    startDate: startTime_,
    endDate: endTime_,
  };
  Loading.showLoading();

  allApi
    .GetWashRecord({ data: data, key: login_info?.value?.key })
    .then((res) => {
      Loading.hideLoading();
      if (res.data.code == "1") {
        console.log("res of GetWashRecord data", res);
        washrecordData.value = res.data?.data?.list;
        total.value = res.data?.data?.total;
      }
    })
    .catch((e) => {
      console.log(e);
      Loading.hideLoading();
    });
};
const getMaxDepoRecord = () => {
  let data = {
    player: login_info?.value?.info?.username,
    // pageNum: pageNum.value,
    // pageSize: pageSize.value,
    // startDate: startTime_,
    // endDate: endTime_,
  };
  Loading.showLoading();

  allApi
    .GetMaxDepoRecord({ data: data })
    .then((res) => {
      Loading.hideLoading();
      if (res.data.code == "1") {
        console.log("res of GetMaxDepoRecord data", res);
        maxDepoRecordData.value = res.data?.data?.list;
        total.value = res.data?.data?.total;
      }
    })
    .catch((e) => {
      console.log(e);
      Loading.hideLoading();
    });
};

const request = () => {
  if (activeTab.value == 0 || activeTab.value == 1) {
    GetUpDownRecord();
  }

  if (activeTab.value == 2) {
    WashRecord();
  }
  if (activeTab.value == 4) {
    BetRecord();
  }
  if (activeTab.value == 5) {
    getMaxDepoRecord();
  }
};

onMounted(() => {
  if (!token?.value) return router.push("/login");
  //activeTab.value = route.query?.type //0 withdraw 1, deposit
  GetUpDownRecord();
});
</script>
