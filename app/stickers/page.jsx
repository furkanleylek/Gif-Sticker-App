import React from "react";
import Link from "next/link";
import SlipEffect from "@/components/slipEffect";
export default function Stickers() {
    return (
        <section className="">
            <h1>Stickers</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <SlipEffect />
        </section>
    );
}




