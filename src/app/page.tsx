import SwapWidget from '~/components/swap'
import ThemeToggleBtn from '~/components/theme-toggle'

const HomePage = () => {
  return (
    <div className="container py-4 min-h-dvh space-y-4">
      <ThemeToggleBtn />
      <div className="grid md:grid-cols-3 gap-4 h-full items-start">
        <SwapWidget />
        <div className="md:col-span-2"></div>
      </div>
    </div>
  )
}

export default HomePage
