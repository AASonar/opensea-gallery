import { createContext } from "react";

interface AddressContextProps {
  address?: string;
  setAddress?(address: string): void;
  network?: string;
  setNetwork?(network: string): void;
  isSubmitAddress?: boolean;
  setIsSubmitAddress?(isSubmitAddress: boolean): void;
}

export const AddressContext = createContext<AddressContextProps>({});
