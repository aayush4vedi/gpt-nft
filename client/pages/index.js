import { useSearch } from "@/context/search"
import { useAuth } from "@/context/auth"

import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import FormPopup from "@/components/FormPopup"
import ImageGenerator from "../components/ImageGenerator"

import { getDefaultProvider } from "ethers"

import nftAbi from "../constants/GptNft.json"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import simpleStorageAbi from "../constants/SimpleStorage.json"
import networkMapping from "../constants/networkMapping.json"

import { ethers } from "ethers"
import { useEffect, useState } from "react"

const style = {
    wrapper: `h-100vh w-100vw select-none flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 via-sky-100 to-white dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-[#2c2203] dark:via-gray-900 dark:to-black`,
}

// const Home = () => {
//     const { search, onSearch } = useSearch()
//     const { currentAccount, connectWallet, hasMetamask, isConnected } = useAuth()


//     return (
//         <div className={style.wrapper}>
//             {/* <Header
//                 onSearch={onSearch}
//                 search={search}
//                 currentAccount={currentAccount}
//                 connectWallet={connectWallet}
//             />
//             <Main />
//             <Footer />
//             <FormPopup>
//                 <form>
//                     <input type="text" placeholder="Name" className="p-2 rounded" />
//                     <input type="email" placeholder="Email" className="p-2 rounded" />
//                     <button className="btn bg-yellow text-zinc-800 rounded">Submit</button>
//                 </form>
//             </FormPopup>
//             <ImageGenerator /> */}
//         </div>
//     )
// }

const Home = () => {
    const [isConnected, setIsConnected] = useState(false)
    const [hasMetamask, setHasMetamask] = useState(false)
    const [signer, setSigner] = useState(undefined)
    const [favoriteNumber, setFavoriteNumber] = useState(0)

    const chainString = "31337"
    const marketplaceAddress = networkMapping[chainString].NftMarketplace[0]
    const simpleStorageAddress = networkMapping[chainString].SimpleStorage[0]
//     const simpleStorageAbi = [
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_favoriteNumber",
//           "type": "uint256"
//         }
//       ],
//       "name": "addPerson",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "name": "nameToFavoriteNumber",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "people",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "favoriteNumber",
//           "type": "uint256"
//         },
//         {
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "retrieve",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_favoriteNumber",
//           "type": "uint256"
//         }
//       ],
//       "name": "store",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ]

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true)
        }
    })

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({ method: "eth_requestAccounts" })
                setIsConnected(true)
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                setSigner(provider.getSigner())
                console.log("signer: ", provider.getSigner())
            } catch (e) {
                console.log(e)
            }
        } else {
            setIsConnected(false)
        }
    }

    async function execute() {
        if (typeof window.ethereum !== "undefined") {
            const dummyAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
            console.log("execute >> signer: ", signer)
            const simpleStorageContract = new ethers.Contract(
                simpleStorageAddress,
                simpleStorageAbi,
                signer
            )

            const marketplaceAddressContract = new ethers.Contract(
                marketplaceAddress,
                nftMarketplaceAbi,
                signer
            )
            console.log(" ..... marketplaceAddressContract: ", marketplaceAddressContract)
            console.log(" ..... simpleStorageContract: ", simpleStorageContract)
            try {
                // const listings = await marketplaceAddressContract.getListing(dummyAddress, 1)
                // const tx = await marketplaceAddressyContract.getProceeds(currentAccount)
                const tx = await simpleStorageContract.store(42)
                console.log(" ----------->>> tx: ", tx)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Please install MetaMask#2")
        }
    }

    const retrieve = async () => {
        if (typeof window.ethereum !== "undefined") {
            const simpleStorageContract = new ethers.Contract(
                simpleStorageAddress,
                simpleStorageAbi,
                signer
            )
            try {
                const result = await simpleStorageContract.retrieve()
                console.log(" result : ", result)
                setFavoriteNumber(ethers.utils.formatEther(result))
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Please install MetaMask#3")
        }
    }

    return (
        <div>
            {hasMetamask ? (
                isConnected ? (
                    "Connected! "
                ) : (
                    <button onClick={() => connect()}>Connect</button>
                )
            ) : (
                "Please install metamask"
            )}

            {isConnected ? <button onClick={() => execute()}>Execute</button> : ""}
            {isConnected ? (
                favoriteNumber !== 0 ? (
                    <div>{favoriteNumber}</div>
                ) : (
                    <button onClick={() => retrieve()}>Retrieve</button>
                )
            ) : (
                ""
            )}
        </div>
    )
}

export default Home
