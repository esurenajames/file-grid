<template>
  <div class="bg-black relative overflow-hidden min-h-screen px-8">
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    <div class="mx-auto py-12 px-6 max-w-full">
      <div class="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 class="text-3xl font-bold text-white mb-2">FileGrid Sharing Center</h1>
          <p class="text-neutral-400 text-lg">
            Share files, chat, and collaborate in real-time with camera and screen sharing. 
            <a
              @click="showSidebar = true"
              class="text-orange-500 hover:text-orange-400 underline decoration-orange-500/30 hover:decoration-orange-400 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              Learn how it works
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-6">
        <Files />
        <Camera />
        <Chat />
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showSidebar"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        @click="showSidebar = false"
      ></div>
    </transition>
    <!-- Sidebar Menu for Instructions -->
    <transition name="slide">
      <Instructions v-if="showSidebar" @close="showSidebar = false" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Files from '@/components/modules/main/Files.vue'
import Camera from '@/components/modules/main/Camera.vue'
import Chat from '@/components/modules/main/Chat.vue'
import Instructions from '@/components/modules/main/Instructions.vue'

const showSidebar = ref(false)
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
</style>