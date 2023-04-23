import {  Layout, Menu, Button, FloatButton, Tag, Dropdown, Space, Typography } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LoginOutlined, BgColorsOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import bg1 from '../../assets/img/bg1.jpg';
import bg2 from '../../assets/img/bg2.jpg';
import bg3 from '../../assets/img/bg3.jpg';
import './index.css';
const { Header, Content, Footer } = Layout;
const Index = () => {
    const location = useLocation()
    const navigate = useNavigate()
    //三种主题
    const [bg,setBg] = useState(bg1)
    const items = [
        {
            key: 'bg1',
            label: 'style1',
        },
        {
            key: 'bg2',
            label: 'style2',
        },
        {
            key: 'bg3',
            label: 'style3',
        },
    ];
    //定义默认展开的一级菜单key列表
    let [defaultOpenKeys, setDefaultOpenKeys] = useState('/index/home');
    //改变主题

    useEffect(() => {
        // 获取当前路由路径
        let pathName = location.pathname
        setDefaultOpenKeys(pathName)
    }, [location])

    return (
        <Layout className="layout" style={{ backgroundImage: `url(${bg})`}}>
            <Header className='header1' >
                <div className="logo" >
                    <h1>My Blog</h1>
                </div>
                <Menu
                    className='indextab'
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
                            label: `归档`,
                        },
                        {
                            key: '/index/about',
                            label: `关于`,
                        }
                    ]}
                />
                <div className='goLogin'>
                    <Dropdown
                        placement='bottom'
                        menu={{
                            items,
                            selectable: true,
                            onClick: (e) => {
                                e.key === 'bg1' && setBg(bg1)
                                e.key === 'bg2' && setBg(bg2)
                                e.key === 'bg3' && setBg(bg3)
                            }
                        }}
                    >
                        <Typography.Link>
                            <Space className='stylebox'>
                                <BgColorsOutlined className='stylebtn' />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                    <Button
                        style={{ marginLeft: '20px' }}
                        type="primary"
                        shape='default'
                        icon={<LoginOutlined />}
                        onClick={() => navigate('/login')}
                    />
                </div>
            </Header>

            <Content style={{ padding: '0 50px' }} >
                <div className="site-layout-content">
                    <Outlet></Outlet>
                </div>
                <Footer className='footer'  style={{ textAlign: 'center'}}>
                    <div>
                        <p>My Blog ©2023 Created by Lzc</p>
                        <p className='indexbottom'>
                            <Tag bordered={false} className='tag1'>React</Tag>
                            <Tag bordered={false} className='tag1'>React-Router</Tag>
                            <Tag bordered={false} className='tag1'>Redux</Tag>
                            <Tag bordered={false} className='tag1'>Ant Design</Tag>
                            <Tag bordered={false} className='tag1'>Echarts</Tag>
                        </p>
                    </div>
                </Footer>
            </Content>

            <>
                <FloatButton.BackTop visibilityHeight={200}/>
            </>
        </Layout>
    );
};
export default Index;