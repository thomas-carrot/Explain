<script setup lang="ts">

const { data: home } = await useAsyncData(() =>
    queryCollection('pages').where({ _path: '/' }).first()
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
