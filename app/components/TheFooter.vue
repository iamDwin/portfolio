<script setup lang="ts">
import { profileData } from '~/data/profile'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border/10 px-4 py-10 sm:px-6">
    <div class="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="font-display text-lg font-semibold text-text-primary">Godwin Goodman Effah</p>
        <p class="mt-1 text-xs text-text-muted">Software engineer · Accra, Ghana</p>
      </div>
      <div class="flex items-center gap-5">
        <a v-for="social in profileData.socialLinks" :key="social.platform" :href="social.url" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-text-secondary transition-colors hover:text-accent">{{ social.platform }}</a>
      </div>
      <p class="text-xs text-text-muted">© {{ currentYear }}. Designed and engineered with care.</p>
    </div>
  </footer>
</template>
