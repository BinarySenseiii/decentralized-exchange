import {ORIGIN} from '~/constant/config'
import {IPrice} from '~/types'
import {getData} from './fetcher-func'

export const getprices = (fromAddress: string, toAddress: string) =>
  getData<IPrice>(`${ORIGIN}/api/price`, {
    params: {fromAddress, toAddress},
  })
