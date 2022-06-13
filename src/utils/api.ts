import Axios, { AxiosError, AxiosInstance, AxiosRequestHeaders, AxiosResponse, Method } from "axios";

interface APIInterface {
  method: Method;
  url: string;
  headers?: AxiosRequestHeaders;
  data?: any;
}

export const axios: AxiosInstance = Axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  params: new URLSearchParams({ api_key: import.meta.env.VITE_MAPS_APIKEY }),
});

export const api = ({ method, url, headers, data }: APIInterface): Promise<AxiosResponse> => (
  new Promise((resolve, reject) => {
    axios({ method, url, headers, data, })
      .then((response: AxiosResponse) => {
        resolve(response);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  })
);
