import axios from "axios";

const FetchTokenPrice = async (
  chain_id: string,
  address: string,
  token_id: string
) => {
  const corsUrl = "https://noki-cors.herokuapp.com";

  // const apiUrl = `https://api.covalenthq.com/v1/${chain_id}/address/${address}/balances_v2`;
  const apiUrl = `https://api.covalenthq.com/v1/${chain_id}/tokens/${address}/nft_transactions/${token_id}`;

  // const query = `?quote-currency=${currency}&format=JSON&nft=true&no-nft-fetch=false&key=${process.env.COVALENT_API_KEY}`;
  const query = `?key=${process.env.COVALENT_API_KEY}`;
  const finalUrl = `${apiUrl}/${query}`;

  const response = await axios.get(finalUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data: dataRoot, status } = response;

  const { data: dataInside } = dataRoot;

  const { items } = dataInside;

  if (dataRoot.error === false) {
    const transactions = items[0].nft_transactions[0];
    console.log(transactions);
    return transactions;
  }

  return Promise.reject(response);
};

export default FetchTokenPrice;
