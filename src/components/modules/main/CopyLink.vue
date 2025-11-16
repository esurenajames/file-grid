<template>
  <Dialog v-model:open="open" @update:open="handleDialogChange">
    <DialogContent class="max-w-md bg-neutral-900 border border-neutral-800 rounded-xl py-6 px-6">
      <DialogTitle class="text-xl font-semibold text-white mb-6">
        Share Room Link
      </DialogTitle>
      <div class="relative mb-2">
        <div class="bg-neutral-800 text-gray-100 font-mono text-sm px-4 py-3 pr-12 rounded-lg border border-neutral-700 overflow-x-auto whitespace-nowrap">
          {{ link }}
        </div>
        <button 
          @click="copyLink" 
          class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-white transition-colors rounded-md hover:bg-neutral-700"
          :class="{ 'text-green-500 hover:text-green-500': copied }"
        >
          <svg 
            v-if="!copied"
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
          <svg 
            v-else
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </button>
      </div>

      <p class="text-neutral-400 text-sm text-center">
        Share this link to invite others to your room.
        <span
          @click="goToRoom"
          class="ml-1 text-orange-500 underline cursor-pointer hover:text-orange-600"
        >
          Go to Room
        </span>
      </p>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useRouter } from 'vue-router'

const props = defineProps({
  link: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const open = ref(true)
const copied = ref(false)
const router = useRouter()

function copyLink() {
  navigator.clipboard.writeText(props.link)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

function handleDialogChange(value) {
  open.value = value
  if (!value) {
    emit('close')
  }
}

function goToRoom() {
  const roomCode = props.link.split('/room/')[1]
  router.push(`/room/${roomCode}`)
  emit('close')
}
</script>