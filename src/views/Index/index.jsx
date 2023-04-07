import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import './index.css';
const { Header, Content, Footer } = Layout;
const Index = () => {
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header className='header1'>
                <div className="logo">

                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/index/home']}
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
                    <Button
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
        </Layout>
    );
};
export default Index;