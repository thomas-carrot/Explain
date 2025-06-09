<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const colorMode = useColorMode()
const color = computed(() => (colorMode.value === 'dark' ? 'blue' : 'white'))

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [{ rel: 'icon', href: '/ico.png' }],
  htmlAttrs: { lang: 'fr' }
})

const title = 'nümorning - Explana'
const description = "Interface d'aide de nümorning"
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>