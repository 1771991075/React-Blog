import {
    BarChartOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuOutlined,
    MenuUnfoldOutlined,
    TagOutlined,
    UserOutlined,
    TagsOutlined,
    FormOutlined,
    EditOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button, Breadcrumb, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import kun from '../../assets/kunkun.jpg';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
const { Header, Sider, Content } = Layout;
const Admin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    //左侧导航栏显示隐藏
    const [collapsed, setCollapsed] = useState(false);
    //定义默认展开的一级菜单key列表
    let [defaultOpenKeys, setDefaultOpenKeys] = useState('');
    // 定义默认选中的二级菜单key列表
    let [defaultSelectedKeys, setDefaultSelectedKeys] = useState('');
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // 退出对话框
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true) };
    //退出登录
    const handleOk = () => {
        localStorage.removeItem('token')
        setIsModalOpen(false)
        navigate('/login')
    };
    //取消退出登录
    const handleCancel = () => {
        setIsModalOpen(false)
    };
    // 退出登录
    let exit = () => {
        showModal()
    }

    useEffect(() => {
        // 获取当前二级路由路径
        let pathName = location.pathname.split('/')[2]
        setDefaultSelectedKeys([pathName])
        // 根据二级路由路径更新默认展开菜单
        switch (pathName) {
            case 'adminhome':
                setDefaultOpenKeys(["/adminindex"])
                break;
            case 'adminbloglist':
                setDefaultOpenKeys(["/adminblog"])
                break;
            case 'adminaddblog':
                setDefaultOpenKeys(["/adminblog"])
                break
            case 'adminchangeblog':
                setDefaultOpenKeys(["/adminblog"])
                break
            case 'admincatelist':
                setDefaultOpenKeys(["/admincate"])
                break;
            case 'adminecharts':
                setDefaultOpenKeys(["/admindata"])
                break;
            default:
                setDefaultOpenKeys(["/adminindex"])
        }
    }, [location])

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
                    openKeys={defaultOpenKeys}
                    selectedKeys={defaultSelectedKeys}
                    items={[
                        {
                            key: '/adminindex',
                            icon: <UserOutlined />,
                            label: '首页',
                            children: [
                                {
                                    key: 'adminhome',
                                    icon: <UnorderedListOutlined />,
                                    label: '用户信息',
                                },
                            ]
                        },
                        {
                            key: '/adminblog',
                            icon: <MenuOutlined />,
                            label: '博客管理',
                            children: [
                                {
                                    key: 'adminbloglist',
                                    icon: <UnorderedListOutlined />,
                                    label: '博客列表',
                                },
                                {
                                    key: 'adminaddblog',
                                    icon: <EditOutlined />,
                                    label: '撰写博客',
                                },
                                {
                                    key: 'adminchangeblog',
                                    icon: <FormOutlined />,
                                    label: '修改博客',
                                }
                            ]
                        },
                        {
                            key: '/admincate',
                            icon: <TagOutlined />,
                            label: '分类管理',
                            children: [
                                {
                                    key: 'admincatelist',
                                    icon: <TagsOutlined />,
                                    label: '分类列表',
                                },
                            ]
                        },
                        {
                            key: '/admindata',
                            icon: <BarChartOutlined />,
                            label: '数据统计',
                            children: [
                                {
                                    key: 'adminecharts',
                                    icon: <UnorderedListOutlined />,
                                    label: '数据可视化',
                                },
                            ]
                        }
                    ]}
                    onClick={(item) => {
                        // 跳转对应页面
                        navigate(item.key)
                        // 更新当前选中的二级菜单
                        setDefaultSelectedKeys([item.key])
                        // 更新当前展开的一级菜单
                        setDefaultOpenKeys([item.keyPath[1]])
                    }}
                    // 展开一级菜单时调用
                    onOpenChange={(openKeys) => {
                        if (openKeys.length === 1) {
                            setDefaultOpenKeys(openKeys)
                            return
                        }
                        setDefaultOpenKeys([openKeys[1]])
                    }}
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
                    <Button type="primary" onClick={exit}><LogoutOutlined style={{ fontSize: '16px' }} />退出</Button>
                    <Modal title="提示" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'确认'} cancelText={'取消'}>
                        <p>是否退出登录?</p>
                    </Modal>
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