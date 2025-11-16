<template>
  <FileSharing :roomCode="roomCode" />
</template>

<script setup lang="ts">
import FileSharing from '@/components/modules/main/FileSharing.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const roomCode = computed(() => route.params.roomCode as string)
</script>