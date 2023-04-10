import http from '../utils/http';

//用户登录
const userLogin = (data) =>http(`/login`,'post',data, {
    "Content-Type":"application/x-www-form-urlencoded"
})

export {
    userLogin
}