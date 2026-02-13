<template>
  <v-app>
    <AppHeader />
    <router-view />
  </v-app>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'

const route = useRoute()

// Disable browser's automatic scroll restoration
onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
})

// Watch for route changes and scroll to top
watch(() => route.path, () => {
  // Multiple attempts to ensure it works
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }
  
  // Try immediately
  scrollToTop()
  
  // Try after Vue updates DOM
  setTimeout(scrollToTop, 50)
  setTimeout(scrollToTop, 150)
}, { immediate: true })
</script>