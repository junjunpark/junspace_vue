<script setup>
import logo from '@/assets/images/jlogo.svg'
import { ref, onMounted, onUnmounted } from "vue";

const isFixed = ref(false);

const onScroll = () => {
    isFixed.value = window.scrollY > 80;
};

onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>

<template>
<div v-if="isFixed" class="h-16 md:h-20"  aria-hidden="true"></div>
<header
    id="header"
    :class="[
    'w-full z-50 transition-all duration-300',
    'bg-white shadow-[4px_4px_12px_4px_rgba(0,0,0,0.04)]',
    isFixed ? 'fixed top-0 left-0' : 'relative'
    ]"
>
    <div class="inner flex items-center
        px-4 md:px-6
        pt-[calc(12px+env(safe-area-inset-top))]
        pb-3
        h-16 md:h-20">

        <h1 id="logo" class="logo">
            <a href="/" class="logo">
                <img :src="logo" alt="JUN Portfolio" class="h-[30px] md:h-[40px] w-auto">
            </a>
        </h1>

        <nav id="nav" class="ml-auto">
            <ul class="gnb flex items-center justify-end text-h3 font-medium [&>li:not(:first-child)]:ml-10">
                <li>
                    <router-link to="/" active-class="text-primary">Home</router-link>
                </li>
                <li>
                    <router-link to="/work" active-class="text-primary">Work</router-link>
                </li>
            </ul>
        </nav>

        <button class="md:hidden ml-4" aria-expanded="false" aria-controls="nav">
            <span class="sr-only">메뉴 열기</span>
        </button>
    </div>
</header>
</template>
