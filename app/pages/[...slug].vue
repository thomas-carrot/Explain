<script setup lang="ts">
const route = useRoute()
const path = route.path

const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryCollection('content').path(path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

</script>

<template>
  <div>
    <ContentRenderer :value="page" />
  </div>
</template>