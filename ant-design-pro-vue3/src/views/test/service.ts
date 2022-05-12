// import useAxios from '@/hooks/useAxios'
import baseService from '@/utils/http/axios'

const baseURL = "http://localhost:8899/api/"

export const test: (para: any) => Promise<String> = async (param: any) => {
    const api = baseURL + `test`
    // const { service, loading, data } = useAxios()
    return await baseService.post(api, param)
    // return reactive([loading, data])
}
