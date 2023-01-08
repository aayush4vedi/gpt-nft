import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { ProvideSearch } from "@/context/search"
import { ProvideAuth } from "@/context/auth"
import { ProvidePage } from "@/context/page"

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
        <ProvideAuth>
            <ThemeProvider attribute="class">
                <ProvideSearch>
                    <ProvidePage>
                        <Component {...pageProps} />
                    </ProvidePage>
                </ProvideSearch>
            </ThemeProvider>
        </ProvideAuth>
    )
}

export default MyApp
