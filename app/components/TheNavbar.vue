<script setup lang="ts">
import { ref } from 'vue'
import { navItems } from '~/data/navigation'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const { scrollTo } = useSmoothScroll()
const { activeSection } = useActiveSection(navItems.map((item) => item.sectionId))

const handleNavClick = (sectionId: string) => {
  scrollTo(sectionId)
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
    <nav
      aria-label="Main navigation"
      class="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5"
      :class="isScrolled ? 'border-border/10 bg-void/85 shadow-2xl backdrop-blur-xl' : 'border-transparent bg-transparent'"
    >
      <button
        class="group flex items-center gap-3 text-left"
        aria-label="Scroll to top"
        @click="handleNavClick('hero')"
      >
        <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-on-accent transition-transform duration-500 group-hover:rotate-6">GE</span>
        <span class="hidden font-display text-sm font-semibold tracking-tight text-text-primary sm:block">Goodman Effah</span>
      </button>

      <div class="hidden items-center gap-1 rounded-full border border-border/10 bg-primary/70 p-1 md:flex">
        <button
          v-for="item in navItems"
          :key="item.sectionId"
          class="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300"
          :class="activeSection === item.sectionId ? 'bg-text-primary text-void' : 'text-text-secondary hover:text-text-primary'"
          @click="handleNavClick(item.sectionId)"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="flex items-center gap-2">
        <a
          href="mailto:goodmaneffah@gmail.com"
          class="hidden items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-on-accent sm:flex"
        >
          Available for select work
        </a>
        <ThemeToggle />
        <button
          class="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 text-text-primary md:hidden"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Icon :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-xl" />
        </button>
      </div>
    </nav>

    <Transition enter-active-class="transition duration-300" enter-from-class="opacity-0 -translate-y-3" leave-active-class="transition duration-200" leave-to-class="opacity-0 -translate-y-3">
      <div v-if="isMobileMenuOpen" class="pointer-events-auto mx-auto mt-2 max-w-7xl rounded-2xl border border-border/10 bg-void/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        <button
          v-for="item in navItems"
          :key="item.sectionId"
          class="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-text-secondary hover:bg-elevated hover:text-text-primary"
          @click="handleNavClick(item.sectionId)"
        >
          {{ item.label }}
        </button>
      </div>
    </Transition>
  </header>
</template>
