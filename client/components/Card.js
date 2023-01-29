import React from "react"
import Image from "next/image"

import imagePlaceholder from "@/assets/nft-image-placeholder.png"

import Button from "@/components/Button"

const Card = () => {
    return (
        <div className="relative rounded-3xl overflow-hidden cursor-pointer transition ease-in-out delay-50 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1 hover:scale-105 duration-300 bg-gradient-to-tl from-slate-200 via-sky-50 to-slate-50 hover:bg-white dark:bg-gradient-to-tl dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-600 dark:hover:bg-gradient-to-tl dark:hover:from-zinc-800 dark:hover:via-zinc-700 dark:hover:to-zinc-500">
            <img
                className="w-full h-50 object-cover"
                src="/assets/nft-image-placeholder.png"
                alt=""
            />
            <div className="px-6 py-2">
                <div className="font-medium text-md mb-2 text-dark-800 dark:text-gray-300"> First GPT NFT Ever</div>
                <p className="text-gray-500 text-xs">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
            </div>
            <div className="px-3 py-4 flex justify-between items-center">
                <Button btnColor={"yellow"} btnText={"Buy"} />
                <Button btnColor={"teal"} btnText={"Details"} />
            </div>
        </div>
    )
}

export default Card
