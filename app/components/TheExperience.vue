<script setup lang="ts">
import { ref } from 'vue'
import { experience } from '~/data/experience'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef)
</script>

<template>
  <section
    id="experience"
    ref="sectionRef"
    class="bg-surface/50 px-4 py-20 lg:py-32 transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <div class="mx-auto max-w-3xl">
      <!-- Section heading -->
      <div class="mb-16 text-center">
        <h2 class="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Experience
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </div>

      <!-- Timeline -->
      <div>
        <ExperienceItem
          v-for="entry in experience"
          :key="entry.company + entry.period"
          :entry="entry"
        />
      </div>
    </div>
  </section>
</template>
