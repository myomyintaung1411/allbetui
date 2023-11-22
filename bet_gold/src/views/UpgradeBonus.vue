<template>
    <div class="w-full h-auto  bg-[#171a21] relative sm:hidden">
        <div class="h-[60px] w-full px-6 flex justify-between items-center">
           <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px] font-bold"> 晋级有礼 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
                <img src="@/assets/mobile/home/service.png" alt="" class="h-6 w-8">
            </div>
        </div>
        <section class="upgradeBonus">
            <div class="h-[300px] relative">
                <img src="@/assets/upgb.png" alt="" class="w-full h-full">
                <img src="@/assets/yl.png" alt="" class="w-[20rem] h-[8rem] absolute bottom-[5rem] left-7">
            </div>
            <div class=" px-3 w-full">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full relative">
                                <thead class="  border border-[#dfa009] sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-2 py-4 border-r border-[#3d260bc2]">
                                            <div class="flex flex-col items-center">
                                                <img src="@/assets/x.png" alt="" class="w-8 h-12">
                                            </div>
                                        </th>
                                        <th scope="col" class="px-2 py-4  border-r border-[#6e4312]">
                                            <div class="flex flex-col items-center">
                                                <img src="@/assets/t.png" alt="" class="w-16 h-12">
                                            </div>
                                        </th>
                                        <th scope="col" class="px-2 py-4  border-r border-[#dfa009]">
                                            <div class="flex flex-col items-center">
                                                <img src="@/assets/l.png" alt="" class="w-14 h-12">
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in tableData" :key="data.id" class="border border-[#dfa009]">
                                        <td
                                            class="px-3 py-4 font-bold  whitespace-nowrap text-center text-sm  border-r border-[#3d260bc2] ">
                                            {{ data.level }}
                                        </td>
                                        <td
                                            class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#6e4312]">
                                            {{ data.title }}
                                        </td>
                                        <td
                                            class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#dfa009]">
                                            {{ data.amount }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!--  -->
                <section class="active py-3">
                    <p class="text-center text-xl">活动细则</p>
                    <div class="px-3">
                        <ol>
                            <li class=" text-sm py-1">
                                1. 本活动只适用于活动开始后的晋级，以往已晋级将不补发礼金；
                            </li>
                            <li class=" text-sm  py-1">
                                2. 周洗码投注额分开计算人民币和USDT账户，投注特惠电子游戏和部分体育盘口等将不计入洗码投注额，详见
                            </li>
                            <li class=" text-sm  py-1">
                                3. 每周一更新星级，双账户同步晋升且永久保持，可享受更高洗码比例等特权，从Lv.1开始每晋升一级可获得对应礼金，合计可领6,140元；
                            </li>
                            <li class=" text-sm  py-1">
                                4. 晋级礼金需于活动页手动领取，CNY活动页领取派发至CNY账户，USDT活动页领取派发至USDT账户，1倍流水可取款，限当周领取，逾期未领取视为自愿放弃；
                            </li>
                            <li class=" text-sm  py-1">
                                5. 此优惠只适用于一个账号玩家；同一手机号码、银行资料、登录设备ID及IP地址只能享受一次；
                            </li>
                            <li class=" text-sm  py-1">
                                6. 对于各种非正常投注、如对冲等行为，一经发现将取消优惠资格；
                            </li>
                            <li class=" text-sm  py-1">
                                7. 为避免文字理解差异，欧博保留最终解释权。
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </section>
    </div>

    <div class="hidden sm:block relative overflow-x-hidden ">
        <Header></Header>
        <div style="background-color: #350f0330">
            <!-- <div class="w-full h-[418px]">
                <div class="absolute head-wrapper"></div>
            </div> -->
            <div class="h-[350px] __bgupg relative">
                <!-- <img src="@/assets/pc/upgb.png" alt="" class="w-[350px] h-full absolute m-auto left-0 right-0"> -->
                <img src="@/assets/pc/up1.png" alt="" class="w-[350px] h-full absolute m-auto left-0 right-0">
            </div>

            <div class="mx-auto  max-w-[1920px]">
                <div class="relative pt-[10px] pb-[90px] box-border">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2  min-w-full mx-auto flex justify-center sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-[900px] relative">
                                    <thead class="  border border-[#ffb538] sticky top-0">
                                        <tr>
                                            <th scope="col"
                                                class="text-sm font-medium    px-2 py-4 text-left border-r border-[#6f4515]">
                                                <div class="flex flex-col items-center">
                                                    <img src="@/assets/x.png" alt="" class="w-8 h-12">
                                                </div>
                                            </th>
                                            <th scope="col"
                                                class="text-sm font-medium   px-2 py-4 text-left border-r border-[#6f4515]">
                                                <div class="flex flex-col items-center">
                                                    <img src="@/assets/t.png" alt="" class="w-16 h-12">
                                                </div>
                                            </th>
                                            <th scope="col"
                                                class="text-sm font-medium   px-2 py-4 text-left border-r border-[#ffb538]">
                                                <div class="flex flex-col items-center">
                                                    <img src="@/assets/l.png" alt="" class="w-14 h-12">
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="data in tableData" :key="data.id" class="border border-[#ffb538]">
                                            <td
                                                class="px-3 py-4 font-bold  whitespace-nowrap text-center text-sm  border-r border-[#6f4515] ">
                                                {{ data.level }}
                                            </td>
                                            <td
                                                class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#6f4515]">
                                                {{ data.title }}
                                            </td>
                                            <td
                                                class="text-sm font-bold text-center   px-3 py-4 whitespace-nowrap border-r border-[#ffb538]">
                                                {{ data.amount }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-10 mx-auto max-w-[1000px] " style="background-color: #2c2829;">
                <div class="w-full text-center">
                    <h1 class="text-xl">活动规则</h1>
                </div>
                <div class="py-3 px-6 space-y-3">
                    <ul class="space-y-3">
                        <li>
                            1. 本活动只适用于活动开始后的晋级，以往已晋级将不补发礼金；
                        </li>
                        <li>
                            2. 周洗码投注额分开计算人民币和USDT账户，投注特惠电子游戏和部分体育盘口等将不计入洗码投注额，详见洗码活动页；
                        </li>
                        <li>
                            3. 每周一更新星级，双账户同步晋升且永久保持，可享受更高洗码比例等特权，从Lv.1开始每晋升一级可获得对应礼金，合计可领6,140元；
                        </li>
                        <li>
                            4. 晋级礼金需于活动页手动领取，CNY活动页领取派发至CNY账户，USDT活动页领取派发至USDT账户，1倍流水可取款，限当周领取，逾期未领取视为自愿放弃；
                        </li>
                        <li>
                            5. 此优惠只适用于一个账号玩家；同一手机号码、银行资料、登录设备ID及IP地址只能享受一次；
                        </li>
                        <li>
                            6. 对于各种非正常投注、如对冲等行为，一经发现将取消优惠资格；
                        </li>
                        <li>
                            7. 为避免文字理解差异，欧博保留最终解释权。
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="py-7 w-full text-center">
            <p>© 2022 龙凯 版权所有. All rights Reserved</p>
        </div>
    </div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Header from "@/components/Header.vue";

const router = useRouter()
const tableData = ref([
    {
        id: 1,
        level: 'Lv.1',
        title: '新用户完成首笔存款',
        amount: '/'
    },
    {
        id: 2,
        level: 'Lv.2',
        title: '周洗码投注额≥10万',
        amount: '88元'
    },
    {
        id: 3,
        level: 'Lv.3',
        title: '周洗码投注额≥50万',
        amount: '388元'
    },
    {
        id: 4,
        level: 'VIP4',
        title: '周洗码投注额≥100万',
        amount: '888元'
    },
    {
        id: 5,
        level: 'VIP5',
        title: '周洗码投注额≥300万',
        amount: '1,888元'
    },
    {
        id: 6,
        level: 'VIP6',
        title: '周洗码投注额≥1,000万',
        amount: '2,888元'
    }
])

const goUser = () => {
    router.go(-1)
}
</script>

<style scoped>
.__bgupg {
    background-image: url(@/assets/upg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
}

.upgradeBonus {
    /* background-image: url("@/assets/mobile/coporation/bonus.webp");
    background-size: 100% 800px;
    background-color: #501a0a;
    background-repeat: no-repeat; */
    height: auto;
}

.table-header {
    background-color: rgba(38, 20, 0, .76);
    border: 1px solid #ffc64f;
    border-radius: 4px;
}


.__bgupg {
    background-image: url(@/assets/upg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
}
</style>