<template>
  <footer class="bg-black border-t border-neutral-800">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-orange-600 rounded-md w-8 h-8 flex items-center justify-center shadow-lg shadow-orange-600/30">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="6" height="6" rx="1" fill="white" />
                <rect x="14" y="4" width="6" height="6" rx="1" fill="white" />
                <rect x="4" y="14" width="6" height="6" rx="1" fill="white" />
                <rect x="14" y="14" width="6" height="6" rx="1" fill="white" />
              </svg>
            </div>
            <span class="text-white text-xl font-bold tracking-tight">FileGrid</span>
          </div>
          <p class="text-neutral-400 text-sm">
            123 Tech Avenue, Barangay Bagumbayan,<br>
            Quezon City, Metro Manila 1110, Philippines
          </p>
        </div>

        <!-- Features Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">Features</h3>
          <ul class="space-y-3">
            <li>
              <a href="/main" class="text-neutral-400 hover:text-white transition-colors text-sm">
                File Sharing
              </a>
            </li>
            <li>
              <a href="/product/cloud-storage" class="text-neutral-400 hover:text-white transition-colors text-sm">
                Cloud Storage <span class="ml-1 text-orange-500 text-xs">Coming Soon</span>
              </a>
            </li>
            <li>
              <a href="/product/team-collaboration" class="text-neutral-400 hover:text-white transition-colors text-sm">
                Team Collaboration <span class="ml-1 text-orange-500 text-xs">Coming Soon</span>
              </a>
            </li>
            <li>
              <a href="/product/integrations" class="text-neutral-400 hover:text-white transition-colors text-sm">
                Integrations <span class="ml-1 text-orange-500 text-xs">Coming Soon</span>
              </a>
            </li>
            <li>
              <a href="/product/backup-restore" class="text-neutral-400 hover:text-white transition-colors text-sm">
                Backup & Restore <span class="ml-1 text-orange-500 text-xs">Coming Soon</span>
              </a>
            </li>
            <li>
              <a href="/product/security" class="text-neutral-400 hover:text-white transition-colors text-sm">
                Security <span class="ml-1 text-orange-500 text-xs">Coming Soon</span>
              </a>
            </li>
          </ul>
        </div>


        <!-- Company Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-3">
            <li>
              <a href="/about" class="text-neutral-400 hover:text-white transition-colors text-sm">
                About
              </a>
            </li>
            <li>
              <a href="/how-it-works" class="text-neutral-400 hover:text-white transition-colors text-sm">
                How it works
              </a>
            </li>
            <li>
              <a href="/pricing" class="text-neutral-400 hover:text-white transition-colors text-sm">
                Pricing
              </a>
            </li>
            <li>
              <a href="/blog" class="text-neutral-400 hover:text-white transition-colors text-sm">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">Keep in touch with us</h3>
          <form class="flex w-full" @submit.prevent>
            <div class="relative flex-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full bg-neutral-900 border border-neutral-800 rounded-l-lg pl-10 pr-3 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-600 transition-colors"
              />
            </div>
            <Button
              type="submit"
              class="bg-orange-600 hover:bg-orange-700 text-white px-4 rounded-r-lg rounded-l-none shrink-0 h-11 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </form>
        </div>
      </div>
      <div class="border-t border-neutral-800 pt-8">
        <div class="flex items-center justify-center gap-2 text-neutral-500 text-sm">
          <span>2025</span>
          <!-- Copyright SVG -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <text x="8" y="16" font-size="10" fill="currentColor" font-family="Arial, Helvetica, sans-serif">C</text>
          </svg>
          <span>FileGrid Copyrights</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';

const email = ref('');
</script>

<style scoped>
/* Additional styles if needed */
</style>