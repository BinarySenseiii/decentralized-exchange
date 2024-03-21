import {NextRequest} from 'next/server'

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)
  const sellToken = searchParams.get('sellToken')
  const buyToken = searchParams.get('buyToken')
  const sellAmount = searchParams.get('sellAmount')

  const response = await fetch(
    `https://api.0x.org/swap/v1/price?sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=${sellAmount}
  `,
    {
      headers: {
        '0x-api-key': process.env.SWAP_API_KEY!,
      },
    },
  )

  const data = await response.json()

  return Response.json(data)
}
