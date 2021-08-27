import { checkIfLoggedIn } from "./checkUserStatus";
import { ServerIP } from "../config/config";

const getToken = async () => {
  const token = await checkIfLoggedIn();
  return token ? token : null;
};

export const axiosGet = async (url) => {
  if (!(await getToken())) return false;

  try {
    const response = await axios.get(`${ServerIP}${url}`, {
      headers: {
        Authorization: "Token " + (await getToken()),
      },
    });
    return response ? response.data : false;
  } catch (err) {
    console.error(`axios request axiosGet ${err}`);
    return false;
  }
};

export const axiosPost = async (url, payload) => {
  if (!(await getToken())) return false;
  try {
    const response = await axios.post(`${ServerIP}${url}`, payload, {
      headers: { Authorization: "Token " + (await getToken()) },
    });
    return response ? response.data : false;
  } catch (err) {
    console.error(`axios request axiosPost ${err}`);
    return false;
  }
};

export const axiosPut = async (url, payload) => {
  if (!(await getToken())) return false;
  try {
    const response = await axios.put(`${ServerIP}${url}`, payload, {
      headers: { Authorization: "Token " + (await getToken()) },
    });
    return response ? response.data : false;
  } catch (err) {
    console.error(`axios request axiosPut ${err}`);
    return false;
  }
};

export const axiosDelete = async (url) => {
  if (!(await getToken())) return false;
  try {
    const response = await axios.post(`${ServerIP}${url}`, {
      headers: { Authorization: "Token " + (await getToken()) },
    });
    return response ? response.data : false;
  } catch (err) {
    console.error(`axios request axiosDelete ${err}`);
  }
};
