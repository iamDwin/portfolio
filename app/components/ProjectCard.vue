<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{ project: Project }>()
const emit = defineEmits<{ open: [project: Project] }>()
</script>

<template>
  <article
    class="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-border/10 bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-accent/30"
    tabindex="0"
    :aria-label="`Open project details for ${project.title}`"
    @click="emit('open', project)"
    @keydown.enter="emit('open', project)"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-elevated">
      <img :src="project.image" :alt="project.title" loading="lazy" class="h-full w-full object-cover grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-105">
      <div class="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" aria-label="View live project" class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-void/80 text-text-primary backdrop-blur-md transition-colors hover:bg-accent hover:text-void" @click.stop>
        <Icon name="mdi:open-in-new" />
      </a>
    </div>
    <div class="p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{{ project.category }}</p>
      <h3 class="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-text-primary transition-colors group-hover:text-accent">{{ project.title }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">{{ project.description }}</p>
      <p class="mt-6 text-xs leading-6 text-text-muted">{{ project.tags.slice(0, 5).join(' · ') }}</p>
    </div>
  </article>
</template>
