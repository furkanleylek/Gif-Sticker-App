'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import ClientOnly from '../clientOnly';

function Trends({ allTrends }) {

  const router = useRouter()

  // /* to hydration error */
  // const [hasMounted, setHasMounted] = useState(false);
  // // Hooks
  // useEffect(() => {
  //   setHasMounted(true);
  // }, [])

  // // Render
  // if (!hasMounted) return null;
  // /* to hydration error */

  return (
    <ClientOnly>
      <div className='flex items-center justify-between flex-wrap px-2 w-[325px] sm:w-[480px] md:w-[540px] lg:w-[760px] xl:w-[920px]'>
        {allTrends.map((gif) => (
          <div key={gif.id} className="relative w-36 h-28 md:w-[170px] md:h-32 lg:w-60 lg:h-40 xl:w-[290px] xl:h-44 rounded-xl object-cover cursor-pointer hover:scale-125 hover:z-30 transition-transform duration-300" onClick={() => router.push(`/${gif.id}`)} >
            {gif.images.original.webp ?
              <Image src={`${gif.images.original.webp}`} fill alt={gif.title} className="rounded-[10px] py-2" placeholder="blur" blurDataURL={`${gif.images.original.webp}`} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
              :
              <Image src={`${gif.images.original.url}`} fill alt={gif.title} className="rounded-md py-2" placeholder="blur" blurDataURL={`${gif.images.original.webp}`} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
            }
          </div>
        ))}
      </div>
    </ClientOnly>
  )
}

export default Trends