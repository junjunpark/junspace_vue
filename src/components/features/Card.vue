<script setup>
import projects from '@/assets/data/projects.json'

/** src/assets/images 아래 모든 이미지를 { '절대경로': '빌드된 URL' } 형태로 로드*/
const imageMap = import.meta.glob(
    '@/assets/images/**/*',
    {
        eager: true,
        query: '?url',
        import: 'default'
    }
)

/* JSON의 이미지 URL */
function resolveImg(path) {
    if (!path) return ''
    return imageMap[`/src/assets/images/${path}`]
}
</script>

<template>
<div class="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
    <component
        v-for="(item, i) in projects"
        :key="i"
        :is="item.linkUrl ? 'a' : 'div'"
        class="card-box p-6 rounded-xl bg-white shadow-[4px_4px_12px_4px_rgba(0,0,0,0.04)] border border-transparent transition-all duration-300 md:hover:shadow-[4px_4px_12px_4px_rgba(0,0,0,0.12)] md:hover:-translate-y-2.5 grid grid-cols-[100px_1fr] md:grid-cols-1 gap-3 md:gap-0 items-center md:items-stretch"
        :class="{ 'is-link': !!item.linkUrl }"
        :href="item.linkUrl || undefined"
        target="_blank"
        rel="noopener"
        :data-category="item.category"
        >

        <div class="card-img w-full aspect-[4/3] overflow-hidden border border-line-color relative">
            <picture v-if="item.mobileSrc" class="w-full h-full">
                <source
                    :srcset="resolveImg(item.mobileSrc)"
                    media="(max-width: 767px)"
                />
                <img
                    :src="resolveImg(item.imageSrc)"
                    :alt="item.altText"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover block transition-all duration-200"
                />
            </picture>

            <img
                v-else
                :src="resolveImg(item.imageSrc)"
                :alt="item.altText"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover block transition-all duration-200"
            />
        </div>

        <div class="card-desc md:mt-6">
            <h4 class="text-h3 font-bold inline-block">{{ item.title }}</h4>
            <div class="info mt-1">
                <span class="text-fs-12 text-text-muted">{{ item.period }}</span>
                <ul class="list-tag mt-3 pt-2 border-t border-dotted border-black/10">
                    <li v-for="(desc, j) in item.descriptions" :key="j">
                        {{ desc }}
                    </li>
                </ul>
            </div>
        </div>
    </component>
</div>
</template>

<style scoped lang="scss">

.card-box {
    .is-link {
        .card-img::after {
            content: "";
            position: absolute;
            right: 8px;
            bottom: 8px;
            width: 34px;
            height: 34px;
            background-image: url('@/assets/images/icon-link.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100%;
        }
    }

}

@media (max-width: 767px) {
    .card-box {
        .is-link {
            .card-img::after {
                top: 4px;
                right: 4px;
                bottom: auto;
                width: 20px;
                height: 20px;
            }
            &:hover {
                .card-img img {
                    scale: 1.15;
                }
            }
        }
    }
}


</style>
