import axios from "./axios.js"
import {BASEURL} from "./constant.js"
export function requestbyHomepage(){

    return axios({
        url:BASEURL+"/product/pagination",
        method:"get",
        params:{page:1,size:10}


    })
}