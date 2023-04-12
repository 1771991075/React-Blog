import http from '../utils/http';

//用户登录
const userLogin = (data) => http(`/login`, 'post', data, {
    "Content-Type": "application/x-www-form-urlencoded"
})
//保存博客
const setBlog = (data) => http(`/addblog`, 'post', data, {
    "Content-Type": "application/x-www-form-urlencoded"
})
//获取博客列表
const getBlogList = () => http(`/getbloglist`, 'get')

//删除博客
const deleteBlog = (data) => http(`/delete/blog`, 'post', data, {
    "Content-Type": "application/x-www-form-urlencoded"
})

//获取分类列表
const getCateList = () => http(`/getcatelist`, 'get')
//添加分类
const addCate = (data) => http(`/add/cate`, 'post', data, {
    "Content-Type": "application/x-www-form-urlencoded"
})
//删除分类
const deleteCate = (data) => http(`/delete/cate`, 'post', data, {
    "Content-Type": "application/x-www-form-urlencoded"
})

export {
    userLogin,
    setBlog,
    getBlogList,
    deleteBlog,
    getCateList,
    deleteCate,
    addCate
}