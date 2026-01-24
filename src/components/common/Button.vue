
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
        default: ''
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
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'line', 'gray'].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    iconOnly: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    active: {
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

const allAttrs = computed(() => {
const attrs = {};

// variant - 항상 추가
attrs['data-type'] = props.variant;

// size (md가 아닐 때만)
if (props.size !== 'md') {
attrs['data-size'] = props.size;
}

// icon only
if (props.iconOnly) {
attrs['data-icon-only'] = 'true';
}

// active
if (props.active) {
attrs['data-active'] = 'true';
}

// disabled
if (props.disabled) {
attrs['data-disabled'] = 'true';
}

// 사용자 정의 data-* 속성
for (const [key, value] of Object.entries(props.dataAttrs)) {
attrs[`data-${key}`] = value;
}

// aria-* 속성
for (const [key, value] of Object.entries(props.ariaAttrs)) {
attrs[`aria-${key}`] = value;
}

return attrs;
});
</script>
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
    <slot name="icon-left" v-if="$slots['icon-left']"></slot>
    <span v-if="text" v-html="text"></span>
    <slot></slot>
    <slot name="icon-right" v-if="$slots['icon-right']"></slot>
</component>
</template>
