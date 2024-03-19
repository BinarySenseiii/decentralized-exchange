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
