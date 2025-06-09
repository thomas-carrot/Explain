<template>
  <header class="bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-900">
            <img src="/numorning.png" alt="logo nümorning">
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-8">
          <NuxtLink
              v-for="link in navData?.links || []"
              :key="link.url"
              :to="link.url"
              class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps({
  navData: {
    type: Object,
    default: () => ({})
  }
})
</script>