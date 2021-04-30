import { ApiClientInterface } from '@/models/api-client/ApiClientInterface'
import apiMockClient from './mock'
import apiLiveClient from './live'

let env

if (process.env && process.env.VUE_APP_API_CLIENT) {
  env = process.env.VUE_APP_API_CLIENT.trim()
}

console.log(process.env.VUE_APP_API_CLIENT)

let apiClient: ApiClientInterface
if (env === 'live') {
  apiClient = apiLiveClient
} else {
  apiClient = apiMockClient
}

export default apiClient
