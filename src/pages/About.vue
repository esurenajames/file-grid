<template>
  <section class="bg-black py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative">
      <AboutSection />
      <Mission />
    </div>
  </section>
</template>

<script setup>
import AboutSection from "@/components/modules/about/AboutSection.vue";
import Mission from "@/components/modules/about/Mission.vue";
</script>