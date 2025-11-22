<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Separator />
    <Footer />
    <FloatingArrowUp v-if="showArrow" />
  </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import FloatingArrowUp from '@/components/FloatingArrowUp.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const showArrow = ref(false)

function handleScroll() {
  showArrow.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>