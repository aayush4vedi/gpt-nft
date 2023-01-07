import { useStyle } from "../context/style"
import { useState, useEffect } from "react"

import Image from "next/image"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"

import logo from "@/assets/gpt-nft-marketplace-logo.svg"

const styleLight = {
    wrapper: `p-4 w-screen flex justify-between items-center backdrop-blur-sm bg-[#ffffff60]`,
    headerLogo: `flex w-1/4 items-center justify-start text-black text-xl font-lato font-bold text-gray-900`,
    changeThemeButton: `flex items-center justify-center text-slate-900 rounded-3xl mx-2 cursor-pointer text-slate-900 hover:text-slate-600 min-h-[3rem] min-w-[3rem] hover:transition duration-150 rounded-3xl hover:bg-indigo-200 hover:text-white stroke-1`,
}

const styleDark = {
    wrapper: `p-4 w-screen flex justify-between items-center backdrop-blur-sm bg-[#ffffff20] text-white`,
    headerLogo: `flex w-1/4 items-center justify-start text-black text-xl text-xl font-lato font-bold text-teal-400`,
    changeThemeButton: `flex items-center justify-center text-gray-200 rounded-3xl mx-2 cursor-pointer text-teal-400 hover:text-slate-600 min-h-[3rem] min-w-[3rem] hover:transition duration-150 rounded-3xl hover:bg-teal-900 hover:text-teal-500 stroke-1`,
}

const Header = () => {
    //can it's repition be removed?
    const { colorMode, toggleColorMode } = useStyle()
    const [style, setStyle] = useState(styleLight)
    useEffect(() => {
        if (colorMode === "light") {
            setStyle(styleLight)
        } else {
            setStyle(styleDark)
        }
    }, [colorMode])

    return (
        <div className={style.wrapper}>
            <div className={style.headerLogo}>
                <Image src={logo} alt="Gpt Nft Marketplace" height={40} width={40} />
                <h1 className="ml-4">GPT-astic NFTs</h1>
            </div>

            {/**============================= Search Bar ================== */}
            <div>
                {/* <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form> */}
            </div>

            {/**============================= Change theme button ================== */}
            <div className={`${style.changeThemeButton}`}>
                {colorMode === "light" ? (
                    <MdOutlineDarkMode size={25} onClick={() => toggleColorMode()} />
                ) : (
                    <MdOutlineLightMode size={25} onClick={() => toggleColorMode()} />
                )}
            </div>
        </div>
    )
}
export default Header
