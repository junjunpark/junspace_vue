<script setup>
import projects from '@/assets/data/projects.json'

/**
 * src/assets/images 아래 모든 이미지를
 * { '절대경로': '빌드된 URL' } 형태로 로드
 */
const imageMap = import.meta.glob(
  '@/assets/images/**/*',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

/**
 * JSON의 "work/pj26.jpg" → 실제 이미지 URL
 */
function resolveImg(path) {
  if (!path) return ''
  return imageMap[`/src/assets/images/${path}`]
}
</script>

<template>
  <div class="card-list">
    <component
      v-for="(item, i) in projects"
      :key="i"
      :is="item.linkUrl ? 'a' : 'div'"
      class="card-box"
      :class="{ 'is-link': !!item.linkUrl }"
      :href="item.linkUrl || undefined"
      target="_blank"
      rel="noopener"
      :data-category="item.category"
    >
      <div class="card-img">
        <picture v-if="item.mobileSrc">
          <source
            :srcset="resolveImg(item.mobileSrc)"
            media="(max-width: 767px)"
          />
          <img
            :src="resolveImg(item.imageSrc)"
            :alt="item.altText"
            loading="lazy"
            decoding="async"
          />
        </picture>

        <img
          v-else
          :src="resolveImg(item.imageSrc)"
          :alt="item.altText"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="card-desc">
        <h4 class="h3">{{ item.title }}</h4>
        <div class="info">
          <span class="body2">{{ item.period }}</span>
          <ul class="list-dot">
            <li v-for="(desc, j) in item.descriptions" :key="j">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </component>
  </div>
</template>
