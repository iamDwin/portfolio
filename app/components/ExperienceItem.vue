<script setup lang="ts">
import type { ExperienceEntry } from '~/data/experience'

defineProps<{
  entry: ExperienceEntry
}>()
</script>

<template>
  <div class="relative pl-8 pb-12 last:pb-0">
    <!-- Timeline line -->
    <div
      class="absolute left-[7px] top-3 bottom-0 w-px bg-white/10"
      aria-hidden="true"
    />

    <!-- Timeline dot -->
    <div
      class="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2"
      :class="
        entry.current
          ? 'bg-accent border-accent shadow-glow'
          : 'bg-card border-white/20'
      "
      aria-hidden="true"
    />

    <!-- Content -->
    <div>
      <!-- Period -->
      <span class="mb-1 inline-block rounded-full bg-elevated px-3 py-1 text-xs font-medium text-text-muted">
        {{ entry.period }}
      </span>

      <!-- Role & Company -->
      <h3 class="mt-2 font-display text-lg font-semibold text-text-primary">
        {{ entry.role }}
      </h3>
      <p class="text-sm font-medium text-accent">
        {{ entry.company }}
      </p>

      <!-- Description -->
      <p class="mt-3 text-sm leading-relaxed text-text-secondary">
        {{ entry.description }}
      </p>

      <!-- Highlights -->
      <ul class="mt-3 space-y-1.5" role="list">
        <li
          v-for="(highlight, index) in entry.highlights"
          :key="index"
          class="flex items-start gap-2 text-sm text-text-secondary"
        >
          <Icon
            name="mdi:check-circle-outline"
            class="mt-0.5 shrink-0 text-accent/60"
          />
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
