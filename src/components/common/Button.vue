<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : undefined"
    :target="tag === 'a' ? target : undefined"
    :type="tag === 'button' ? type : undefined"
    :class="computedClass"
    :disabled="disabled"
    :aria-disabled="disabled ? 'true' : undefined"
    v-bind="allAttrs"
  >
    <span v-html="text"></span>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  href: {
    type: String,
    default: '#'
  },
  target: {
    type: String,
    default: '_blank'
  },
  text: {
    type: String,
    default: '바로가기'
  },
  className: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  dataAttrs: {
    type: Object,
    default: () => ({})
  },
  ariaAttrs: {
    type: Object,
    default: () => ({})
  }
});

// 클래스 계산
const computedClass = computed(() => {
  const classes = ['btn'];
  if (props.className) {
    classes.push(props.className);
  }
  if (props.disabled) {
    classes.push('disabled');
  }
  return classes.join(' ');
});

// data-* 및 aria-* 속성 병합
const allAttrs = computed(() => {
  const attrs = {};

  // data-* 속성 추가
  for (const [key, value] of Object.entries(props.dataAttrs)) {
    attrs[`data-${key}`] = value;
  }

  // aria-* 속성 추가
  for (const [key, value] of Object.entries(props.ariaAttrs)) {
    attrs[`aria-${key}`] = value;
  }

  return attrs;
});
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
