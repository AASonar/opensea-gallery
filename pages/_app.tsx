import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AddressContext } from "../components/contexts/AddressContext";
import { useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";

const supabaseUrl = "https://wckwmmvmxkaspwquoaqf.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY ?? "";
const client = createClient(supabaseUrl, supabaseKey);

function MyApp({ Component, pageProps }: AppProps) {
  const [chain_id, setChain_id] = useState("1");
  const [address, setAddress] = useState("");
  const [isSubmitAddress, setIsSubmitAddress] = useState(false);

  return (
    <Provider value={client}>
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
    </Provider>
  );
}

export default MyApp;
