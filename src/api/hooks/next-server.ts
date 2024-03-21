import {useQuery} from '@tanstack/react-query'
import {getprices, getSwapPrices} from '../queries'
import {SwapQuery} from '~/types'
import {useAccount} from 'wagmi'
import {useSwapQuery} from '~/context/swap-context'

export const useTokenPrices = (from: string, to: string) => {
  return useQuery({
    queryKey: ['price', {from, to}],
    queryFn: () => getprices(from, to),
  })
}

export const useSwapTokenPrices = (query: SwapQuery) => {
  const {isConnected} = useAccount()
  const {from} = useSwapQuery()

  return useQuery({
    queryKey: ['token/price', query],
    queryFn: () => getSwapPrices(query),
    enabled: isConnected || !!from.inputValue,
  })
}
