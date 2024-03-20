import {Search} from 'lucide-react'
import {ReactNode, memo, useMemo, useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import {useSwapActions} from '~/context/swap-context'
import data from '~/data/token-list.json'
import {CkPartialToken} from '~/types'
import {NativeInput} from '../ui/native-input'
import {ScrollArea} from '../ui/scroll-area'
import SwapToken from './swap-token'

const SwapModal = ({children, action}: {children: ReactNode; action: 'from' | 'to'}) => {
  const [query, setQuery] = useState('')
  const {onTokenChange} = useSwapActions()
  const [isOpen, setIsOpen] = useState(false)

  const filteredTokens = useMemo(() => {
    if (!query) return data?.tokens.slice(0, 100)
    const lowercaseQuery = query.toLowerCase()
    return data?.tokens.filter(
      t =>
        t.name.toLowerCase().includes(lowercaseQuery) ||
        t.symbol.toLowerCase().includes(lowercaseQuery) ||
        t.address.toLowerCase().includes(lowercaseQuery),
    )
  }, [query])

  const onTokenClick = (token: CkPartialToken) => {
    onTokenChange(action, token)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={() => setIsOpen(true)}>{children}</DialogTrigger>
      <DialogContent className="w-[95%] rounded-md p-4">
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
          <DialogDescription className="mt-2">
            Select a token from our default list or search for a token by symbol or address.
          </DialogDescription>
        </DialogHeader>

        <div className="relative h-10 w-full">
          <Search
            size={15}
            className="absolute left-3 top-2/4 transform -translate-y-2/4 text-gray-500 z-10"
          />
          <NativeInput
            type="text"
            className="pl-8 h-full"
            placeholder="Search by token or address"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <ScrollArea className="h-[200px] w-full">
          {filteredTokens.length === 0 ? (
            <p className="text-center text-muted-foreground font-semibold italic">No Token Found</p>
          ) : (
            <div className="flex flex-col gap-2">
              {filteredTokens?.slice(0, 100).map(t => (
                <div key={t.name}>
                  <SwapToken
                    token={t}
                    className="!static rounded-md transform-none dark:bg-gray-900 hover:dark:bg-gray-800 bg-slate-100 hover:bg-slate-200 p-2"
                    onClick={() => onTokenClick(t)}
                  />
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default memo(SwapModal)
