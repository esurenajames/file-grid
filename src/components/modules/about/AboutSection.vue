<template>
  <div>
    <!-- Header Section -->
    <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <!-- Left Side - Text -->
      <div>
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Secure, Effortless File Sharing with <span class="text-orange-500">FileGrid</span>
        </h2>
        <p class="text-lg text-neutral-400 leading-relaxed mb-6">
          FileGrid makes peer-to-peer file sharing simple, fast, and secure. Share files of any format, collaborate in real time, and keep your data private—no cloud storage, no third-party tracking.
        </p>
        <p class="text-neutral-400 leading-relaxed">
          Our mission is to empower everyone—from individuals to teams—with seamless, encrypted file sharing and collaboration. No storage limits, no compromises, just privacy and speed.
        </p>
      </div>

      <!-- Right Side - Dashboard Preview -->
      <div class="relative">
        <div class="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl">
          <div class="bg-neutral-950 rounded-2xl p-6">
            <!-- Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="bg-orange-600 p-2 rounded-lg">
                  <FileStack class="w-5 h-5 text-white" />
                </div>
                <span class="text-white font-semibold">FileGrid</span>
              </div>
              <Menu class="w-5 h-5 text-white" />
            </div>
            <!-- Notification Settings -->
            <div class="bg-neutral-800 rounded-xl p-4 mb-4">
              <div class="text-white text-sm font-semibold mb-3">File Sharing Activity</div>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <Avatar class="w-8 h-8">
                    <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                    <AvatarFallback class="bg-orange-600 text-white text-xs">FG</AvatarFallback>
                  </Avatar>
                  <div class="flex-1 min-w-0">
                    <p class="text-neutral-300 text-xs">
                      <span class="text-white font-medium">Alex Rivera</span> shared a file with you
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <Avatar class="w-8 h-8">
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                    <AvatarFallback class="bg-blue-600 text-white text-xs">JS</AvatarFallback>
                  </Avatar>
                  <div class="flex-1 min-w-0">
                    <p class="text-neutral-300 text-xs">
                      <span class="text-white font-medium">Jamie Santos</span> started a transfer
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-3 opacity-50">
                  <div class="w-2 h-2 bg-neutral-600 rounded-full"></div>
                  <Avatar class="w-8 h-8">
                    <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                    <AvatarFallback class="bg-green-600 text-white text-xs">MC</AvatarFallback>
                  </Avatar>
                  <div class="flex-1 min-w-0">
                    <p class="text-neutral-500 text-xs">
                      <span class="text-neutral-400 font-medium">Maria Cruz</span> completed download
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose FileGrid -->
    <div class="text-center mb-12">
      <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
        Why Choose FileGrid?
      </h3>
      <p class="text-neutral-400 max-w-3xl mx-auto">
        Unlock effortless, reliable file sharing for your team with FileGrid, designed to streamline your transfers and enhance real-time collaboration.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-3 gap-8 mb-20">
      <Card class="bg-neutral-900 border-neutral-800 hover:border-orange-600 transition-all duration-300 group">
        <CardContent class="p-8 text-center">
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
            <Users class="w-10 h-10 text-orange-600" />
          </div>
          <h4 class="text-white font-bold text-xl mb-3">Built for Users</h4>
          <p class="text-neutral-400">
            Designed for simplicity, making file sharing accessible to everyone, regardless of technical expertise.
          </p>
        </CardContent>
      </Card>
      <Card class="bg-neutral-900 border-neutral-800 hover:border-orange-600 transition-all duration-300 group">
        <CardContent class="p-8 text-center">
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
            <Settings class="w-10 h-10 text-orange-600" />
          </div>
          <h4 class="text-white font-bold text-xl mb-3">Customizable Features</h4>
          <p class="text-neutral-400">
            Tailor your experience with flexible settings, custom permissions, and personalized workflows.
          </p>
        </CardContent>
      </Card>
      <Card class="bg-neutral-900 border-neutral-800 hover:border-orange-600 transition-all duration-300 group">
        <CardContent class="p-8 text-center">
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
            <Layers class="w-10 h-10 text-orange-600" />
          </div>
          <h4 class="text-white font-bold text-xl mb-3">Seamless Integration</h4>
          <p class="text-neutral-400">
            Works with your existing tools and platforms, ensuring smooth workflow integration.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FileStack, Menu, Users, Settings, Layers } from 'lucide-vue-next';
</script>