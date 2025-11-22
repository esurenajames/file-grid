<template>
  <nav
    class="bg-black px-6 lg:px-12 py-6 flex items-center justify-between w-full border-b border-neutral-800 shadow-lg shadow-black/20"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3 cursor-pointer" @click="goHome">
      <div
        class="bg-orange-600 rounded-md w-8 h-8 flex items-center justify-center shadow-lg shadow-orange-600/30"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <rect x="4" y="4" width="6" height="6" rx="1" fill="white" />
          <rect x="14" y="4" width="6" height="6" rx="1" fill="white" />
          <rect x="4" y="14" width="6" height="6" rx="1" fill="white" />
          <rect x="14" y="14" width="6" height="6" rx="1" fill="white" />
        </svg>
      </div>
      <span class="text-white text-xl font-bold tracking-tight">FileGrid</span>
    </div>

    <!-- Desktop Navigation with Features Dropdown -->
    <div class="hidden lg:flex items-center gap-8">
      <a
        v-for="item in navItems"
        :key="item.label"
        class="text-base font-semibold px-4 py-2 rounded transition"
        :class="activeRoute === item.route ? 'bg-orange-600 text-white hover:bg-orange-700' : 'text-white hover:text-orange-600'"
        @click="navigate(item.route)"
      >{{ item.label }}</a>

      <!-- Features Dropdown -->
      <div
        class="relative"
        @mouseenter="dropdownOpen = true"
        @mouseleave="dropdownOpen = false"
      >
        <button
          class="text-white text-base font-semibold px-4 py-2 rounded transition hover:text-orange-600 cursor-pointer flex items-center gap-1"
          @click="dropdownOpen = !dropdownOpen"
          aria-haspopup="true"
          :aria-expanded="dropdownOpen"
        >
          Features
          <ChevronDown
            class="w-4 h-4 ml-1 transition-transform duration-200"
            :class="dropdownOpen ? 'rotate-180' : ''"
          />
        </button>

        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="dropdownOpen"
            class="absolute left-0 mt-2 z-50 bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg p-0"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
          >
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li v-for="feature in features" :key="feature.title">
                <a
                  :href="feature.available ? feature.href : '#'"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                  :class="
                    feature.available
                      ? 'hover:text-orange-600 focus:text-orange-600 text-white'
                      : 'text-neutral-500 cursor-not-allowed opacity-60'
                  "
                  :tabindex="feature.available ? 0 : -1"
                  @click.prevent="feature.available && navigate(feature.href)"
                >
                  <div
                    class="text-base font-semibold leading-none flex items-center gap-2"
                  >
                    {{ feature.title }}
                    <span
                      v-if="!feature.available"
                      class="text-xs bg-neutral-800 text-orange-500 px-2 py-0.5 rounded-full ml-2"
                      >Coming Soon</span
                    >
                  </div>
                  <p class="line-clamp-2 text-sm leading-snug text-neutral-400">
                    {{ feature.description }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </div>

      <!-- Pricing & Blog -->
      <a
        class="text-base font-semibold px-4 py-2 rounded transition"
        :class="activeRoute === '/pricing' ? 'bg-orange-600 text-white hover:bg-orange-700' : 'text-white hover:text-orange-600'"
        @click="navigate('/pricing')"
      >Pricing</a>
      <a
        class="text-base font-semibold px-4 py-2 rounded transition"
        :class="activeRoute === '/blog' ? 'bg-orange-600 text-white hover:bg-orange-700' : 'text-white hover:text-orange-600'"
        @click="navigate('/blog')"
      >Blog</a>
    </div>

    <!-- CTA Button Desktop -->
    <a
      href="#"
      v-if="!isRoomRoute"
      class="hidden lg:inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg shadow-orange-600/30"
      @click.prevent="toggleCopyLink"
    >
      Start Sharing
    </a>

    <a v-else></a>

    <!-- Mobile Menu Toggle -->
    <button
      class="lg:hidden flex items-center justify-center text-white"
      @click="mobileMenuOpen = !mobileMenuOpen"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!mobileMenuOpen"
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-else
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu Sidebar -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-250 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden fixed top-[73px] left-0 bottom-0 z-50 w-80 bg-black/95 backdrop-blur-xl border-r border-neutral-800 shadow-2xl overflow-y-auto"
    >
      <div class="px-6 py-6 space-y-3">
        <Button
          v-for="item in navItems"
          :key="item.route"
          variant="ghost"
          :class="[
            'w-full justify-start rounded-lg px-4 py-3 font-semibold transition-all duration-300 text-left',
            activeRoute === item.route
              ? 'bg-orange-600 text-white hover:bg-orange-700'
              : 'text-white/80 hover:bg-neutral-900 hover:text-white',
          ]"
          @click="navigate(item.route)"
        >
          {{ item.label }}
        </Button>

        <!-- Features Dropdown -->
        <Button
          variant="ghost"
          class="w-full justify-between rounded-lg px-6 py-3 ml-1 font-semibold transition-all duration-300 text-white/80 hover:bg-neutral-900 hover:text-white text-left"
          @click="mobileDropdownOpen = !mobileDropdownOpen"
        >
          <span>Features</span>
          <ChevronDown
            class="w-4 h-4 transition-transform duration-200"
            :class="mobileDropdownOpen ? 'rotate-180' : ''"
          />
        </Button>

        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileDropdownOpen" class="pl-4 space-y-2 mt-2">
            <Button
              v-for="feature in features"
              :key="feature.title"
              variant="ghost"
              :disabled="!feature.available"
              class="w-full justify-start rounded-lg px-4 py-2.5 text-left text-sm"
              :class="
                feature.available
                  ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                  : 'text-neutral-600 opacity-60 cursor-not-allowed'
              "
              @click="feature.available && navigate(feature.href)"
            >
              <span class="flex items-center gap-2">
                {{ feature.title }}
                <span
                  v-if="!feature.available"
                  class="text-xs bg-neutral-800 text-orange-500 px-2 py-0.5 rounded-full"
                  >Soon</span
                >
              </span>
            </Button>
          </div>
        </transition>

        <Button
          variant="ghost"
          :class="[
            'w-full justify-start rounded-lg px-4 py-3 font-semibold transition-all duration-300 text-left',
            activeRoute === '/pricing'
              ? 'bg-orange-600 text-white hover:bg-orange-700'
              : 'text-white/80 hover:bg-neutral-900 hover:text-white',
          ]"
          @click="navigate('/pricing')"
        >
          Pricing
        </Button>

        <Button
          variant="ghost"
          :class="[
            'w-full justify-start rounded-lg px-4 py-3 font-semibold transition-all duration-300 text-left',
            activeRoute === '/blog'
              ? 'bg-orange-600 text-white hover:bg-orange-700'
              : 'text-white/80 hover:bg-neutral-900 hover:text-white',
          ]"
          @click="navigate('/blog')"
        >
          Blog
        </Button>

        <!-- CTA Button -->
        <div class="pt-4 mt-4 border-t border-neutral-800">
          <Button
            class="w-full rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-1 transition-colors duration-200 shadow-lg shadow-orange-600/30"
            @click="toggleCopyLink"
          >
            Start Sharing
          </Button>
        </div>
      </div>
    </div>
  </transition>

  <!-- Overlay -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-250 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden fixed inset-0 top-[73px] bg-black/50 backdrop-blur-sm z-40"
      @click="mobileMenuOpen = false"
    ></div>
  </transition>

  <GenerateLink v-if="showCopyLink" @close="showCopyLink = false" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-vue-next";
import router from "@/router";
import { useRoute } from "vue-router";
import GenerateLink from "@/components/modules/main/GenerateLink.vue";
import { computed } from "vue";

const mobileMenuOpen = ref(false);
const dropdownOpen = ref(false);
const mobileDropdownOpen = ref(false);
const activeRoute = ref("");
const showCopyLink = ref(false);
const isRoomRoute = computed(() => route.path.startsWith("/room/"));

const navItems = [
  { label: "About", route: "/about" },
  { label: "How it works", route: "/how-it-works" },
];

const features = [
  {
    title: "File Sharing",
    href: "/features",
    description: "Share files and folders with anyone, with advanced protection.",
    available: true,
  },
  {
    title: "Cloud Storage",
    href: "/features",
    description: "Securely store and access your files from anywhere, anytime.",
    available: false,
  },
  {
    title: "Team Collaboration",
    href: "/features",
    description: "Collaborate with your team in real-time and manage permissions easily.",
    available: false,
  },
  {
    title: "Integrations",
    href: "/features",
    description: "Connect StackDrive with your favorite apps and workflows.",
    available: false,
  },
  {
    title: "Backup & Restore",
    href: "/features",
    description: "Automatic backup and easy restore for peace of mind.",
    available: false,
  },
  {
    title: "Security",
    href: "/features",
    description: "Enterprise-grade security features to keep your data safe.",
    available: false,
  },
];

function navigate(route: string) {
  activeRoute.value = route;
  mobileMenuOpen.value = false;
  mobileDropdownOpen.value = false;
  dropdownOpen.value = false;
  router.push(route);
}

function goHome() {
  router.push("/");
}

function toggleCopyLink() {
  showCopyLink.value = true;
}

const route = useRoute();
watch(
  () => route.path,
  (newPath) => {
    activeRoute.value = newPath;
  },
  { immediate: true }
);
</script>
