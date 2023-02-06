import { useState, useContext, createContext, useEffect } from "react"
// import { ethers } from "ethers"
import * as ethers from "ethers"
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

    const [balance, setBalance] = useState("") //TODO:
    const [isConnected, setIsConnected] = useState(false)
    const [hasMetamask, setHasMetamask] = useState(false)

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true)
        }
    })

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
                setIsConnected(true)
                const provider = new ethers.providers.Web3Provider(window.ethereum)

                // const provider = new ethers.providers.Web3Provider(window.ethereum)
                // console.log(">> provider : ", provider.toString())
                // const { chainId } = await provider.getNetwork()
                // const balance = await provider.getBalance("ethers.eth")
                // console.log(">> Balance of this account: ", balance)
                // setBalance(balance.toString())
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
        isConnected,
        currentAccount,
        connectWallet,
        hasMetamask,
    }
}
