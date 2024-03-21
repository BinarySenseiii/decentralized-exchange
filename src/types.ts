import {Address} from 'viem'

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

export interface PriceResponse {
  chainId: number
  price: string
  estimatedPriceImpact: string
  value: string
  gasPrice: string
  grossBuyAmount: string
  gas: string
  estimatedGas: string
  protocolFee: string
  minimumProtocolFee: string
  buyTokenAddress: string
  buyAmount: string
  sellTokenAddress: string
  sellAmount: string
  sources: any[]
  allowanceTarget: string
  sellTokenToEthRate: string
  buyTokenToEthRate: string
  expectedSlippage: string | null
}

export interface QuoteResponse {
  chainId: number
  price: string
  guaranteedPrice: string
  estimatedPriceImpact: string
  to: string
  from: string
  data: Address
  value: string
  gas: string
  estimatedGas: string
  gasPrice: string
  grossBuyAmount: string
  protocolFee: string
  minimumProtocolFee: string
  buyTokenAddress: string
  sellTokenAddress: string
  buyAmount: string
  sellAmount: string
  sources: any[]
  orders: any[]
  allowanceTarget: string
  decodedUniqueId: string
  sellTokenToEthRate: string
  buyTokenToEthRate: string
  expectedSlippage: string | null
}

export type PartialPriceResponse = Partial<PriceResponse>

export interface ISwapStore {
  query: {
    from: SwapInput
    to: SwapInput
    tolerance: number
    price: PartialPriceResponse
  }

  actions: {
    onQueryChange: (inputValue: string | number, action: 'from' | 'to') => void
    onTokenChange: (action: 'from' | 'to', token: CkPartialToken) => void
    onSwap: () => void
    resetState: () => void
    onToleranceUpdate: (tolerance: number) => void
    onPriceUpdate: (newPrice: PartialPriceResponse) => void
  }
}

export type SwapQuery = {
  sellToken: string
  buyToken: string
  sellAmount: string
  takerAddress?: string
  feeRecipient?: string
  buyTokenPercentageFee?: number
}
