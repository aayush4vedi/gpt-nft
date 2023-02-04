import { useState, useContext, createContext, useEffect } from "react"
import { ethers } from "ethers"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"

const authContext = createContext()

export function ProvideAuth({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const [currentAccount, setCurrentAccount] = useState("")

    /**
     * Prompts user to connect their MetaMask wallet
     * @param {*} metamask Injected MetaMask code from the browser
     */
    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                })

                setCurrentAccount(accounts[0])
            } catch (e) {
                console.log(e)
            }
        } else {
            return alert("Please install metamask ")
        }
    }

    //TODO: Do I really need this?
    /**
     * Checks if MetaMask is installed and an account is connected
     * @param {*} metamask Injected MetaMask code from the browser
     * @returns
     */
    const checkIfWalletIsConnected = async () => {
        try {
            if (typeof window.ethereum === "undefined") return alert("Please install metamask ")

            const accounts = await ethereum.request({ method: "eth_accounts" })

            if (accounts.length) {
                setCurrentAccount(accounts[0])
            }
        } catch (error) {
            console.error(error)
            throw new Error("No ethereum object.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    return {
        currentAccount,
        connectWallet,
    }
}
