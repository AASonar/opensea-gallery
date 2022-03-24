import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AddressContext } from "../components/contexts/AddressContext";
import { useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import { supabaseClient } from "../components/dashboard/supabase/supabaseDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  config,
  IconDefinition,
  library,
} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { createTheme, ThemeProvider } from "@mui/material";
import { Button, Code, Title, MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  const [chain_id, setChain_id] = useState("1");
  const [address, setAddress] = useState("");
  const [isSubmitAddress, setIsSubmitAddress] = useState(false);

  config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
  library.add(
    fab as unknown as IconDefinition,
    fas as unknown as IconDefinition,
    far as unknown as IconDefinition
  );

  const theme = createTheme({
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            // Match 24px = 3 * 2 + 1.125 * 16
            boxSizing: "content-box",
            padding: 3,
            fontSize: "1.125rem",
          },
        },
      },
    },
  });

  const queryClient = new QueryClient();
  return (
    <MantineProvider
      theme={{
        fontFamily: "Work Sans, sans-serif",
        fontFamilyMonospace: "Work Sans, sans-serif",
        headings: { fontFamily: "Monda, sans-serif" },

        colors: {
          cyan: [
            "#E3FAFC",
            "#C5F6FA",
            "#99E9F2",
            "#66D9E8",
            "#3BC9DB",
            "#22B8CF",
            "#15AABF",
            "#74E0E6", //Primary
            "#0C8599",
            "#0B7285",
          ],
        },
        primaryColor: "cyan",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Provider value={supabaseClient}>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default MyApp;
