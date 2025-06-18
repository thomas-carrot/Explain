<!-- app/components/blocks/ContactInfoBlock.vue -->
<script setup>
const props = defineProps({
  type: String,
  title: String,
  contacts: {
    type: Array,
    default: () => []
  },
  blockIndex: Number
})

// Fonction pour obtenir l'icône selon le type
const getIcon = (iconName, contactType) => {
  const iconMap = {
    location: 'i-heroicons-map-pin',
    email: 'i-heroicons-envelope',
    phone: 'i-heroicons-phone',
    address: 'i-heroicons-map-pin'
  }
  return iconMap[iconName] || iconMap[contactType] || 'i-heroicons-information-circle'
}
</script>

<template>
  <section class="contact-info-block py-16 px-6 bg-white">
    <div class="mx-auto max-w-4xl">
      <h2 v-if="title" class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
        {{ title }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
            v-for="(contact, index) in contacts"
            :key="index"
            class="text-center"
        >
          <!-- Icône -->
          <div class="flex justify-center mb-4">
            <UIcon
                :name="getIcon(contact.icon, contact.contact_type)"
                class="w-8 h-8 text-[#824E1E]"
            />
          </div>

          <!-- Label -->
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {{ contact.label }}
          </h3>

          <!-- Valeur/Contenu -->
          <div class="text-gray-600 whitespace-pre-line">
            <template v-if="contact.contact_type === 'email'">
              <a
                  :href="`mailto:${contact.value}`"
                  class="text-[#824E1E] hover:underline"
              >
                {{ contact.value }}
              </a>
            </template>
            <template v-else-if="contact.contact_type === 'phone'">
              <a
                  :href="`tel:${contact.value.replace(/\s/g, '')}`"
                  class="text-[#824E1E] hover:underline"
              >
                {{ contact.value }}
              </a>
            </template>
            <template v-else>
              {{ contact.value }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>