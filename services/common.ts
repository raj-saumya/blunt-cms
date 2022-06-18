import Axios from "axios";
import type { AxiosResponse } from "axios";
import { Result } from "./interfaces";

const axiosInstance = Axios.create();

// axiosInstance.interceptors.response.use((response) => {
//   console.log("first log: ", response);
//   return response;
// });

export const crudGet = <T>(url: string): Promise<Result<T>> => {
  return axiosInstance
    .get(url)
    .then((resp: AxiosResponse<T>) => ({ payload: resp.data, isOk: true }))
    .catch(() => ({ payload: undefined, isOk: false }));
};

export const crudPost = <T>(
  url: string,
  payload: string
): Promise<Result<T>> => {
  return axiosInstance
    .post(url, payload, {
      headers: { "Content-Type": "application/json" },
    })
    .then((resp: AxiosResponse<T>) => ({ payload: resp.data, isOk: true }))
    .catch(() => ({ payload: undefined, isOk: false }));
};
