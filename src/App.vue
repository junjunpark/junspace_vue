<script setup>
import Header from './components/layout/Header.vue'
import Layout from './components/layout/Layout.vue'
import Footer from './components/layout/Footer.vue'
import { initPortfolio } from '@/assets/script/script.js';
import { initAnimations } from '@/assets/script/animation.js';
import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick();
  initPortfolio();
  initAnimations();   // GSAP 애니메이션 초기화
});
</script>

<template>
    <div id="skip" class="skip">
        <a href="#header">헤더바로가기</a>
        <a href="#container">본문바로가기</a>
    </div>
    <div class="wrapper">
        <Header />
        <!-- <div>
            <a href="https://vite.dev" target="_blank">
            <img src="/jlogo.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
            <img src="/jlogo-w.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div> -->
        <Layout/>
        <Footer/>
    </div>
    <!-- toast -->
    <div class="toast-container" id="toastContainer" role="status" aria-live="polite" aria-atomic="true"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
