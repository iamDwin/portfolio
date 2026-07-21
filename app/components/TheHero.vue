<script setup lang="ts">
import { ref } from 'vue'

const { scrollTo } = useSmoothScroll()
const heroRef = ref<HTMLElement | null>(null)
const visualRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!heroRef.value || !visualRef.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { gsap } = await import('gsap')
  gsap.from(heroRef.value.querySelectorAll('[data-hero-line]'), {
    y: 56,
    opacity: 0,
    duration: 1.05,
    stagger: 0.12,
    ease: 'power3.out',
  })
  gsap.from(visualRef.value, { scale: 0.88, opacity: 0, duration: 1.35, delay: 0.2, ease: 'power3.out' })
})
</script>

<template>
  <section id="hero" ref="heroRef" class="relative min-h-[100svh] overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:pt-36">
    <div class="pointer-events-none absolute -left-56 top-0 h-[38rem] w-[38rem] rounded-full bg-accent/10 blur-[140px]" />
    <div class="mx-auto grid min-h-[calc(100svh-12rem)] max-w-7xl items-center gap-14 min-[960px]:grid-cols-[1.25fr_.75fr] min-[960px]:gap-12">
      <div class="relative z-10">
        <p data-hero-line class="mb-7 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
          <span class="h-px w-10 bg-accent" />
          Software engineer in Accra
        </p>
        <h1 data-hero-line class="max-w-6xl font-display text-[clamp(3rem,5.2vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em] text-text-primary">
          Engineering digital products that hold up.
        </h1>
        <p data-hero-line class="mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          I’m Godwin Goodman Effah. I turn complex product, data, and AI systems into clear web and mobile experiences built for real users and real scale.
        </p>
        <div data-hero-line class="mt-10 flex flex-col gap-3 sm:flex-row">
          <button class="rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent-light" @click="scrollTo('projects')">
            Explore selected work
          </button>
          <button class="rounded-lg border border-border/70 px-7 py-3.5 text-sm font-semibold text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent" @click="scrollTo('contact')">
            Start a conversation
          </button>
        </div>
      </div>

      <div ref="visualRef" class="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
          <img
            src="/images/godwin-goodman-effah-portrait.webp"
            alt="Godwin Goodman Effah, software engineer"
            class="h-full w-full object-cover object-[center_32%] transition-transform duration-700 ease-out group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/10 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 sm:p-9">
            <p class="max-w-[15rem] text-sm leading-relaxed text-white">Product engineering across web, mobile, analytics, and applied AI.</p>
            <a href="https://github.com/iamDwin" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#111827] transition-transform duration-300 hover:rotate-12">
              <Icon name="mdi:arrow-top-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
