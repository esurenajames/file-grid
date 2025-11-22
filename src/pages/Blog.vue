<template>
  <section class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span class="text-orange-500">The Journal:</span> File Sharing Insights, Tutorials, and Industry News
          </h2>
          <form class="flex w-full mb-2" @submit.prevent>
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
              Subscribe
            </Button>
          </form>
        </div>
        <div class="lg:pl-8">
          <div class="text-neutral-300 text-base">
            Subscribe to learn about new product features, the latest in technology, solutions, and updates. Stay connected for tips, tutorials, and industry news from the FileGrid team.
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="post in posts"
          :key="post.id"
          class="bg-neutral-900 border-neutral-800 hover:border-orange-600 transition-all duration-300 group overflow-hidden cursor-pointer"
          @click="$router.push(`/blog/${post.id}`)"
        >
          <CardContent class="p-0">
            <div class="aspect-[4/3] bg-neutral-800 overflow-hidden">
              <img 
                :src="post.image"
                :alt="post.alt"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <Avatar class="w-8 h-8">
                  <AvatarImage :src="post.authorAvatar" />
                  <AvatarFallback :class="post.avatarColor + ' text-white text-xs'">{{ post.authorInitials }}</AvatarFallback>
                </Avatar>
                <div class="flex items-center gap-2 text-sm">
                  <span class="text-neutral-400">{{ post.author }}</span>
                  <span class="text-neutral-600">•</span>
                  <span class="text-neutral-500">{{ post.date }}</span>
                </div>
              </div>
              
              <h3 class="text-white font-bold text-xl mb-3 group-hover:text-orange-600 transition-colors">
                {{ post.title }}
              </h3>
              
              <p class="text-neutral-400 text-sm mb-4 line-clamp-3">
                {{ post.summary }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300 text-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <Button variant="outline" class="border-2 border-neutral-700 bg-transparent hover:bg-neutral-200 text-white px-8 py-4 rounded-xl font-semibold">
          Load More Articles
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const email = ref('');
const router = useRouter();

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    alt: "Team collaboration",
    author: "Olivia Rhye",
    authorAvatar: "https://i.pravatar.cc/150?img=12",
    authorInitials: "OR",
    avatarColor: "bg-orange-600",
    date: "20 Jan 2024",
    title: "Secure File Sharing: Best Practices for Remote Teams",
    summary: "Learn how to implement secure file sharing protocols in your organization. We dive into encryption methods, access controls, and compliance requirements for modern teams.",
    tags: ["Security", "Best Practices", "Remote Work"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    alt: "Technology",
    author: "Phoenix Baker",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    authorInitials: "PB",
    avatarColor: "bg-blue-600",
    date: "19 Jan 2024",
    title: "Peer-to-Peer Technology: The Future of File Transfer",
    summary: "Discover how P2P technology is revolutionizing file sharing. From faster speeds to enhanced privacy, learn why peer-to-peer is the preferred method for modern file transfers.",
    tags: ["Technology", "P2P", "Innovation"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
    alt: "Business partnership",
    author: "Lana Steiner",
    authorAvatar: "https://i.pravatar.cc/150?img=8",
    authorInitials: "LS",
    avatarColor: "bg-green-600",
    date: "18 Jan 2024",
    title: "How to Scale Your File Sharing Infrastructure",
    summary: "Growing your business means scaling your infrastructure. Learn strategies for expanding your file sharing capabilities while maintaining security and performance standards.",
    tags: ["Business", "Growth", "Enterprise"]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    alt: "Security",
    author: "James Wilson",
    authorAvatar: "https://i.pravatar.cc/150?img=33",
    authorInitials: "JW",
    avatarColor: "bg-purple-600",
    date: "17 Jan 2024",
    title: "Understanding End-to-End Encryption in File Sharing",
    summary: "A comprehensive guide to end-to-end encryption. Understand how your files are protected from upload to download and why it matters for data privacy.",
    tags: ["Encryption", "Security", "Tutorial"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    alt: "Productivity",
    author: "Emma Martinez",
    authorAvatar: "https://i.pravatar.cc/150?img=20",
    authorInitials: "EM",
    avatarColor: "bg-orange-600",
    date: "16 Jan 2024",
    title: "10 Tips to Boost Team Productivity with File Collaboration",
    summary: "Maximize your team's productivity with these proven file collaboration strategies. From organizing workflows to real-time collaboration tips.",
    tags: ["Productivity", "Collaboration", "Tips"]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    alt: "Industry trends",
    author: "David Kim",
    authorAvatar: "https://i.pravatar.cc/150?img=15",
    authorInitials: "DK",
    avatarColor: "bg-blue-600",
    date: "15 Jan 2024",
    title: "2024 File Sharing Trends: What to Expect This Year",
    summary: "Stay ahead of the curve with our analysis of emerging file sharing trends. From AI integration to blockchain security, explore what's shaping the future.",
    tags: ["Trends", "Industry", "Future"]
  }
];
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>