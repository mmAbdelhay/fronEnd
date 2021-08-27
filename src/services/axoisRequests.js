import axios from "axios";
import { ServerIP } from "../config/config";

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
