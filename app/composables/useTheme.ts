export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed<boolean>(() => {
    return colorMode.value === 'dark'
  })

  const handleToggleTheme = (): void => {
    // Let @nuxtjs/color-mode handle the class swap via its own watcher
    colorMode.preference = isDark.value ? 'light' : 'dark'
  }

  const themeIcon = computed<string>(() =>
    isDark.value ? 'mdi:weather-sunny' : 'mdi:weather-night',
  )

  const themeLabel = computed<string>(() =>
    isDark.value ? 'Switch to light mode' : 'Switch to dark mode',
  )

  return {
    isDark,
    handleToggleTheme,
    themeIcon,
    themeLabel,
  }
}
