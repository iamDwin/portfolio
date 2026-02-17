<script setup lang="ts">
import { profileData } from '~/data/profile'

const { scrollTo } = useSmoothScroll()

const handleViewWork = (): void => {
  scrollTo('projects')
}

const handleContact = (): void => {
  scrollTo('contact')
}
</script>

<template>
  <section
    id="hero"
    class="relative flex min-h-screen items-center justify-center px-4"
  >
    <!-- Background gradient -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,157,74,0.08)_0%,_transparent_70%)]"
    />

    <div class="relative z-10 mx-auto max-w-3xl text-center">
      <!-- Greeting -->
      <p
        class="mb-4 font-mono text-sm tracking-wider text-accent animate-fade-in"
      >
        Hi, my name is
      </p>

      <!-- Name -->
      <h1
        class="font-display text-4xl font-bold text-text-primary sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up"
      >
        {{ profileData.name }}
      </h1>

      <!-- Title -->
      <p
        class="mt-4 font-display text-xl font-semibold text-text-secondary sm:text-2xl md:text-3xl animate-slide-up"
        style="animation-delay: 0.1s"
      >
        {{ profileData.title }}
      </p>

      <!-- Tagline -->
      <p
        class="mx-auto mt-6 max-w-xl text-base text-text-muted sm:text-lg animate-slide-up"
        style="animation-delay: 0.2s"
      >
        {{ profileData.tagline }}
      </p>

      <!-- CTA Buttons -->
      <div
        class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up"
        style="animation-delay: 0.3s"
      >
        <button
          class="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-accent-dim hover:shadow-glow-strong"
          @click="handleViewWork"
        >
          View My Work
        </button>
        <button
          class="rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          @click="handleContact"
        >
          Get In Touch
        </button>
      </div>

      <!-- Social Links -->
      <div
        class="mt-10 flex justify-center animate-slide-up"
        style="animation-delay: 0.4s"
      >
        <SocialLinks size="md" />
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
      <button
        aria-label="Scroll to about section"
        class="text-text-muted transition-colors hover:text-accent"
        @click="scrollTo('about')"
      >
        <Icon name="mdi:chevron-down" class="text-3xl" />
      </button>
    </div>
  </section>
</template>
