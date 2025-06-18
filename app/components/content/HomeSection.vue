<script setup>
const { data: homeData } = await useAsyncData('home-data', () =>
    queryCollection('content').path('/pages/').first()
)
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <img
          :src="homeData.meta.hero.image"
          :alt="homeData.meta.hero.title"
          class="absolute inset-0 -z-10 size-full object-cover"
      >
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">{{ homeData?.meta?.hero?.title || "Commencez la journée du bon pied avec nümorning" }}</h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">{{ homeData?.meta?.hero?.subtitle || "Produits sains et bio pour un petit-déjeuner gourmand et naturel." }}</p>
      </div>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink
            :to="homeData?.meta?.hero?.cta_link || '/doc'"
            class="rounded-md bg-[#824E1E] px-6 py-3 text-base font-semibold text-white shadow-sm hover:[#824E1E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
        >
          {{ homeData?.meta?.hero?.cta_text || "Découvrir les produits" }}
        </NuxtLink>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="relative isolate">
      <svg class="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>
      <div class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
        <div class="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
      </div>
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <p class="text-base font-semibold leading-7 text-[#824E1E]">{{ homeData?.meta?.mission?.info || "À propos" }}</p>
              <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">{{ homeData?.meta?.mission?.title || "Notre mission" }}</h2>
              <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">{{ homeData?.meta?.mission?.description || "Chez nümorning, nous croyons qu'un bon petit-déjeuner est la clé d'une journée réussie." }}</p>
              <div class="mt-10 flex justify-start gap-x-6">
                <NuxtLink
                    :to="homeData?.meta?.mission?.cta_link || '/doc'"
                    class="rounded-md bg-[#824E1E] px-6 py-3 text-base font-semibold text-white shadow-sm hover:[#824E1E] focus-visible:outline focus-visible:outline-offset-2 transition-colors"
                >
                  {{ homeData?.meta?.mission?.cta_text || "Découvrir les produits" }}
                </NuxtLink>
              </div>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                <div class="relative">
                  <img
                      :src="homeData.meta.mission.imageFirst"
                       alt=""
                       class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img
                      :src="homeData.meta.mission.imageSecond"
                      alt=""
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div class="relative">
                  <img
                      :src="homeData.meta.mission.imageThird"
                      alt=""
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img
                      :src="homeData.meta.mission.imageFour"
                      alt=""
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div class="relative">
                  <img
                      :src="homeData.meta.mission.imageFive"
                      alt=""
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2 class="text-base/7 font-semibold text-[#824E1E]">{{ homeData?.meta?.feature?.info || "Everything you need" }}</h2>
          <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">{{ homeData?.meta?.feature?.title || "Tout dont vous avez besoin pour bien commencez" }}</p>
          <p class="mt-6 text-lg/8 text-gray-600">{{ homeData?.meta?.feature?.description || "Chez nümorning, nous croyons qu'un bon petit-déjeuner est la clé d'une journée réussie." }}</p>
        </div>
      </div>
      <div class="relative overflow-hidden pt-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <video
              v-if="homeData?.meta?.feature?.video"
              :src="homeData.meta.feature.video"
              autoplay
              muted
              loop
              playsinline
              class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full h-auto"
              width="2432"
              height="1442"
          >
            Votre navigateur ne supporte pas les vidéos HTML5.
          </video>
          <div v-else class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full h-96 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
            <span class="text-6xl">🎥</span>
          </div>
          <div class="relative" aria-hidden="true">
            <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>