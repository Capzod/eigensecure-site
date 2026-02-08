import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#0B1C2D',   // Navy Blue
          accent: '#D4AF37',    // Gold
          background: '#FFFFFF',
          surface: '#FFFFFF'
        }
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: '#0B1C2D',
          accent: '#D4AF37',
          background: '#0F172A',
          surface: '#111827'
        }
      }
    }
  }
})
