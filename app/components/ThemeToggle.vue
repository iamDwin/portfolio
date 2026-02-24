<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed<boolean>(() => colorMode.value === 'dark')

const themeIcon = computed<string>(() =>
  isDark.value ? 'mdi:weather-sunny' : 'mdi:weather-night',
)

const themeLabel = computed<string>(() =>
  isDark.value ? 'Switch to light mode' : 'Switch to dark mode',
)

const handleToggleTheme = (): void => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <button
      type="button"
      class="flex items-center justify-center rounded-lg p-2 text-text-secondary transition-all duration-300 hover:bg-overlay/5 hover:text-accent"
      :aria-label="themeLabel"
      :title="themeLabel"
      @click="handleToggleTheme"
    >
      <Icon :name="themeIcon" class="text-xl" />
    </button>
    <template #fallback>
      <div class="h-9 w-9" />
    </template>
  </ClientOnly>
</template>
