import { createContext } from "react";
import {
  NFTBaseType,
  NFTDataType,
  NFTDataTypeExtended,
  NFTItemsType,
} from "../types/nftType";

interface NFTBaseProps {
  nftBaseData?: NFTBaseType;
  setNftBaseData?(nftBaseData: any): void;
  nftItemsData?: NFTItemsType[];
  setNftItemsData?(nftItemsData: any): void;
  nftData?: NFTDataTypeExtended[];
  setNftData?(nftData: any): void;
}

export const NFTBaseContext = createContext<NFTBaseProps>({});
