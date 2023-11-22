<script setup>
import ReloadPwa  from '@/components/ReloadPwa.vue'
// import {ref} from 'vue'

// const deferredPrompt = ref(null)

// window.addEventListener("beforeinstallprompt", e => {
//       e.preventDefault();
//       // Stash the event so it can be triggered later.
//       deferredPrompt.value = e;
//     });
// window.addEventListener("appinstalled", () => {
//       deferredPrompt.value = null;
//     });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: '/' },)
  })
}

// async function install() {
//       deferredPrompt.value?.prompt();
//     }



</script>

<template>
  <div  class="w-full h-full relative">
    <!-- <template v-if="ClientReloadPrompt">
    <ClientReloadPrompt />
  </template> -->
  <!-- <ReloadPwa></ReloadPwa> -->
  <!-- <div  v-if="deferredPrompt" class="w-full py-5 bg-slate-500 text-sm px-3">
    <p>Get our free app. It won't take up space on your phone and also works
        offline!</p>
    <div @click="install" class="flex items-center justify-center mt-2 p-3 bg-black">Install</div>
  </div> -->
    <main >
      <router-view />
    </main>
  </div>
</template>

<style>
  html {
  scroll-behavior: smooth;
}
*:focus {
    outline: none !important;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
  @apply bg-[#14171e];/* #15171f */
  
  min-height: 100vh;
  width: 100%;
  color:#d7d4d4 ;
  /* overflow: hidden; */
  /* overflow-x: hidden; */
  /* to close chrome reload */
  /* overscroll-behavior: contain;  */
  font-family: PingFang SC,Hiragino Sans GB,Helvetica Neue,Microsoft Yahei,sans-serif,arial;
}
.my-progress-bar{
  background-color: #eed0a4  !important;
  height: 10px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.btn-primary {
  background: #fef5f6;
  background: linear-gradient(#aca8a8,#fef5f6,#dcd8d7);
  border: none;
}

.btn_login {
    width: 100%;
    background: #fef5f6;
    background: linear-gradient(#aca8a8,#fef5f6,#dcd8d7);
    border: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: #272c33;
    outline: none;
}
</style>