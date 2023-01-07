import { useStyle } from "../context/style"
import { useState, useEffect } from "react"

const styleLight = {
    wrapper: `p-4 w-screen flex justify-between items-center`,
}

const styleDark = {
    wrapper: `p-4 w-screen flex justify-between items-center bg-[#28242B] text-white`,
}

const Main = () => {
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
            <h1>This is the Main</h1>
            <button onClick={() => toggleColorMode()}>Change Theme</button>
        </div>
    )
}

export default Main
