
import axios from 'axios'
//import qs from 'qs'
//import Cookies from 'js-cookie'

axios.defaults.timeout = 60 * 1000;//接口超时60秒
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        // config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});
//code状态码200判断
axios.interceptors.response.use((res) =>{
    return Promise.resolve(res.data)
}, (error) => {
    // _.toast("网络异常");
    // console.warn("网络异常");
    return Promise.reject(error);
});

function fetch(options:any) {
    options = options || {}
    let pos = options.url.search(/^http/i)
    options.headers = options.headers || {};
    options.headers['HC-ACCESS-TOKEN'] = window.localStorage.getItem('hc_access_token')
    return axios(options)
}

export default fetch;



