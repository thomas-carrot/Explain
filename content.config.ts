import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.{md,yml,yaml}'
        }),
        pages: defineCollection({
            type: 'page',
            source: 'pages/**/*.{md,yml,yaml}'
        }),
        components: defineCollection({
            type: 'page',
            source: 'components/**/*.{md,yml,yaml}'
        })
    }
})