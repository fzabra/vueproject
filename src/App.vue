<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink to="/" class="brand">Modern Vue Shop</RouterLink>
    </header>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
