import "../styles/globals.css"
import { ProvideStyle } from "../context/style"

//////////////////////////////////////////
/////////////// Color Palette
//
//
//
//
//
//
//
//
//////////////////////////////////////////

const MyApp = ({ Component, pageProps }) => {
    return (
        <ProvideStyle>
            <Component {...pageProps} />
        </ProvideStyle>
    )
}

export default MyApp
