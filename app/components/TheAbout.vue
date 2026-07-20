<script setup lang="ts">
import { computed, ref } from 'vue'
import { profileData } from '~/data/profile'

const principles = [
  {
    title: 'Make complexity legible',
    text: 'The best engineering work gives people confidence. I reduce complicated systems into interfaces and workflows that feel direct, intentional, and easy to trust.',
  },
  {
    title: 'Lead through the work',
    text: 'I stay close to implementation while aligning teams around the product outcome, from architecture and delivery through QA and iteration.',
  },
  {
    title: 'Build for the operating reality',
    text: 'Production constraints are part of the design. Performance, maintainability, data quality, and graceful failure shape every decision from the start.',
  },
]

const activePrinciple = ref(0)
const principle = computed(() => principles[activePrinciple.value])

const changePrinciple = (direction: number) => {
  activePrinciple.value = (activePrinciple.value + direction + principles.length) % principles.length
}
</script>

<template>
  <section id="about" class="relative px-4 py-32 sm:px-6 md:py-48">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Engineering, end to end</p>
          <p class="mt-6 max-w-sm text-base leading-relaxed text-text-secondary">{{ profileData.bio[1] }}</p>
          <div class="mt-8 flex items-center gap-3 text-sm text-text-muted">
            <Icon name="mdi:map-marker-outline" class="text-lg text-accent" />
            {{ profileData.location }}
          </div>
        </div>

        <div>
          <h2 class="font-display text-[clamp(2.75rem,5.2vw,5.7rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-text-primary">
            I connect product thinking
            <span class="mx-2 inline-block h-[.72em] w-[1.45em] overflow-hidden rounded-full align-baseline">
              <img src="https://picsum.photos/seed/green-interface/360/180" alt="" class="h-full w-full object-cover grayscale contrast-125">
            </span>
            with hands-on engineering.
          </h2>
          <p class="mt-10 max-w-2xl text-lg leading-relaxed text-text-secondary">{{ profileData.bio[0] }}</p>
        </div>
      </div>

      <div class="mt-24 overflow-hidden rounded-[2rem] border border-border/10 bg-surface md:mt-36">
        <div class="grid md:grid-cols-[.82fr_1.18fr]">
          <div class="relative min-h-72 overflow-hidden md:min-h-[28rem]">
            <img src="https://picsum.photos/seed/code-structure/1000/1100" alt="Abstract structural detail" class="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
          </div>
          <div class="flex min-h-[28rem] flex-col justify-between p-7 sm:p-10 lg:p-14">
            <Transition name="principle" mode="out-in">
              <div :key="activePrinciple">
                <p class="text-sm font-semibold text-accent">How I work</p>
                <h3 class="mt-6 max-w-xl font-display text-3xl font-semibold tracking-[-0.04em] text-text-primary sm:text-4xl">{{ principle.title }}</h3>
                <p class="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">{{ principle.text }}</p>
              </div>
            </Transition>
            <div class="mt-12 flex items-center justify-between">
              <span class="text-xs font-semibold tracking-[0.2em] text-text-muted">0{{ activePrinciple + 1 }} / 0{{ principles.length }}</span>
              <div class="flex gap-2">
                <button class="flex h-11 w-11 items-center justify-center rounded-full border border-border/15 text-text-primary transition-colors hover:border-accent hover:text-accent" aria-label="Previous principle" @click="changePrinciple(-1)"><Icon name="mdi:arrow-left" /></button>
                <button class="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-void transition-transform hover:translate-x-1" aria-label="Next principle" @click="changePrinciple(1)"><Icon name="mdi:arrow-right" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.principle-enter-active,
.principle-leave-active { transition: opacity .25s ease, transform .25s ease; }
.principle-enter-from { opacity: 0; transform: translateY(12px); }
.principle-leave-to { opacity: 0; transform: translateY(-12px); }
</style>
