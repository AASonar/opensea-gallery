import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis";

function MyApp({ Component, pageProps }: AppProps) {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  Moralis.start({ serverUrl, appId });

  return (
    <MoralisProvider
      initializeOnMount={false}
      appId={`${process.env.NEXT_PUBLIC_APP_ID}`}
      serverUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}`}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
