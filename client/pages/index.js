import Header from "@/components/Header"
import Main from "@/components/Main"

import { useSearch } from "@/context/search"
import { useAuth } from "@/context/auth"
import { usePage } from "@/context/page"
import HamburgerMenu from "../components/Hamburger"
import BlockHeader from "../components/BlockHeader"
import BlockRightBar from '../components/BlockRightBar';
import BlockMain from "../components/BlockMain"
import Footer from "../components/Footer"


const style = {
    // wrapper: `h-100vh w-100vw max-w-screen select-none flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 via-sky-100 to-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-zinc-800 dark:via-gray-900 dark:to-black`,
    // wrapper: `h-100vh w-100vw max-w-screen min-h-screen	select-none flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2c2203] via-gray-900 to-black`,
    wrapper: `h-100vh w-100vw select-none flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2c2203] via-gray-900 to-black`,
}
const Home = () => {
    const { search, onSearch } = useSearch()
    const { currentAccount, connectWallet } = useAuth()
    const { pageType, setPageType } = usePage()

    return (
        <div className={style.wrapper}>
            <BlockHeader />
            <BlockMain />
            <Footer/>
        </div>

        // <div className={style.wrapper}>
        //     {/* <Header
        //         onSearch={onSearch}
        //         search={search}
        //         currentAccount={currentAccount}
        //         connectWallet={connectWallet}
        //         setPageType={setPageType}
        //     /> */}
        //     <BlockHeader/>
        //     <Main pageType={pageType} />
        // </div>
    )
}

export default Home
