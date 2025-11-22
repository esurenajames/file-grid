<template>
  <!-- Features Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    <div
      v-for="(feature, index) in features"
      :key="index"
      :class="[
        'relative rounded-2xl p-8 transition-all duration-300 group',
        feature.available
          ? 'bg-neutral-900 border border-neutral-800 hover:border-orange-600'
          : 'bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700'
      ]"
      :style="{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }"
    >
      <!-- Unavailable Badge -->
      <div v-if="!feature.available" class="absolute top-4 right-4">
        <div class="flex items-center gap-1 bg-neutral-800 px-3 py-1 rounded-full">
          <Clock class="w-3 h-3 text-neutral-400" />
          <span class="text-xs text-neutral-400">Coming Soon</span>
        </div>
      </div>

      <div
        :class="[
          'w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors',
          feature.available
            ? 'bg-orange-600 bg-opacity-20 group-hover:bg-opacity-30'
            : 'bg-neutral-800 bg-opacity-50 group-hover:bg-opacity-70'
        ]"
      >
        <component :is="feature.icon" :class="['w-8 h-8', feature.available ? 'text-white' : 'text-neutral-500']" />
      </div>

      <h3 :class="['text-xl font-semibold mb-3', feature.available ? 'text-white' : 'text-neutral-400']">
        {{ feature.title }}
      </h3>
      <p :class="['mb-6', feature.available ? 'text-neutral-400' : 'text-neutral-500']">
        {{ feature.description }}
      </p>

      <div v-if="feature.available" class="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors font-semibold cursor-pointer">
        <a :href="feature.href" class="inline-flex items-center gap-2">
          Learn How It Works <ArrowRight class="w-4 h-4" />
        </a>
      </div>
      <div v-else class="flex items-center gap-2 text-neutral-500 font-semibold">
        <Clock class="w-4 h-4" /> Available Soon
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  FileText,
  MessageSquare,
  Video,
  Lock,
  Share2,
  Zap,
  ArrowRight,
  Clock
} from 'lucide-vue-next';

const features = [
  {
    icon: FileText,
    title: "File Sharing",
    href: "/how-it-works",
    description: "Share files and folders with anyone, with advanced protection.",
    available: true,
  },
  {
    icon: MessageSquare,
    title: "Team Chat",
    href: "/how-it-works",
    description: "Integrated messaging for seamless team communication.",
    available: false,
  },
  {
    icon: Video,
    title: "Video Calls",
    href: "/how-it-works",
    description: "Face-to-face video conferencing built directly into FileGrid.",
    available: false,
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    href: "/how-it-works",
    description: "End-to-end encryption and enterprise-grade security features.",
    available: false,
  },
  {
    icon: Share2,
    title: "Collaborative Workspaces",
    href: "/how-it-works",
    description: "Dedicated spaces for projects with organized files and communication.",
    available: false,
  },
  {
    icon: Zap,
    title: "API & Integrations",
    href: "/how-it-works",
    description: "Connect FileGrid with your favorite apps and workflows.",
    available: false,
  }
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
</style>