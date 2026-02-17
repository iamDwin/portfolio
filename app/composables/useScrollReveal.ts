import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export const useScrollReveal = (
  elementRef: Ref<HTMLElement | null>,
  options?: IntersectionObserverInit,
): { isVisible: Ref<boolean> } => {
  const isVisible = ref<boolean>(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, ...options },
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isVisible }
}
