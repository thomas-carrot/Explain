<!-- app/components/BlocksRenderer.vue -->
<script setup>
const props = defineProps({
  blocks: {
    type: Array,
    default: () => []
  }
})

// Import dynamique des composants de blocs
const componentMap = {
  hero: resolveComponent('HeroBlock'),
  text: resolveComponent('TextBlock'),
  image_gallery: resolveComponent('ImageGalleryBlock'),
  contact_info: resolveComponent('ContactInfoBlock'),
  video: resolveComponent('VideoBlock'),
  cta: resolveComponent('CTABlock')
}

// Fonction pour obtenir le composant correspondant
const getBlockComponent = (type) => {
  return componentMap[type] || resolveComponent('DefaultBlock')
}
</script>

<template>
  <div class="blocks-container">
    <!-- Rendu de chaque bloc -->
    <template v-for="(block, index) in blocks" :key="`block-${index}-${block.type}`">
      <component
          :is="getBlockComponent(block.type)"
          v-bind="block"
          :block-index="index"
          class="block"
          :data-block-type="block.type"
      />
    </template>

    <!-- Message si aucun bloc -->
    <div v-if="!blocks || blocks.length === 0" class="no-blocks">
      <p class="text-gray-500 text-center py-12">
        Aucun bloc de contenu configuré.
        <span class="block mt-2">Utilisez Nuxt Studio pour ajouter du contenu.</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.blocks-container {
  @apply w-full;
}

.block {
  @apply w-full;
}

/* Espacement entre les blocs */
.block + .block {
  @apply mt-0; /* Les blocs gèrent leur propre espacement */
}

.no-blocks {
  @apply min-h-[50vh] flex items-center justify-center;
}
</style>