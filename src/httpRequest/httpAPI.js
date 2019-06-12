import instance from './axios'
export function postRequest(url,params) {
    return instance({
        url:url,
        method:'post',
        data:JSON.stringify(params)
    })
}
export function getRequest(url,params) {
    return instance({
        url:url,
        method:'get',
        data:params
    })
}