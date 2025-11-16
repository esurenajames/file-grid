<template>
  <section class="min-h-158 bg-black flex items-center justify-center px-8">
    <div class="max-w-4xl w-full">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 space-y-6">
          <div class="flex items-center gap-3 mb-8">
            <div
              class="bg-orange-600 rounded-md w-12 h-12 flex items-center justify-center shadow-lg shadow-orange-600/30"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="6" height="6" rx="1" fill="white" />
                <rect x="14" y="4" width="6" height="6" rx="1" fill="white" />
                <rect x="4" y="14" width="6" height="6" rx="1" fill="white" />
                <rect x="14" y="14" width="6" height="6" rx="1" fill="white" />
              </svg>
            </div>
            <span class="text-white text-3xl font-bold tracking-tight ml-1">FileGrid</span>
          </div>

          <div class="space-y-4">
            <h1 class="text-white text-2xl font-normal">
              <span class="font-semibold">404.</span> That's an error.
            </h1>
            
            <p class="text-neutral-400 text-base leading-relaxed">
              The requested URL was not found on this server. 
              <span class="font-semibold text-neutral-300">That's all we know.</span>
            </p>
          </div>
        </div>

        <div class="flex-1 flex justify-center">
          <img 
            src="https://placehold.co/400x300/1a1a1a/666666?text=Robot+SVG+Here" 
            alt="Broken robot illustration"
            class="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>