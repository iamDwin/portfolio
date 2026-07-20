<template>
  <div class="min-h-screen overflow-x-hidden bg-void text-text-primary">
    <TheNavbar />
    <main class="w-full max-w-full overflow-x-hidden">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
