import React, { useState } from "react"
import Card from "./Card"

const Gallery = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event) => {
        setIsChecked(event.target.checked)
    }
    return (
        <div className="relative min-h-screen w-full flex flex-col">
            <div className="">
                <div className="flex items-center py-2 text-xs text-zinc-800 dark:text-zinc-400">
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
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Gallery
