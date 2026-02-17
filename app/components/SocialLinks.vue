<script setup lang="ts">
import { profileData } from '~/data/profile'

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<SocialLinksProps>(), {
  size: 'md',
})

const sizeClasses: Record<string, string> = {
  sm: 'text-lg p-1.5',
  md: 'text-xl p-2',
  lg: 'text-2xl p-3',
}
</script>

<template>
  <div class="flex items-center gap-3">
    <a
      v-for="link in profileData.socialLinks"
      :key="link.platform"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="link.ariaLabel"
      class="rounded-lg text-text-secondary transition-all duration-300 hover:text-accent hover:bg-accent/10"
      :class="sizeClasses[props.size]"
    >
      <Icon :name="link.icon" />
    </a>
  </div>
</template>
