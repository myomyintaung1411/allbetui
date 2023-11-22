<template>
  <div class="w-full min-w-[800px] h-auto bg-[#171a21] relative sm:flex-auto sm:mx-[19px] sm:bg-black text-[#c1c1c1]">

    <div class="text-center cursor-pointer text-lg mt-16">反馈问题</div>
    <section class="max-w-[580px] w-[580px] mx-auto flex justify-center flex-col text-[18px] tracking-wider pt-5">
      <div>
        <div @click="feedbackDialog = true" class="py-3 flex items-center cursor-pointer justify-start space-x-2 pl-2">
            <div>问题类型</div>
            <div class="flex items-center">
              <p class="text-[18px]">{{feetxt || ''}}</p>
            </div>
            <img src="@/assets/pc/Home/arrowDown.png" alt="" class="w-4 h-3">   
        </div>
        <img src="@/assets/pc/Home/lin.png" alt="" class="w-full h-[0.15rem]">
     </div>
     
      <div v-if="feedbackDialog" class=" z-10  w-[300px] overflow-y-hidden bg-[rgba(0,0,0,0.72)] ">
        <div class="px-5 w-[448px]  fixed flex flex-col items-center justify-center z-20  bg-[rgba(0,0,0,0.72)]">
          <div v-for="(tet, n) in feedData" :key="n" @click="clickDialog(tet.title, tet.id)"
            class="flex border-b border-[#202330] 
            items-center text-center text-[18px] cursor-pointer justify-center py-3 bg-[#272c33] px-2 w-full">
            {{ tet.title }}
          </div>
          <div @click="feedbackDialog = false"
            class="flex cursor-pointer items-center py-3 my-3 text-center text-[18px] justify-center bg-[#272c33] px-2 w-full">
            取消
          </div>
        </div>
      </div>
      
        <form @click.prevent class="w-full pt-6 pb-4">
          <input v-model="phone" max="11" min="11" maxlength="11" type="tel" placeholder="手机号码" 
                class="w-full bg-transparent input-name border-none outline-none placeholder-[#c1c1c1] placeholder:text-[17px]">
        </form>
        <img src="@/assets/pc/Home/lin.png" alt="" class="w-full h-[0.15rem]">

      <div class="mt-8">反馈内容</div>
      <div class="text-[17px] mt-2">请简要输入您的问题和建议</div>

      <div class="w-full h-40 border-[#c1c1c1] border mt-4">
          <textarea v-model="textarea" class="w-full h-full border-none outline-none bg-transparent input-name"></textarea>
      </div>

      <div class="flex justify-center items-center mt-8">
        <img @click="reqData" src="@/assets/pc/Home/tj2.png" alt=" " class="w-[15rem] h-11">
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';
import Loading from "@/utils/loader";
import userApi from "@/network/user.js";
import { useStore } from "vuex";
import { ref, onMounted, computed } from 'vue'
import { getCurrentInstance } from 'vue';
import AES from '@/utils/aes';

const instance = getCurrentInstance()

const router = useRouter()
const store = useStore()
const feedbackDialog = ref(false)
const feetxt = ref('')
const questionType = ref('')
const textarea = ref('')
const phone = ref('')

const feedData = ref([
  {
    title: '存款',
    id: 1,
  },
  {
    title: '取款',
    id: 2,
  },
  {
    title: '优惠',
    id: 3,
  },
  {
    title: '投诉',
    id: 4,
  },
  {
    title: '其他',
    id: 5,
  },
])

const clickDialog = (txt, type) => {
  feetxt.value = txt
  questionType.value = type
  feedbackDialog.value = false
}

const goUser = () => {
  router.go(-1)
}
const token = computed(() => store.getters["user/LToken"]);
const userValue = computed(() => store.getters["user/USERINFO"]);
const gameEn = computed(() => store.getters["app/GameEn"]);

const reqData = () => {
  if (textarea.value == '' || phone.value == '' || questionType.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
  // if (
  //   !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
  //     phone.value
  //   )
  // ) {
  //   return instance.proxy.$message({ message: '手机号码格式不对', duration: 2 })
  // }

  if (token?.value) {
    let data = {
      "player": userValue.value?.username,
      "feedback": textarea.value,
      "phone": phone.value,
      "question_type": questionType.value
    }
    const encrypttxt = AES.encrypt(JSON.stringify(data), gameEn.value.pr_k)

    Loading.showLoading()

    userApi.RequestFeedback({ data: data }).then((res) => {
      Loading.hideLoading()
      if (res.data.code == '1') {
        console.log("res of GetMoneyAddress data", res);
        instance.proxy.$message({ message: res?.data?.message, duration: 2 })
        router.push('/')
      }
    }).catch((e) => {
      Loading.hideLoading()
      console.log(e);
    })
  }

}

onMounted(() => {
  if (!token?.value) return router.push('/login')
})
</script>
<style>
.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}</style>