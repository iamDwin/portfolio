<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project | null
  open: boolean
}>()

const emit = defineEmits<{ close: [] }>()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open) emit('close')
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

watch(
  () => props.open,
  (open) => {
    if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div
        v-if="open && project"
        class="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
        @click.self="emit('close')"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-void/80 backdrop-blur-md"
          @click="emit('close')"
        />

        <!-- Panel -->
        <Transition name="panel">
          <div
            v-if="open"
            class="relative z-10 w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-card border border-border/10 shadow-2xl"
          >
            <!-- Image -->
            <div class="relative aspect-video overflow-hidden rounded-t-3xl sm:rounded-t-2xl bg-elevated shrink-0">
              <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover"
              />
              <!-- Close -->
              <button
                class="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-void/60 backdrop-blur-sm text-text-primary hover:bg-void/90 transition-colors"
                aria-label="Close modal"
                @click="emit('close')"
              >
                <Icon name="mdi:close" />
              </button>
            </div>

            <!-- Accent bar -->
            <div class="h-0.5 bg-gradient-to-r from-accent via-accent-light to-transparent shrink-0" />

            <!-- Content -->
            <div class="p-6 sm:p-8">
              <!-- Title + featured badge -->
              <div class="flex items-start gap-3">
                <h2 class="font-display text-xl sm:text-2xl font-bold text-text-primary leading-snug flex-1">
                  {{ project.title }}
                </h2>
                <span
                  v-if="project.featured"
                  class="shrink-0 mt-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent border border-accent/20"
                >
                  Featured
                </span>
              </div>

              <!-- Tags -->
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full bg-elevated px-3 py-1 text-xs font-medium text-text-secondary border border-border/5"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Divider -->
              <div class="mt-6 h-px bg-border/5" />

              <!-- Full description -->
              <p class="mt-6 text-text-secondary leading-relaxed text-sm sm:text-base">
                {{ project.description }}
              </p>

              <!-- Actions -->
              <div
                v-if="project.liveUrl || project.githubUrl"
                class="mt-8 flex flex-wrap gap-3"
              >
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-accent-dim hover:shadow-glow"
                >
                  <Icon name="mdi:open-in-new" />
                  View Live
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 rounded-xl bg-elevated px-5 py-2.5 text-sm font-semibold text-text-primary border border-border/10 transition-all hover:border-accent/30 hover:text-accent"
                >
                  <Icon name="mdi:github" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.panel-enter-active {
  transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
}
.panel-leave-active {
  transition: transform 0.22s ease, opacity 0.2s ease;
}
.panel-enter-from {
  transform: translateY(24px) scale(0.97);
  opacity: 0;
}
.panel-leave-to {
  transform: translateY(12px) scale(0.97);
  opacity: 0;
}

@media (max-width: 640px) {
  .panel-enter-from {
    transform: translateY(48px);
  }
  .panel-leave-to {
    transform: translateY(48px);
  }
}
</style>
