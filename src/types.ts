export interface IPrice {
  ratio: number
  tokenOne: number
  tokenTwo: number
}

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
    onQueryChange: (inputValue: string | number, action: 'from' | 'to') => void
    onTokenChange: (action: 'from' | 'to', token: CkPartialToken) => void
    onSwap: () => void
    resetState: () => void
    onToleranceUpdate: (tolerance: number) => void
  }
}
