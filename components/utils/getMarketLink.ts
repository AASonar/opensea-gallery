export interface MarketLinkProps {
  address: string;
  alias: string;
  tokenId: string;
}

export default function getMarketLink({
  address,
  alias,
  tokenId,
}: MarketLinkProps) {
  let finalUrl = "";

  if (alias === "hic et nunc NFTs") {
    finalUrl = `https://objkt.com/asset/hicetnunc/${tokenId}`;
    return finalUrl;
  }
  finalUrl = `https://objkt.com/asset/${address}/${tokenId}`;
  return finalUrl;
}
