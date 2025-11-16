<template>
  <div class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <h2 class="text-4xl lg:text-5xl font-bold text-white text-center mb-16 max-w-5xl mx-auto leading-tight">
        Join the thousands of satisfied FileGrid users today and see what our customers have to say!
      </h2>

      <!-- Testimonials Carousel -->
      <Carousel class="relative w-full mb-8" @init-api="setApi">
        <CarouselContent class="-ml-6">
          <CarouselItem
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="pl-6 md:basis-1/2 lg:basis-1/4"
          >
            <Card class="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all duration-300 w-full h-full">
              <CardContent class="p-6 flex flex-col h-full">
                <!-- Testimonial Text -->
                <p class="text-neutral-300 text-base mb-8 leading-relaxed flex-grow">
                  {{ testimonial.text }}
                </p>

                <!-- User Info -->
                <div class="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage :src="testimonial.avatar" :alt="testimonial.name" />
                    <AvatarFallback class="bg-orange-600 text-white font-semibold">
                      {{ testimonial.initials }}
                    </AvatarFallback>
                  </Avatar>
                  <span class="text-white font-semibold">{{ testimonial.name }}</span>
                </div>

                <!-- Star Rating -->
                <div class="flex items-center gap-1">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    :fill="star <= Math.round(testimonial.rating) ? '#ea580c' : 'none'"
                    :stroke="star <= Math.round(testimonial.rating) ? '#ea580c' : '#525252'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <!-- Carousel Dots -->
      <div class="flex items-center justify-center gap-2">
        <button
          v-for="dot in totalSlides"
          :key="dot"
          :class="[
            'h-2 rounded-full transition-all duration-300',
            currentDot === dot - 1 ? 'w-12 bg-white' : 'w-2 bg-neutral-600 hover:bg-neutral-500'
          ]"
          @click="goToSlide(dot - 1)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const api = ref(null);
const current = ref(0);
const itemsPerSlide = 4;

const testimonials = [
  {
    name: '- Sarah T',
    initials: 'ST',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: "FileGrid makes it so easy to share files and chat with my team in one place. It feels effortless and fast!"
  },
  {
    name: '- John D',
    initials: 'JD',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4.5,
    text: "We use FileGrid for quick file sharing and video calls — it’s made teamwork so much smoother and more personal."
  },
  {
    name: '- Tommy H',
    initials: 'TH',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    text: "I love how simple and private FileGrid is. No uploads, no waiting — just instant sharing and connection."
  },
  {
    name: '- Michael',
    initials: 'M',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 4,
    text: "Before FileGrid, sharing files during meetings was such a hassle. Now, everything happens in one window."
  },
  {
    name: '- Emily R',
    initials: 'ER',
    avatar: 'https://i.pravatar.cc/150?img=22',
    rating: 5,
    text: "FileGrid helped our remote team stay connected — we can share files, screens, and ideas instantly."
  },
  {
    name: '- Alex P',
    initials: 'AP',
    avatar: 'https://i.pravatar.cc/150?img=25',
    rating: 4.5,
    text: "No need for multiple apps anymore. FileGrid handles our chats, calls, and file sharing perfectly."
  },
  {
    name: '- Linda S',
    initials: 'LS',
    avatar: 'https://i.pravatar.cc/150?img=29',
    rating: 4,
    text: "Sharing important files securely with clients is now so easy. FileGrid gives me peace of mind."
  },
  {
    name: '- Kevin B',
    initials: 'KB',
    avatar: 'https://i.pravatar.cc/150?img=35',
    rating: 5,
    text: "Our online meetings are more productive than ever — we can talk, share screens, and send files instantly."
  }
];

const totalSlides = computed(() => Math.ceil(testimonials.length / itemsPerSlide));

// Calculate which dot should be active based on current testimonial index
const currentDot = computed(() => {
  return Math.floor(current.value / itemsPerSlide);
});

function setApi(val) {
  api.value = val;
  
  if (api.value) {
    current.value = api.value.selectedScrollSnap();
    
    api.value.on('select', () => {
      current.value = api.value.selectedScrollSnap();
    });
  }
}

function goToSlide(dotIndex) {
  if (api.value) {
    // Jump to the first item of that dot group
    const targetIndex = dotIndex * itemsPerSlide;
    api.value.scrollTo(targetIndex);
  }
}
</script>