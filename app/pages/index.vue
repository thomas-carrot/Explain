<script setup lang="ts">
// Utilise la requête qui fonctionne (Home2)
const { data: home } = await useAsyncData('home', () =>
    queryCollection('content').path('/pages/').first()
)

const layoutToUse = home.value?.meta?.layout || 'default'
setPageLayout(layoutToUse)
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>
    <p>Home not found - 404</p>
  </div>
</template>