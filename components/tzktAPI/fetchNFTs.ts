import axios from "axios";

const FetchNFTs = async (address: string, metadata: boolean) => {
  const corsUrl = "https://noki-cors.herokuapp.com";
  //   const apiUrl = `https://api.tzkt.io/v1/accounts/${address}?metadata=${metadata}`;
  const apiUrl = `https://api.tzkt.io/v1/tokens/balances/?account=${address}`;

  const finalUrl = `${corsUrl}/${apiUrl}`;

  const response = await axios.get(finalUrl, {
    headers: {
      "x-requested-with": "AcadArena@1.0",
      SameSite: "None",
    },
  });

  const { data, status } = response;

  if (status === 200) {
    //console.log(data);
    return data;
  }

  return Promise.reject(response);
};

export default FetchNFTs;
