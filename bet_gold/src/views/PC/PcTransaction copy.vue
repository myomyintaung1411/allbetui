<template>
    <div class="hidden sm:block relative flex-auto mx-[19px] sm:h-auto bg-black">
        <!-- <div v-if="recordData?.list?.length > 10" class="flex items-center justify-center">
            <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)" :page-range="3" :margin-pages="1"
                :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'" :last-button-text="'最后'"
                :first-button-text="'第一'" :container-class="'pagination'" :hide-prev-next="true"
                :page-class="'page-item'" :first-last-button="true" class="flex items-center space-x-4"
                :no-li-surround="true" :page-link-class="'page-link'" :active-class="'active-class'">

            </Paginate>
        </div> -->

        <div class="
        w-full
        tabs
        flex
        items-center
        justify-between
        border-b border-[#d7d4d4]
        mt-4
      ">
            <div @click="Tabclick(0)" class="
          text-base text-center
          py-2
          cursor-pointer
          w-[120px]
          tracking-wider
        " :class="activeTab == 0 ? 'border-b-[4px] border-[#d7d4d4]' : ''">
                取款
            </div>
            <div @click="Tabclick(1)" class="
          text-base text-center
          py-2
          cursor-pointer
          w-[120px]
          tracking-wider
        " :class="activeTab == 1 ? 'border-b-[4px] border-[#d7d4d4]' : ''">
                存款
            </div>
            <div @click="Tabclick(2)" class="
          text-base text-center
          py-2
          cursor-pointer
          w-[120px]
          tracking-wider
        " :class="activeTab == 2 ? 'border-b-[4px] border-[#d7d4d4]' : ''">
                洗码
            </div>
            <div @click="Tabclick(3)" class="
          text-base text-center
          py-2
          cursor-pointer
          w-[120px]
          tracking-wider
        " :class="activeTab == 3 ? 'border-b-[4px] border-[#d7d4d4]' : ''">
                优惠
            </div>
        </div>

        <section class="mt-8 w-full flex items-center justify-between">
            <!-- <div class=" h-[60px] flex  justify-center items-center  relative">
                <v-date-picker locale="zh" v-model="range" :masks="masks" is-range :min-date="minDate()"
                    :max-date="new Date()" @drag="updateDate($event)">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="flex justify-center items-center text-black">
                            <input :value="inputValue.start" v-on="inputEvents.start"
                                class="border px-2 py-2 w-40 rounded focus:outline-none focus:border-indigo-300" />
                            <svg class="w-4 h-4 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <input :value="inputValue.end" v-on="inputEvents.end"
                                class="border px-2 py-2 w-40 rounded focus:outline-none focus:border-indigo-300" />
                        </div>
                    </template>
                </v-date-picker>
            </div> -->
            <div class="flex justify-center items-center relative bg-[#1e2128] py-1 pr-8">
                <v-date-picker locale="zh" v-model="range" :masks="masks" is-range :max-date="new Date()"
                    @drag="updateDate($event)">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="flex justify-center items-center">
                            <input :value="inputValue.start" v-on="inputEvents.start" class="
                  pl-4
                  py-2
                  w-[6rem]
                  rounded
                  focus:outline-none
                  border-none
                  bg-[#1e2128]
                  cursor-pointer
                " />
                            <div class="text-xl">~</div>
                            <input :value="inputValue.end" v-on="inputEvents.end" class="
                  pl-2
                  py-2
                  w-[7rem]
                  rounded
                  focus:outline-none
                  bg-[#1e2128]
                  cursor-pointer
                " />
                        </div>
                    </template>
                </v-date-picker>
                <img src="@/assets/pc/Home/calendar.png" alt="" class="w-9 h-9" />
            </div>

            <div class="bg-[#1e2128] mr-[15rem]" v-if="activeTab == 0">
                <div class="flex space-x-8 items-center px-4 py-2.5">
                    <div>全部状态</div>
                    <img src="@/assets/pc/Home/arrowDown.png" alt="" class="w-4 h-3" />
                </div>
            </div>

            <div class="flex space-x-2 mr-10" v-if="activeTab == 1">
                <div class="bg-[#1e2128]">
                    <div class="flex space-x-8 items-center px-4 py-2.5">
                        <div>全部存款方式</div>
                        <img src="@/assets/pc/Home/arrowDown.png" alt="" class="w-4 h-3" />
                    </div>
                </div>

                <div class="bg-[#1e2128]">
                    <div class="flex space-x-8 items-center px-4 py-2.5">
                        <div>全部存款状态</div>
                        <img src="@/assets/pc/Home/arrowDown.png" alt="" class="w-4 h-3" />
                    </div>
                </div>
            </div>

            <div class="bg-[#1e2128] mr-[14rem]" v-if="activeTab == 2">
                <div class="flex space-x-8 items-center px-4 py-2.5">
                    <div>全部游戏厅</div>
                    <img src="@/assets/pc/Home/arrowDown.png" alt="" class="w-4 h-3" />
                </div>
            </div>

            <div class="flex items-center space-x-2 px-5">
                <div @click="refreshRec" class="
            text-center
            w-[109px]
            h-[42px]
            flex
            justify-center
            items-center
            border border-[#d7d4d4]
          ">
                    查询
                </div>
                <div class="relative">
                    <img src="@/assets/pc/Home/bg1.png" alt="" class="w-[109px] h-[42px]" />
                    <div class="
              absolute
              bottom-0
              h-full
              flex
              justify-center
              items-center
              text-base text-black
              w-full
            ">
                        批量删除
                    </div>
                </div>
            </div>
        </section>

        <section class="relative mt-2 w-full bg-[#1f2129] h-[715px]">
            <div class="overflow-auto h-[650px]">
                <table class="w-full min-w-full h-full relative">
                    <thead class="border-b-[3px] border-[#d7d4d4]">
                        <tr>
                            <th scope="col" class="text-[15px] font-medium w-[150px] py-4">
                                存款时间
                            </th>
                            <th scope="col" class="text-[15px] font-medium w-[180px] py-4">
                                订单号
                            </th>
                            <th scope="col" class="text-[15px] font-medium py-4">存款类型</th>
                            <th scope="col" class="text-[15px] font-medium py-4">存款状态</th>
                            <th scope="col" class="text-[15px] font-medium py-4">
                                金额 | 明细
                            </th>
                            <th scope="col" class="text-[15px] font-medium py-4">操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="record in recordData" :key="record.id" class="border-b border-[#d7d4d4]">
                            <td class="text-[13px] font-medium w-[150px] text-center py-3">
                                2022-12-09 13:51:31
                            </td>
                            <td class="text-[13px] font-medium w-[180px] text-center py-2">
                                {{ record?.sn }}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2">转银行卡</td>
                            <td class="text-[13px] font-medium text-center py-2 text-[#c15410]">
                                审核中
                            </td>
                            <td class="text-[13px] font-medium text-center py-2">
                                ￥{{ record?.amount }}
                            </td>
                            <td class="text-[13px] font-medium text-center py-2">催单</td>
                        </tr>
                    </tbody>

                    <div v-if="histories.length == 0" class="
              w-full
              h-full
              flex
              justify-center
              items-center
              absolute
              top-0
            ">
                        <img src="@/assets/pc/Home/jl.png" alt="" class="w-14 h-16" />
                    </div>
                </table>
            </div>
            <!-- pagination -->
            <div v-if="total > pageSize" class="flex items-center justify-center">
                <Paginate v-model="pageNum" :page-count="Math.ceil(total / pageSize)" :page-range="3" :margin-pages="1"
                    :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一个'" :last-button-text="'最后'"
                    :first-button-text="'第一'" :container-class="'pagination'" :hide-prev-next="true"
                    :page-class="'page-item'" :first-last-button="true" class="flex items-center space-x-4"
                    :no-li-surround="true" :page-link-class="'page-link'" :active-class="'active-class'">
                </Paginate>
            </div>

            <div class="
          w-full
          flex
          justify-between
          items-center
          sticky
          bottom-0
          border-t-[3px] border-[#d7d4d4]
        ">
                <div class="flex justify-start space-x-4 ml-6 mt-5">
                    <div class="flex justify-start space-x-2" @click="rememberMe = !rememberMe">
                        <img v-if="rememberMe" src="@/assets/pc/Home/fill.png" alt="" class="w-5 h-5" />
                        <img v-else src="@/assets/pc/Home/box.png" alt="" class="w-5 h-5" />

                        <div>全选</div>
                    </div>
                    <div class="flex justify-start space-x-2" @click="remember = !remember">
                        <img v-if="remember" src="@/assets/pc/Home/fill.png" alt="" class="w-5 h-5" />
                        <img v-else src="@/assets/pc/Home/box.png" alt="" class="w-5 h-5" />
                        <div>反选</div>
                    </div>
                </div>

                <div class="pr-6 mt-5 cursor-pointer">删除</div>
            </div>
        </section>
    </div>
</template>

<script setup>
import allApi from "@/network/allApi.js";
import AES from "@/utils/aes";
import Loading from "@/utils/loader";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted, computed, reactive } from "vue";
import moment from "moment";
import Paginate from "vuejs-paginate-next";

const router = useRouter();
const store = useStore();
const recordData = ref(null);
const pageNum = ref(1);
const pageSize = ref(10);
const total = ref(0);
const req_type = ref(1); //0 is deposit and 1 is withdraw
const rememberMe = ref(false);
const remember = ref(false);

const range = reactive({
    start: new Date(),
    end: new Date(),
});
const masks = reactive({
    input: "YYYY/MM/DD",
});

const activeTab = ref(0);

const userValue = computed(() => store.getters["user/LOGIN"]);
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);
const histories = ref([]);

const updateDate = (r) => {
    range.start = r.start;
    range.end = r.end;
};

const clickCallback = (pageNum) => {
    console.log(pageNum, "from click callback");
    GetUpDownRecord();
};

const refreshRec = () => {
    GetUpDownRecord();
};

const minDate = () => {
    var d = moment().subtract(7, "d").format("YYYY-MM-DD");
    return d;
};

const Tabclick = (num) => {
    activeTab.value = num;
    recordData.value = null; //reset data
    pageNum.value = 1; //reset pagination
    pageSize.value = 10; //reset pagination
    total.value = 0; //reset pagination
    switch (num) {
        case 0: //withdraw
            req_type.value = 1;
            break;
        case 1: //deposit
            req_type.value = 0;
            break;

        default:
            break;
    }
    GetUpDownRecord();
};

const GetUpDownRecord = () => {
    let startTime_ = moment(new Date(range.start))
        .startOf("day")
        .format("YYYY-MM-DD HH:mm:ss");
    let endTime_ = moment(new Date(range.end))
        .endOf("day")
        .format("YYYY-MM-DD HH:mm:ss");
    let data = {
        player: userValue?.value?.info?.username,
        pageNum: pageNum.value,
        pageSize: pageSize.value,
        startDate: startTime_,
        endDate: endTime_,
        type: req_type.value,
    };
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k);

    Loading.showLoading();

    allApi
        .GetUpDownRecord({ data: data, key: userValue?.value?.key })
        .then((res) => {
            Loading.hideLoading();
            if (res.data.code == "1") {
                console.log("res of getupdown record data", res);
                recordData.value = res.data.data?.list;
                total.value = res.data?.data?.total;
            }
        })
        .catch((e) => {
            console.log(e);
            Loading.hideLoading();
        });
};

const request = () => {
    GetUpDownRecord();
};
onMounted(() => {
    GetUpDownRecord();
    if (!token?.value) return router.push("/login");
});
const goUser = () => {
    router.go(-1);
};
</script>
<style>
.page-item {
    @apply px-4 py-2 bg-blue-500;
}

.page-link {
    /* background: red !important; */
    /* @apply bg-[#c15410] text-[#fff] sm: py-1 px-4 cursor-pointer rounded-full sm:rounded-none */
    @apply bg-gradient-to-b from-[#aca8a8] via-[#fef5f6] to-[#dcd8d7] text-[#fff] px-2 sm:px-4 sm:py-1 cursor-pointer rounded-full sm:rounded-none;
}

.active-class {
    display: inline-block;
    color: #241e1e;
    @apply bg-white !important;
}
</style>