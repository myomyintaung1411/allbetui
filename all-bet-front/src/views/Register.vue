<template>
    <div class="hidden sm:block min-h-screen bg-[#16181f]">
        <Header></Header>
        <div class="register-fame">
            <div class="relatvie w-[946px] pt-20 mx-auto flex justify-between">
                <div class="h-[650px] w-[470px]   ">
                    <img src="@/assets/pc/Home/register.png" class="w-full h-full" alt="">
                </div>
                <div class="pc-reg-container  min-h-[550px] w-[600px] bg-[#171a21] rounded-[3px] ">
                    <div class="flex flex-col items-center  h-full px-6 py-6">
                        <section class="w-full  px-8 py-2">
                            <div class="flex items-center justify-evenly">
                                <div @click="Tabclick(0)"
                                    class="relative text-base cursor-pointer text-center h-9 w-[105px]"
                                    :class="activeTab == 0 ? 'before:absolute before:h-[2px] before:left-0 before:w-full before:bottom-0 before:bg-[#eed0a4] text-[#eed0a4]' : 'text-[#7e7e7e]'">
                                    账号注册
                                </div>
                                <div @click="Tabclick(1)" class="relative text-base cursor-pointer text-center h-9 w-[105px]
                             
                            " :class="activeTab == 1 ? 'before:absolute before:h-[2px] before:left-0 before:w-full before:bottom-0 before:bg-[#eed0a4] text-[#eed0a4]' : 'text-[#7e7e7e]'">
                                    手机注册</div>
                            </div>
                        </section>
                        <div class="relative pt-[10px] pb-[40px] h-full">
                            <form @click.prevent>
                                <div class="w-[377px] h-full flex flex-col items-stretch  mx-auto">
                                    <div v-if="activeTab == 0" class="form-now relative flex items-end my-5 w-full  ">
                                        <div
                                            class="required-symbol required-star absolute bottom-2 -left-[18px] w-[18px] text-[#c3231c]">
                                            *</div>
                                        <div class="relative flex items-center h-[50px] w-full">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto  ">
                                                <div
                                                    class="  border-none w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model.trim="name" autocomplete="off" class="  text-[#d0d0d0]  pc-input  
                                                         bg-transparent 
                                        w-full h-full" id="pcusername" pattern="" name="username" placeholder="请输入用户名"
                                                        min="6" max="12" maxlength="12" type="text">
                                                    <XIcon v-if="name" @click="name = ''"
                                                        class="h-5 w-5 cursor-pointer  absolute right-3  "></XIcon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="activeTab == 0" class="form-now relative flex items-end w-full   ">
                                        <div
                                            class="required-symbol required-star absolute bottom-2 -left-[18px] w-[18px] text-[#c3231c]">
                                            *</div>
                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div
                                                    class="    w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model.trim="pass" autocomplete="off" :type="passwordField"
                                                        class=" pc-input bg-transparent   
                                                       text-[#d0d0d0] w-full h-full " id="pcpassword" pattern=""
                                                        name="username" placeholder="请输入密码" min="6" max="12"
                                                        maxlength="12">
                                                    <XIcon v-if="pass" @click="pass = ''"
                                                        class="h-5 w-5 cursor-pointer   absolute right-10  "></XIcon>
                                                    <div class="absolute right-3">
                                                        <EyeIcon v-if="passwordField !== 'password'"
                                                            @click="showVisibile" class="w-5 h-5 " />
                                                        <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="activeTab == 0" class="form-now relative flex items-end w-full my-5  ">
                                        <div
                                            class="required-symbol required-star absolute bottom-2 -left-[18px] w-[18px] text-[#c3231c]">
                                            *</div>
                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div
                                                    class="    w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model.trim="confirmpass" autocomplete="off"
                                                        :type="con_passField" class=" pc-input bg-transparent   
                                                      text-[#d0d0d0] w-full h-full " id="pcconfirmpass" pattern=""
                                                        name="confirmpass" placeholder="请输入确认密码" min="6" max="12"
                                                        maxlength="12">
                                                    <XIcon v-if="confirmpass" @click="confirmpass = ''"
                                                        class="h-5 w-5 cursor-pointer   absolute right-10  "></XIcon>
                                                    <div class="absolute right-3">
                                                        <EyeIcon v-if="con_passField !== 'password'"
                                                            @click="confirmshowVisibile" class="w-5 h-5 " />
                                                        <EyeOffIcon v-else @click="confirmshowVisibile"
                                                            class="w-5 h-5 " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="activeTab == 1" class="form-now relative flex items-end w-full my-5  ">
                                        <div
                                            class="required-symbol required-star absolute bottom-2 -left-[18px] w-[18px] text-[#c3231c]">
                                            *</div>
                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div @click="showPhoneDialog = !showPhoneDialog"
                                                    class="w-[100px] whitespace-nowrap cursor-pointer text-white border-[#7e7e7e] mx-2  border-b h-full text-center flex justify-center items-center">
                                                    <p>{{selectPhone || `中国+86`}}</p>
                                                    <ChevronDownIcon class="w-5 h-5"></ChevronDownIcon>
                                                </div>
                                                <div
                                                    class="    w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model.trim="phoneNum" autocomplete="off" type="tel" class=" pc-input bg-transparent   
                                                      text-[#d0d0d0] w-full h-full " id="pcphoneNum" pattern=""
                                                        name="phoneNum" placeholder="手机号码" min="11" max="11"
                                                        maxlength="11">
                                                    <XIcon v-if="phoneNum" @click="phoneNum = ''"
                                                        class="h-5 w-5 cursor-pointer   absolute right-10  "></XIcon>
                                                </div>
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div v-if="showPhoneDialog" @click="showPhoneDialog = false"
                                            class="absolute -bottom-8 z-20 w-[250px] h-[40px]  ">
                                            <div class="max-h-[300px] overflow-y-auto">
                                            <div v-for="phone in listPhone" :key="phone.id" @click="selectPhoneNumber(phone)"
                                                class=" h-[40px] cursor-pointer text-sm w-full px-4  flex  bg-[#1f2129] border-b border-[#3a3a43] items-center justify-start text-white">
                                                {{phone.phone}}
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div v-if="activeTab == 1" class="form-now relative flex items-end w-full my-3  ">
                                        <div
                                            class="required-symbol required-star absolute bottom-2 -left-[18px] w-[18px] text-[#c3231c]">
                                            *</div>
                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div
                                                    class="    w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model.trim="codeNum" autocomplete="off" type="text" class=" pc-input bg-transparent   
                                                      text-[#d0d0d0] w-full h-full " id="pccodeNum" pattern=""
                                                        name="codeNum" placeholder="6位短信校验码" min="6" max="6"
                                                        maxlength="6">

                                                    <div class="absolute right-3 z-10 cursor-pointer ">

                                                        <!-- 获取校验码 -->
                                                        <button :disabled="codeDisable" @click="getCode()"
                                                            class=" whitespace-nowrap px-3 py-[10px]"
                                                            :class="!codeDisable ? 'border border-solid border-[#eed0a4] ' : ' opacity-80 cursor-not-allowed'">{{
                                                                    codeMsg
                                                            }}</button>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- show invite code input if there is no invitecode in route query from localstorage -->
                                    <div v-if="show_inviteCode_input"  class="form-now relative flex items-end w-full my-3  ">
                                        <div
                                            class="required-symbol required-star absolute bottom-2 -left-[18px] w-[18px] text-[#c3231c]">
                                            *</div>
                                        <div class="  relative flex items-center h-[50px] w-full   ">
                                            <div
                                                class=" h-full w-full  relative overflow-hidden flex items-center mx-auto ">
                                                <div
                                                    class="    w-full h-full text-sm flex justify-center items-center relative">
                                                    <input v-model.trim="inviteCode" autocomplete="off" type="text" class=" pc-input bg-transparent   
                                                      text-[#d0d0d0] w-full h-full "
                                                        name="inviteCode" placeholder="邀请码" 
                                                        maxlength="10">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="required-hint mt-[10px] text-[#4a4a4a] text-sm">带
                                        <span class="required-star text-[#c3231c]">*</span>
                                        号为必填项
                                    </div>

                                    <div class="flex justify-between mt-[30px] -mx-[11px] mb-0">
                                        <router-link to="/" class="btn flex items-center justify-center w-full btn-outline mx-[11px] h-[50px] border border-solid text-[#eed0a4]
                    border-[#eed0a4] cursor-pointer
                    ">
                                            取消
                                        </router-link>
                                        <div @click="activeTab == 0 ? Register() : PhoneReg()" class="btn flex cursor-pointer items-center justify-center text-[#272c33] text-center w-full btn-primary mx-[11px] h-[50px]  
                    ">
                                            注册
                                        </div>
                                    </div>
                                    <div
                                        class="mx-auto flex justify-center mt-[20px] leading-5 text-[13px] text-[#747782]">
                                    </div>
                                    <div>
                                        <div class="text-center text-[#747782]">注册代表您已同意尊博冠时所有的
                                            <router-link to="/aggrement" class="text-[#eed0a4]">规则与条例</router-link>；
                                        </div>
                                        <a href="" class="h-[126px] w-[375px] mx-auto mt-[10px]">
                                            <div class="w-full h-full">
                                                <img src="@/assets/pc/Home/reg.png" alt="" class="w-full h-full">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class=" text-[#747782] text-center">已有账户？点这里
                            <router-link to="/login" class="switcher transition-3s  cursor-pointer text-[#eed0a4]">登录
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class=" min-h-screen h-screen overflow-y-scroll sm:hidden relative">
        <div class="login px-5 w-full">
            <div class="topbar flex justify-between items-center py-5">
                <router-link to="/" class="p-[6px] rounded-full bg-[#7e7e7e]">
                    <XIcon class="text-black w-6 h-6"></XIcon>
                </router-link>
                <a href="/login" class="font-bold text-[#eed0a4] text-xl">
                    登录
                </a>
            </div>

            <section class="py-8 px-8 w-full">
                <div class="flex items-center justify-evenly">
                    <a @click="Tabclick(0)" class=" text-2xl tracking-wide relative 
                     
                    "
                        :class="activeTab == 0 ? 'text-[#a6a6a6] font-medium before:absolute before:w-12 before:h-[2px] before:left-0 before:bg-[#eed0a4] before:bottom-0 before:-mb-1' : 'text-[#656569]'">账号注册</a>
                    <a @click="Tabclick(1)" class=" text-2xl tracking-wide relative "
                        :class="activeTab == 1 ? 'text-[#a6a6a6] font-medium before:absolute before:w-12 before:h-[2px] before:left-0 before:bg-[#eed0a4] before:bottom-0 before:-mb-1' : 'text-[#656569]'">手机注册</a>
                </div>
            </section>

            <form @click.prevent class="pt-3 focus:border-none">
                <div v-if="activeTab == 0"
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20 py-0 h-5     border-r border-[#7e7e7e] border-solid">
                        <span class="required-star text-[#c3231c] px-1 mt-2">*</span>
                        <UserIcon class="w-5 h-5 "></UserIcon>
                    </div>
                    <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model.trim="name" autocomplete="off"
                            class=" input-name  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                            id="username" pattern="" name="username" placeholder="请输入用户名" min="6" max="12"
                            maxlength="17" type="text">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer  absolute right-3 "></XIcon>
                    </div>
                </div>
                <div v-if="activeTab == 0"
                    class="bg-[#13151b] border border-solid border-[#272c33] formDiv my-5 relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20  h-5  border-r border-[#7e7e7e] border-solid">
                        <span class="required-star text-[#c3231c] px-1 mt-2">*</span>
                        <LockClosedIcon class="w-5 h-5 "></LockClosedIcon>
                    </div>
                    <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model.trim="pass" autocomplete="off" :type="passwordField"
                            class=" input-name  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                            id="password" pattern="" name="username" placeholder="请输入密码" min="6" max="12"
                            maxlength="12">
                        <XIcon v-if="pass" @click="pass = ''" class="h-5 w-5 cursor-pointer  absolute right-10 ">
                        </XIcon>
                        <div class="absolute right-3">
                            <EyeIcon v-if="passwordField !== 'password'" @click="showVisibile" class="w-5 h-5 " />
                            <EyeOffIcon v-else @click="showVisibile" class="w-5 h-5 " />
                        </div>
                    </div>
                </div>
                <div v-if="activeTab == 0"
                    class="bg-[#13151b] border border-solid border-[#272c33] formDiv relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20  h-5    border-r border-[#7e7e7e] border-solid">
                        <span class="required-star text-[#c3231c] px-1 mt-2">*</span>
                        <LockClosedIcon class="w-5 h-5 "></LockClosedIcon>
                    </div>
                    <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model.trim="confirmpass" autocomplete="off" :type="con_passField"
                            class=" input-name  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                            id="confirmpass" pattern="" name="username" placeholder="请输入确认密码" min="6" max="12"
                            maxlength="12">
                        <XIcon v-if="confirmpass" @click="confirmpass = ''"
                            class="h-5 w-5 cursor-pointer  absolute right-10  "></XIcon>
                        <div class="absolute right-3">
                            <EyeIcon v-if="con_passField !== 'password'" @click="confirmshowVisibile"
                                class="w-5 h-5 " />
                            <EyeOffIcon v-else @click="confirmshowVisibile" class="w-5 h-5 " />
                        </div>
                    </div>
                </div>

                <div v-if="activeTab == 1"
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-14 py-0 h-5     border-r border-[#7e7e7e] border-solid">
                        <span class="required-star text-[#c3231c] px-1 mt-2">*</span>
                        <UserIcon class="w-5 h-5 "></UserIcon>
                    </div>
                    <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model.trim="name" autocomplete="off"
                            class=" input-name  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                            pattern="" name="username" placeholder="请输入用户名" min="6" max="12" maxlength="17" type="text">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer  absolute right-3 "></XIcon>
                    </div>
                </div>

                <div v-if="activeTab == 1"
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv   relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-[90px]  h-5   border-r border-[#7e7e7e] border-solid">
                        <span class="required-star text-[#c3231c] px-1 mt-2">*</span>
                        <img src="@/assets/mobile/user/phone.svg" class="w-5 h-5 ">
                    </div>
                    <div class="px-2  w-auto whitespace-nowrap flex items-center space-x-1 text-[#d0d0d0]  ">
                        <p @click="showPhoneDialog = !showPhoneDialog" class="">{{ selectPhone || '中国 +86'}}</p>
                        <ChevronDownIcon class="w-5 h-5 "></ChevronDownIcon>
                    </div>
                    <div class="formInput w-full   h-full text-sm flex justify-center items-center relative">
                        <input v-model.trim="phoneNum" autocomplete="off"
                            class=" input-name  focus:border-none  border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                            id="phoneNum" pattern="" name="phoneNum" placeholder="手机号码" min="11" max="11" maxlength="11"
                            type="tel">
                        <XIcon v-if="phoneNum" @click="phoneNum = ''" class="h-5 w-5 cursor-pointer  absolute right-3 ">
                        </XIcon>
                    </div>
                </div>

                <div v-if="activeTab == 1"
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv  relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-14 py-1 h-5     border-r border-[#7e7e7e] border-solid">
                        <span class="required-star text-[#c3231c] px-1 mt-2">*</span>
                        <ChatAltIcon class="w-5 h-5 "></ChatAltIcon>
                    </div>

                    <div class="formInput w-full  h-full text-sm flex justify-center items-center relative">
                        <input v-model.trim="codeNum" autocomplete="off"
                            class=" input-name  focus:border-none  border-none w-full outline-none bg-transparent focus:outline-none text-[#d0d0d0] h-full"
                            id="codeNum" pattern="" name="codeNum" placeholder="6位短信校验码" min="6" max="6" maxlength="6"
                            type="tel">
                        <div class="absolute right-2 cursor-pointer">
                            <button :disabled="codeDisable" @click="getCode()" class=""
                                :class="!codeDisable ? '' : ' opacity-80 cursor-not-allowed'">{{ codeMsg
                                }}</button>
                        </div>

                    </div>
                </div>
                  <!-- show invite code input if there is no invitecode in route query from localstorage -->
                <div v-if="show_inviteCode_input"
                    class="bg-[#13151b] border border-solid border-[#272c33] my-5 formDiv relative overflow-hidden flex items-center mx-auto px-2 h-16">
                    <div
                        class="relative flex items-center justify-center w-20 py-0 h-5     border-r border-[#7e7e7e] border-solid">
                        <span class="required-star text-[#c3231c] px-1 mt-2">*</span>
                        <CodeIcon class="w-5 h-5 "></CodeIcon>
                    </div>
                    <div class="formInput w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model.trim="inviteCode" autocomplete="off"
                            class=" input-name  focus:border-none border-none outline-none bg-transparent focus:outline-none text-[#d0d0d0] w-full h-full"
                            placeholder="邀请码" max="12" maxlength="17" type="text">
                        <XIcon v-if="inviteCode" @click="inviteCode = ''" class="h-5 w-5 cursor-pointer  absolute right-3 "></XIcon>
                    </div>
                </div>
                <div class="required-hint pt-7 text-[#6e6d6d] text-sm">带
                    <span class="required-star text-[#c3231c]">*</span>
                    号为必填项
                </div>
                <div class="pt-7 w-full">
                    <button @click="activeTab == 0 ? Register() : PhoneReg()"
                        class="w-full btn_login text-base py-4 text-[#373c33] text-[19px] ">
                        注册
                    </button>
                </div>
            </form>
            <div class=" w-full py-3 ext-left text-[#6e6d6d]">
                <p class="required-hint t">
                    注册代表您已同意尊博冠时所有的
                    <router-link to="/aggrement" class="text-[#eed0a4] z-10">规则与条例</router-link>；
                </p>
            </div>
            <div class="w-full">
                <img src="@/assets/pc/Home/reg.png" alt="" class="w-full h-[130px]">
            </div>
        </div>
        <div v-if="showPhoneDialog"
            class="absolute z-10 bottom-[0px] w-full overflow-y-hidden  h-full bg-[rgba(0,0,0,0.72)]">
            <div class="px-5 w-full fixed h-[screen] bottom-0 z-20  bg-[rgba(0,0,0,0.72)]">
                <div class="max-h-[300px] overflow-y-auto">
                    <div 
                  v-for="phone in listPhone" :key="phone.id" @click="selectPhoneNumber(phone)"  class="flex items-center text-center text-base text-[#d0d0d0] justify-center py-3 mb-1 bg-[#272c33] px-2 w-full">
                    {{phone.phone}}
                </div>
                </div>
                <div @click="showPhoneDialog = false"
                    class="flex items-center py-3 my-3 text-center text-base justify-center bg-[#272c33] px-2 w-full">
                    取消
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref, computed, onMounted, reactive } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, EyeIcon, EyeOffIcon, ChevronDownIcon, ChatAltIcon, CodeIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import userApi from "@/network/user.js";
import Loading from "@/utils/loader";
import AES from '@/utils/aes';
import global from '@/utils/global'

import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()
// a12vc344
const name = ref('')
const pass = ref('')
const confirmpass = ref('')

const passwordField = ref('password')
const con_passField = ref('password')
const activeTab = ref(0)

const selectPhone = ref('中国 +86')
const selectCode = ref(86) //for phone number select

const listPhone = ref([
    {
        id:1,
        phone:'中国 +86',
        code:86
    },
    {
        id:2,
        phone:'缅甸 +95',
        code:95
    },
    {
        id:3,
        phone:'日本 +81',
        code:81
    },
    {
        id:4,
        phone:'香港 +852',
        code:852
    },
    {
        id:5,
        phone:'澳门 +853',
        code:853
    },
    {
        id:6,
        phone:'台湾 +886',
        code:886
    },
    {
        id:7,
        phone:'阿联酋 +971',
        code:971
    },
    {
        id:8,
        phone:'菲律宾 +63',
        code:63
    },
    {
        id:9,
        phone:'泰国 +66',
        code:66
    },
    {
        id:10,
        phone:'新加坡 +65',
        code:65
    },
    {
        id:11,
        phone:'越南 +84',
        code:84
    },
    {
        id:12,
        phone:'马来西亚 +60',
        code:60
    },
    {
        id:13,
        phone:'印度尼西亚 +62',
        code:62
    },
    {
        id:14,
        phone:'柬埔寨 +855',
        code:855
    },
    {
        id:15,
        phone:'老挝 +856',
        code:856
    },
])


const showPhoneDialog = ref(false)
const phoneNum = ref('')
const codeNum = ref('')
const codeDisable = ref(false)
const codeMsg = ref('获取校验码')
const timer = ref(null)
const countdown = ref(60)

const innerWidth = ref(0)

const store = useStore()
const router = useRouter()
const inviteCode = ref('')
const show_inviteCode_input = ref(true)
const token = computed(() => store.getters["user/LToken"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const showVisibile = () => {
    passwordField.value = passwordField.value === "password" ? "text" : "password";
};
const confirmshowVisibile = () => {
    con_passField.value = con_passField.value === "password" ? "text" : "password";
};

const Tabclick = (number) => {
    activeTab.value = number;
}

const selectPhoneNumber = (phone) => {
  selectPhone.value  = phone.phone;
  selectCode.value = phone.code;
  showPhoneDialog.value = false
}

const getCode = () => {
    console.log(selectPhone.value,'lllllllllll');
    if (phoneNum.value == '') return instance.proxy.$message({ message: '请输入电话号码', duration: 2 })
    if(!global.validatePhoneNumber(phoneNum.value,selectCode.value))  return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 });
    getValidStr()
}

const getValidStr = () => {
    console.log(phoneNum.value, "ttttttttttt");

    console.log(codeDisable.value, "disable");
    codeMsg.value = "重发(" + countdown.value + ")";
    countdown.value--;
    if (countdown.value == 59) {
        console.log("countdown value is", countdown.value);
        createPhoneCode()
    }
    if (countdown.value <= 0) {
        countdown.value = 60;
        codeMsg.value = "获取校验码";
        codeDisable.value = false
    } else {
        codeDisable.value = true;
        timer.value = setTimeout(() => {
            getValidStr()
        }, 1000);
    }
}

const createPhoneCode = () => {
    let data = {
        "type": 5,
        "phone": phoneNum.value,
        "country_code":selectCode.value, // country code
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
    userApi.GetRegLoginSmsCode({ data: data }).then((res) => {
        console.log(res, "reg sms code");
        if (res.data.code == '1') {
            console.log("success *************************")
            return instance.proxy.$message({ message: '手机验证码发送成功，请查收手机', duration: 2 })
        }
    }).catch((e) => {
        console.log(e);
        //catch error then reset timer
        clearTimeout(timer.value)
        codeMsg.value = "获取校验码";
        codeDisable.value = false
        countdown.value = 60;
        return instance.proxy.$message({ message: e.response?.data?.message, duration: 2 })
    })
}

const PhoneReg = () => {
    if (name.value == '' || phoneNum.value == '' || codeNum.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    // if(selectCode.value == 95 && (!phoneNum.value?.match(/^\d{10}$/))) return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 })
    // if(selectCode.value == 95 && (!phoneNum.value?.match(/^9(2|4|5|6|7|8|9|)\d{8}$/))) return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 })

    // if(selectCode.value == 86 &&  (!/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(phoneNum.value ))
    // )
    // {
    //     return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 })
    // }


    let data = {
        "phone": phoneNum.value,
        "code": codeNum.value,
        "username": name.value,
        "country_code":selectCode.value, // country code
        "invite_code":inviteCode.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
    Loading.showLoading()
    userApi.PhoneRegister({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            store.commit('user/Login', res.data.data)
            clearTimeout(timer.value)
            codeMsg.value = "获取校验码";
            codeDisable.value = false
            countdown.value = 60;
            instance.proxy.$message({ message: res?.data.message, duration: 2 })
            router.push('/')
            console.log(res, 'phone regggggggggggg');
        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response?.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

const Register = () => {
    if (name.value == '' || pass.value == '' || confirmpass.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })

    if (pass.value !== confirmpass.value)
        return instance.proxy.$message({ message: '两次输入密码不一致', duration: 2 })

    if (pass.value.length < 6)
        return instance.proxy.$message({ message: '密码必须至少有6个字符长', duration: 2 })

    if (!/\d/.test(pass.value) || !/[a-zA-Z]/.test(pass.value))
        return instance.proxy.$message({ message: '密码必须包含数字和英文字母', duration: 2 })

    if (name.value == pass.value)
        return instance.proxy.$message({ message: '用户名和密码不能相同', duration: 2 })

    let data = {
        "player": name.value,
        "password": pass.value,
        "invite_code":inviteCode.value
    };
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)
    Loading.showLoading()
    userApi.UserReg({ data: data }).then((res) => {
        Loading.hideLoading()
        if (res.data.code == '1') {
            console.log(res, "register resp ********");
            store.commit('user/Login', res.data.data)
            store.commit('user/LOGIN_USERNAME', pass.value)
            instance.proxy.$message({ message: '注册成功', duration: 2 })
            if (res.data?.data?.info?.is_set_phone == 0) {
                router.push('/login/success')
            } else {
                router.push('/')
            }
            name.value = ''
            pass.value = ''
            confirmpass.value = ''

        }
    }).catch((err) => {
        Loading.hideLoading()
        console.log(err.response?.data.message);
        return instance.proxy.$message({ message: err.response?.data?.message, duration: 2 })
    })
}

if (localStorage.getItem('inviteCode')) {
    show_inviteCode_input.value = false
  inviteCode.value = localStorage.getItem('inviteCode')
}
onMounted(() => {
    console.log(token.value, "from login ****");
    innerWidth.value = window.innerWidth
    if (token.value) {
        router.push('/')
    }
})
</script>

<style scoped>
.formDiv:focus-within {
    outline: 0;
    background: transparent !important;
}

.formDiv input {
    border: none;
    outline: none;
    background: no-repeat;
}

.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}

.input-name:focus {
    outline: 0 !important;
    outline: none !important;
    border: none !important;
    background: transparent !important;
}

.btn_login {
    width: 100%;
    background-image: linear-gradient(to right, #d4b48c, #cfaf87, #cbab83, #c6a67e, #c2a27a, #bd9d75, #b7996f, #b2946a, #aa8e62, #a3885b, #9b8253, #937c4c);
    border: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: #272c33;
    outline: none;
}

/* pc reg */
.register-fame {
    background-image: url("@/assets/pc/Home/register-fame.webp");
    background-color: #16181f;
    background-size: 1920px 304px;
    background-position: top;
    background-repeat: no-repeat;

}

.pc-input:focus-within {
    outline: none;
    box-shadow: none;
    border-color: #eed0a4
}

.pc-input {
    outline: 0;
    border-width: 0 0 1px;
    border-color: grey
}

.btn-primary {
    background-image: linear-gradient(to right, #d4b48c, #cfaf87, #cbab83, #c6a67e, #c2a27a, #bd9d75, #b7996f, #b2946a, #aa8e62, #a3885b, #9b8253, #937c4c);
}
</style>