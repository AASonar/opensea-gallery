import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AddressContext } from "../components/contexts/AddressContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [chain_id, setChain_id] = useState("1");
  const [address, setAddress] = useState("");
  const [isSubmitAddress, setIsSubmitAddress] = useState(false);

  return (
    <AddressContext.Provider
      value={{
        chain_id,
        setChain_id,
        address,
        setAddress,
        isSubmitAddress,
        setIsSubmitAddress,
      }}
    >
      <Component {...pageProps} />
    </AddressContext.Provider>
  );
}

export default MyApp;
