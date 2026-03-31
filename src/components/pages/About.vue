
<script setup>
import profileImg from '@/assets/images/profile.png'
import Button from '../../components/common/Button.vue'
const toolImg = import.meta.glob('@/assets/images/tool/*', { eager: true })
const getImage = (filename) => toolImg[`/src/assets/images/tool/${filename}`]?.default

const tools = [
    { name: 'HTML', img: 'tool_logo01.png' },
    { name: 'CSS', img: 'tool_logo02.png' },
    { name: 'javascript', img: 'tool_logo03.png' },
    { name: 'jQuery', img: 'tool_logo04.png' },
    { name: 'vscode', img: 'tool_logo05.png' },
    { name: 'vue', img: 'tool_logo06.png' },
    { name: 'git', img: 'tool_logo07.png' },
    { name: 'gulp', img: 'tool_logo08.png' },
    { name: 'node js', img: 'tool_logo09.png' },
    { name: 'bootstrap', img: 'tool_logo10.png' },
    { name: 'tailwind', img: 'tool_logo11.png' },
    { name: 'figma', img: 'tool_logo12.png' },
    { name: 'photoshop', img: 'tool_logo13.png' },
    { name: 'illustrator', img: 'tool_logo14.png' },
    { name: 'adobe xd', img: 'tool_logo15.png' },
    { name: 'zeplin', img: 'tool_logo16.png' },
    { name: 'notion', img: 'tool_logo17.png' },
    { name: 'slack', img: 'tool_logo18.png' },
]
</script>

<template>
<section class="overflow-x-hidden py-14 md:py-24">
    <div class="inner">
        <h2 class="pb-6 font-bold text-h1 font-blacksans">ABOUT ME</h2>
        <div class="grid pb-6 md:grid-cols-2 ">
            <div class="flex just justify-center items-center mx-auto max-w-[15rem]">
                <img :src="profileImg" alt="profile img" class="w-full" />
            </div>
            <div class="">
                <h3 class="leading-normal text-h2">
                    안녕하세요!😀<br>
                    <em>차분함</em>과 <em>꾸준함</em>을 바탕으로<br>
                    <em>구조를 이해하고 탐구</em>하는<br>
                    웹 퍼블리셔 <strong>박혜준</strong>입니다.
                </h3>
                <div class="flex flex-wrap items-center justify-start mt-4 just">
                    <Button
                        tag="a"
                        href="https://m.site.naver.com/1XPa9"
                        text="Notion 바로가기"
                        variant="primary"
                        size="lg"
                    />
                </div>
            </div>
        </div>
        <div class="grid md:grid-cols-2">
            <div class="mt-6 split">
                <h3 class="mb-4 font-bold text-h3">SKILL & TOOL</h3>
                <div class="flex flex-wrap mt-4 -ml-2">
                    <div v-for="tool in tools" :key="tool.name" class="pl-2 mb-2">
                        <picture>
                            <img :src="getImage(tool.img)" :alt="tool.name" class="max-w-[60px]" />
                        </picture>
                    </div>
                </div>
            </div>
            <div class="mt-6 split">
                <h3 class="mb-4 font-bold text-h3">Certifications</h3>
                <ul class="list-dot">
                    <li>컴퓨터활용능력 2급 (2024.02)</li>
                    <li>GTQ 일러스트 1급 (2018.03)</li>
                    <li>GTQ 1급 (2018.02)</li>
                    <li>컴퓨터그래픽스 운용기능사 (2008.06)</li>
                    <li>웹디자인 기능사 (2007.06)</li>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>
