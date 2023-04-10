import axios from 'axios';
import store from '../redux';
import {message} from 'antd';
axios.defaults.baseURL = '/blog';
axios.defaults.timeout = 10000;

// 请求拦截
axios.interceptors.request.use((config)=>{
    //设置请求头
    let token = store.getState().userReducer.token
    config.headers.Authorization = token
    return config
})

//响应拦截
// axios.interceptors.response.use((res)=>{
//     if(res.data.meta.status === 401 || res.data.meta.status === 400){
//         window.location.href = '#/login'
//         message.error(res.data.meta.msg)
//         return
//     }
//     if(res.data.meta.status !== 200 && res.data.meta.status !== 201 && res.data.meta.status !== 204){
//         message.error(res.data.meta.msg)
//         return 
//     }
//     return res
// })

let http = (url,method,data=null,headers=null) =>{
    return axios({
        url,
        method,
        params:method==='get'? data : null,
        data:method==='post'? data : null,
        headers
    })
}

export default http;