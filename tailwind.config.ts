import type {Config} from 'tailwindcss'
import {shadcnPreset} from './src/lib/shadcn'

const config = {
  presets: [shadcnPreset],
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
} satisfies Config

export default config
