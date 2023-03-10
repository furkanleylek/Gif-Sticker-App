import React from 'react'
import Categori from '@/components/home/categories'

function HomeContainer({ trendsGifs, trendsStickers }) {
    return (
        <div className=''>
            <Categori trendsGifs={trendsGifs} trendsStickers={trendsStickers} />
        </div>
    )
}

export default HomeContainer