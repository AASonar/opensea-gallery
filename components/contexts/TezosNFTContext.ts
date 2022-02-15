import { createContext } from "react";
import { TezosNFTType } from "../types/tezos/tezosNFTType";

interface TezosNFTContextProps {
  tezosNftCardsData?: TezosNFTType;
  setTezosNftCardsData?(nftCards: any): void;
}

export const TezosNFTContext = createContext<TezosNFTContextProps>({});
