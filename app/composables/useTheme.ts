export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed<boolean>(() => colorMode.value === 'dark')

  const handleToggleTheme = (): void => {
    if (import.meta.client) {
      const html = document.documentElement
      html.classList.add('theme-transitioning')
      setTimeout(() => html.classList.remove('theme-transitioning'), 300)
    }
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
