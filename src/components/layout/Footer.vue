<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const gotopBtn = ref(null)
const showButton = ref(false)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const handleScroll = () => {
    const y = window.scrollY
    showButton.value = y > 200
}

onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
<footer class="bg-white pt-5 safe-pb" style="--safe-pb: 20px">
    <div class="inner bg-white flex items-center justify-center">
        <p class="text-fs-12 text-gray-400">Designed & Built by </p>
    </div>

    <button
        ref="gotopBtn"
        :class="[
        'fixed flex items-center justify-center',
        'w-10 h-10 z-[99] rounded-full',
        'text-[10px] text-white',
        'transition-all duration-300',
        'bg-black/60 hover:bg-black/80',
        'bottom-4 right-4',
        showButton ? 'inline-flex' : 'hidden'
        ]"
        @click="scrollToTop"
    >
        <span>TOP</span>
    </button>
</footer>
</template>
