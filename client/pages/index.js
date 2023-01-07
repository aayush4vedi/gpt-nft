import Header from "@/components/Header"
import Main from "../components/Main"

const style = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen select-none flex flex-col justify-between`,
}

const Home = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <Main/>
            Hello!
        </div>
    )
}

export default Home
