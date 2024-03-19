import {useQuery} from '@tanstack/react-query'
import {getTokenList} from '../queries'
import initialTokenData from '~/data/token-list.json'

const useTokens = () =>
  useQuery({
    queryKey: ['uniswap/tokens'],
    queryFn: () => getTokenList,
    initialData: initialTokenData,
    select: data => data.tokens,
  })

export default useTokens
