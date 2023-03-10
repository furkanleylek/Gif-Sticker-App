'use client'
import React, { useState } from 'react'
import Trends from '@/components/trends'
function Categori({ trendsGifs, trendsStickers }) {

    const [content, setContent] = useState(0)

    return (
        <div className='flex flex-col text-black'>

            <div className='inline-block mt-10  '>
                <span className={`${content == 0 ? 'opacity-100 ' : 'opacity-70'} pb-4 cursor-pointer hover:opacity-100 text-lg font-semibold mr-14  `} onClick={() => setContent(0)}>GIFS</span>
                <span className={`${content == 1 ? 'opacity-100 ' : 'opacity-70'} pb-4 cursor-pointer hover:opacity-100 text-lg font-semibold mr-14 `} onClick={() => setContent(1)}>STICKERS</span>
            </div>
            <span className={`inline-block mt-5 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] h-[3.5px] bg-sky-500 w-4 transition ease-in-out duration-300
                    ${content == 0 && 'transform  w-[38px]'}
                    ${content == 1 && 'transform translate-x-[88px] w-[73px]'}`}>
            </span>
            <span className='shadow-[0px_2px_0px_0px_rgba(0,0,0,0.3)] h-[0.1px] w-full mb-10 opacity-70 '></span>
            <div>
                <p className={`${content == 0 ? 'flex' : 'hidden'}`}>
                    <Trends allTrends={trendsGifs} />
                </p>
                <p className={`${content == 1 ? 'flex' : 'hidden'}`}>
                    <Trends allTrends={trendsStickers} />
                </p>
            </div>
        </div >
    )
}

export default Categori