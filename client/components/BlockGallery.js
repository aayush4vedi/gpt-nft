import React, { useState } from "react"
import BlockCard from "./BlockCard"


const BlockGallery = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event) => {
        setIsChecked(event.target.checked)
    }
    return (
        <div className="relative min-h-screen w-full flex flex-col">
            <div className="">
                <div className="flex items-center py-2  text-zinc-400">
                    <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                    />
                    <label className="ml-2">Show only my items</label>
                </div>
            </div>
            {/* TODO: pass a list of cards as props and map them here */}
            <div className="grid grid-cols-4 gap-5">
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
                <BlockCard />
            </div>
        </div>
    )
}

export default BlockGallery
