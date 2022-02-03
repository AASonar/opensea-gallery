import Moralis from "moralis";
import { stringify } from "querystring";

const FetchTokenIdMetadata = async (
  address: string,
  token_id: string,
  chain?: any
) => {
  const options = {
    address: address,
    token_id: token_id,
    chain: chain,
  };

  const response = await Moralis.Web3API.token.getTokenIdMetadata(options);

  //   const { } = response;

  if (response) {
    console.log(response);
    return response;
  }

  return Promise.reject(response);
};

export default FetchTokenIdMetadata;
