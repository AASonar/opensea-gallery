import { createContext } from "react";
import { NFTCardDetails, NFTCardType } from "../types/nftCardType";

interface NFTContextProps {
  nftCards?: NFTCardType;
  setNftCards?(nftCards: any): void;
}

export const NFTContext = createContext<NFTContextProps>({});
