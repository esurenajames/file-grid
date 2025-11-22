<template>
  <div
    class="fixed top-0 right-0 h-full w-full max-w-xl bg-neutral-950 border-l border-neutral-800 shadow-2xl z-50 flex flex-col"
  >
    <!-- Header -->
    <div
      class="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-gradient-to-r from-orange-600/10 to-transparent"
    >
      <div class="flex items-center gap-3">
        <div class="bg-orange-600 rounded-lg p-2 shadow-lg shadow-orange-600/30">
          <Info class="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-white">{{ content.header.title }}</h2>
          <p class="text-sm text-neutral-400">
            {{ content.header.subtitle }}
          </p>
        </div>
      </div>
      <button
        @click="$emit('close')"
        class="text-neutral-400 hover:text-orange-500 transition-colors p-2 hover:bg-neutral-900 rounded-lg"
      >
        <X :size="24" />
      </button>
    </div>
    
    <!-- Content -->
    <div class="p-6 overflow-y-auto flex-1 space-y-6">
      <!-- Feature Cards -->
      <div class="space-y-4">
        <div
          v-for="feature in content.features"
          :key="feature.id"
          class="border border-neutral-800 rounded-xl p-5 hover:border-orange-600/50 transition-colors bg-neutral-900/30"
        >
          <div class="flex items-start gap-4">
            <div :class="feature.iconBgClass" class="rounded-lg p-3 mt-1">
              <component :is="feature.icon" class="w-6 h-6" />
            </div>
            <div class="flex-1">
              <h4 class="text-white font-semibold mb-2 flex items-center gap-2">
                {{ feature.title }}
                <span
                  :class="feature.badgeClass"
                  class="text-xs px-2 py-0.5 rounded-full"
                >
                  {{ feature.badge }}
                </span>
              </h4>
              <p class="text-neutral-400 text-sm mb-3">
                {{ feature.description }}
              </p>
              <ul class="space-y-2 text-sm text-neutral-400">
                <li v-for="item in feature.items" :key="item" class="flex items-start gap-2">
                  <Check class="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Pro Tips -->
      <div
        class="bg-gradient-to-br from-orange-600/10 to-orange-600/5 border border-orange-600/30 rounded-xl p-6"
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="bg-orange-600 rounded-lg p-2">
            <Lightbulb class="w-5 h-5 text-white" />
          </div>
          <h3 class="text-lg font-semibold text-white">{{ content.tips.title }}</h3>
        </div>
        <ul class="space-y-3 text-neutral-300">
          <li v-for="tip in content.tips.items" :key="tip" class="flex items-start gap-3">
            <span class="text-orange-500 font-bold text-lg">•</span>
            <span>{{ tip }}</span>
          </li>
        </ul>
      </div>

      <!-- Need Help -->
      <div class="text-center py-6 border-t border-neutral-800">
        <p class="text-neutral-400 mb-4">Need more help?</p>
        <button
          class="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
        >
          Contact Support
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Info, X, Video, MessageSquare, Monitor, FileText, Check, Lightbulb } from 'lucide-vue-next';

const content = {
  header: {
    title: 'How It Works',
    subtitle: 'Learn how to share files, chat, and collaborate real-time'
  },
  features: [
    {
      id: 'files',
      icon: FileText,
      iconBgClass: 'bg-blue-600/20 text-blue-400',
      title: 'File Sharing',
      badge: 'P2P',
      badgeClass: 'bg-blue-600/20 text-blue-400',
      description: 'Share files directly between users with secure peer-to-peer transfer. Maximum 1GB per file.',
      items: [
        'Drag and drop files or click to upload',
        'Share any file format securely',
        'No cloud storage — direct peer-to-peer transfer',
        'Maximum 1GB per file transfer'
      ]
    },
    {
      id: 'video',
      icon: Video,
      iconBgClass: 'bg-green-600/20 text-green-400',
      title: 'Video Calls',
      badge: 'Live',
      badgeClass: 'bg-green-600/20 text-green-400',
      description: 'Connect face-to-face with real-time video calls powered by WebRTC.',
      items: [
        'Start video calls with team members',
        'Crystal clear audio and video quality',
        'Secure peer-to-peer connections',
        'Toggle camera and microphone on/off'
      ]
    },
    {
      id: 'screen',
      icon: Monitor,
      iconBgClass: 'bg-purple-600/20 text-purple-400',
      title: 'Screen Sharing',
      badge: 'Pro',
      badgeClass: 'bg-purple-600/20 text-purple-400',
      description: 'Share your screen for presentations, demonstrations, or troubleshooting.',
      items: [
        'Share entire screen or specific windows',
        'Perfect for presentations and demos',
        'Real-time collaboration and feedback',
        'High-quality screen streaming'
      ]
    },
    {
      id: 'chat',
      icon: MessageSquare,
      iconBgClass: 'bg-pink-600/20 text-pink-400',
      title: 'Real-time Chat',
      badge: 'Instant',
      badgeClass: 'bg-pink-600/20 text-pink-400',
      description: 'Communicate instantly with built-in messaging while collaborating.',
      items: [
        'Send instant messages to collaborators',
        'Share links and quick updates',
        'See who\'s online and active',
        'Message history during session'
      ]
    }
  ],
  tips: {
    title: 'Pro Tips',
    items: [
      'Files are transferred directly between users — no server storage means complete privacy',
      'Keep your browser updated for the best WebRTC performance',
      'Use a stable internet connection for smooth video calls and screen sharing',
      'All data is encrypted end-to-end during peer-to-peer transfers'
    ]
  }
};
</script>