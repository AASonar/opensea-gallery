import { createContext } from "react";
import { NFTBaseType } from "../types/nftType";

interface NFTContextProps {
  nftBaseData?: NFTBaseType;
  setNftBaseData?(nftData: any): void;
}

export const NFTBaseContext = createContext<NFTContextProps>({});
