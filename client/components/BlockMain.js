import React, { useState } from "react"
import Head from "next/head"

import BlockRightBar from "./BlockRightBar"
import BlockHero from "./BlockHero"
import BlockGallery from "./BlockGallery"

const BlockMain = () => {
    return (
        <>
            <Head>
                <style>
                    {`
                    .overflow-y-auto::-webkit-scrollbar {
                        width: 0;
                        background-color: transparent;
                    }
                    `}
                </style>
            </Head>
            {/* <div className="relative h-screen w-full flex justify-between mb-20 "> */}
            <div className="flex justify-between pb-20 ">
                <div className="w-3/4 h-screen overflow-y-auto  md:w-3/4 scrollbar-hide">
                    <div>
                        <BlockHero />
                    </div>
                    <div className="px-2 pt-5">
                        <BlockGallery />
                    </div>
                </div>

                {/* =========================== account section - Rightbar or buttons =========================== */}
                <div className="w-1/4 h-screen hidden md:block">
                    <div className="h-screen">
                        <BlockRightBar />
                    </div>
                </div>

                <div className="fixed right-0 bottom-5 flex flex-col visible md:hidden">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2">
                        View Account
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2">
                        Mint NFT
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlockMain
