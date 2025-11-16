<template>
  <div class="relative bg-black min-h-screen overflow-hidden">
    <!-- Dotted connection lines -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#404040" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
      
      <!-- Connection lines -->
      <line x1="50%" y1="20%" x2="75%" y2="35%" stroke="#404040" stroke-width="2" stroke-dasharray="5,5" />
      <line x1="75%" y1="35%" x2="85%" y2="50%" stroke="#404040" stroke-width="2" stroke-dasharray="5,5" />
      <line x1="50%" y1="20%" x2="70%" y2="65%" stroke="#404040" stroke-width="2" stroke-dasharray="5,5" />
      <line x1="70%" y1="65%" x2="85%" y2="75%" stroke="#404040" stroke-width="2" stroke-dasharray="5,5" />
    </svg>

    <div class="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Share and Connect — with <span class="text-orange-500">FileGrid</span>
          </h1>
          
          <p class="text-lg lg:text-xl text-neutral-400 max-w-xl">
            <span class="text-orange-500 font-semibold">FileGrid</span> brings everything you need to connect whether it is share files, chat, and talk face-to-face without the hassle of switching apps.
            Stay connected and get things done, wherever you are.
          </p>

          <p class="text-xl text-white font-semibold italic border-l-4 border-orange-600 pl-4">
            “Share files, talk, and collaborate — all in one simple, private space.”
          </p>

          <div class="flex flex-wrap gap-4">
            <Button class="bg-orange-600 hover:bg-orange-700 text-white px-20 py-6 rounded-lg text-lg font-semibold flex items-center gap-2 shadow-lg shadow-orange-600/30">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
            
            <Button variant="outline" class="border-2 border-neutral-700 bg-transparent hover:bg-neutral-200 text-white px-8 py-6 rounded-lg text-lg font-semibold flex items-center gap-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </div>


        <!-- Right Content - Floating Cards -->
        <div class="relative h-[600px] hidden lg:block">
          <!-- Document Card -->
          <div 
            class="absolute top-0 right-20 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-2xl w-64 animate-float"
            style="animation-delay: 0s"
          >
            <div class="flex items-center gap-3">
              <div class="bg-blue-600 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div>
                <div class="text-white font-semibold text-sm">List of questions.docs</div>
                <div class="text-neutral-500 text-xs">125 MB</div>
              </div>
              <Button variant="ghost" size="icon" class="ml-auto text-white hover:bg-neutral-800 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="12" cy="5" r="1"/>
                  <circle cx="12" cy="19" r="1"/>
                </svg>
              </Button>
            </div>
          </div>

          <!-- Main Dashboard Card -->
          <div 
            class="absolute top-24 left-0 bg-linear-to-br from-orange-600 to-orange-500 rounded-3xl p-4 shadow-2xl w-96 animate-float"
            style="animation-delay: 0.5s"
          >
            <div class="bg-neutral-900 rounded-2xl p-0 h-64 flex items-center justify-center overflow-hidden">
              <img 
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201020213119/5-Best-Practices-for-Secure-File-Sharing.png" 
                alt="File sharing illustration"
                class="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>

          <!-- Video Icon -->
          <div 
            class="absolute top-16 right-0 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl animate-float"
            style="animation-delay: 1s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
          </div>

          <!-- Users/Team Card -->
          <div 
            class="absolute bottom-32 left-12 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl animate-float"
            style="animation-delay: 1.5s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>

          <!-- Storage Card -->
          <div 
            class="absolute bottom-12 right-8 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl w-72 animate-float"
            style="animation-delay: 2s"
          >
            <div class="flex items-center gap-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
              </svg>
              <span class="text-white font-semibold">Maximum file limit</span>
              <span class="ml-auto text-neutral-400 text-sm">45%</span>
            </div>
            <div class="bg-neutral-800 rounded-full h-2 mb-2">
              <div class="bg-orange-600 rounded-full h-2 w-[45%]"></div>
            </div>
            <div class="text-neutral-500 text-xs">450 MB of 1 GB used</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>