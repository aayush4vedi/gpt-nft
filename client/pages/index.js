import { useStyle } from "../context/style"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Main from "@/components/Main"

const styleLight = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen select-none flex flex-col bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100`,
}

const styleDark = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen select-none flex flex-col bg-gradient-to-l from-gray-800 via-black to-gray-800`,
}

const Home = () => {
    const { colorMode } = useStyle()
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
            <Header />
            {/* <Main /> */}
        </div>
    )
}

export default Home
