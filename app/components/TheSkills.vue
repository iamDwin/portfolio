<script setup lang="ts">
import { ref } from 'vue'
import { skillCategories } from '~/data/skills'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef)
</script>

<template>
  <section
    id="skills"
    ref="sectionRef"
    class="bg-surface/50 px-4 py-20 lg:py-32 transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mb-16 text-center">
        <h2 class="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Skills & Technologies
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </div>

      <!-- Skills grid -->
      <div class="grid gap-6 sm:grid-cols-2">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="rounded-2xl border border-border/5 bg-card p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-glow"
        >
          <!-- Category header -->
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"
            >
              <Icon :name="category.icon" class="text-xl text-accent" />
            </div>
            <h3 class="font-display text-lg font-semibold text-text-primary">
              {{ category.title }}
            </h3>
          </div>

          <!-- Skill badges -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="rounded-full bg-elevated px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
