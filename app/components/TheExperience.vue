<script setup lang="ts">
import { ref } from 'vue'
import { experience } from '~/data/experience'

const sectionRef = ref<HTMLElement | null>(null)
let gsapContext: { revert: () => void } | null = null

onMounted(async () => {
  if (!sectionRef.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  gsapContext = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('[data-experience-card]')
    cards.forEach((card, index) => {
      if (!cards[index + 1]) return
      gsap.to(card, {
        scale: 0.93,
        opacity: 0.45,
        filter: 'blur(2px)',
        ease: 'none',
        scrollTrigger: {
          trigger: cards[index + 1],
          start: 'top 78%',
          end: 'top 20%',
          scrub: 0.6,
        },
      })
    })
  }, sectionRef.value)
})

onUnmounted(() => gsapContext?.revert())
</script>

<template>
  <section id="experience" ref="sectionRef" class="relative bg-primary px-4 py-24 sm:px-6 md:py-28">
    <div class="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
      <div class="lg:sticky lg:top-32 lg:h-fit">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">Experience</p>
        <h2 class="mt-6 max-w-xl font-display text-[clamp(3rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em] text-text-primary">Built in the work, shaped by responsibility.</h2>
        <p class="mt-8 max-w-md text-base leading-relaxed text-text-secondary">From frontend delivery to technical leadership, my path has expanded through increasingly complex products, teams, and operational constraints.</p>
      </div>

      <div class="space-y-10 pb-10">
        <article
          v-for="(entry, index) in experience"
          :key="entry.company + entry.period"
          data-experience-card
          class="sticky overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-glow sm:p-10"
          :style="{ top: `${112 + Math.min(index, 3) * 12}px`, zIndex: index + 1 }"
        >
          <div class="flex flex-col justify-between gap-5 border-b border-border/10 pb-7 sm:flex-row sm:items-start">
            <div>
              <p class="text-sm font-semibold text-accent">{{ entry.company }}</p>
              <h3 class="mt-2 font-display text-2xl font-semibold tracking-[-0.035em] text-text-primary sm:text-3xl">{{ entry.role }}</h3>
            </div>
            <p class="shrink-0 text-sm font-medium text-text-muted">{{ entry.period }}</p>
          </div>
          <p class="mt-7 text-base leading-relaxed text-text-secondary">{{ entry.description }}</p>
          <ul class="mt-8 grid gap-4">
            <li v-for="highlight in entry.highlights.slice(0, entry.current ? 4 : 2)" :key="highlight" class="flex gap-4 text-sm leading-relaxed text-text-secondary">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {{ highlight }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
