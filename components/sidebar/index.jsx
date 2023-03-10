"use client"
import React, { useRef, useState } from "react";
import Link from 'next/link'
import { AiTwotoneHome, AiOutlineHome } from 'react-icons/ai'
import { HiOutlineGif, HiOutlineStar } from 'react-icons/hi2'
import { BsEmojiSunglasses, BsDownload } from 'react-icons/bs'
import { BiSticker } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'

function SideBar() {

    return (
        <section className="w-16 ">
            <div className="w-16 max-w-4 py-6 fixed h-full flex flex-col justify-between items-center bg-red-500 ">
                <div>
                    <Link href="/"><AiOutlineHome className="text-3xl text-white cursor-pointer" /></Link>
                </div>
                <div className="flex flex-col justify-evenly items-center h-full ">
                    <div className="flex flex-col justify-evenly items-center h-2/5 ">
                        <Link href="/"><ImSearch className="text-3xl text-white cursor-pointer" /></Link>
                        <Link href="/"><BsDownload className="text-3xl text-white cursor-pointer" /></Link>
                        <Link href="/"><AiTwotoneHome className="text-3xl text-white cursor-pointer" /></Link>
                    </div>
                    <div className="flex flex-col justify-evenly items-center h-2/5 ">
                        <Link href="/"><HiOutlineGif className="text-3xl text-white cursor-pointer " /></Link>
                        <Link href="/stickers"><BiSticker className="text-3xl text-white cursor-pointer" /></Link>
                        <Link href="/"><BsEmojiSunglasses className="text-3xl text-white cursor-pointer" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideBar