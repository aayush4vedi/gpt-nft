import { useState, useEffect } from "react"
import Mint from "@/components/Mint"
import Buy from "@/components/Buy"
import Account from "@/components/Account"

const style = {
    wrapper: `position:absolute pt-200 mx-2 mt-[5rem] w-92 sm:w-screen flex items-center justify-center drop-shadow-3xl scroll-smooth scroll-mt-50`,
    // wrapper: `mx-2 mt-[5rem] w-92 sm:w-screen flex items-center justify-center drop-shadow-3xl scroll-smooth scroll-mt-50`,
    content: `bg-[#FFFFFF] dark:bg-[#000000] w-[30rem] rounded-3xl dark:border-2 dark:border-gray-800`,
}

const Main = (props) => {
    const { pageType } = props
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                {pageType === "mint" ? <Mint /> : pageType === "buy" ? <Buy /> : <Account />}
                {pageType === "mint" ? <Mint /> : pageType === "buy" ? <Buy /> : <Account />}
                {pageType === "mint" ? <Mint /> : pageType === "buy" ? <Buy /> : <Account />}
                {pageType === "mint" ? <Mint /> : pageType === "buy" ? <Buy /> : <Account />}
                {pageType === "mint" ? <Mint /> : pageType === "buy" ? <Buy /> : <Account />}
                {pageType === "mint" ? <Mint /> : pageType === "buy" ? <Buy /> : <Account />}
            </div>
        </div>
    )
}

export default Main
