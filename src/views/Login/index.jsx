import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button, message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
export default function Login() {
    let navigate = useNavigate();
    // 定义用户名状态
    let [username, setUsername] = useState('')
    // 定义用户密码状态
    let [password, setPassword] = useState('')
    const [messageApi, contextHolder] = message.useMessage();
    // 定义登录状态
    let [loading, setLoading] = useState(false)
    // 用户登录
    let login = async () => {
        if (!username || !password) {
            messageApi.warning("请您补充完整信息")
            return
        }
    }
    return (
        <div className='login'>
            {contextHolder}
            <div className='login-box'>
                <div className='login-title'>用户登录</div>
                <div className='username'>
                    <Input placeholder="请输入用户名" prefix={<UserOutlined />} value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                </div>
                <div className='password'>
                    <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <div>
                    <Button type="primary" block onClick={login} loading={loading}>{loading ? '登录中...' : '登录'}</Button>
                </div>
            </div>
        </div>
    )
}