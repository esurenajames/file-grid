<template>
  <div class="relative bg-black min-h-screen overflow-hidden">
    <!-- Dotted background -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#404040" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>

    <div class="relative max-w-7xl mx-auto px-6 py-20">
      <!-- Features Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl lg:text-6xl font-bold text-white mb-6">
          Powerful Features, <span class="text-orange-500">Simply Designed</span>
        </h2>
        <p class="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
          Everything you need to collaborate, communicate, and share — all integrated into one seamless platform.
        </p>
      </div>

      <!-- Features Grid Component -->
      <FeaturesGrid />

      <!-- Feature Showcase Cards -->
      <div class="grid lg:grid-cols-2 gap-8 mb-20">
        <!-- Large Feature Card 1 -->
        <div class="trusted-bg rounded-3xl p-8 lg:p-12 overflow-hidden relative h-96">
          <div class="relative z-10">
            <h3 class="text-3xl font-bold text-white mb-3">Drag & Drop Simplicity</h3>
            <p class="text-white/90 mb-6 max-w-sm">
              Share files as easily as dragging them into FileGrid. No complicated uploads, just intuitive design.
            </p>
            <Button
              class="bg-white text-orange-600 hover:bg-neutral-100 px-6 py-2 rounded-lg font-semibold transition-colors"
              @click="router.push('/how-it-works')"
            >
              Learn More
            </Button>
          </div>
          <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        </div>

        <!-- Large Feature Card 2 -->
        <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl p-8 lg:p-12 overflow-hidden relative h-96">
          <div class="relative z-10">
            <h3 class="text-3xl font-bold text-white mb-3">Real-Time Collaboration</h3>
            <p class="text-neutral-300 mb-6 max-w-sm">
              Work together in real-time. See changes instantly, chat with teammates, and stay perfectly in sync.
            </p>
            <Button
              variant="outline"
              class="border-2 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              @click="router.push('/how-it-works')"
            >
              Learn How It Works
            </Button>
          </div>
          <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-600 opacity-5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div class="grid md:grid-cols-4 gap-6 mb-20">
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"
          :style="{ animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both` }"
        >
          <div class="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">{{ item.stat }}</div>
          <div class="text-neutral-400">{{ item.label }}</div>
        </div>
      </div>

      <Ready />
    </div>
  </div>
</template>

<script setup>
import FeaturesGrid from '@/components/modules/features/Features.vue';
import Ready from '@/components/modules/features/Ready.vue';
import { Button } from '@/components/ui/button';
import { useRouter } from 'vue-router';

const router = useRouter();

const stats = [
  { stat: "10M+", label: "Files Shared Daily" },
  { stat: "99.9%", label: "Uptime Guarantee" },
  { stat: "256-bit", label: "Encryption" },
  { stat: "50+", label: "Integrations" }
];
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.trusted-bg {
  background: repeating-linear-gradient(135deg, #ea580c 0, #ea580c 10%, transparent 0, transparent 50%);
  background-size: 4em 4em;
  background-color: #f66513;
  opacity: 1;
}
</style>