const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("GPT NFT Unit Tests", () => {
          let gptNft, deployer
          const URI = "QmfVMAmNM1kDEBYrC2TPzQDoCRFH6F5tE1e9Mr4FkkR5Xr"
          const baseUri = "https://ipfs.io/ipfs/"

          beforeEach(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              await deployments.fixture(["gptnft"])
              gptNft = await ethers.getContract("GptNft")
          })

          describe("Constructor", () => {
              it("Initializes the NFT Correctly.", async () => {
                  const name = await gptNft.name()
                  const symbol = await gptNft.symbol()
                  const tokenCounter = await gptNft.getTokenCounter()
                  assert.equal(name, "GptNft")
                  assert.equal(symbol, "GFT")
                  assert.equal(tokenCounter.toString(), "0")
              })
          })

          describe("Mint NFT", () => {
              beforeEach(async () => {
                  const txResponse = await gptNft.mintNft(deployer.address, URI)
                  await txResponse.wait(1)
              })
              it("Allows users to mint an NFT, and updates token counter", async () => {
                  let tokenCounter = await gptNft.getTokenCounter()
                  assert.equal(tokenCounter.toString(), "1")

                  await gptNft.mintNft(deployer.address, URI)
                  tokenCounter = await gptNft.getTokenCounter()

                  assert.equal(tokenCounter.toString(), "2")
              })
              it("creates the NFT and emits an event", async () => {
                  await expect(gptNft.mintNft(deployer.address, URI)).to.emit(gptNft, "NftMinted")
              })
              it("returns token URI object as string", async () => {
                  const tokenUri = await gptNft.tokenURI(1)
                  assert.equal(tokenUri, baseUri + URI)
              })

              it("reverts with error - GptNftMetadata__URI_QueryFor_NonExistentToken when tokenId doesnt exist", async () => {
                  await expect(gptNft.tokenURI(42)).to.be.revertedWith(
                      "GptNftMetadata__URI_QueryFor_NonExistentToken"
                  )
              })
          })

          //TODO: figure out how to test internal functions
          //   describe("Burn", () => {
          //       beforeEach(async () => {
          //           const txResponse = await gptNft.mintNft(deployer.address, uri)
          //           await txResponse.wait(1)
          //       })
          //       it("Correctly burns a NFT", async () => {
          //           gptNft2 = await ethers.getContract("GptNft")
          //           const burn = await gptNft2._burn(1)
          //           console.log("burn: ", burn)
          //       })
          //       it("Throws when trying to burn a non-existent NFT", async () => {})
          //   })
      })
