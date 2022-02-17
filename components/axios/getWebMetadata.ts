import axios from "axios";

interface urlMetadata {
  name: string;
  image: string;
}

const getWebMetadata = async (metadataURL: string): Promise<urlMetadata> => {
  // const regex = /^https:\/\//;
  // const url = metadataURL.replace(regex, "");
  const corsUrl = "https://noki-cors.herokuapp.com";
  const finalUrl = `${corsUrl}/${metadataURL}`;

  const response = await axios.get(finalUrl, {
    headers: {
      "x-requested-with": "AcadArena@1.0",
    },
  });

  const { data, status } = response;

  if (status === 200) {
    // console.log(data);
    return data;
  }

  return Promise.reject(response);
};

export default getWebMetadata;
