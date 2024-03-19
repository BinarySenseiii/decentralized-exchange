import {CKTokenResponse} from '~/types'
import {getData} from './fetcher-func'

export const getTokenList = getData<CKTokenResponse>(
  'https://tokens.coingecko.com/uniswap/all.json',
)
