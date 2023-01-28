import React, { useState } from "react"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative flex items-center">
            <button
                className={`${
                    isOpen ? "hidden" : "block"
                } p-2 rounded-md text-gray-500 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700`}
                onClick={toggleMenu}
            >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } absolute right-0 mt-2 py-2 w-48 rounded-md bg-white shadow-md`}
            >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                </a>
            </div>
        </div>
    )
}

export default HamburgerMenu
