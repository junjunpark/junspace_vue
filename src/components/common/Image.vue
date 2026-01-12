<template>
  <component :is="hasLink ? 'a' : 'div'" :href="hasLink" target="_blank">
    <picture>
      <source
        v-if="mobileSrc"
        media="(max-width: 767px)"
        :srcset="imagePath + mobileSrc"
      />
      <img
        :src="imagePath + imageSrc"
        :alt="altText"
      />
    </picture>
  </component>
</template>

<script setup>
defineProps({
  hasLink: {
    type: String,
    default: null,
  },
  mobileSrc: {
    type: String,
    default: null,
  },
  imageSrc: {
    type: String,
    default: 'bbo.jpg',
  },
  altText: {
    type: String,
    default: '이미지',
  },
})

const imagePath = '../../assets/images/'
</script>
