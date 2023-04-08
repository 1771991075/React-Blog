import { Breadcrumb, Layout, Menu, theme, Button, Switch, FloatButton } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import './index.css';
const { Header, Content, Footer } = Layout;
const Index = () => {
    const location = useLocation()
    const navigate = useNavigate()
    //两种主题
    const [theme1, setTheme] = useState('dark');
    const dark = { background: '#001529', color: '#fff', transition: 'all 0.5s' }
    const light = { background: '#fff', color: '#000', transition: 'all 0.5s' }
    //定义默认展开的一级菜单key列表
    let [defaultOpenKeys, setDefaultOpenKeys] = useState('/index/home');
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    //改变主题
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    useEffect(() => {
        // 获取当前路由路径
        let pathName = location.pathname
        setDefaultOpenKeys(pathName)
    }, [location])

    return (
        <Layout className="layout">
            <Header className='header1' style={theme1 === 'dark' ? dark : light}>
                <div className="logo" style={theme1 === 'dark' ? dark : light}>
                    <h1>My Blog</h1>
                </div>
                <Menu
                    theme={theme1}
                    mode="horizontal"
                    selectedKeys={defaultOpenKeys}
                    style={{ marginLeft: '100px' }}
                    onClick={(obj) => {
                        navigate(obj.key)
                    }}
                    items={[
                        {
                            key: '/index/home',
                            label: `首页`,
                        },
                        {
                            key: '/index/blog',
                            label: `博客`,
                        },
                        {
                            key: '/index/cate',
                            label: `分类`,
                        },
                        {
                            key: '/index/feedback',
                            label: `反馈`,
                        },
                        {
                            key: '/index/about',
                            label: `关于`,
                        }
                    ]}
                />
                <div className='goLogin'>
                    <Switch checked={theme1 === 'dark'} onChange={changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
                    <Button
                        style={{ marginLeft: '20px' }}
                        type="primary"
                        shape='default'
                        icon={<LoginOutlined />}
                        onClick={() => navigate('/login')}
                    />
                </div>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Outlet></Outlet>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                My Blog ©2023 Created by Lzc
            </Footer>
            <>
                <FloatButton.Group
                    shape="circle"
                    style={{
                        right: 24,
                    }}
                >
                    <FloatButton.BackTop visibilityHeight={200} />
                </FloatButton.Group>
            </>
        </Layout>
    );
};
export default Index;