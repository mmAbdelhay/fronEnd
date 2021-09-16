import axios from "axios";
import { ServerIP } from "../config/config";
import { checkIfLoggedIn } from "./checkIfLoggedIn";

const Authorization = {
  headers: {
    Authorization: "Token " + checkIfLoggedIn(),
  },
};

export const registerAxios = async (payload) => {
  try {
    const response = await axios.post(`${ServerIP}/auth/register`, payload);
    return response ? [true, response.data] : false;
  } catch (err) {
    console.log(`register error: ${err.response}`);
    return [false, err.response];
  }
};

export const loginAxios = async (payload) => {
  try {
    const response = await axios.post(`${ServerIP}/auth/login`, payload);
    return response ? [true, response.data] : false;
  } catch (err) {
    console.log(`login error: ${err.response}`);
    return [false, err.response];
  }
};

export const axiosRequests = async (type, url, payload = null) => {
  try {
    let response;
    if (type === "post") {
      response = await axios.post(`${ServerIP}${url}`, payload, Authorization);
    } else if (type === "get") {
      response = await axios.get(`${ServerIP}${url}`, Authorization);
    } else if (type === "put") {
      response = await axios.put(`${ServerIP}${url}`, payload, Authorization);
    } else if (type === "delete") {
      response = await axios.delete(`${ServerIP}${url}`, Authorization);
    }
    return response ? [true, response.data] : false;
  } catch (err) {
    console.log(`login error: ${err.response}`);
    return [false, err.response];
  }
};
