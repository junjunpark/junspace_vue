<script setup>
import { ref } from 'vue';
import mvUrl from '@/assets/images/mv.jpg'
import contactUrl from '@/assets/images/contact.jpg'
import Button from '../../components/common/Button.vue'
import About from '../../components/pages/About.vue'
import { initAnimations } from '@/assets/script/animation.js';
import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick()
  initAnimations() // GSAP 애니메이션 초기화
})

const showToast = ref(false);

const copyEmail = async (event) => {
const email = event.currentTarget.dataset.email;

try {
    await navigator.clipboard.writeText(email);
    showToast.value = true;
    setTimeout(() => {
        showToast.value = false;
    }, 3000);

} catch (err) {
    console.error('다시 확인해 주세요.:', err);
}
};
</script>



<template>

<main id="container">
    <section
        :style="{ backgroundImage: `url(${mvUrl})` }"
        class="
            bg-cover
            bg-no-repeat
            bg-[left_38%]"
        >
        <div class="py-24">
            <div class="inner flex">
                <div class="ml-auto text-right md:text-left" >
                    <h3 class="text-h1 text-white font-bold main-title">Designing <br>Web Structures.</h3>
                    <p class="mt-5 text-white main-desc">Hi there!<br>
                    I love crafting websites and experimenting with new ideas.<br>
                    Take a look at my work.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <About/>

    <section
        :style="{ '--contact-bg': `url(${contactUrl})` }"
        class="contact-section
            pt-14
            pb-0
            bg-green relative
            after:content-['']
            after:relative
            after:block
            after:pt-[50%]
            after:mt-[2.8571428571rem]
            after:bg-cover
            after:bg-no-repeat
            after:bg-center

            md:pt-24
            md:pb-24
            md:after:absolute
            md:after:inset-[0_0_0_50%]
            md:after:pt-0
            md:after:mt-0
        "
        >
        <div class="inner">
            <h2 class="text-h1 pb-6 font-blacksans font-bold">CONTACT</h2>
            <div class="flex">
                <div class="contact-area split">
                    <h3 class="text-h3 font-medium">저에게 궁금한 점이 있으시다면 <br>언제든지 연락주세요!</h3>
                    <p class="pt-3 text-text-muted text-fs-14">메일 주시면 확인 후 회신 드리겠습니다. <br>감사합니다.</p>
                    <div class="mt-6">
                        <Button
                            text="<i aria-hidden='true' class='mr-1'>✉</i><span>deerjun817@gmail.com</span>"
                            variant="line"
                            :data-attrs="{ email: 'deerjun817@gmail.com' }"
                            :aria-attrs="{ label: '이메일 주소 복사' }"
                            @click="copyEmail"
                        />
                        <p class="pt-2 pl-2 text-primary text-fs-10">↑ 클릭하시면 메일 주소가 복사됩니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 토스트 팝업 -->
        <div v-if="showToast" class="toast">
            <span>이메일 주소가 복사되었습니다.</span>
        </div>
    </section>
</main>



</template>

<style scoped>
.main-title {
  opacity: 0;
  transform: translateY(100px);
  animation: maintitle 0.5s linear 0.5s both;
}

.main-desc {
  opacity: 0;
  transform: translateY(100px);
  animation: maintitle 0.5s linear 0.8s both;
}


@keyframes maintitle {
    from {
        -webkit-transform: translate(100px);
        transform: translateY(100px);
        opacity: 0;
    }

    to {
        -webkit-transform: translate(0);
        transform: translateY(0);
        opacity: 1;
    }
}

.contact-section::after {
  background-image: var(--contact-bg);
}

.toast {
  @apply fixed left-1/2 -translate-x-1/2;
  @apply bg-point text-white;
  @apply flex items-center justify-center;
  @apply rounded-lg shadow-xl;
  @apply z-[999];
  @apply whitespace-nowrap; /* 한 줄로 유지 */
  bottom: 5rem !important;
  padding: 0.75rem 1.5rem;
  width: auto; /* max-width 대신 auto */
  animation: slideUp 0.3s ease-out, fadeOut 0.3s ease-in 2.7s;
}

@media (min-width: 768px) {
  .toast {
    bottom: 1rem;
    padding: 0.625rem 1rem;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 1.25rem);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 0;
    transform: translate(-50%, 0);
  }
}
</style>
