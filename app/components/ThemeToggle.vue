<script setup lang="ts">
const { handleToggleTheme, themeIcon, themeLabel } = useTheme()
</script>

<template>
  <button
    type="button"
    class="flex items-center justify-center rounded-lg p-2 text-text-secondary transition-all duration-300 hover:bg-overlay/5 hover:text-accent"
    :aria-label="themeLabel"
    :title="themeLabel"
    @click="handleToggleTheme"
  >
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 rotate-90 scale-75"
      enter-to-class="opacity-100 rotate-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 rotate-0 scale-100"
      leave-to-class="opacity-0 -rotate-90 scale-75"
      mode="out-in"
    >
      <Icon
        :key="themeIcon"
        :name="themeIcon"
        class="text-xl"
      />
    </Transition>
  </button>
</template>
