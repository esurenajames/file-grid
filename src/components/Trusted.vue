<template>
  <div class="bg-black pb-20">
    <div class="max-w-full mx-auto px-4 sm:px-8 md:px-20 lg:px-40">
      <div class="trusted-bg rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
        <!-- Heading -->
        <h2
          class="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-10 sm:mb-16 max-w-4xl leading-tight text-left"
        >
          Trusted by teams and individuals worldwide
        </h2>

        <!-- Stats Row -->
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-start gap-8 sm:gap-12 lg:gap-20">
          <!-- Stat 1 -->
          <div class="space-y-2 sm:space-y-3 flex-1 min-w-[120px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white mb-1 sm:mb-2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div class="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              {{ animatedUsers }}+
            </div>
            <div class="text-base sm:text-lg text-white/90 font-medium">Active Users</div>
          </div>

          <!-- Stat 2 -->
          <div class="space-y-2 sm:space-y-3 flex-1 min-w-[120px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white mb-1 sm:mb-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            <div class="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              {{ animatedFiles }}K+
            </div>
            <div class="text-base sm:text-lg text-white/90 font-medium">Files Shared</div>
          </div>

          <!-- Stat 3 -->
          <div class="space-y-2 sm:space-y-3 flex-1 min-w-[120px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white mb-1 sm:mb-2"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
            <div class="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              {{ animatedRating }}
            </div>
            <div class="text-base sm:text-lg text-white/90 font-medium">Rated Excellent</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const animatedUsers = ref(0);
const animatedFiles = ref(0);
const animatedRating = ref(0);

const animateValue = (target, duration, maxValue, decimals = 0) => {
  const start = 0;
  const increment = maxValue / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= maxValue) {
      target.value = decimals > 0 ? maxValue.toFixed(decimals) : Math.floor(maxValue);
      clearInterval(timer);
    } else {
      target.value = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
    }
  }, 16);
};

onMounted(() => {
  setTimeout(() => {
    animateValue(animatedUsers, 2000, 700);
    animateValue(animatedFiles, 2000, 199);
    animateValue(animatedRating, 2000, 4.5, 1);
  }, 200);
});
</script>

<style scoped>
.trusted-bg {
  background: repeating-linear-gradient(135deg, #ea580c 0, #ea580c 10%, transparent 0, transparent 50%);
  background-size: 4em 4em;
  background-color: #f66513;
  opacity: 1;
}
</style>