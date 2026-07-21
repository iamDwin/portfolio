<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects, type Project } from '~/data/projects'

const sectionRef = ref<HTMLElement | null>(null)
const selectedProject = ref<Project | null>(null)
const showArchive = ref(false)
let gsapContext: { revert: () => void } | null = null

const featuredProjects = [projects[1], projects[0], projects[7]].filter(Boolean) as Project[]
const archiveProjects = computed(() => projects.filter((project) => !featuredProjects.includes(project)))
const visibleArchive = computed(() => showArchive.value ? archiveProjects.value : archiveProjects.value.slice(0, 3))

onMounted(async () => {
  if (!sectionRef.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  gsapContext = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('[data-project-image]').forEach((image) => {
      gsap.fromTo(image, { scale: 0.94 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: image, start: 'top 92%', end: 'center 58%', scrub: 0.7 },
      })
    })
  }, sectionRef.value)
})

onUnmounted(() => gsapContext?.revert())
</script>

<template>
  <section id="projects" ref="sectionRef" class="px-4 py-24 sm:px-6 md:py-28">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
        <h2 class="max-w-4xl font-display text-[clamp(3rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em] text-text-primary">Selected work with measurable weight.</h2>
        <p class="max-w-sm text-base leading-relaxed text-text-secondary">A focused selection spanning product analytics, native mobile, and operational software.</p>
      </div>

      <div class="grid grid-flow-dense gap-4 min-[960px]:grid-cols-12 min-[960px]:grid-rows-2">
        <article
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          class="group relative min-h-[28rem] cursor-pointer overflow-hidden rounded-2xl bg-surface min-[960px]:min-h-0"
          :class="index === 0 ? 'min-[960px]:col-span-7 min-[960px]:row-span-2 min-[960px]:min-h-[48rem]' : 'min-[960px]:col-span-5 min-[960px]:row-span-1'"
          tabindex="0"
          :aria-label="`Open project details for ${project.title}`"
          @click="selectedProject = project"
          @keydown.enter="selectedProject = project"
        >
          <img data-project-image :src="project.image" :alt="project.title" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/20 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div class="flex items-end justify-between gap-6">
              <div>
                <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#111827] shadow-[0_8px_24px_rgba(17,24,39,0.28)] backdrop-blur-sm">
                  <span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {{ project.category === 'work' ? 'Product engineering' : 'Independent product' }}
                </p>
                <h3 class="max-w-xl font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{{ project.title }}</h3>
                <p class="mt-3 max-w-xl text-sm leading-relaxed text-white/70 line-clamp-2">{{ project.description }}</p>
              </div>
              <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-lg text-[#111827] transition-transform duration-300 group-hover:rotate-6"><Icon name="mdi:arrow-top-right" /></span>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-24 md:mt-28">
        <div class="mb-10 flex items-end justify-between gap-6 border-b border-border/10 pb-6">
          <div>
            <h3 class="font-display text-3xl font-semibold tracking-[-0.04em] text-text-primary sm:text-4xl">More from the archive</h3>
            <p class="mt-3 text-sm text-text-secondary">Internal tools, AI systems, client work, and earlier product builds.</p>
          </div>
          <span class="hidden text-sm font-semibold text-text-muted sm:block">{{ archiveProjects.length }} projects</span>
        </div>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard v-for="project in visibleArchive" :key="project.title" :project="project" @open="selectedProject = $event" />
        </div>
        <button v-if="!showArchive" class="mx-auto mt-10 flex items-center gap-2 rounded-full border border-border/15 px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent" @click="showArchive = true">
          View the full project archive
          <Icon name="mdi:arrow-down" />
        </button>
      </div>
    </div>
  </section>

  <ProjectModal :project="selectedProject" :open="!!selectedProject" @close="selectedProject = null" />
</template>
