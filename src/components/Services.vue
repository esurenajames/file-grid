<template>
  <div class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Everything you need to connect, share, and work together — all in one place
        </h2>
        <p class="text-lg text-neutral-400">
          Our platform brings people together by making it easy to share files of any kind, start video calls, and chat instantly in one private space. Whether you’re working with a team, studying with classmates, or connecting with friends, <span class="text-orange-500 font-bold">FileGrid</span> makes collaboration simple, secure, and effortless.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Feature 1 - Share and Collaborate -->
        <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
          <CardContent class="p-8">
            <h3 class="text-2xl font-bold text-white mb-3">
              Share and collaborate - all in one place
            </h3>
            <p class="text-neutral-400 mb-6">
              Try FileGrid today and experience the convenience and efficiency.
            </p>

            <!-- Mobile Mockup 1 -->
            <div class="relative">
              <div class="bg-neutral-950 rounded-3xl border-4 border-neutral-800 p-4 max-w-[320px] mx-auto">
                <!-- Status Bar -->
                <div class="flex items-center justify-between mb-4 text-white text-xs">
                  <span>9:41</span>
                  <div class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                      <line x1="12" x2="12.01" y1="20" y2="20"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 24 24" fill="white">
                      <rect x="2" y="7" width="20" height="10" rx="2" ry="2"/>
                      <line x1="22" y1="11" x2="22" y2="13" stroke="white" stroke-width="2"/>
                    </svg>
                  </div>
                </div>

                <!-- App Header -->
                <div class="flex items-center justify-between mb-4">
                  <span class="text-white font-semibold">FileGrid</span>
                  <button class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="12" cy="5" r="1"/>
                      <circle cx="12" cy="19" r="1"/>
                    </svg>
                  </button>
                </div>

                <!-- Storage Card -->
                <div class="bg-linear-to-br from-orange-600 to-orange-500 rounded-2xl p-4 mb-4 relative overflow-hidden">
                  <div class="relative z-10">
                    <div class="text-white text-sm font-semibold mb-2">File usage summary</div>
                    <div class="text-white/90 text-xs mb-1">12 of 50 files have been shared</div>
                  </div>
                  
                  <!-- Avatar -->
                  <Avatar class="absolute bottom-3 right-3 w-12 h-12 border-2 border-white">
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                    <AvatarFallback class="bg-orange-700 text-white">JD</AvatarFallback>
                  </Avatar>
                </div>

                <!-- Search Bar -->
                <div class="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    class="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <!-- User Avatar Overlay -->
              <Avatar class="absolute -top-4 -left-4 w-16 h-16 border-4 border-neutral-900">
                <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                <AvatarFallback class="bg-blue-600 text-white">ST</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        <!-- Feature 2 - Safe and Accessible -->
        <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
          <CardContent class="p-8">
            <h3 class="text-2xl font-bold text-white mb-3">
              Your files, always safe and accessible.
            </h3>
            <p class="text-neutral-400 mb-4">
              With our peer-to-peer platform, your files are never stored on a server and always protected.
            </p>

            <Button variant="link" class="text-orange-600 hover:text-orange-700 p-0 h-auto font-semibold flex items-center gap-2">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </CardContent>
        </Card>

        <!-- Feature 3 - Mobile App -->
        <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
          <CardContent class="p-8">
            <!-- Mobile Mockup 2 -->
            <div class="bg-neutral-950 rounded-3xl border-4 border-neutral-800 p-4 max-w-[280px] mx-auto relative">
              <!-- Status Bar -->
              <div class="flex items-center justify-between mb-4 text-white text-xs">
                <span>9:41</span>
                <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                    <line x1="12" x2="12.01" y1="20" y2="20"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 24 24" fill="white">
                    <rect x="2" y="7" width="20" height="10" rx="2" ry="2"/>
                    <line x1="22" y1="11" x2="22" y2="13" stroke="white" stroke-width="2"/>
                  </svg>
                </div>
              </div>

              <!-- App Header -->
              <div class="flex items-center justify-between mb-4">
                <span class="text-white font-semibold">FileGrid</span>
                <button class="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="1"/>
                    <circle cx="12" cy="5" r="1"/>
                    <circle cx="12" cy="19" r="1"/>
                  </svg>
                </button>
              </div>

              <!-- Coming Soon Overlay -->
              <div class="absolute inset-0 bg-black/80 rounded-3xl flex items-center justify-center z-20">
                <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 text-orange-500 text-lg font-bold shadow-lg">
                  Mobile App Coming Soon
                </span>
              </div>

              <!-- Search Bar -->
              <div class="relative mb-4 opacity-40 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  class="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder:text-neutral-500"
                  disabled
                />
              </div>

              <!-- Recent Files Header -->
              <div class="flex items-center justify-between mb-3 opacity-40 pointer-events-none">
                <span class="text-white font-semibold text-sm">Recent Files</span>
                <div class="flex items-center gap-2 text-neutral-400 text-xs">
                  <span>Sort by</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                  <button class="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect width="7" height="7" x="3" y="3" rx="1"/>
                      <rect width="7" height="7" x="14" y="3" rx="1"/>
                      <rect width="7" height="7" x="14" y="14" rx="1"/>
                      <rect width="7" height="7" x="3" y="14" rx="1"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- File List -->
              <div class="space-y-2 opacity-40 pointer-events-none">
                <div class="flex items-center gap-3 p-2 bg-neutral-900 rounded-lg">
                  <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-500">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-white text-xs font-medium truncate">List of questions.doc</div>
                    <div class="text-neutral-500 text-xs">125 MB</div>
                  </div>
                  <button class="text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="12" cy="5" r="1"/>
                      <circle cx="12" cy="19" r="1"/>
                    </svg>
                  </button>
                </div>

                <div class="flex items-center gap-3 p-2 bg-neutral-900 rounded-lg">
                  <div class="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-500">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                      <circle cx="9" cy="9" r="2"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-white text-xs font-medium truncate">left lung.svg</div>
                    <div class="text-neutral-500 text-xs">297 KB</div>
                  </div>
                  <button class="text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="12" cy="5" r="1"/>
                      <circle cx="12" cy="19" r="1"/>
                    </svg>
                  </button>
                </div>

                <div class="flex items-center gap-3 p-2 bg-neutral-900 rounded-lg">
                  <div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-500">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" x2="8" y1="13" y2="13"/>
                      <line x1="16" x2="8" y1="17" y2="17"/>
                      <line x1="10" x2="8" y1="9" y2="9"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-white text-xs font-medium truncate">weekly presentation.ppt</div>
                    <div class="text-neutral-500 text-xs">5.98 mb</div>
                  </div>
                  <button class="text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="12" cy="5" r="1"/>
                      <circle cx="12" cy="19" r="1"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
</script>

<style scoped>
/* Additional styles if needed */
</style>