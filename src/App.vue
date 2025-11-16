<template>
  <Layout>
    <router-view />
    <Toaster />
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/Layout.vue";
import { Toaster, toast } from 'vue-sonner'
import 'vue-sonner/style.css'


</script>