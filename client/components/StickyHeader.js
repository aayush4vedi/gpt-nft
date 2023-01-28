import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

function StickyHeader() {
    const [headerClass, setHeaderClass] = useState("bg-white")
    const isMobile = false

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHeaderClass("bg-gray-900")
            } else {
                setHeaderClass("bg-white")
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`fixed w-full top-0 left-0 z-50 ${headerClass}`}>
            <div className={`container ${isMobile ? "mx-auto p-4" : "mx-auto p-8"}`}>
                <h1 className="text-xl font-bold">Sticky Header</h1>
            </div>
        </header>
    )
}

export default StickyHeader
