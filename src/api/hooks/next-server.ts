import {useQuery} from '@tanstack/react-query'
import {getprices} from '../queries'

export const useTokenPrices = (from: string, to: string) => {
  return useQuery({
    queryKey: ['price', {from, to}],
    queryFn: () => getprices(from, to),
  })
}
