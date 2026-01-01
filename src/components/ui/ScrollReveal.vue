<template>
  <div ref="target" :class="['transition-all duration-700 ease-out will-change-transform', animationClass, { 'opacity-0 translate-y-8': !isVisible && animation === 'fade-up', 'opacity-0 -translate-x-8': !isVisible && animation === 'fade-right', 'opacity-0 translate-x-8': !isVisible && animation === 'fade-left', 'opacity-0 scale-95': !isVisible && animation === 'zoom-in', 'opacity-100 translate-0 scale-100': isVisible }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

interface Props {
  animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'zoom-in' | 'none';
  offset?: number;
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fade-up',
  offset: 0,
});

const target = ref(null);
const isVisible = ref(false);

const animationClass = ref('');

useIntersectionObserver(
  target,
  (entries) => {
    const entry = entries[0];
    if (entry && entry.isIntersecting) {
      isVisible.value = true;
    }
  },
  {
    threshold: 0.1,
    rootMargin: '50px',
  }

);
</script>
