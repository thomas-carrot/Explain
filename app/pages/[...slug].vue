<!-- app/pages/[...slug].vue -->
<script setup lang="ts">
const route = useRoute()
const path = route.path

const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryCollection('content').path(`/pages${path}/`).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: page.value?.title ? `${page.value.title}` : 'Nümorning',
  description: page.value?.description
})

const blocks = computed(() => {
  return page.value?.meta?.blocks || []
})
</script>

<template>
  <div>
    <!-- Si la page a des blocs, les afficher -->
    <BlocksRenderer v-if="blocks.length > 0" :blocks="blocks" />

    <!-- Sinon, afficher le contenu traditionnel -->
    <ContentRenderer v-else-if="page" :value="page" />

    <!-- Page non trouvée -->
    <div v-else>
      <p>Page not found - 404</p>
    </div>
  </div>
</template>