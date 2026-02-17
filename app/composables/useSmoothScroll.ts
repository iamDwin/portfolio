export const useSmoothScroll = () => {
  const scrollTo = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const navbarHeight = 64
    const targetPosition = element.offsetTop - navbarHeight

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }

  return { scrollTo }
}
