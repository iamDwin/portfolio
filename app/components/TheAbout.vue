<script setup lang="ts">
import { ref } from 'vue'
import { profileData } from '~/data/profile'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef)
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="px-4 py-20 lg:py-32 transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mb-16 text-center">
        <h2 class="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          About Me
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </div>

      <!-- Content grid -->
      <div class="grid items-center gap-12 lg:grid-cols-5">
        <!-- Photo -->
        <div class="flex justify-center lg:col-span-2">
          <div
            class="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-white/5 bg-card sm:h-80 sm:w-80"
          >
            <!-- Placeholder avatar -->
            <div
              class="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5"
            >
              <Icon
                name="mdi:account-outline"
                class="text-8xl text-accent/40"
              />
            </div>
            <!-- Decorative border glow -->
            <div
              class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/10"
            />
          </div>
        </div>

        <!-- Bio text -->
        <div class="lg:col-span-3">
          <p
            v-for="(paragraph, index) in profileData.bio"
            :key="index"
            class="mb-4 text-base leading-relaxed text-text-secondary last:mb-0 sm:text-lg"
          >
            {{ paragraph }}
          </p>

          <!-- Email CTA -->
          <a
            :href="`mailto:${profileData.email}`"
            class="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-2.5 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent/10 hover:border-accent/50"
            aria-label="Send email"
          >
            <Icon name="mdi:email-outline" />
            Say Hello
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
