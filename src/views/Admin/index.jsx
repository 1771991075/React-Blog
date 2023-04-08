import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button, Breadcrumb } from 'antd';
import React, { useState } from 'react';
import kun from '../../assets/kunkun.jpg';
import { Outlet } from 'react-router-dom';
import './index.css';
const { Header, Sider, Content } = Layout;
const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100vh', position: 'sticky', top: '0px' }}>
                <div className="logo1">
                    <img src={kun} alt="" />
                    <p>欢迎回来</p>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: '0 20px', background: colorBgContainer }}>
                    {
                        collapsed && <MenuUnfoldOutlined style={{ fontSize: '20px' }} onClick={() => setCollapsed(!collapsed)} />
                    }
                    {
                        !collapsed && <MenuFoldOutlined style={{ fontSize: '20px' }} onClick={() => setCollapsed(!collapsed)} />
                    }
                    <Button type="primary">退出</Button>
                </Header>
                <Breadcrumb style={{ padding: '10px 20px' }} />
                <Content
                    style={{
                        margin: '0px 16px 24px 16px',
                        padding: 24,
                        minHeight: 280,
                        minWidth: 1000,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default Admin;