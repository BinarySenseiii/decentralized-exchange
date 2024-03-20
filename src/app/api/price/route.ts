import Moralis from 'moralis'
import {NextRequest} from 'next/server'

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)
  const fromAddress = searchParams.get('fromAddress')
  const toAddress = searchParams.get('toAddress')

  let data = {}

  try {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({apiKey: process.env.MORALIS_API_KEY})
    }

    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
      address: fromAddress!,
    })

    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
      address: toAddress!,
    })

    data = {
      tokenOne: responseOne.raw.usdPrice,
      tokenTwo: responseTwo.raw.usdPrice,
      ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
    }
  } catch (e) {
    console.error(e)
  }

  return Response.json(data)
}
