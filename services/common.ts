import Axios from "axios";
import type { AxiosResponse } from "axios";
import { Result } from "./interfaces";
import { useStore } from "../store/loginStore";

const axiosInstance = Axios.create({
  baseURL: "http://192.168.0.107:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  //@ts-ignore
  config.headers["Authorization"] = `Bearer ${useStore.getState().$token}`;
  return config;
});

export const crudGet = <T>(url: string): Promise<Result<T>> => {
  return axiosInstance
    .get(url)
    .then((resp: AxiosResponse<T>) => ({ payload: resp.data, isOk: true }))
    .catch(() => ({ payload: undefined, isOk: false }));
};

export const crudPost = <T>(
  url: string,
  payload: string = ""
): Promise<Result<T>> => {
  return axiosInstance
    .post(url, payload)
    .then((resp: AxiosResponse<T>) => ({ payload: resp.data, isOk: true }))
    .catch(() => ({ payload: undefined, isOk: false }));
};
