<script setup lang="ts">
import { profileData } from '~/data/profile'
</script>

<template>
  <section id="contact" class="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32">
    <div class="pointer-events-none absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[150px]" />
    <div class="relative mx-auto max-w-7xl">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">Let’s build something that matters</p>
      <h2 class="mt-8 max-w-6xl font-display text-[clamp(3.25rem,7vw,6.5rem)] font-medium leading-[.95] tracking-[-0.055em] text-text-primary">Have a hard problem worth solving?</h2>
      <div class="mt-14 grid gap-10 border-t border-border/10 pt-10 md:grid-cols-2 md:items-end">
        <p class="max-w-xl text-lg leading-relaxed text-text-secondary">I’m open to ambitious product work, engineering leadership conversations, and collaborations where the technical details matter as much as the user experience.</p>
        <div class="flex flex-col gap-3 md:items-end">
          <a :href="`mailto:${profileData.email}`" class="group flex w-full max-w-md items-center justify-between rounded-lg bg-accent px-6 py-4 font-semibold text-on-accent transition-transform duration-300 hover:-translate-y-1">
            {{ profileData.email }}
            <Icon name="mdi:arrow-top-right" class="text-xl transition-transform group-hover:rotate-12" />
          </a>
          <a :href="`tel:${profileData.phone.replace(/\s/g, '')}`" class="flex w-full max-w-md items-center justify-between rounded-lg border border-border/70 px-6 py-4 font-semibold text-text-primary transition-colors hover:border-accent">
            {{ profileData.phone }}
            <Icon name="mdi:phone-outline" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
