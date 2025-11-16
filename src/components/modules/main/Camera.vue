<template>
  <div class="max-w-full">
    <div class="flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden">
      <!-- Camera Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
        <div class="flex items-center gap-3">
          <span class="text-white text-lg font-bold">Camera & Screen Share</span>
          <span class="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">Live</span>
        </div>
        <span class="text-neutral-500 text-xs ml-6">{{ activeStreams.length }} active</span>
      </div>
      <!-- Camera Streams -->
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-neutral-900">
        <div :class="activeStreams.length === 0 ? 'grid grid-cols-1' : activeStreams.length === 1 ? 'grid grid-cols-1' : 'grid grid-cols-2 gap-4'">
          <!-- No Streams: Show Start Screen Share & Add Camera -->
          <div v-if="activeStreams.length === 0" class="bg-neutral-900 border-neutral-800 rounded-2xl p-2 mb-8">
            <div class="aspect-video bg-neutral-800 rounded-xl flex items-center justify-center group cursor-pointer hover:bg-neutral-750 transition-colors relative overflow-hidden mb-6">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="text-center relative z-10">
                <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-600">
                    <rect width="20" height="14" x="2" y="3" rx="2"/>
                    <line x1="8" x2="16" y1="21" y2="21"/>
                    <line x1="12" x2="12" y1="17" y2="21"/>
                  </svg>
                </div>
                <p class="text-white font-semibold mb-1">Start Screen Share</p>
                <p class="text-neutral-400 text-sm">Click to share your screen</p>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4">
              <Button @click="addStream('screen')" class="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
                  <rect width="20" height="14" x="2" y="3" rx="2"/>
                  <line x1="8" x2="16" y1="21" y2="21"/>
                  <line x1="12" x2="12" y1="17" y2="21"/>
                </svg>
                Share Screen
              </Button>
              <Button @click="addStream('camera')" variant="outline" class="flex-1 border-neutral-700 bg-transparent text-white hover:bg-neutral-800 py-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
                Add Camera
              </Button>
            </div>
          </div>
          <!-- Active Streams -->
          <div
            v-for="(stream, index) in activeStreams"
            :key="stream.id"
            class="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 relative mb-8"
          >
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span class="text-white text-xs font-semibold">{{ stream.type === 'camera' ? 'Camera' : 'Screen' }}</span>
              </div>
              <Button @click="removeStream(stream.id)" size="sm" variant="ghost" class="h-6 w-6 p-0 text-neutral-400 hover:text-red-500 hover:bg-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </Button>
            </div>
            <div :class="activeStreams.length === 1 ? 'aspect-video' : 'aspect-square'" class="bg-neutral-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent"></div>
              <div class="text-center relative z-10">
                <div class="w-12 h-12 mx-auto rounded-full bg-orange-600/20 flex items-center justify-center">
                  <svg v-if="stream.type === 'camera'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-600">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                    <circle cx="12" cy="13" r="3"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-600">
                    <rect width="20" height="14" x="2" y="3" rx="2"/>
                    <line x1="8" x2="16" y1="21" y2="21"/>
                    <line x1="12" x2="12" y1="17" y2="21"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Add More Streams Buttons -->
        <div v-if="activeStreams.length > 0 && activeStreams.length < 4" class="flex gap-2 mt-4">
          <Button @click="addStream('screen')" variant="outline" class="flex-1 border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
            Add Screen
          </Button>
          <Button @click="addStream('camera')" variant="outline" class="flex-1 border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
            Add Camera
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const activeStreams = ref([])
let streamIdCounter = 0

const addStream = (type) => {
  if (activeStreams.value.length < 4) {
    activeStreams.value.push({
      id: streamIdCounter++,
      type: type
    })
  }
}

const removeStream = (id) => {
  activeStreams.value = activeStreams.value.filter(stream => stream.id !== id)
}
</script>