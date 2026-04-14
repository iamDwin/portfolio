<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/data/projects'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef)
</script>

<template>
  <section
    id="projects"
    ref="sectionRef"
    class="px-4 py-20 lg:py-32 transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mb-16 text-center">
        <h2 class="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Featured Projects
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </div>

      <!-- Projects grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
