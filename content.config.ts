// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.{md,yml,yaml}',
            schema: {
                hero: {
                    type: 'object',
                    properties: {
                        title: { type: 'string' },
                        subtitle: { type: 'string' },
                        cta_text: { type: 'string' },
                        cta_link: { type: 'string' },
                        image: { type: 'string' }
                    }
                },
                mission: {
                    type: 'object',
                    properties: {
                        info: { type: 'string' },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        cta_text: { type: 'string' },
                        cta_link: { type: 'string' },
                        imageFirst: { type: 'string' },
                        imageSecond: { type: 'string' },
                        imageThird: { type: 'string' },
                        imageFour: { type: 'string' },
                        imageFive: { type: 'string' }
                    }
                },
                feature: {
                    type: 'object',
                    properties: {
                        info: { type: 'string' },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        video: { type: 'string' }
                    }
                }
            }
        })
    }
})