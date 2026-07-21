<template>
  <div class="min-h-screen overflow-x-hidden bg-void text-text-primary">
    <a href="#main-content" class="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-on-accent transition-transform focus:translate-y-0">
      Skip to content
    </a>
    <TheNavbar />
    <main id="main-content" class="w-full max-w-full overflow-x-hidden">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
