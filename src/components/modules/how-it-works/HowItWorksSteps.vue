<template>
  <div class="text-center mb-16">
    <h2 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      How <span class="text-orange-500">FileGrid</span> works
    </h2>
    <p class="text-lg text-neutral-400 max-w-3xl mx-auto">
      FileGrid is a secure, real-time platform for sharing files, video calls, chat, and
      screen sharing—peer-to-peer and private, with no cloud storage or third-party
      tracking.
    </p>
  </div>

  <!-- Steps & Image Layout -->
  <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
    <!-- Left Side - Steps -->
    <div class="space-y-4">
      <!-- Step One -->
      <div
        class="border-l-4 px-8 py-6 rounded-md cursor-pointer transition-all duration-300"
        :class="
          stepActive[0]
            ? 'border-orange-600 bg-neutral-900/50'
            : 'border-neutral-700 hover:bg-neutral-900/50'
        "
        @click="toggleStep(0)"
      >
        <p class="text-neutral-400 text-sm mb-2">Step One</p>
        <h3
          :class="[
            'text-xl font-bold mb-3',
            stepActive[0] ? 'text-white' : 'text-neutral-500',
          ]"
        >
          Start a Room & Select Files
        </h3>
        <p class="text-neutral-400">
          Create a secure room and select files to share. All file types and sizes are
          supported, with direct peer-to-peer encryption.
        </p>
      </div>

      <!-- Step Two -->
      <div
        class="border-l-4 px-8 py-6 rounded-md cursor-pointer transition-all duration-300"
        :class="
          stepActive[1]
            ? 'border-orange-600 bg-neutral-900/50'
            : 'border-neutral-700 hover:bg-neutral-900/50'
        "
        @click="toggleStep(1)"
      >
        <p class="text-neutral-400 text-sm mb-2">Step Two</p>
        <h3
          :class="[
            'text-xl font-bold mb-3',
            stepActive[1] ? 'text-white' : 'text-neutral-500',
          ]"
        >
          Invite & Collaborate
        </h3>
        <p class="text-neutral-400">
          Invite participants to your room. Collaborate instantly with chat, video calls,
          and screen sharing—all in real time.
        </p>
      </div>

      <!-- Step Three -->
      <div
        class="border-l-4 px-8 py-6 rounded-md cursor-pointer transition-all duration-300"
        :class="
          stepActive[2]
            ? 'border-orange-600 bg-neutral-900/50'
            : 'border-neutral-700 hover:bg-neutral-900/50'
        "
        @click="toggleStep(2)"
      >
        <p class="text-neutral-400 text-sm mb-2">Step Three</p>
        <h3
          :class="[
            'text-xl font-bold mb-3',
            stepActive[2] ? 'text-white' : 'text-neutral-500',
          ]"
        >
          Share & Stay Private
        </h3>
        <p class="text-neutral-400">
          Share files directly—no uploads, no cloud storage. Your data is never stored on
          a server and remains private, always.
        </p>
      </div>
    </div>

    <!-- Right Side - Bigger Image Card -->
    <Card class="bg-neutral-900 border border-neutral-800 rounded-3xl p-0 shadow-xl w-full h-full flex items-center justify-center">
      <CardContent class="p-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop"
          alt="FileGrid Dashboard"
          class="w-full h-full object-cover rounded-2xl"
        />
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stepActive = ref([true, false, false]);

function toggleStep(idx) {
  stepActive.value[idx] = !stepActive.value[idx];
}
</script>