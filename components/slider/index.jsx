import React from 'react'
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
register();

function Slider({ trendsGifs, trendsStickers }) {
    return (
        <swiper-container
            slides-per-view="3"
            navigation="true"
            pagination="true">
            <div className='flex'>
                {trendsGifs.map((gif) => (
                    <swiper-slide key={gif.id}>
                        <div key={gif.id} className="relative w-16 h-12 sm:w-24 sm:h-16 lg:w-40 lg:h-20 object-cover cursor-pointer hover:scale-125 hover:z-30 transition-transform duration-400">
                            {gif.images.original.webp ?
                                <Image src={`${gif.images.original.webp}`} fill alt={gif.title} className="rounded-md" placeholder="blur" blurDataURL={`${gif.images.original.webp}`} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
                                :
                                <Image src={`${gif.images.original.url}`} fill alt={gif.title} className="rounded-md" placeholder="blur" blurDataURL={`${gif.images.original.webp}`} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw" />
                            }
                        </div>
                    </swiper-slide>
                ))}
            </div>
        </swiper-container>
    );
}
export default Slider