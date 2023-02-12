const { NFTStorage, File } = require("nft.storage")

const NEXT_PUBLIC_NFT_STORAGE_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY

/**
 * Reads an image file from `imagePath` and stores an NFT with the given name and description.
 * @param {string} imagePath the path to an image file
 * @param {string} name a name for the NFT
 * @param {string} description a text description for the NFT
 */
// async function storeNFT(imagePath, name, description) {
async function storeNFT() {
    const imageUrl =
        "https://ipfs.io/ipfs/bafybeibd3nuryjpflpvftsx5ps3d4rr4qjp63xtedtigtjfu7cgtj7o24e/headshot.png"
    const image = await fetch(imageUrl)
    const imageBuffer = await image.arrayBuffer()
    const blob = new Blob([new Uint8Array(imageBuffer)], { type: "image/png" })

    const nftstorage = new NFTStorage({ token: NEXT_PUBLIC_NFT_STORAGE_KEY })
    console.log(`Uploading test-image to IPFS!`)
    const response = await nftstorage.store({
        image: blob,
        name: "test-name",
        description: "test-description",
    })

    console.log(`Uploading DONE: response = ${response}`)
    return response
}

module.exports = {
    storeNFT,
}
