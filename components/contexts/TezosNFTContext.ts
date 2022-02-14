import { createContext } from "react";
import { TezosNFTType } from "../types/tezos/tezosNFTType";

interface TezosNFTContextProps {
  nftCards?: TezosNFTType;
  setNftCards?(nftCards: any): void;
}

export const TezosNFTContext = createContext<TezosNFTContextProps>({});
