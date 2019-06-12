import axios from 'axios';
const instance = axios.create({
    baseURL:'https://www.easy-mock.com/mock/5c0727bd3280fc0aefcf3280',
    timeout:10000
});
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
instance.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
instance.interceptors.request.use(function(config){
    //在发送请求之前做某事
    return config;
},function(error){
    //请求错误时做些事
    return Promise.reject(error);
});
instance.interceptors.response.use(function(response){
    //对响应数据做些事
    if(response.status===200&&response.data.code===200){
        return response.data;
    }
    
},function(error){
    //请求错误时做些事
    return Promise.reject(error);
});
export default instance;