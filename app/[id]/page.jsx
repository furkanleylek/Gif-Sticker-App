import React from 'react'
import { fetchSingleMeme } from '@/services';
import Image from 'next/image';
import { HiOutlineStar } from 'react-icons/hi2'
import Meta from '@/components/meta';

async function MemeId({ params }) {

    const gifDetail = await fetchSingleMeme("gifs", params.id);
    console.log(params.id)
    console.log(gifDetail.id)
    let GIFindex = gifDetail.title.indexOf("GIF")
    let title = gifDetail.title.slice(0, GIFindex)

    return (
        <div>
            <Meta title={gifDetail.title} description={"sa"} />
            <div className="main-area">
                <h1>{title}</h1>
                <Image width={200} height={200} key={gifDetail.id} alt={gifDetail.title} src={gifDetail.images.original.webp} />
                <HiOutlineStar className="id-icon" />
            </div>
            {
                <div className="">
                    <Image width={200} height={200} key={gifDetail.id} alt={gifDetail.title} src={gifDetail.images.original.webp} />
                </div>
            }
        </div>
    )
}

export default MemeId