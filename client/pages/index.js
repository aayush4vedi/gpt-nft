import { useSearch } from "@/context/search"
import { useAuth } from "@/context/auth"

import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import FormPopup from "@/components/FormPopup"


const style = {
    wrapper: `h-100vh w-100vw select-none flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 via-sky-100 to-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-[#2c2203] dark:via-gray-900 dark:to-black`,
}
const Home = () => {
    const { search, onSearch } = useSearch()
    const { currentAccount, connectWallet } = useAuth()

    return (
        <div className={style.wrapper}>
            <Header
                onSearch={onSearch}
                search={search}
                currentAccount={currentAccount}
                connectWallet={connectWallet}
            />
            <Main />
            <Footer />
            <FormPopup>
                <form>
                    <input type="text" placeholder="Name" className="p-2 rounded" />
                    <input type="email" placeholder="Email" className="p-2 rounded" />
                    <button className="btn bg-yellow text-zinc-800 rounded">Submit</button>
                </form>
            </FormPopup>
        </div>
    )
}

export default Home
