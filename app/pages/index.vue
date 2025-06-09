<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

const layoutToUse = home.value?.meta?.layout || 'default'
setPageLayout(layoutToUse)
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>
    <p>Home not found - 404</p>
  </div>
</template>
