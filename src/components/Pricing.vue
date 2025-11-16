<template>
  <div class="bg-black pb-36 pt-24">
    <div class="max-w-7xl mx-auto px-6 relative">
      <!-- Gray background behind header and pricing cards up to price row -->
      <div class="absolute left-0 right-0 mx-auto w-full max-w-8xl z-0"
           style="top:0; height:420px;">
        <div class="bg-neutral-900/95 rounded-3xl shadow-lg shadow-black/30 w-full h-full"></div>
      </div>

      <div class="relative z-10 mb-16 pt-12 px-4">
        <div class="text-center p">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose the right plan for your collaboration needs
          </h2>
          <p class="text-lg text-neutral-400 mb-8">
            Simple, transparent pricing. Each plan gives you a set number of file shares and room participants. Try any plan free for 30 days.
          </p>
          <!-- Billing Toggle -->
          <div class="inline-flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-1">
            <Button
              :class="[
                'px-8 py-3 rounded-md font-semibold transition-all duration-200',
                billingType === 'monthly'
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-transparent text-neutral-400 hover:text-white'
              ]"
              @click="billingType = 'monthly'"
            >
              Monthly Billing
            </Button>
            <Button
              :class="[
                'px-8 py-3 rounded-md font-semibold transition-all duration-200',
                billingType === 'annual'
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-transparent text-neutral-400 hover:text-white'
              ]"
              @click="billingType = 'annual'"
            >
              Annual Billing
            </Button>
          </div>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Standard Plan -->
        <Card class="relative bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 p-0 overflow-visible shadow-lg">
          <div class="absolute -top-4 left-8 bg-white px-6 py-2 rounded-t-2xl z-10">
            <span class="text-sm font-semibold text-neutral-900">Best for individuals</span>
          </div>
          <CardContent class="pt-10 pb-8 px-8">
            <div class="flex items-end justify-between mb-8">
              <h3 class="text-3xl font-bold text-white">Standard</h3>
              <div class="text-right">
                <span class="text-4xl font-bold text-white">${{ billingType === 'monthly' ? '8' : '80' }}</span>
                <span class="text-neutral-400 text-sm ml-1">{{ billingType === 'monthly' ? '/mo' : '/yr' }}</span>
              </div>
            </div>
            <div class="border-t border-neutral-800 mb-6"></div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Up to <span class="font-bold text-orange-500">10 files</span> per room</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Up to <span class="font-bold text-orange-500">3 participants</span> per room</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Peer-to-peer encrypted sharing</span>
              </li>
            </ul>
            <Button variant="outline" class="w-full border-2 border-neutral-700 hover:text-white bg-transparent hover:bg-neutral-800 text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2">
              Purchase Now
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </CardContent>
        </Card>

        <!-- Advanced Plan (Featured) -->
        <Card class="relative bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl shadow-2xl shadow-orange-600/30 border-0 transform lg:scale-105 p-0 overflow-visible">
          <div class="absolute -top-4 left-8 bg-white px-6 py-2 rounded-t-2xl z-10">
            <span class="text-sm font-semibold text-orange-600">Best for teams</span>
          </div>
          <CardContent class="pt-10 pb-8 px-8">
            <div class="flex items-end justify-between mb-8">
              <h3 class="text-3xl font-bold text-white">Advanced</h3>
              <div class="text-right">
                <span class="text-4xl font-bold text-white">${{ billingType === 'monthly' ? '18' : '180' }}</span>
                <span class="text-white/80 text-sm ml-1">{{ billingType === 'monthly' ? '/mo' : '/yr' }}</span>
              </div>
            </div>
            <div class="border-t border-white/30 mb-6"></div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Up to <span class="font-bold text-white">50 files</span> per room</span>
              </li>
              <li class="flex items-start gap-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Up to <span class="font-bold text-white">10 participants</span> per room</span>
              </li>
              <li class="flex items-start gap-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Peer-to-peer encrypted sharing</span>
              </li>
            </ul>
            <Button class="w-full bg-black hover:bg-neutral-900 hover:text-white text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg">
              Purchase Now
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </CardContent>
        </Card>

        <!-- Enterprise Plan -->
        <Card class="relative bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 p-0 overflow-visible shadow-lg">
          <div class="absolute -top-4 left-8 bg-white px-6 py-2 rounded-t-2xl z-10">
            <span class="text-sm font-semibold text-neutral-900">Best for organizations</span>
          </div>
          <CardContent class="pt-10 pb-8 px-8">
            <div class="flex items-end justify-between mb-8">
              <h3 class="text-3xl font-bold text-white">Enterprise</h3>
              <div class="text-right">
                <span class="text-4xl font-bold text-white">${{ billingType === 'monthly' ? '99' : '990' }}</span>
                <span class="text-neutral-400 text-sm ml-1">{{ billingType === 'monthly' ? '/mo' : '/yr' }}</span>
              </div>
            </div>
            <div class="border-t border-neutral-800 mb-6"></div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Up to <span class="font-bold text-orange-500">500 files</span> per room</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Up to <span class="font-bold text-orange-500">100 participants</span> per room</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Peer-to-peer encrypted sharing</span>
              </li>
            </ul>
            <Button variant="outline" class="w-full border-2 border-neutral-700 hover:text-white bg-transparent hover:bg-neutral-800 text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2">
              Purchase Now
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const billingType = ref('monthly');
</script>