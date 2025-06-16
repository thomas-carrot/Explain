<script setup lang="ts">
const { data: home } = await useAsyncData('home', () =>
    queryCollection('content').path('/pages/').first()
)

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>
    <p>Home not found - 404</p>
  </div>
</template>