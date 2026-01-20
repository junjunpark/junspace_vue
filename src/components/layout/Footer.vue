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

<footer id="footer" class="footer">
    <div class="inner">
        <p class="body2">Designed & Built by HYEJUNPARK</p>
    </div>
    <button
        ref="gotopBtn"
        id="gotopBtn"
        class="gotoTop"
        @click="scrollToTop"
        :style="{ display: showButton ? 'inline-flex' : 'none' }"
        >
        <span>TOP</span>
    </button>
</footer>

</template>

