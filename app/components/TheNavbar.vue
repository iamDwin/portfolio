<script setup lang="ts">
import { ref } from 'vue'
import { navItems } from '~/data/navigation'
import { profileData } from '~/data/profile'

const isMobileMenuOpen = ref<boolean>(false)
const isScrolled = ref<boolean>(false)

const { scrollTo } = useSmoothScroll()
const { activeSection } = useActiveSection(
  navItems.map((item) => item.sectionId),
)

const handleNavClick = (sectionId: string): void => {
  scrollTo(sectionId)
  isMobileMenuOpen.value = false
}

const handleToggleMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    role="navigation"
    aria-label="Main navigation"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-void/90 backdrop-blur-md border-b border-border/5 shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <button
          class="font-display text-lg font-bold text-text-primary transition-colors hover:text-accent"
          aria-label="Scroll to top"
          @click="handleNavClick('hero')"
        >
          {{ profileData.firstName }}<span class="text-accent">.</span>
        </button>

        <!-- Desktop Nav -->
        <div class="hidden items-center gap-1 md:flex">
          <button
            v-for="item in navItems"
            :key="item.sectionId"
            class="rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300"
            :class="[
              activeSection === item.sectionId
                ? 'text-accent bg-accent/10'
                : 'text-text-secondary hover:text-text-primary hover:bg-overlay/5',
            ]"
            @click="handleNavClick(item.sectionId)"
          >
            {{ item.label }}
          </button>
          <ThemeToggle />
        </div>

        <!-- Mobile Controls -->
        <div class="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            class="flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:bg-overlay/5 hover:text-text-primary"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle navigation menu"
            @click="handleToggleMenu"
          >
            <Icon
              :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
              class="text-2xl"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="border-b border-border/5 bg-void/95 backdrop-blur-md md:hidden"
      >
        <div class="space-y-1 px-4 py-4">
          <button
            v-for="item in navItems"
            :key="item.sectionId"
            class="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all"
            :class="[
              activeSection === item.sectionId
                ? 'text-accent bg-accent/10'
                : 'text-text-secondary hover:text-text-primary hover:bg-overlay/5',
            ]"
            @click="handleNavClick(item.sectionId)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
