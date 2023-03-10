import React from 'react'
import HomeContainer from '@/containers/homeContainer'
import {
  fetchGifTrends,
  fetchStickerTrends,
} from "@/services/index"



async function HomePage({ params }) {
  const pagePromises = [
    fetchGifTrends(),
    fetchStickerTrends(),
  ]
  const [trendsGifs, trendsStickers] = await Promise.all(pagePromises)

  return (
    <main className='flex flex-col '>
      MAİN
      <HomeContainer trendsGifs={trendsGifs} trendsStickers={trendsStickers} />
    </main>
  )
}
export default HomePage


