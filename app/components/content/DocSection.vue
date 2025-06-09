<script setup lang="ts">
const { data: docData } = await useAsyncData('doc-data', () => queryCollection('content').path('/pages/doc').first())
</script>

<template>
<div>
  <h1 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
    {{ docData?.meta?.hero?.title || 'Contactez-nous' }}
  </h1>
</div>
</template>
