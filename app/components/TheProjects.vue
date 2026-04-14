<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, type Project } from '~/data/projects'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef)

const selectedProject = ref<Project | null>(null)

type Tab = 'all' | 'work' | 'personal'
const activeTab = ref<Tab>('all')

const tabs: { label: string; value: Tab }[] = [
  { label: 'All', value: 'all' },
  { label: 'Work', value: 'work' },
  { label: 'Personal', value: 'personal' },
]

const filtered = computed(() =>
  activeTab.value === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab.value),
)
</script>

<template>
  <section
    id="projects"
    ref="sectionRef"
    class="px-4 py-20 lg:py-32 transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mb-10 text-center">
        <h2 class="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Projects
        </h2>
        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </div>

      <!-- Tab filter -->
      <div class="mb-10 flex justify-center">
        <div class="flex gap-1 rounded-xl bg-elevated p-1 border border-border/5">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200"
            :class="
              activeTab === tab.value
                ? 'bg-accent text-on-accent shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            "
            @click="activeTab = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Projects grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in filtered"
          :key="project.title"
          :project="project"
          @open="selectedProject = $event"
        />
      </div>
    </div>
  </section>

  <!-- Project detail modal -->
  <ProjectModal
    :project="selectedProject"
    :open="!!selectedProject"
    @close="selectedProject = null"
  />
</template>
