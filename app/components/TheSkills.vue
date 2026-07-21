<script setup lang="ts">
import { skillCategories } from '~/data/skills'

const verifiedMetrics = [
  { value: '45+', label: 'pipeline modules', detail: 'Classification architecture' },
  { value: '30+', label: 'product collaborators', detail: 'Engineering and QA' },
  { value: '10', label: 'analytical skills', detail: 'AI-powered operations' },
]
</script>

<template>
  <section id="skills" class="border-y border-border/60 bg-primary px-4 py-24 sm:px-6 md:py-28">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 md:grid-cols-[1.15fr_.85fr] md:items-end">
        <div>
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">System capability map</p>
          <h2 class="mt-5 max-w-3xl font-display text-[clamp(2.75rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em] text-text-primary">One engineering system. Many connected disciplines.</h2>
        </div>
        <p class="max-w-md text-base leading-relaxed text-text-secondary md:justify-self-end">I connect product decisions to implementation across interfaces, infrastructure, mobile platforms, and applied intelligence.</p>
      </div>

      <div class="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow-strong">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:px-6">
          <span>Goodman engineering ecosystem</span>
          <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-accent" /> Operational</span>
        </div>

        <div class="grid lg:grid-cols-[1.3fr_.7fr]">
          <div class="system-map relative min-h-[31rem] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_center,_rgba(228,139,89,.18),_transparent_38%)] lg:border-b-0 lg:border-r">
            <svg class="absolute inset-0 h-full w-full text-white/15" viewBox="0 0 800 500" fill="none" aria-hidden="true">
              <path d="M400 250L150 105M400 250L650 105M400 250L120 365M400 250L680 365M400 250L400 455" stroke="currentColor" stroke-width="1" stroke-dasharray="5 7" />
              <circle cx="400" cy="250" r="135" stroke="currentColor" />
              <circle cx="400" cy="250" r="205" stroke="currentColor" stroke-dasharray="3 12" />
            </svg>

            <div class="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-accent/60 bg-[#111827] text-center shadow-[0_22px_60px_rgba(17,24,39,.35)] sm:h-36 sm:w-36">
              <span class="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Core</span>
              <strong class="mt-2 text-sm font-semibold text-white">Product<br>engineering</strong>
            </div>

            <div
              v-for="(category, index) in skillCategories"
              :key="category.title"
              class="system-node absolute z-10 w-32 rounded-lg border border-white/15 bg-white/10 p-3 text-white shadow-lg backdrop-blur-md sm:w-36"
              :class="`system-node-${index}`"
            >
              <div class="flex items-center gap-2">
                <Icon :name="category.icon" class="text-lg text-accent" />
                <span class="text-xs font-semibold leading-tight">{{ category.title }}</span>
              </div>
              <p class="mt-2 truncate font-mono text-[9px] uppercase tracking-[0.08em] text-white/45">{{ category.skills[0] }} · {{ category.skills[1] }}</p>
            </div>
          </div>

          <aside class="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p class="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">System metriqs</p>
              <h3 class="mt-4 max-w-sm text-2xl font-medium tracking-[-0.03em] text-white">Evidence from systems already shipped.</h3>
            </div>

            <div class="mt-10 space-y-3">
              <div v-for="metric in verifiedMetrics" :key="metric.label" class="rounded-xl bg-white/[0.07] p-4 ring-1 ring-inset ring-white/10">
                <div class="flex items-baseline justify-between gap-4">
                  <strong class="font-mono text-2xl font-semibold tabular-nums text-accent">{{ metric.value }}</strong>
                  <span class="text-xs font-medium text-white/55">{{ metric.detail }}</span>
                </div>
                <p class="mt-3 text-sm text-white/85">{{ metric.label }}</p>
                <div class="mt-3 h-1 overflow-hidden rounded-full bg-white/10"><div class="h-full w-3/4 rounded-full bg-accent" /></div>
              </div>
            </div>
          </aside>
        </div>

        <div class="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-5">
          <div v-for="category in skillCategories" :key="category.title" class="border-b border-white/10 p-5 last:border-b-0 sm:border-r lg:border-b-0">
            <p class="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">{{ category.title }}</p>
            <p class="mt-3 text-xs leading-5 text-white/60">{{ category.skills.slice(0, 5).join(' · ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.system-node { animation: node-float 5s ease-in-out infinite; }
.system-node-0 { left: 4%; top: 9%; }
.system-node-1 { right: 4%; top: 9%; animation-delay: -.8s; }
.system-node-2 { left: 3%; top: 66%; animation-delay: -1.6s; }
.system-node-3 { right: 3%; top: 66%; animation-delay: -2.4s; }
.system-node-4 { bottom: 3%; left: 50%; transform: translateX(-50%); animation-delay: -3.2s; }

@keyframes node-float {
  0%, 100% { margin-top: 0; }
  50% { margin-top: -7px; }
}

@media (prefers-reduced-motion: reduce) {
  .system-node { animation: none; }
}
</style>
