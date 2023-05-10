import ApiProvider from "./APIProvider";
import { AxiosRequestConfig } from "axios";
import { HttpMethod } from "./HttpMethod";

export default class ApiService {
  provider: ApiProvider;

  constructor(config: AxiosRequestConfig) {
    this.provider = new ApiProvider(config);
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.GET;
    return this.provider.request({ method, url, ...config });
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.DELETE;
    return this.provider.request({ method, url, ...config });
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.POST;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.PUT;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }

  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.PATCH;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }
}
