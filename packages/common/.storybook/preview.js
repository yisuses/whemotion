import theme from '../src/themes/emotion.theme'
import '@fontsource/roboto'
import '@fontsource/lora'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  layout: 'fullscreen',
}
