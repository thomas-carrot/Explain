import { COLORS } from '../shared/enums'

export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate',
      ...Object.fromEntries(COLORS.map((c: string) => [c, c]))
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    }
  },
  toaster: { position: 'bottom-right' as const, expand: false, duration: 5000 }
})
