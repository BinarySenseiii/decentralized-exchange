import {ORIGIN} from '~/constant/config'
import {IPrice, PriceResponse, SwapQuery} from '~/types'
import {getData} from './fetcher-func'

export const getprices = (fromAddress: string, toAddress: string) =>
  getData<IPrice>(`${ORIGIN}/api/price`, {
    params: {fromAddress, toAddress},
  })

export const getSwapPrices = (query: SwapQuery) =>
  getData<PriceResponse>(`${ORIGIN}/api/p`, {
    params: query,
  })
