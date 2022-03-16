import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AddressContext } from "../components/contexts/AddressContext";
import { useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import { supabaseClient } from "../components/dashboard/supabase/supabaseDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

function MyApp({ Component, pageProps }: AppProps) {
  const [chain_id, setChain_id] = useState("1");
  const [address, setAddress] = useState("");
  const [isSubmitAddress, setIsSubmitAddress] = useState(false);

  config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
  library.add(fab, fas);

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
