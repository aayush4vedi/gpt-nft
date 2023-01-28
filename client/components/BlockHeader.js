import React, { useState, useEffect } from "react"
import Button from "./Button"

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import {AiOutlineCloseCircle} from "react-icons/ai"

const style ={
    wrapper: `sticky w-full top-0 left-0 z-50 text-white flex items-center justify-between p-4`,
    wrapper2: `sticky w-full top-0 left-0 z-50 text-white flex items-center justify-between p-4 backdrop-blur-sm bg-black`,
}

const BlockHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const theme = "dark"    //TODO:

    // handle sticky header scroll
    const [headerClass, setHeaderClass] = useState(style.wrapper)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setHeaderClass(style.wrapper2)
            } else {
                setHeaderClass(style.wrapper)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={headerClass}>
            <h1 className="text-lg leading-4 text-md md:text-xl font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-200">
                GPTastic NFTs
            </h1>
            <div className="hidden md:block">
                <div className="flex items-center">
                    <form className="flex relative min-h-[2.3rem]">
                        <div className="absolute inset-y-0 left-1 text-gray-300 flex items-center pl-3 pointer-events-none">
                            <BsSearch />
                        </div>
                        <input
                            type="search"
                            id="search"
                            // TODO:
                            // onChange={onSearch}
                            // value={search}
                            className="bg-gray-800 text-gray-300 p-1 rounded-3xl mr-20 w-96 block pl-10 text-xs font-mono"
                            placeholder="Search NFTs by keywords..."
                        />
                    </form>
                    <div className="flex items-center justify-center rounded-3xl mx-2 cursor-pointer text-slate-900 dark:text-amber-200 hover:text-slate-600 dark:hover:text-slate-600 h-[2.5rem] w-[2.5rem] hover:transition duration-150 hover:bg-[#ffffff50] hover:text-gray-500 stroke-1 dark:hover:bg-amber-200 dark:hover:text-black">
                        {theme === "light" ? (
                            <MdOutlineDarkMode size={25} onClick={() => toggleTheme()} />
                        ) : (
                            <MdOutlineLightMode size={25} onClick={() => toggleTheme()} />
                        )}
                    </div>
                    <Button btnColor={"blue"} btnText={"Button1"} />
                </div>
            </div>
            <button
                className="bg-gray-900 text-white p-2 rounded-lg md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 18H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 6H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 12H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                className={`fixed top-0 right-0 w-6/12 h-full bg-black text-white p-4 flex flex-col ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <div className="flex flex-col justify-between mb-4 items-center">
                    <div className="absolute right-1 flex items-center pr-3 ">
                        <AiOutlineCloseCircle size={35} onClick={() => setIsMenuOpen(false)} />
                    </div>
                    <div className="flex flex-col mt-10 items-end">
                        <div className="mb-5">
                            <Button btnColor={"yellow"} btnText={"Toggle Theme"} />
                        </div>
                        <Button btnColor={"blue"} btnText={"Connect Wallet"} />
                    </div>
                </div>
                <div></div>
            </div>
        </header>
    )
}

export default BlockHeader
