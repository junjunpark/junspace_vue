<script setup>
import Button from '../../components/common/Button.vue'
import About from '../../components/pages/About.vue'
import { initAnimations } from '@/assets/script/animation.js';
import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick()
  initAnimations() // GSAP 애니메이션 초기화
})
</script>



<template>

<main id="container" class="container">
    <section class="section sec01">
        <div class="section-inner">
            <div class="flex">
                <div class="mv-area">
                    <h3 class="h1">Designing <br>Web Structures.</h3>
                    <p class="body1">Hi there!<br>
                    I love crafting websites and experimenting with new ideas.<br>
                    Take a look at my work.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <About/>

    <section class="section sec04">
        <div class="section-inner">
            <h2 class="h2">CONTACT</h2>
            <div class="flex">
                <div class="contact-area split">
                    <h3 class="h3">저에게 궁금한 점이 있으시다면 <br>언제든지 연락주세요!</h3>
                    <p class="body1">메일 주시면 확인 후 회신 드리겠습니다. <br>감사합니다.</p>
                    <div class="contact-email">
                        <Button
                            text="<i aria-hidden='true'>✉</i><span aria-hidden='true'>deerjun817@gmail.com</span>"
                            class-name="line"
                            :data-attrs="{ email: 'deerjun817@gmail.com' }"
                            :aria-attrs="{ label: '이메일 주소 복사' }"
                        />
                        <p class="body3">↑ 클릭하시면 메일 주소가 복사됩니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>



</template>

