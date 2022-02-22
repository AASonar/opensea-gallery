import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis";
import { AddressContext } from "../components/contexts/AddressContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  Moralis.start({ serverUrl, appId });
  const [chain_id, setChain_id] = useState("1");
  const [address, setAddress] = useState("");
  const [isSubmitAddress, setIsSubmitAddress] = useState(false);

  return (
    <MoralisProvider
      initializeOnMount={false}
      appId={`${process.env.NEXT_PUBLIC_APP_ID}`}
      serverUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}`}
    >
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
    </MoralisProvider>
  );
}

export default MyApp;
