import axios from "./axios.js"
import {BASEURL} from "./constant.js"

export function reqHomeListByPage() {
  return axios({
    url: BASEURL+'/product/pagination',
    method: 'get',
    params: { size: 10, page: 1 },
  })
}

