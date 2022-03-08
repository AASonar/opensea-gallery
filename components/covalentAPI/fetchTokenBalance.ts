import axios from "axios";

const FetchTokenBalance = async (
  chain_id: string,
  address: string,
  currency: string = "USD"
) => {
  //const corsUrl = "https://noki-cors.herokuapp.com";

  const apiUrl = `https://api.covalenthq.com/v1/${chain_id}/address/${address}/balances_v2`;
  const query = `?quote-currency=${currency}&format=JSON&nft=true&no-nft-fetch=false&key=${process.env.COVALENT_API_KEY}`;
  const finalUrl = `${apiUrl}/${query}`;

  const response = await axios.get(finalUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data, status } = response;
  const { data: data_inside } = data;

  if (status === 200) {
    //console.log(data_inside);
    return data_inside;
  }

  return Promise.reject(response);
};

export default FetchTokenBalance;
