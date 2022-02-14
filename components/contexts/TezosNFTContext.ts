import { createContext } from "react";
import { TezosNFTType } from "../types/tezos/tezosnftType";

interface TezosNFTContextProps {
  nftCards?: TezosNFTType;
  setNftCards?(nftCards: any): void;
}

export const TezosNFTContext = createContext<TezosNFTContextProps>({});
