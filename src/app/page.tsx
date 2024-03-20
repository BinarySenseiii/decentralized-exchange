import SwapWidget from '~/components/swap'

const HomePage = () => {
  return (
    <div className="container grid md:grid-cols-3 gap-4 h-full items-start">
      <SwapWidget />
      <div className="md:col-span-2"></div>
    </div>
  )
}

export default HomePage
