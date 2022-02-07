import axios from "axios";

const getWebMetadata = async (metadataURL: string) => {
  const response = await axios.get(metadataURL);

  const { data, status } = response;

  if (status === 200) {
    console.log(data);
    return data;
  }

  return Promise.reject(response);
};

export default getWebMetadata;
