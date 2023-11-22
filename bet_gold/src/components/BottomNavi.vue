<template>
  <div class="h-[80px] fixed bottom-0 left-0 right-0 w-full bg_navi overflow-hidden z-10 ">
    <div class=" w-full h-full relative">
  <div class="w-full h-full  flex  justify-between space-x-5 px-5 items-center space-y-2 text-[15px] tracking-wider ">
        <router-link to="/home" class="flex flex-col items-center mt-2 text-[12px]">
            <img v-if="activeRoute === '/home'" src="@/assets/mobile/home/homea.png" alt="" draggable="false" class="w-[1.7rem] h-[2.5rem]">
            <img v-else src="@/assets/mobile/home/home.png" alt="" draggable="false" class="w-[1.7rem] h-[2.5rem]">
        </router-link>

        <router-link to="/promotion"  class="flex flex-col items-center text-[12px]">
            <img v-if="activeRoute === '/promotion'" src="@/assets/mobile/home/lovea.png" draggable="false" alt="" class="w-[1.7rem] h-[2.5rem]">
            <img v-else src="@/assets/mobile/home/love.png" alt="" draggable="false" class="w-[1.7rem] h-[2.5rem]">
        </router-link>

        <router-link to="/vip" class="flex flex-col items-center  text-[12px] ">
            <img v-if="activeRoute === '/vip'" src="@/assets/mobile/home/vipa.png" draggable="false" alt="" class="w-[2rem] h-[2.5rem]">
            <img v-else src="@/assets/mobile/home/vip.png" alt="" draggable="false" class="w-[2rem] h-[2.5rem]">
        </router-link>

        <router-link v-if="token" to="/user" class="flex flex-col items-center text-[12px]  ">
            <img v-if="activeRoute === '/user'" src="@/assets/mobile/home/usera.png" draggable="false" alt="" class="w-[2em] h-[2.5rem]">
            <img v-else src="@/assets/mobile/home/user.png" alt="" draggable="false" class="w-[2em] h-[2.5rem]">
        </router-link>

        <router-link v-else to="/login" class="flex flex-col items-center  text-[12px]">
            <img v-if="activeRoute === '/user'" src="@/assets/mobile/home/usera.png" draggable="false" alt="" class="w-[2em] h-[2.5rem]">
            <img v-else src="@/assets/mobile/home/user.png" alt="" draggable="false" class="w-[2em] h-[2.5rem]">
        </router-link>
     </div>
    </div>
  </div>
</template>

<script setup>
 import { onMounted, ref, watch,computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const activeRoute = ref("");
const router = useRouter();
const route = useRoute();
const store = useStore()
let activeTab = ref(1);
const token = computed(() => store.getters["user/LToken"]);

watch(
    () => route.path,
    () => {
        console.log(route.path, "watching");
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

const TabClick = (n) =>{
    console.log(n);
    activeTab.value = n
}
  </script>


<style scoped>
 .bg_navi{
    background-image: url("@/assets/mobile/home/bottomnavi.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 70px;
    width: 100%;
    overflow: hidden;
    z-index: 100;
 }
</style>