import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { NFTCardType } from "../types/nftCardType";

const FetchNFTs = async (address: string, chain?: any) => {
  //Moralis.start();

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  Moralis.start({ serverUrl, appId });

  const options = {
    address: address,
    chain: chain,
  };

  const response = await Moralis.Web3API.account.getNFTs(options);

  const { result, status } = response;

  if (status === "SYNCED") {
    //console.log(result);
    return result;
  }

  return Promise.reject(response);
};

export default FetchNFTs;
