import Moralis from "moralis";

const FetchNFTs = async (address: string, chain?: any) => {
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
