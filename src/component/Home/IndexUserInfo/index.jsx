import { useEffect, useState } from 'react';
import { GithubOutlined, MailOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import { Avatar, Card, Popover, Skeleton, QRCode } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;
export default function IndexUserInfo() {
    //预加载个人信息卡片
    const [loading, setLoading] = useState(true);
    //微信/
    const [text, setText] = useState('https://ant.design/');
    //qq

    // 微信/QQ二维码
    const contentwx = (
        <div>
            <QRCode value={text || '-'} size={100} />
        </div>
    );
    const contentqq = (
        <div>
            <QRCode value={text || '-'} size={100} />
        </div>
    );

    useEffect(() => {
        let timer1 = setTimeout(() => {
            setLoading(false)
        }, 1000)
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
                            <MailOutlined style={{ fontSize: '20px' }} />,
                            <Popover content={contentwx}>
                                <WechatOutlined style={{ fontSize: '20px' }} />
                            </Popover>,
                            <Popover content={contentqq}>
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
                            <Link to="mailto:lvzicong123@outlook.com"><MailOutlined style={{ fontSize: '20px' }} /></Link>,
                            <Popover content={contentwx}>
                                <WechatOutlined style={{ fontSize: '20px' }} />
                            </Popover>,
                            <Popover content={contentqq}>
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

