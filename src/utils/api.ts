import Axios,{ AxiosError, AxiosInstance, AxiosRequestHeaders, AxiosResponse, Method } from "axios";

interface APIInterface {
  method: Method;
  url: string;
  headers?: AxiosRequestHeaders;
  data?: any;
}

export const axios: AxiosInstance = Axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
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
