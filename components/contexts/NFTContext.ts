import { createContext } from "react";
import { NFTCardDetails, NFTCardType } from "../types/nftCardType";
import { TezosNFTType } from "../types/tezos/tezosNFTType";

interface NFTContextProps {
  nftCardsData?: NFTCardType;
  setNftCardsData?(nftCards: any): void;
}

export const NFTContext = createContext<NFTContextProps>({});
