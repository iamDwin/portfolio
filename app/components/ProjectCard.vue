<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="group overflow-hidden rounded-2xl border border-border/5 bg-card transition-all duration-300 hover:border-accent/20 hover:shadow-glow hover:-translate-y-1"
    tabindex="0"
    :aria-label="`Project: ${project.title}`"
  >
    <!-- Image -->
    <div class="relative aspect-video overflow-hidden bg-primary">
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <!-- Overlay on hover -->
      <div
        class="absolute inset-0 flex items-center justify-center gap-4 bg-void/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-on-accent transition-transform hover:scale-110"
          aria-label="View live demo"
          @click.stop
        >
          <Icon name="mdi:open-in-new" />
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-elevated text-text-primary transition-transform hover:scale-110"
          aria-label="View source code"
          @click.stop
        >
          <Icon name="mdi:github" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <h3
        class="font-display text-lg font-semibold text-text-primary group-hover:text-accent transition-colors"
      >
        {{ project.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-elevated px-2.5 py-1 text-xs font-medium text-text-muted"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
