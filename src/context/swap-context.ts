import {create} from 'zustand'
import data from '~/data/token-list.json'
import {ISwapStore} from '~/types'

const token = (name: string) => data?.tokens.filter(t => t.symbol === name)[0]

const initialQuery = {
  from: {
    inputValue: '',
    token: token('USDC'),
  },
  to: {
    inputValue: '',
    token: token('LINK'),
  },
  tolerance: 0.5,
}

const useSwapStore = create<ISwapStore>(set => ({
  query: {...initialQuery},
  actions: {
    onQueryChange: (inputValue, action) =>
      set(state => {
        return {
          query: {
            ...state.query,
            [action]: {
              ...state.query[action],
              inputValue,
            },
          },
        }
      }),

    onTokenChange: (action, token) =>
      set(state => {
        return {
          query: {
            ...state.query,
            [action]: {
              ...state.query[action],
              token,
            },
          },
        }
      }),

    onSwap: () =>
      set(state => {
        const from = {inputValue: '', token: state.query.to.token}
        const to = {inputValue: '', token: state.query.from.token}

        return {query: {...state.query, from, to}}
      }),
    resetState: () => set({query: {...initialQuery}}),
    onToleranceUpdate: tolerance => set(state => ({query: {...state.query, tolerance}})),
  },
}))

export const useSwapQuery = () => useSwapStore(state => state.query)
export const useSwapActions = () => useSwapStore(state => state.actions)
