import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";
import _ from "lodash";
import { baseApiURL } from "@/Core/constants/app.const";
import urlJoin from "url-join";

export interface IBaseApiResponse<T> {
  data: T;
}

export default class ApiProvider {
  api: AxiosInstance;
  cancelTokenSource: CancelTokenSource;

  constructor(config: AxiosRequestConfig) {
    this.api = axios.create({
      ...config,
      baseURL: urlJoin(`${baseApiURL}`, `${config.baseURL}`),
    });

    this.api.interceptors.request.use((req: any) => {
      return {
        ...req,
        headers: {
          ...req.headers,
          Accept: "*",
        },
      };
    });

    this.api.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      (error: any) => {
        if (_.isEmpty(error?.message)) {
        }
        return Promise.reject(error);
      }
    );
    this.cancelTokenSource = axios.CancelToken.source();
  }

  async request<T>(config: AxiosRequestConfig): Promise<any> {
    config.cancelToken = this.cancelTokenSource.token;
    return await this.api.request<IBaseApiResponse<T>>(config);
  }
}
