<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

interface FaqItem {
  label: string
  icon: string
  content: string
}

const { data: faqData } = await useAsyncData('faq-data', () => queryCollection('content').path('/faq').first())

const items = computed<AccordionItem[]>(() => {
  const faqItems = faqData.value?.meta?.faq_items as FaqItem[] | undefined

  if (!faqItems || !Array.isArray(faqItems)) {
    return []
  }

  return faqItems.map((item: FaqItem) => ({
    label: item.label,
    icon: item.icon,
    content: item.content
  }))
})
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ faqData?.meta?.hero?.title || 'FAQ' }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          {{ faqData?.meta?.hero?.description || 'Questions fréquemment posées' }}
        </p>
      </div>

      <div class="mx-auto max-w-4xl mt-16">
        <UAccordion
            :items="items"
            class="space-y-4 text-gray-600"
        />
      </div>

      <div class="mx-auto max-w-2xl text-center mt-16">
        <p class="text-lg text-gray-600 mb-6">
          Vous ne trouvez pas la réponse à votre question ?
        </p>
        <UButton
            to="/contact"
            size="lg"
            class="bg-[#824E1E] hover:bg-[#6B3E18] text-white font-semibold px-8 py-3 mt-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Nous contacter
        </UButton>
      </div>
    </div>
  </div>
</template>