import { createContext } from "react";
import { NFTBaseType, NFTDataType, NFTItemsType } from "../types/nftType";

interface NFTBaseProps {
  nftBaseData?: NFTBaseType;
  setNftBaseData?(nftBaseData: any): void;
  nftItemsData?: NFTItemsType[];
  setNftItemsData?(nftItemsData: any): void;
  nftData?: NFTDataType[];
  setNftData?(nftData: any): void;
}

export const NFTBaseContext = createContext<NFTBaseProps>({});
