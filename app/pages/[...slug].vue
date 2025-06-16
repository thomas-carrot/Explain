<script setup lang="ts">
const route = useRoute()
const path = route.path

const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryCollection('content').path(`/pages${path}/`).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const layoutToUse = page.value?.meta?.layout || 'default'
setPageLayout(layoutToUse)

useSeoMeta({
  title: page.value?.title ? `${page.value.title}` : 'Nümorning',
  description: page.value?.description
})
</script>

<template>
  <div>
    <ContentRenderer :value="page" />
  </div>
</template>