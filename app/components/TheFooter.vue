<script setup lang="ts">
import { profileData } from '~/data/profile'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/5 px-4 py-8">
    <div class="mx-auto max-w-6xl">
      <div
        class="flex flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <!-- Copyright -->
        <p class="text-sm text-text-muted">
          &copy; {{ currentYear }} {{ profileData.name }}. All rights reserved.
        </p>

        <!-- Social -->
        <SocialLinks size="sm" />

        <!-- Built with -->
        <p class="text-xs text-text-muted/60">
          Built with <span class="text-accent">Nuxt</span> &amp;
          <span class="text-accent">TailwindCSS</span>
        </p>
      </div>
    </div>
  </footer>
</template>
