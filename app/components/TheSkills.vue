<script setup lang="ts">
import { skillCategories } from '~/data/skills'

const primarySkills = ['Vue.js', 'Nuxt.js', 'TypeScript', 'Angular', 'React', 'SwiftUI', 'Node.js', 'Applied AI', 'Product Engineering']
</script>

<template>
  <section id="skills" class="overflow-hidden border-y border-border/10 bg-surface py-24 md:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 class="max-w-3xl font-display text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[.98] tracking-[-0.055em] text-text-primary">A broad toolkit. A focused outcome.</h2>
        <p class="max-w-sm text-base leading-relaxed text-text-secondary">I choose technology around the product, not the other way around: robust foundations, thoughtful interfaces, and maintainable delivery.</p>
      </div>
    </div>

    <div class="marquee mt-20 flex w-max border-y border-border/10 py-6">
      <div v-for="repeat in 2" :key="repeat" class="flex shrink-0 items-center">
        <template v-for="skill in primarySkills" :key="`${repeat}-${skill}`">
          <span class="px-6 font-display text-2xl font-semibold tracking-tight text-text-primary sm:px-10 sm:text-4xl">{{ skill }}</span>
          <span class="h-2 w-2 rounded-full bg-accent" />
        </template>
      </div>
    </div>

    <div class="mx-auto mt-20 grid max-w-7xl gap-x-8 gap-y-12 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
      <div v-for="category in skillCategories" :key="category.title" class="border-t border-border/15 pt-5">
        <div class="flex items-center gap-3">
          <Icon :name="category.icon" class="text-xl text-accent" />
          <h3 class="font-semibold text-text-primary">{{ category.title }}</h3>
        </div>
        <p class="mt-5 text-sm leading-7 text-text-secondary">{{ category.skills.slice(0, 6).join(' · ') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee { animation: marquee 34s linear infinite; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .marquee { animation-play-state: paused; } }
</style>
