<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useStore } from "vuex";
import { ref, onMounted, computed, reactive } from 'vue'
import { XIcon, UserIcon, LockClosedIcon, EyeIcon, LibraryIcon, DocumentTextIcon, EyeOffIcon, ChevronLeftIcon, SelectorIcon, CheckIcon, SearchIcon, ViewGridAddIcon } from "@heroicons/vue/outline";
const router = useRouter()
const route = useRoute()
const url = ref('')

const goUser = () => {
  router.push('/home')
}


onMounted(()=>{
    url.value = route.query.url 
})
</script>

<template>
    <div class="h-screen w-full">
        <div class="h-[60px]  w-full text-gray-200   px-2 flex justify-between items-center">
      <ChevronLeftIcon @click="goUser()" class="w-7 h-7 "></ChevronLeftIcon>
      <!-- <p class=" text-[17px]"> 交易记录 </p> -->
    </div>
      <div v-if="url"  style="overflow: hidden !important" class="__iframe">
        <iframe  :src="url"  scrolling="no" seamless="seamless"  frameborder="0" 
        style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
    </div>

    <!-- <div  class="container">
  <span class="tile-1"></span>
  <span class="tile-2"></span>
  <span class="tile-3"></span>
  <span class="tile-4"></span>
</div> -->
    
    </div>
</template>

<style scoped>

        .__iframe {
          height: calc(100% - 60px);
          width: 100%;
          position: relative;
          /* background: inherit; */
          @apply bg-slate-700
        }

        .container {
  display: flex;
  flex-wrap: wrap;
  width: 60px;
  transform: rotate(-45deg);
  margin: auto;
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  animation: scale-x 1s ease forwards;
  animation-delay: 2.3s;
}
.container span {
  flex-basis: 50%;
  aspect-ratio: 1/1;
  display: block;
  transition: opacity 0.7s ease;
}

.tile-1 {
  background-color: #fecd03;
  transform-origin: 100% 100%;
  animation: flip-1 0.5s linear forwards;
  border: none;
  opacity: 0;
  transition: opacity 0.7s ease;
}
.tile-2 {
  background-color: #fecd03;
  transform-origin: 50% 100%;
  animation: flip-2 0.5s linear forwards;
  animation-delay: 0.5s;
  opacity: 0;
}
.tile-3 {
  background-color: #fecd03;
  transform-origin: 50% 0%;
  animation: flip-4 0.5s linear forwards;
  animation-delay: 1.5s;
  opacity: 0;
}
.tile-4 {
  background-color: #fecd03;
  transform-origin: 0% 50%;
  animation: flip-3 0.5s linear forwards;
  animation-delay: 1s;
  opacity: 0;
}

@keyframes flip-1 {
  to {
    transform: rotateY(180deg);
    opacity: 1;
  }
}
@keyframes flip-2 {
  to {
    transform: rotateX(180deg);
    opacity: 1;
  }
}
@keyframes flip-3 {
  to {
    transform: rotateY(-180deg);
    opacity: 1;
  }
}
@keyframes flip-4 {
  to {
    transform: rotateX(-180deg);
    opacity: 1;
  }
}
@keyframes scale-x {
  to {
    transform: scale(50);
    opacity: 0;
  }
}
</style>

