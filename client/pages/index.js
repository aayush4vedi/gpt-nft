import Header from "@/components/Header"
import Main from "@/components/Main"

import { useSearch } from "@/context/search"
import { useAuth } from "@/context/auth"
import { usePage } from "@/context/page"

const style = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen max-w-screen select-none flex flex-col bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 dark:from-gray-800 dark:via-black dark:to-gray-800]`,
}

const Home = () => {
    const { search, onSearch } = useSearch()
    const { currentAccount, connectWallet } = useAuth()
    const { pageType, setPageType} = usePage()

    return (
        <div className={style.wrapper}>
            <Header
                onSearch={onSearch}
                search={search}
                currentAccount={currentAccount}
                connectWallet={connectWallet}
                setPageType={setPageType}
            />
            <Main pageType={pageType}/>
        </div>
    )
}

export default Home
