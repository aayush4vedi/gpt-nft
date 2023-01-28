import React from "react"
import Image from "next/image"

import imagePlaceholder from "@/assets/nft-image-placeholder.png"

import Button from "./Button"

const BlockCard = () => {

    return (
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tl from-zinc-700 via-zinc-700 to-zinc-500">
            <img className="w-full h-50 object-cover" src="/assets/nft-image-placeholder.png" alt="" />
            <div className="px-6 py-2">
                <div className="font-medium text-md mb-2 text-gray-300"> First GPT NFT Ever</div>
                <p className="text-gray-500 text-xs">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
            </div>
            <div className="px-3 py-4 flex justify-between items-center">
                <Button btnColor={"yellow"} btnText={"Buy Now"} />
                <Button btnColor={"teal"} btnText={"Details"} />
            </div>
        </div>
    )
}

export default BlockCard
