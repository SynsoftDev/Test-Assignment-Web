import axios from 'axios';
import * as config from '../app_config/index';

const requestObj =  axios.create({
  baseURL: config.apiCallBaseUrl,
  responseType: "json",
  headers : {"content-Type":"application/json"}
});

export function getApiCall(apiName: string , parameters: string) {
 return requestObj.get(`${apiName}?${parameters}`)
  .then(res => {
     return res.data;
  })
}

export function postApiCall(apiName: string , parameters: any) {
 return requestObj.post(`${apiName}`, parameters)
  .then(res => {
    return res.data;
    // console.log(res);
    // console.log(res.data);
  })
}
