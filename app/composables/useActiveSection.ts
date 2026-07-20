import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export const useActiveSection = (
  sectionIds: string[],
): { activeSection: Ref<string> } => {
  const activeSection = ref(sectionIds[0] ?? '')
  let animationFrame: number | null = null

  const updateActiveSection = () => {
    animationFrame = null
    const activationLine = window.innerHeight * 0.35
    let current = sectionIds[0] ?? ''

    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (section && section.getBoundingClientRect().top <= activationLine) {
        current = id
      }
    }

    activeSection.value = current
  }

  const handleScroll = () => {
    if (animationFrame === null) {
      animationFrame = window.requestAnimationFrame(updateActiveSection)
    }
  }

  onMounted(() => {
    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
    if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
  })

  return { activeSection }
}
