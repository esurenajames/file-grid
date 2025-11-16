<template>
  <div class="max-w-full">
    <!-- Upload Area -->
    <div
      class="relative rounded-xl border-2 border-dashed border-neutral-800 p-16 text-center hover:border-orange-600/50 transition-all duration-300 cursor-pointer group mb-6"
      @click="triggerFileInput"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
      :class="{ 'border-orange-600 bg-orange-600/5': isDragging }"
    >
      <div class="flex flex-col items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-orange-600/10 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 group-hover:text-orange-500 transition-colors">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>
        <div>
          <p class="text-white font-medium mb-0.5">
            Drop files here or click to browse
          </p>
          <p class="text-neutral-500 text-sm">
            Maximum 1GB per file
          </p>
        </div>
      </div>
      <input
        ref="fileInput"
        type="file"
        multiple
        class="hidden"
        @change="handleFileSelect"
      />
    </div>

    <!-- Uploaded Files List -->
    <div v-if="uploadedFiles.length > 0" class="space-y-3">
      <div class="flex items-center justify-between mb-2">
        <p class="text-neutral-400 text-sm font-medium">{{ uploadedFiles.length }} file{{ uploadedFiles.length > 1 ? 's' : '' }} ready</p>
        <button @click="clearAll" class="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">
          Clear all
        </button>
      </div>
      
      <div class="space-y-2">
        <div 
          v-for="(file, index) in uploadedFiles" 
          :key="index" 
          class="flex items-center gap-3 p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors group"
        >
          <div class="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-500">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-white text-sm font-medium truncate">{{ file.name }}</p>
            <p class="text-neutral-500 text-xs mt-0.5">{{ file.size }}</p>
          </div>
          <button 
            @click.stop="removeFile(index)"
            class="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Start Sharing Button -->
      <button class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3.5 rounded-lg font-medium text-sm shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30 transition-all mt-4">
        Start Sharing Session
      </button>
    </div>

    <!-- Empty State Action -->
    <div v-else class="text-center py-4">
      <p class="text-neutral-600 text-sm">No files selected yet</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const isDragging = ref(false)
const uploadedFiles = ref([
  { name: 'presentation.pdf', size: '2.4 MB' },
  { name: 'report-2024.docx', size: '856 KB' }
])

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files || [])
  console.log('Selected files:', files)
}

const handleDrop = (event) => {
  isDragging.value = false
  const files = Array.from(event.dataTransfer.files || [])
  console.log('Dropped files:', files)
}

const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1)
}

const clearAll = () => {
  uploadedFiles.value = []
}
</script>