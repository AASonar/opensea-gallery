import axios from "axios";

const FetchTokenPriceTest = async (
  chain_id: string,
  address: string,
  token_id: string
) => {
  const corsUrl = "https://noki-cors.herokuapp.com";

  // const apiUrl = `https://api.covalenthq.com/v1/${chain_id}/address/${address}/balances_v2`;
  const apiUrl = `https://api.covalenthq.com/v1/${chain_id}/tokens/${address}/nft_metadata/${token_id}`;

  // const query = `?quote-currency=${currency}&format=JSON&nft=true&no-nft-fetch=false&key=${process.env.COVALENT_API_KEY}`;
  const query = `?key=${process.env.COVALENT_API_KEY}`;
  const finalUrl = `${apiUrl}/${query}`;

  const response = await axios.get(finalUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data, status } = response;

  const { data: data2 } = data;

  const { items: data_inside } = data2;

  if (data.error === false) {
    console.log(data_inside);
    return data_inside;
  }

  return Promise.reject(response);
};

export default FetchTokenPriceTest;
