import axios, {type AxiosResponse, type AxiosError, AxiosRequestConfig} from 'axios'

export const getData = async <T>(URL: string, axiosConfig: AxiosRequestConfig = {}): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.get(URL, axiosConfig)

    return res.data
  } catch (error) {
    throw axios.isAxiosError(error)
      ? new Error(`API request failed: ${(error as AxiosError).message}`)
      : error
  }
}
