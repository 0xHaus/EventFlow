// mapping.ts - Example event handlers for The Graph

import { Minted, Listed, Purchased } from "../generated/EventFlowNFT/EventFlowNFT"
import { NFT, Listing } from "../generated/schema"

export function handleMinted(event: Minted): void {
  let nft = new NFT(event.params.tokenId.toString())
  nft.owner = event.params.owner
  nft.save()
}

export function handleListed(event: Listed): void {
  let listing = new Listing(event.params.tokenId.toString())
  listing.tokenId = event.params.tokenId
  listing.price = event.params.price
  listing.seller = event.params.seller
  listing.active = true
  listing.save()
}

export function handlePurchased(event: Purchased): void {
  // Mark listing as inactive
  let listing = Listing.load(event.params.tokenId.toString())
  if (listing) {
    listing.active = false
    listing.save()
  }

  // Update owner in NFT entity
  let nft = NFT.load(event.params.tokenId.toString())
  if (nft) {
    nft.owner = event.params.buyer
    nft.save()
  }
}
