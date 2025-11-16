<template>
  <div class="max-w-full">
    <div class="flex flex-col h-[600px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden">
      <!-- Chat Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
        <div class="flex items-center gap-3">
          <span class="text-white text-lg font-bold">FileGrid Chat</span>
          <span class="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">Live</span>
        </div>
        <div class="flex -space-x-2">
          <Avatar class="w-8 h-8 border-2 border-neutral-900">
            <AvatarImage src="https://i.pravatar.cc/150?img=12" />
            <AvatarFallback class="bg-orange-600 text-white text-xs">J</AvatarFallback>
          </Avatar>
          <Avatar class="w-8 h-8 border-2 border-neutral-900">
            <AvatarImage src="https://i.pravatar.cc/150?img=5" />
            <AvatarFallback class="bg-blue-600 text-white text-xs">S</AvatarFallback>
          </Avatar>
          <Avatar class="w-8 h-8 border-2 border-neutral-900">
            <AvatarImage src="https://i.pravatar.cc/150?img=8" />
            <AvatarFallback class="bg-green-600 text-white text-xs">M</AvatarFallback>
          </Avatar>
          <span class="text-neutral-500 text-xs ml-6">3 online</span>
        </div>
      </div>
      <!-- Chat Messages -->
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-neutral-900">
        <div v-for="msg in messages" :key="msg.id" class="flex items-start gap-3">
          <Avatar class="w-10 h-10 flex-shrink-0">
            <AvatarImage :src="msg.avatar" />
            <AvatarFallback :class="msg.fallbackClass">{{ msg.fallback }}</AvatarFallback>
          </Avatar>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <p class="text-white text-sm font-semibold">{{ msg.name }}</p>
              <span class="text-neutral-500 text-xs">{{ msg.time }}</span>
            </div>
            <div class="bg-neutral-800 rounded-lg rounded-tl-none px-4 py-2">
              <p class="text-neutral-200 text-base">{{ msg.text }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="bg-neutral-700 rounded-full px-4 py-1">
            <p class="text-neutral-400 text-xs">Today</p>
          </div>
        </div>
      </div>
      <!-- Chat Input -->
      <div class="px-6 py-4 border-t border-neutral-800 bg-neutral-950">
        <form class="flex items-center gap-3" @submit.prevent="sendMessage">
          <input
            v-model="chatMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg pl-4 pr-12 py-3 text-base text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-600 transition-colors"
            @keyup.enter="sendMessage"
          />
          <Button size="lg" class="bg-orange-600 hover:bg-orange-700 text-white h-11 w-11 p-0 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m22 2-7 20-4-9-9-4Z"/>
              <path d="M22 2 11 13"/>
            </svg>
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const chatMessage = ref('')
const messages = ref([
  {
    id: 1,
    name: 'John',
    time: '10:30',
    text: 'Ready to receive!',
    avatar: 'https://i.pravatar.cc/150?img=12',
    fallback: 'JD',
    fallbackClass: 'bg-orange-600 text-white text-xs'
  },
  {
    id: 2,
    name: 'Sarah',
    time: '10:32',
    text: 'Sending now...',
    avatar: 'https://i.pravatar.cc/150?img=5',
    fallback: 'ST',
    fallbackClass: 'bg-blue-600 text-white text-xs'
  },
  {
    id: 3,
    name: 'Mike',
    time: '10:33',
    text: 'Amazing speed! 🚀',
    avatar: 'https://i.pravatar.cc/150?img=8',
    fallback: 'MK',
    fallbackClass: 'bg-green-600 text-white text-xs'
  },
  {
    id: 4,
    name: 'John',
    time: '10:35',
    text: 'Received! ✅',
    avatar: 'https://i.pravatar.cc/150?img=12',
    fallback: 'JD',
    fallbackClass: 'bg-orange-600 text-white text-xs'
  }
])

const sendMessage = () => {
  if (chatMessage.value.trim()) {
    messages.value.push({
      id: messages.value.length + 1,
      name: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: chatMessage.value,
      avatar: '',
      fallback: 'Y',
      fallbackClass: 'bg-orange-600 text-white text-xs'
    })
    chatMessage.value = ''
  }
}
</script>