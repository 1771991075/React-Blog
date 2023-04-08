import { useEffect, useState } from 'react';
import { GithubOutlined, TwitterOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import { Avatar, Card, Popover, Skeleton } from 'antd';
const { Meta } = Card;
// 微信/QQ二维码
const content = (
    <div>
        <p>Content</p>
    </div>
);

export default function IndexUserInfo() {
    //预加载个人信息卡片
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer1 = setTimeout(() => {
            setLoading(false)
        }, 3000)
        return () => {
            clearTimeout(timer1)
        }
    }, [loading])

    return (
        <div>
            {
                loading ? (
                    <Card
                        style={{ width: 300, marginBottom: '20px' }}
                        actions={[
                            <GithubOutlined style={{ fontSize: '20px' }} />,
                            <TwitterOutlined style={{ fontSize: '20px' }} />,
                            <Popover content={content}>
                                <WechatOutlined style={{ fontSize: '20px' }} />
                            </Popover>,
                            <Popover content={content}>
                                <QqOutlined style={{ fontSize: '20px' }} />
                            </Popover>
                        ]}
                    >
                        <Skeleton loading={loading} avatar active>
                            <Meta
                                avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                ) :
                    <Card
                        style={{ width: 300, marginBottom: '20px' }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <GithubOutlined style={{ fontSize: '20px' }} />,
                            <TwitterOutlined style={{ fontSize: '20px' }} />,
                            <Popover content={content}>
                                <WechatOutlined style={{ fontSize: '20px' }} />
                            </Popover>,
                            <Popover content={content}>
                                <QqOutlined style={{ fontSize: '20px' }} />
                            </Popover>
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title="个人博客"
                            description="This is my blog"
                        />
                    </Card>
            }
        </div>
    )
}

