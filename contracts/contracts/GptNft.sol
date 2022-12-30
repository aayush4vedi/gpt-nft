// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "base64-sol/base64.sol";

error GptNftMetadata__URI_QueryFor_NonExistentToken();

contract GptNft is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    event NftMinted(uint256 indexed tokenId, string indexed imageURI);

    Counters.Counter private _tokenIdCounter;

    mapping(uint256 => string) private s_tokenIdToTokenUri; //tokenId -> tokenURI
    mapping(uint256 => string) private s_tokenIdToTokenTitle; //tokenId -> title
    mapping(uint256 => uint256) private s_tokenIdToTokenPrice; //tokenId -> price

    constructor() ERC721("GptNft", "GFT") {}

    function mintItem(
        address to,
        string memory imageURI,
        string memory title,
        uint256 price
    ) public {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        s_tokenIdToTokenUri[tokenId] = imageURI;
        s_tokenIdToTokenTitle[tokenId] = title;
        s_tokenIdToTokenPrice[tokenId] = price;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, imageURI);
        emit NftMinted(tokenId, imageURI);
    }

    function tokenURI(
        uint256 tokenId
    )
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        if (!_exists(tokenId)) {
            revert GptNftMetadata__URI_QueryFor_NonExistentToken();
        }
        string memory imageURI = s_tokenIdToTokenUri[tokenId];
        string memory title = s_tokenIdToTokenTitle[tokenId];
        uint256 price = s_tokenIdToTokenPrice[tokenId];
        return
            string(
                abi.encodePacked(
                    _baseURI(),
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"title":"',
                                title,
                                '", "price":"',
                                price,
                                '","image":"',
                                imageURI,
                                '"}'
                            )
                        )
                    )
                )
            );
    }

    // The following functions are overrides required by Solidity.

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
}
