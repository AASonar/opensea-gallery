import axios from "axios";

const getUserData = async (username: any) => {
  //const corsUrl = "https://noki-cors.herokuapp.com";
  const url = `http://localhost:8080/user`;
  //const url = `/user`;

  const finalUrl = `${url}/${username}`;

  const response = await axios.get(finalUrl, {
    headers: {},
  });

  const { data } = response;
  return data;
};

export default getUserData;
