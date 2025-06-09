<script setup lang="ts">
const { data: nav } = await useAsyncData('navigation', () => queryCollection('content').path('/navigation').first())
const { data: footer } = await useAsyncData('footer', () => queryCollection('content').path('/footer').first())

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :nav-data="nav?.meta" />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <Footer :footer-data="footer?.meta" />
  </div>
</template>