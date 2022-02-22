import { createContext } from "react";

interface AddressContextProps {
  chain_id?: string;
  setChain_id?(chain_id: string): void;
  address?: string;
  setAddress?(address: string): void;
  isSubmitAddress?: boolean;
  setIsSubmitAddress?(isSubmitAddress: boolean): void;
}

export const AddressContext = createContext<AddressContextProps>({});
