import {ChangeEvent} from 'react'

export interface CKToken {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI: string
}

export type CkPartialToken = Partial<CKToken>

export interface CKTokenResponse {
  name: string
  logoURI: string
  timestamp: string
  tokens: Array<CKToken>
}

type SwapInput = {inputValue: string; token: CkPartialToken}
export interface ISwapStore {
  query: {
    from: SwapInput
    to: SwapInput
    tolerance: number
  }

  actions: {
    onQueryChange: (event: ChangeEvent<HTMLInputElement>, action: 'from' | 'to') => void
    resetState: () => void
    onToleranceUpdate: (tolerance: number) => void
  }
}
