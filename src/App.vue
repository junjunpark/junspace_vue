<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { initPortfolio } from '@/assets/script/script.js';
import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick();
   initPortfolio();
});
</script>

<template>
    <div id="skip" class="skip">
        <a href="#header">헤더바로가기</a>
        <a href="#container">본문바로가기</a>
    </div>
    <div class="wrapper">
        <Header/>
        <router-view />
        <Footer/>
    </div>
    <!-- toast -->
    <div class="toast-container" id="toastContainer" role="status" aria-live="polite" aria-atomic="true"></div>
</template>
