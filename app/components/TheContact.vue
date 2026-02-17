<script setup lang="ts">
import { ref } from 'vue'
import { profileData } from '~/data/profile'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef)
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="px-4 py-20 lg:py-32 transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <div class="mx-auto max-w-2xl text-center">
      <!-- Section heading -->
      <div class="mb-12">
        <h2 class="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Get In Touch
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </div>

      <!-- Message -->
      <p class="mb-10 text-base leading-relaxed text-text-secondary sm:text-lg">
        I'm always open to new opportunities, interesting projects, and
        conversations about frontend engineering. Whether you have a question or
        just want to say hello — my inbox is always open.
      </p>

      <!-- Email CTA -->
      <a
        :href="`mailto:${profileData.email}`"
        class="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-on-accent shadow-glow transition-all duration-300 hover:bg-accent-dim hover:shadow-glow-strong"
        aria-label="Send me an email"
      >
        <Icon name="mdi:email-outline" />
        Say Hello
      </a>

      <!-- Social links -->
      <div class="mt-10 flex justify-center">
        <SocialLinks size="lg" />
      </div>
    </div>
  </section>
</template>
