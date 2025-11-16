<template>
  <div class="pt-20 overflow-hidden under-bg">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header & CTA -->
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Get organized and stay productive with FileGrid
        </h2>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <Button class="bg-black hover:bg-neutral-200 hover:text-slate-900  text-white px-8 py-6 rounded-lg text-lg font-semibold flex items-center gap-2 shadow-lg">
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Button>
          <Button variant="outline" class="bg-white border-0 text-slate-900 hover:bg-black hover:text-white px-8 py-6 rounded-lg text-lg font-semibold">
            Learn more
          </Button>
        </div>
      </div>

      <!-- Dashboard Preview -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Browser Window -->
        <div class="bg-black rounded-t-3xl border-4 border-black shadow-2xl overflow-hidden">
          <!-- Browser Header -->
          <div class="bg-neutral-900 px-6 py-4 flex items-center gap-2">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="bg-neutral-950 flex">
            <!-- Sidebar -->
            <div class="w-64 bg-neutral-900 border-r border-neutral-800 p-4">
              <!-- Logo -->
              <div class="flex items-center gap-3 mb-8 px-2 cursor-pointer">
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

              <!-- Nav Items -->
              <div class="space-y-1">
                <div class="text-neutral-500 text-xs font-semibold px-2 mb-2">Overview</div>
                <div class="bg-orange-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="7" height="7" x="3" y="3" rx="1"/>
                    <rect width="7" height="7" x="14" y="3" rx="1"/>
                    <rect width="7" height="7" x="14" y="14" rx="1"/>
                    <rect width="7" height="7" x="3" y="14" rx="1"/>
                  </svg>
                  Overview
                </div>

                <div class="text-neutral-500 text-xs font-semibold px-2 mt-4 mb-2">File Manager</div>
                <div class="text-neutral-400 px-3 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                  </svg>
                  My Storage
                </div>
                <div class="text-neutral-400 px-3 py-2 rounded-lg flex items-center justify-between text-sm hover:bg-neutral-800">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                    </svg>
                    Recents
                  </div>
                  <span class="bg-orange-600 text-white text-xs px-1.5 py-0.5 rounded">3</span>
                </div>
                <div class="text-neutral-400 px-3 py-2 rounded-lg flex items-center justify-between text-sm hover:bg-neutral-800">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Favorites
                  </div>
                  <span class="bg-orange-600 text-white text-xs px-1.5 py-0.5 rounded">8</span>
                </div>
                <div class="text-neutral-400 px-3 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                  Trash
                </div>
              </div>
            </div>

            <!-- Main Content -->
            <div class="flex-1 p-6">
              <!-- Top Bar -->
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-4">
                  <h3 class="text-white text-lg font-semibold">FileGrid Overview</h3>
                  <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.3-4.3"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search files and rooms"
                      class="bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-32 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-700 w-80"
                    />
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <Button variant="outline" size="sm" class="border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-white text-xs">
                    Sort
                  </Button>
                  <Button variant="outline" size="sm" class="border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-white text-xs">
                    View
                  </Button>
                  <Button size="sm" class="bg-orange-600 hover:bg-orange-700 text-white text-xs">
                    + Create
                  </Button>
                </div>
              </div>

              <!-- FileGrid Stats Cards -->
              <div>
                <div class="flex items-center gap-2 mb-4">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" class="text-white">
                    <rect x="4" y="4" width="6" height="6" rx="1" fill="white" />
                    <rect x="14" y="4" width="6" height="6" rx="1" fill="white" />
                    <rect x="4" y="14" width="6" height="6" rx="1" fill="white" />
                    <rect x="14" y="14" width="6" height="6" rx="1" fill="white" />
                  </svg>
                  <h4 class="text-white font-semibold">Stats</h4>
                </div>

                <div class="grid grid-cols-4 gap-4">
                  <!-- Files Shared Card -->
                  <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
                    <CardContent class="p-4">
                      <div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" x2="12" y1="15" y2="3"/>
                        </svg>
                      </div>
                      <div class="text-white font-semibold text-sm mb-1">Files Shared</div>
                      <div class="text-neutral-500 text-xs mb-2">12,500 files</div>
                      <div class="bg-neutral-800 rounded-full h-1 mb-1">
                        <div class="bg-orange-500 rounded-full h-1" style="width: 70%"></div>
                      </div>
                      <div class="text-neutral-500 text-xs">Peer-to-peer, secure</div>
                    </CardContent>
                  </Card>

                  <!-- Rooms Created Card -->
                  <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
                    <CardContent class="p-4">
                      <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                          <circle cx="9" cy="9" r="2"/>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                      </div>
                      <div class="text-white font-semibold text-sm mb-1">Rooms Created</div>
                      <div class="text-neutral-500 text-xs mb-2">2,300 rooms</div>
                      <div class="bg-neutral-800 rounded-full h-1 mb-1">
                        <div class="bg-blue-500 rounded-full h-1" style="width: 50%"></div>
                      </div>
                      <div class="text-neutral-500 text-xs">Active & secure</div>
                    </CardContent>
                  </Card>

                  <!-- Participants Card -->
                  <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
                    <CardContent class="p-4">
                      <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="9" cy="7" r="4" />
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        </svg>
                      </div>
                      <div class="text-white font-semibold text-sm mb-1">Participants</div>
                      <div class="text-neutral-500 text-xs mb-2">8,900 users</div>
                      <div class="bg-neutral-800 rounded-full h-1 mb-1">
                        <div class="bg-green-500 rounded-full h-1" style="width: 80%"></div>
                      </div>
                      <div class="text-neutral-500 text-xs">Collaborating now</div>
                    </CardContent>
                  </Card>

                  <!-- Video Calls Card -->
                  <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
                    <CardContent class="p-4">
                      <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect x="2" y="7" width="20" height="10" rx="2" ry="2"/>
                          <line x1="22" y1="11" x2="22" y2="13" stroke="currentColor" stroke-width="2"/>
                        </svg>
                      </div>
                      <div class="text-white font-semibold text-sm mb-1">Video Calls</div>
                      <div class="text-neutral-500 text-xs mb-2">5,400 calls</div>
                      <div class="bg-neutral-800 rounded-full h-1 mb-1">
                        <div class="bg-purple-500 rounded-full h-1" style="width: 60%"></div>
                      </div>
                      <div class="text-neutral-500 text-xs">Private & encrypted</div>
                    </CardContent>
                  </Card>
                </div>

                <!-- Suggested div -->
                <div class="mt-6">
                  <h4 class="text-white font-semibold text-sm mb-3">Suggested</h4>
                  <!-- Add any suggested actions or tips here -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
</script>

<style scoped>
.under-bg {
  background: repeating-linear-gradient(135deg, #ea580c 0, #ea580c 10%, transparent 0, transparent 50%);
  background-size: 4em 4em;
  background-color: #f66513;
  opacity: 1;
}
</style>