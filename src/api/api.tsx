/**
* Consumed server apis
* Including top level dependencides
*/
import axios from 'axios';
import * as config from '../app_config/index';

// Initialise request object
const requestObj =  axios.create({
  baseURL: config.apiCallBaseUrl,
  responseType: "json",
  headers : {"content-Type":"application/json"}
});

// Common get api call...
export function getApiCall(apiName: string , parameters: string) {
 return requestObj.get(`${apiName}?${parameters}`)
  .then(res => {
     return res.data;
  })
}

// Common post api call...
export function postApiCall(apiName: string , parameters: any) {
 return requestObj.post(`${apiName}`, parameters)
  .then(res => {
    return res.data;
    // console.log(res);
    // console.log(res.data);
  })
}
