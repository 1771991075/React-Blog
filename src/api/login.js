import http from '../utils/http';

//用户登录
const userLogin = (data) =>http(`/login`,'post',data, {
    "Content-Type":"application/x-www-form-urlencoded"
})
//保存博客
const setBlog = (data)=>http(`/addblog`,'post',data, { 
    "Content-Type":"application/x-www-form-urlencoded"
})
//获取博客列表
const getBlogList = () =>http(`/getbloglist`,'get')

export {
    userLogin,
    setBlog,
    getBlogList
}