import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './index.css';
const { Header, Content, Footer } = Layout;
const Index = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header>
                <div className="logo">
                    
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    style={{marginLeft:'100px'}}
                    items={[
                        {
                            key:0,
                            label: `首页`,
                        },
                        {
                            key:1,
                            label: `博客`,
                        },
                        {
                            key:2,
                            label: `分类`,
                        },
                        {
                            key:3,
                            label: `反馈`,
                        },
                        {
                            key:4,
                            label: `关于`,
                        }
                    ]}
                />
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
                    Content
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default Index;