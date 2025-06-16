<script setup lang="ts">
interface Product {
  id: string
  name: string
  description: string
  price: string
  weight: string
  ingredients: string
  nutritional_values: [
    {
      label: string
      value: string
    }
  ]
  picture?: string
  available: boolean
  cta: {
    label: string
    url: string
  }
  steps: [
    {
      picture?: string
      text: string
    }
  ]
}

const { data: productsData } = await useAsyncData('products-data', () => queryCollection('content').path('/pages/doc').first())

const products = computed(() => {
  const prods = productsData.value?.meta?.products as Product[] | undefined
  return prods || []
})

const selectedProduct = ref<Product | null>(null)

watchEffect(() => {
  if (products.value.length > 0 && !selectedProduct.value) {
    selectedProduct.value = products.value[0]
  }
})

const selectProduct = (product: Product) => {
  selectedProduct.value = product
}
</script>

<template>
  <div class="bg-white">
    <section class="py-16 sm:py-24 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {{ productsData?.meta?.hero?.title || 'Nos Produits' }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ productsData?.meta?.hero?.description || 'Découvrez notre gamme de produits bio et naturels' }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <!-- col left -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Nos produits</h2>
            <div class="space-y-4">
              <button
                  v-for="product in products"
                  :key="product.id"
                  @click="selectProduct(product)"
                  :class="[
                  'w-full text-left p-4 rounded-lg border-2 transition-all duration-200',
                  selectedProduct?.id === product.id
                    ? 'border-[#824E1E] bg-[#824E1E]/5 shadow-md'
                    : 'border-gray-200 hover:border-[#824E1E]/50 hover:bg-gray-50',
                  !product.available && 'opacity-60'
                ]"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h3 :class="[
                      'font-semibold text-lg',
                      selectedProduct?.id === product.id ? 'text-[#824E1E]' : 'text-gray-900'
                    ]">
                      {{ product.name }}
                    </h3>
                    <p v-if="!product.available" class="text-xs text-red-500 mt-1 font-medium">
                      Temporairement indisponible
                    </p>
                  </div>
                  <div :class="[
                    'w-3 h-3 rounded-full',
                    selectedProduct?.id === product.id ? 'bg-[#824E1E]' : 'bg-gray-300'
                  ]"></div>
                </div>
              </button>
            </div>
          </div>

          <!-- col right -->
          <div class="lg:col-span-3">
            <div v-if="selectedProduct" class="rounded-xl p-8 flex flex-col gap-16">

              <!-- header product -->
              <div class="flex flex-col md:flex-row gap-8 mb-8">
                <div class="md:w-80">
                  <div v-if="selectedProduct.picture"
                       class="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                    <img :src="selectedProduct.picture"
                         :alt="selectedProduct.name"
                         class="w-full h-full object-cover">
                  </div>
                  <div v-else
                       class="w-full h-64 md:h-80 rounded-lg bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center shadow-lg">
                    <span class="text-6xl">🥣</span>
                  </div>
                </div>
                <div class="md:flex-1">
                  <div class="flex items-center gap-3 mb-4">
                    <h2 class="text-3xl font-bold text-gray-900">{{ selectedProduct.name }}</h2>
                    <span v-if="!selectedProduct.available"
                          class="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                      Indisponible
                    </span>
                    <span v-else
                          class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      Disponible
                    </span>
                  </div>

                  <p class="text-lg text-gray-600 mb-6">{{ selectedProduct.description }}</p>

                  <div class="flex items-center gap-6 mb-6">
                    <div class="text-center">
                      <p class="text-3xl font-bold text-[#824E1E]">{{ selectedProduct.price }}</p>
                      <p class="text-sm text-gray-500">Prix unitaire</p>
                    </div>
                    <div class="text-center">
                      <p class="text-xl font-semibold text-gray-900">{{ selectedProduct.weight }}</p>
                      <p class="text-sm text-gray-500">Poids net</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- steps -->
              <div v-if="selectedProduct.steps && selectedProduct.steps.length > 0" class="mt-12">
                <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center">Comment déguster ce produit</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div v-for="(step, index) in selectedProduct.steps"
                       :key="`step-${index}`"
                       class="text-center">

                    <div class="flex items-center justify-center w-8 h-8 bg-[#824E1E] text-white font-bold rounded-full mx-auto mb-4">
                      {{ index + 1 }}
                    </div>

                    <div class="mb-4">
                      <div v-if="step.picture"
                           class="w-full h-48 rounded-lg overflow-hidden shadow-md mx-auto">
                        <video
                            v-if="step.picture.includes('.mp4') || step.picture.includes('.webm') || step.picture.includes('.mov')"
                            :src="step.picture"
                            autoplay
                            muted
                            loop
                            playsinline
                            class="w-full h-full object-cover"
                        >
                          Votre navigateur ne supporte pas les vidéos HTML5.
                        </video>
                        <img v-else
                             :src="step.picture"
                             :alt="`Étape ${index + 1}`"
                             class="w-full h-full object-cover">
                      </div>
                      <div v-else
                           class="w-full h-48 rounded-lg bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center shadow-md mx-auto">
                        <span class="text-4xl">🥄</span>
                      </div>
                    </div>

                    <p class="text-gray-600 text-sm leading-relaxed">{{ step.text }}</p>
                  </div>
                </div>
              </div>

              <!-- infos -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                <div class="bg-white rounded-lg p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <UIcon name="i-lucide-leaf" class="text-[#824E1E]" />
                    Ingrédients
                  </h3>
                  <p class="text-gray-600 leading-relaxed">{{ selectedProduct.ingredients }}</p>
                </div>

                <div class="bg-white rounded-lg p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <UIcon name="i-lucide-activity" class="text-[#824E1E]" />
                    Valeurs nutritionnelles
                  </h3>
                  <div class="space-y-3">
                    <div v-for="valeur in selectedProduct.nutritional_values"
                         :key="valeur.label"
                         class="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span class="text-gray-600">{{ valeur.label }}</span>
                      <span class="font-semibold text-gray-900">{{ valeur.value }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-8 text-center">
                <a v-if="selectedProduct.available && selectedProduct.cta"
                   :href="selectedProduct.cta.url"
                   target="_blank"
                   rel="nofollow noopener noreferrer"
                   class="inline-block bg-[#824E1E] hover:bg-[#6B3E18] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  {{ selectedProduct.cta.label }}
                </a>
                <span v-else-if="!selectedProduct.available" class="inline-block bg-gray-300 text-gray-500 cursor-not-allowed font-semibold px-8 py-3 rounded-lg text-lg">Produit indisponible</span>
                <span v-else class="inline-block bg-gray-300 text-gray-500 cursor-not-allowed font-semibold px-8 py-3 rounded-lg text-lg">Lien non configuré</span>
              </div>

            </div>

            <div v-else class="bg-gray-50 rounded-xl p-8 text-center">
              <p class="text-gray-500">Sélectionnez un produit pour voir ses détails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>