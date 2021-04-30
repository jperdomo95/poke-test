import { HttpRequestParamsInterface } from './HttpRequestParamsInterface'

export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>
}