'use client'
import React, { useState } from 'react'
import Link from 'next/link'


function SlipEffect() {


    const [content, setContent] = useState(0)

    return (
        <div className='flex flex-col text-black'>
            <div className='inline-block mt-10  '>
                <span className={`${content == 0 ? 'opacity-100 ' : 'opacity-70'} pb-4 cursor-pointer hover:opacity-100 text-lg font-semibold mr-14  `} onClick={() => setContent(0)}>Mütaahhit</span>
                <span className={`${content == 1 ? 'opacity-100 ' : 'opacity-70'} pb-4 cursor-pointer hover:opacity-100 text-lg font-semibold mr-14 `} onClick={() => setContent(1)}>Mimarlık</span>
                <span className={`${content == 2 ? 'opacity-100 ' : 'opacity-70 '} pb-4 cursor-pointer hover:opacity-100 text-lg font-semibold`} onClick={() => setContent(2)}>İç Mimarlık</span>
            </div>
            <span className={`inline-block mt-5 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] h-[3.5px] bg-sky-500 w-4 transition ease-in-out duration-300
                    ${content == 0 && 'transform  w-[86px]'}
                    ${content == 1 && 'transform translate-x-[142px] w-[73px]'}
                    ${content == 2 && 'transform translate-x-[270px] w-[90px]'}`}>
            </span>
            <span className='shadow-[0px_2px_0px_0px_rgba(0,0,0,0.3)] h-[0.1px] w-full mb-10 opacity-70 '></span>
            <div>
                <p className={`${content == 0 ? 'flex' : 'hidden'}`}>
                    event - compiled client and server successfully in 254 ms (530 modules)
                    wait  - compiling...
                    event - compiled client and server successfully in 254 ms (530 modules)
                    wait  - compiling...
                    event - compiled client and server successfully in 254 ms (530 modules)
                    wait  - compiling...
                </p>
                <p className={`${content == 1 ? 'flex' : 'hidden'}`}>
                    Next.js 13 introduced new file conventions to easily create pages, shared layouts, and templates. This page will guide you through how to use these special files in your Next.js application.
                    Pages
                </p>
                <p className={`${content == 2 ? 'flex' : 'hidden'}`}>
                    A page is UI that is unique to a route. You can define pages by exporting a component from a page.js file. Use nested folders to define a route and a page.js file to make the route publicly accessible.
                </p>
            </div>
        </div >
    )
}

export default SlipEffect