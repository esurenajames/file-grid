<template>
  <div class="bg-black min-h-screen">
    <!-- Hero Section -->
    <div
      class="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black py-20"
    >
      <div class="max-w-6xl mx-auto px-6">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm mb-6">
          <a
            href="/blog"
            class="text-orange-500 hover:text-orange-400 transition-colors font-medium"
            >Blog</a
          >
          <span class="text-neutral-600">•</span>
          <span class="text-neutral-400">Security</span>
        </nav>

        <!-- Title -->
        <h1
          class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl"
        >
          Secure File Sharing: Best Practices for Remote Teams
        </h1>

        <!-- Meta Info -->
        <div class="flex flex-wrap items-center gap-4 mb-8">
          <div class="flex items-center gap-3">
            <Avatar class="w-12 h-12">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" />
              <AvatarFallback class="bg-orange-600 text-white">OR</AvatarFallback>
            </Avatar>
            <div>
              <div class="text-white font-semibold">Olivia Rhye</div>
              <div class="text-neutral-400 text-sm">20 Jan 2024 • 8 min read</div>
            </div>
          </div>
          <div class="flex gap-2 ml-auto">
            <button
              class="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <Share2 class="w-5 h-5 text-neutral-400" />
            </button>
            <button
              class="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <Bookmark class="w-5 h-5 text-neutral-400" />
            </button>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span
            class="px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full text-orange-500 text-sm font-medium"
          >
            Security
          </span>
          <span
            class="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300 text-sm"
          >
            Best Practices
          </span>
          <span
            class="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300 text-sm"
          >
            Remote Work
          </span>
        </div>
      </div>
    </div>

    <!-- Featured Image -->
    <div class="max-w-6xl mx-auto px-6 -mt-10">
      <div class="aspect-video rounded-2xl overflow-hidden border border-neutral-800">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=675&fit=crop"
          alt="Team collaboration"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Article Content -->
    <article class="max-w-6xl mx-auto px-6 py-16">
      <div class="prose prose-invert prose-lg max-w-none">
        <p class="text-xl text-neutral-300 leading-relaxed mb-8">
          In today's remote-first world, secure file sharing has become more critical than
          ever. Organizations must balance accessibility with security to protect
          sensitive data while enabling seamless collaboration.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Understanding the Security Landscape
        </h2>
        <p class="text-neutral-300 leading-relaxed mb-6">
          The shift to remote work has introduced new security challenges. Traditional
          perimeter-based security models are no longer sufficient when employees access
          files from various locations and devices. This requires a fundamental rethinking
          of how we approach file security.
        </p>

        <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
          <div class="flex items-start gap-4">
            <div class="bg-orange-600/20 rounded-lg p-3">
              <Lock class="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 class="text-white font-semibold mb-2">Key Insight</h3>
              <p class="text-neutral-300 text-sm">
                90% of data breaches could be prevented with proper encryption and access
                controls in place.
              </p>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Best Practices for Secure File Sharing
        </h2>

        <h3 class="text-2xl font-semibold text-white mt-8 mb-4">
          1. Implement End-to-End Encryption
        </h3>
        <p class="text-neutral-300 leading-relaxed mb-6">
          End-to-end encryption ensures that files are encrypted on the sender's device
          and can only be decrypted by the intended recipient. This means that even if
          data is intercepted during transmission, it remains unreadable to unauthorized
          parties.
        </p>

        <div
          class="bg-black border border-neutral-800 rounded-xl p-6 my-8 font-mono text-sm"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-neutral-400">Example Implementation</span>
            <button
              class="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors text-xs"
            >
              <Clipboard class="w-4 h-4" />
              Copy
            </button>
          </div>
          <pre
            class="text-neutral-300 overflow-x-auto"
          ><code>// Encrypt file before upload
const encryptedFile = await encrypt(file, publicKey);
await upload(encryptedFile);

// Decrypt after download
const decryptedFile = await decrypt(downloadedFile, privateKey);</code></pre>
        </div>

        <h3 class="text-2xl font-semibold text-white mt-8 mb-4">
          2. Use Role-Based Access Control
        </h3>
        <p class="text-neutral-300 leading-relaxed mb-6">
          Not everyone in your organization needs access to all files. Implement
          role-based access control (RBAC) to ensure users only have access to the files
          necessary for their role.
        </p>

        <ul class="list-disc list-inside text-neutral-300 space-y-3 mb-6">
          <li>Define clear user roles and permissions</li>
          <li>Regularly review and update access rights</li>
          <li>Implement the principle of least privilege</li>
          <li>Use multi-factor authentication for sensitive files</li>
        </ul>

        <h3 class="text-2xl font-semibold text-white mt-8 mb-4">
          3. Enable Audit Trails
        </h3>
        <p class="text-neutral-300 leading-relaxed mb-6">
          Comprehensive audit trails help you track who accessed what files and when. This
          is crucial for compliance and identifying potential security incidents.
        </p>

        <div class="grid md:grid-cols-2 gap-4 my-8">
          <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <CheckCircle class="w-8 h-8 text-green-500 mb-4" />
            <h4 class="text-white font-semibold mb-2">Track Everything</h4>
            <p class="text-neutral-400 text-sm">
              Monitor all file access, downloads, and modifications in real-time.
            </p>
          </div>
          <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <Shield class="w-8 h-8 text-blue-500 mb-4" />
            <h4 class="text-white font-semibold mb-2">Compliance Ready</h4>
            <p class="text-neutral-400 text-sm">
              Meet regulatory requirements with comprehensive logging.
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
        <p class="text-neutral-300 leading-relaxed mb-6">
          Securing file sharing for remote teams doesn't have to be complicated. By
          implementing these best practices—end-to-end encryption, role-based access
          control, and audit trails—you can ensure your organization's data remains
          protected while maintaining the flexibility remote teams need.
        </p>

        <p class="text-neutral-300 leading-relaxed">
          Remember, security is not a one-time setup but an ongoing process. Regularly
          review and update your security policies to stay ahead of emerging threats.
        </p>
      </div>

      <!-- Author Bio -->
      <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mt-16">
        <div class="flex items-start gap-6">
          <Avatar class="w-20 h-20">
            <AvatarImage src="https://i.pravatar.cc/150?img=12" />
            <AvatarFallback class="bg-orange-600 text-white text-xl">OR</AvatarFallback>
          </Avatar>
          <div>
            <h3 class="text-white font-bold text-xl mb-2">Olivia Rhye</h3>
            <p class="text-neutral-400 mb-4">
              Senior Security Engineer at FileGrid. Passionate about building secure,
              scalable solutions for modern teams. 10+ years of experience in
              cybersecurity and cloud infrastructure.
            </p>
            <div class="flex gap-3">
              <a
                href="#"
                class="text-neutral-400 hover:text-orange-500 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-neutral-400 hover:text-orange-500 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Articles -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-white mb-8">Related Articles</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <a
            href="#"
            class="group bg-neutral-900 border border-neutral-800 hover:border-orange-600 rounded-xl overflow-hidden transition-all"
          >
            <div class="aspect-video bg-neutral-800 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Related post"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <div class="text-orange-500 text-sm font-medium mb-2">Technology</div>
              <h3
                class="text-white font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors"
              >
                Peer-to-Peer Technology: The Future of File Transfer
              </h3>
              <p class="text-neutral-400 text-sm">8 min read</p>
            </div>
          </a>
          <a
            href="#"
            class="group bg-neutral-900 border border-neutral-800 hover:border-orange-600 rounded-xl overflow-hidden transition-all"
          >
            <div class="aspect-video bg-neutral-800 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
                alt="Related post"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <div class="text-orange-500 text-sm font-medium mb-2">Tutorial</div>
              <h3
                class="text-white font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors"
              >
                Understanding End-to-End Encryption in File Sharing
              </h3>
              <p class="text-neutral-400 text-sm">12 min read</p>
            </div>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Share2, Bookmark, Lock, CheckCircle, Shield, Clipboard } from "lucide-vue-next";
</script>

<style scoped>
/* Custom prose styles for better readability */
.prose h2 {
  scroll-margin-top: 2rem;
}

.prose code {
  color: #ea580c;
  font-size: 0.9em;
}

.prose pre {
  background: transparent;
  padding: 0;
  margin: 0;
}
</style>
