<template>
  <div class="trusted-bg rounded-3xl p-12 lg:p-16 text-center">
    <h3 class="text-4xl lg:text-5xl font-bold text-white mb-6">
      Ready to experience FileGrid?
    </h3>
    <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
      Join thousands of teams who have already streamlined their collaboration.
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <Button class="bg-black hover:bg-neutral-200 hover:text-slate-900 text-white px-8 py-6 rounded-lg text-lg font-semibold flex items-center gap-2 shadow-lg">
        Get Started Free
      </Button>
      <Button variant="outline" class="bg-white border-0 text-slate-900 hover:bg-black hover:text-white px-8 py-6 rounded-lg text-lg font-semibold">
        Schedule Demo
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
</script>

<style scoped>
.trusted-bg {
  background: repeating-linear-gradient(135deg, #ea580c 0, #ea580c 10%, transparent 0, transparent 50%);
  background-size: 4em 4em;
  background-color: #f66513;
  opacity: 1;
}
</style>