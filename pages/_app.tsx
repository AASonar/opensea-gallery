import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AddressContext } from "../components/contexts/AddressContext";
import { useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import { supabaseClient } from "../components/dashboard/supabase/supabaseDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyApp({ Component, pageProps }: AppProps) {
  const [chain_id, setChain_id] = useState("1");
  const [address, setAddress] = useState("");
  const [isSubmitAddress, setIsSubmitAddress] = useState(false);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider value={supabaseClient}>
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
    </QueryClientProvider>
  );
}

export default MyApp;
