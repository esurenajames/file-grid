<template>
  <div class="max-w-3xl mx-auto">
    <h3 class="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
      Frequently Asked Questions
    </h3>

    <Accordion type="single" collapsible class="space-y-4">
      <AccordionItem
        v-for="(faq, index) in faqs"
        :key="index"
        :value="`item-${index}`"
        class="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-colors"
      >
        <AccordionTrigger class="px-6 py-5 text-left hover:no-underline group text-white">
          <div class="flex items-center justify-between w-full pr-4">
            <span
              class="text-white font-semibold text-lg group-hover:text-orange-600 transition-colors"
            >
              {{ faq.question }}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent class="px-6 pb-5">
          <p class="text-neutral-400 leading-relaxed">
            {{ faq.answer }}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is FileGrid really free to use?",
    answer:
      "Yes! FileGrid offers a free tier with all core features like peer-to-peer file sharing, end-to-end encryption, and unlimited file sizes. Premium plans with additional features are also available for teams and enterprises.",
  },
  {
    question: "How secure is my data on FileGrid?",
    answer:
      "Your data is protected with end-to-end encryption, meaning only you and your intended recipients can access your files. We use industry-standard AES-256 encryption and never store your files on our servers during peer-to-peer transfers.",
  },
  {
    question: "What file size limits does FileGrid have?",
    answer:
      "FileGrid allows you to transfer files up to 1 GB in size directly between devices using our peer-to-peer technology. This ensures fast, secure transfers without restrictions or compression.",
  },
  {
    question: "Can I share files with people who don't have FileGrid?",
    answer:
      "Absolutely! Recipients don't need a FileGrid account to receive files. You can generate secure share links that anyone can access through their web browser, or they can use our web interface to download files directly.",
  },
  {
    question: "How fast are file transfers on FileGrid?",
    answer:
      "Transfer speeds depend on your internet connection, but our peer-to-peer technology ensures the fastest possible transfer by connecting devices directly. Most users experience significantly faster speeds compared to traditional cloud storage services.",
  },
  {
    question: "What happens if I lose internet connection during a transfer?",
    answer:
      "FileGrid automatically resumes transfers from where they left off when your connection is restored. You won't need to start over, and your files remain secure throughout the process.",
  },
];
</script>
