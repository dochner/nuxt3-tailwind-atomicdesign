<template>
<div class="app">
  <header class="bg-red-400"> Header </header>
  <main class="h-full bg-green-400">
    <slot />
  </main>
  <footer class="bg-blue-400"> Footer </footer>
</div>
</template>

<style>
.app {
  @apply grid min-h-screen grid-cols-1;

  grid-template-rows: minmax(0, 120px) 1fr minmax(0, 72px);
}
</style>