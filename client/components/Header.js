import { useStyle } from "../context/style"
import { useState, useEffect } from "react"

import { useTheme } from "next-themes"
import Image from "next/image"

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"

import logo from "@/assets/gpt-nft-marketplace-logo.svg"

const style = {
    wrapper: `px-4 w-screen flex flex-col items-center backdrop-blur-sm bg-[#ffffff60] dark:bg-[#ffffff08] dark:text-white`,
    heroContainer: `px-4 w-screen mt-2 flex flex-row justify-between`,
    navBarContainer: `w-screen flex flex-row justify-between mt-0 md:mt-5 invisible md:visible`,
    headerLogo: `flex items-center justify-start text-black text-md md:text-xl font-lato font-bold text-gray-900 dark:text-teal-400`,
    searchBar: `basis-2/3 invisible md:visible`,
    searchForm: `w-full`,
    searchIcon: `absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none`,
    searchInputBox: `block w-full p-3 pl-10 text-sm text-gray-900 rounded-3xl border border-gray-50 dark:border-gray-600 focus:outline-none focus:border-gray-300 dark:focus:border-gray-100 dark:bg-gray-800`,
    walletSection: `flex justify-end items-center`,
    userName: `text-xs h-full rounded-3xl flex items-center justify-center min-w-[6rem] min-h-[3rem] text-slate-600 dark:text-gray-50`,
    userAccountSection: `flex items-center justify-between bg-gray-100 dark:bg-teal-700 rounded-3xl mx-2 px-2 text-[0.9rem] font-semibold cursor-pointer text-slate-900 dark:text-gray-200 hover:text-slate-600 dark:hover:text-teal-400`,
    connectWalletBtn: `flex items-center justify-between bg-gray-100 dark:bg-teal-800 rounded-3xl mx-2 text-[0.9rem] font-semibold cursor-pointer text-slate-900 dark:text-gray-200 hover:text-slate-600 dark:hover:text-teal-400`,
    buttonAccent: `px-2 hover:text-white h-full rounded-3xl flex items-center justify-center min-w-[9rem] min-h-[3rem] hover:bg-gradient-to-r from-indigo-400 via-red-300 to-yellow-300 dark:hover:from-teal-800 dark:hover:via-teal-600 dark:hover:to-teal-700`,
    changeThemeButton: `flex items-center justify-center text-slate-900 rounded-3xl mx-2 cursor-pointer text-slate-900 dark:text-teal-400 hover:text-slate-600 dark:hover:text-slate-600 min-h-[3rem] min-w-[3rem] hover:transition duration-150 hover:bg-[#ffffff50] hover:text-gray-500 stroke-1 dark:hover:bg-teal-900 dark:hover:text-teal-500`,

    nav: `flex-auto flex justify-center items-center invisible md:visible`,
    navContainer: `flex text-xs text-gray-900 dark:text-teal-400`,
    navItem: `justify-center px-10 py-3 mt-4 min-w-[10rem] flex items-center font-semibold text-[0.9rem] cursor-pointer rounded-t-lg hover:bg-[#ffffff40] dark:hover:bg-[#00808009] hover:text-gray-700 dark:hover:text-teal-700`,
    activeNavItem: `bg-gray-50 dark:text-white dark:bg-teal-900 hover:bg-gray-50 dark:hover:bg-teal-900 hover:text-gray-900 dark:hover:text-teal-400`,
}

const Header = (props) => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")
    const { onSearch, search, hideSearch, currentAccount, connectWallet, setPageType, ...rest } =
        props

    //auth
    const [userName, setUserName] = useState()
    useEffect(() => {
        if (currentAccount) {
            setUserName(`${currentAccount.slice(0, 6)}...${currentAccount.slice(38)}`)
        }
    }, [currentAccount])

    //toggle
    const [selectedNav, setSelectedNav] = useState("mint")
    useEffect(() => {
        console.log("selectedNav: ", selectedNav)
    }, [selectedNav])

    return (
        <div className={style.wrapper}>
            <div className={style.heroContainer}>
                <div className={style.headerLogo}>
                    <Image src={logo} alt="GPTastic NFTs" height={40} width={40} />
                    <h1 className="ml-2 leading-4">GPTastic NFTs</h1>
                </div>

                {/**============================= Search Bar ================== */}
                {/* TODO: handle search */}
                <div className={style.searchBar}>
                    <form className={style.searchForm}>
                        <div class="relative">
                            <div className={style.searchIcon}>
                                <BsSearch />
                            </div>
                            <input
                                type="search"
                                id="search"
                                onChange={onSearch}
                                value={search}
                                className={style.searchInputBox}
                                placeholder="Search NFTs by keywords"
                                required
                            />
                        </div>
                    </form>
                </div>

                {/*======================== darkMode ==================================== */}
                <div className={`${style.changeThemeButton}`}>
                    {theme === "light" ? (
                        <MdOutlineDarkMode size={25} onClick={() => toggleTheme()} />
                    ) : (
                        <MdOutlineLightMode size={25} onClick={() => toggleTheme()} />
                    )}
                </div>

                {/*======================== wallet section ==================================== */}
                <div className={style.walletSection}>
                    {currentAccount ? (
                        <div>
                            <div className={`${style.userAccountSection}`}>
                                <Jazzicon diameter={30} seed={jsNumberForAddress(currentAccount)} />
                                <div className={style.userName}>{userName}</div>
                            </div>
                        </div>
                    ) : (
                        <div
                            onClick={() => connectWallet()}
                            className={`${style.connectWalletBtn}`}
                        >
                            <div className={style.buttonAccent}>Connect Wallet</div>
                        </div>
                    )}
                </div>
            </div>
            {/*======================== navbar section ==================================== */}
            <div className={style.navBarContainer}>
                <div className={style.nav}>
                    <div className={style.navContainer}>
                        <div
                            className={`${style.navItem} ${
                                selectedNav === "mint" && style.activeNavItem
                            }`}
                            onClick={() => {
                                setSelectedNav("mint")
                                setPageType("mint")
                            }}
                        >
                            MINT
                        </div>
                        <div
                            className={`${style.navItem} ${
                                selectedNav === "buy" && style.activeNavItem
                            }`}
                            onClick={() => {
                                setSelectedNav("buy")
                                setPageType("buy")
                            }}
                        >
                            BUY
                        </div>
                        <div
                            className={`${style.navItem} ${
                                selectedNav === "account" && style.activeNavItem
                            }`}
                            onClick={() => {
                                setSelectedNav("account")
                                setPageType("account")
                            }}
                        >
                            ACCOUNT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
