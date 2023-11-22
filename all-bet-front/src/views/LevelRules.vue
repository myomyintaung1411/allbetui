<template>
    <div class="rule_bg hidden sm:block">
        <div class="mx-auto min-w-[1300px]  relative">
            <div class="pt-96 text-center">
                <div class="w-full text-center flex justify-center">
                    <img class="h-10" src="@/assets/leveluptitle.webp" alt="">
                </div>
                <!-- <div class="w-full space-x-1   mt-20 flex items-center bg-opacity-50">
                    <div class="w-[90px] text-center py-2 font-bold bg-[rgba(0,0,0,0.3)] text-[#faebc5]">
                     会员星级
                    </div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]   bg-[#181a1d] bg-opacity-70">Lv.1</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">Lv.2</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">Lv.3</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">VIP4</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">VIP5</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">VIP6</div>
                </div>
                <div class="w-full space-x-1   mt-2 flex items-center bg-opacity-50">
                    <div class="w-[90px] text-center py-2 font-bold bg-[rgba(0,0,0,0.3)] text-[#faebc5]">
                     晋升要求	
                    </div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]   bg-[#181a1d] bg-opacity-70">完成首笔充值即可</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">周洗码大于≥10万(奖励88）</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">周洗码大于≥50万(奖励388)</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">周洗码大于≥100万(奖励888）</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">周洗码大于≥300万(奖励1888）</div>
                    <div class="w-[290px] whitespace-nowrap py-2  text-[#faebc5]  bg-[#181a1d] bg-opacity-70">周洗码大于≥1,000万(奖励2888）</div>
                </div> -->
                <table class="text-[#faebc5] border-separate border-spacing-[5px] mt-[10px] mx-auto text-sm">
                    <tbody>
                       <tr>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[90px] h-[44px]">
                            会员星级
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            Lv.1
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            Lv.2
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            Lv.3
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            VIP4
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            VIP5
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            VIP6
                        </td>
                       </tr> 
                       <tr>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[90px] h-[44px]">
                            晋升要求
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            
                            完成首笔充值
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            
                            周洗码大于≥10万(奖励88）
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
        
                            周洗码大于≥50万(奖励388)
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            周洗码大于≥100万(奖励888）
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            周洗码大于≥300万(奖励1888）
                        </td>
                        <td class="bg-[#181a1d] bg-opacity-70 text-[#faebc5] font-bold w-[200px]">
                            周洗码大于≥1,000万(奖励2888）
                        </td>
                       </tr> 
                    </tbody>
                </table>

                 <!-- <div class="w-full text-center flex justify-center mt-5">
                    <img class="h-10" src="@/assets/levelbelow.webp" alt="">
                </div>
                <div class="mx-auto max-w-6xl mt-5 text-left ">
                    <ol class=" list-none text-sm text-[#faebc5] space-y-2 tracking-widest">
                        <li>
                            1. 活动弄一个不同等级送彩金不同彩金 ，lv1完成首笔充值即可，lv2周洗码大于≥10万(奖励88.），lv3周洗码大于≥50万(奖励388.），lv4周洗码大于≥100万(奖励888.），lv5周洗码大于≥300万(奖励1888.），lv6周洗码大于≥1000万(奖励2888.），
                        </li>
                        <li>
                            2. 新注册用户下载app绑定信息，充值100以上送18，(100➕18）✖️10流水下分
                        </li>
                        <li>
                           3. 活动期间，会员进入旗舰厅在百家乐b018.b019.b219桌台累计周洗码投注大于≥10万，奖金（58），周洗码投注大于≥100万，奖金（588），周洗码投注大于≥200万，奖金（1288），周洗码投注大于≥500万，奖金（2888），活动规则周期内达到指定投档投注即可享受对应加码奖励，1倍流水即可取款
                        </li>
                        <li>
                           4.新人见面礼，首存7天内，单笔存款大于≥168即可申请16.8百分比，最好可享16888，祝你一路发！（存款➕礼金）✖️16倍流水即可取款
                        </li>
                    </ol>
                </div> -->
            </div>
        </div>
    </div>

    <div class="w-full h-auto  bg-[#171a21] relative sm:hidden">
        <div class="h-[60px]  w-full text-gray-400   px-2 flex justify-between items-center">
            <ChevronLeftIcon @click="goBack()" class="w-7 h-7 "></ChevronLeftIcon>
            <p class=" text-[17px]">     投注即送1.2%洗码 </p>
            <div class="flex flex-col pt-2 text-center mr-2 items-center whitespace-nowrap ">
                <img src="@/assets/mobile/user/service.png" alt="" class="h-7 w-7">
                <p>客服</p>
            </div>
        </div>
        <section class="upgradeBonus">
          <div class="w-full flex justify-center mt-5">
                        <img class="h-10" src="@/assets/leveluptitle.webp" alt="">
                    </div>
            <div class=" px-3 w-full">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full relative">
                                <thead class="  border border-[#c99f62] text-[#c99f62]   sticky top-0">
                                    <tr>
                                        <th scope="col"
                                            class="text-sm font-bod    px-2 py-4 text-left border-r border-[#6f4515]">
                                            <div class="flex flex-col items-center">
                                                <p class="py-2">会员星级</p>
                                            </div>
                                        </th>
                                        <th scope="col"
                                            class="text-sm font-bod   px-2 py-4 text-left border-r border-[#6f4515]">
                                            <div class="flex flex-col items-center">
                                                <p class="py-2"> 晋升要求 </p>
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
                </div>
                <!--  -->
                <!-- <section class="active py-3 text-[#c99f62]">
                    <div class="w-full flex justify-center mt-5">
                        <img class="h-10" src="@/assets/levelbelow.webp" alt="">
                    </div>
                    <div class="px-3 text-white">
                        <ol>
                            <li class=" text-sm py-1">
                                1. 活动弄一个不同等级送彩金不同彩金 ，lv1完成首笔充值即可，lv2周洗码大于≥10万(奖励88.），lv3周洗码大于≥50万(奖励388.），lv4周洗码大于≥100万(奖励888.），lv5周洗码大于≥300万(奖励1888.），lv6周洗码大于≥1000万(奖励2888.），
                            </li>
                            <li class=" text-sm  py-1">
                               2. 新注册用户下载app绑定信息，充值100以上送18，(100➕18）✖️10流水下分
                            </li>
                            <li class=" text-sm  py-1">
                               3. 活动期间，会员进入旗舰厅在百家乐b018.b019.b219桌台累计周洗码投注大于≥10万，奖金（58），周洗码投注大于≥100万，奖金（588），周洗码投注大于≥200万，奖金（1288），周洗码投注大于≥500万，奖金（2888），活动规则周期内达到指定投档投注即可享受对应加码奖励，1倍流水即可取款
                            </li>
                            <li class=" text-sm  py-1">
                                4.新人见面礼，首存7天内，单笔存款大于≥168即可申请16.8百分比，最好可享16888，祝你一路发！（存款➕礼金）✖️16倍流水即可取款
                            </li>
                        </ol>
                    </div>
                </section> -->
            </div>
        </section>
    </div>
    
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()

const tableData = ref([
    {
        id: 1,
        level: 'Lv.1',
        title: '完成首笔充值',
        
    },
    {
        id: 2,
        level: 'Lv.2',
        title: '周洗码大于≥10万(奖励88）',
       
    },
    {
        id: 3,
        level: 'Lv.3',
        title: '周洗码大于≥50万(奖励388)',
       
    },
    {
        id: 4,
        level: 'VIP4',
        title: '周洗码大于≥100万(奖励888）',
      
    },
    {
        id: 5,
        level: 'VIP5',
        title: ' 周洗码大于≥300万(奖励1888）',
       
    },
    {
        id: 6,
        level: 'VIP6',
        title: '周洗码大于≥1,000万(奖励2888）',
       
    }
])

const goBack = () => {
    router.go(-1)
}
</script>

<style scoped>
    .rule_bg{
        background-image: url("@/assets/rulebg.webp");
        background-color: #000;
        background-repeat: no-repeat;
        background-position: top;
        width: 100%;
        min-width: 100vw;
        background-size: cover;
        position: relative;
        padding: 30px 0px;
        height: 100vh;
    }
</style>