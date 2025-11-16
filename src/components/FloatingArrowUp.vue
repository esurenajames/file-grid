<template>
  <Button
    class="fixed bottom-10 right-10 z-50 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-2xl transition-all flex items-center justify-center"
    @click="scrollToTop"
    aria-label="Scroll to top"
    style="width: 54px; height: 54px;"
  >
    <ArrowUp class="w-24 h-24" />
  </Button>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-vue-next";
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>