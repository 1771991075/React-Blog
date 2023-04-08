import React from 'react';
import { GithubOutlined, TwitterOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const IndexUserInfo = () => (
    <Card
        style={{ width: 300 , marginBottom:'20px'}}
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }
        actions={[
            <GithubOutlined style={{fontSize:'20px'}} />,
            <TwitterOutlined style={{fontSize:'20px'}}/>,
            <WechatOutlined style={{fontSize:'20px'}}/>,
            <QqOutlined style={{fontSize:'20px'}}/>
        ]}
    >
        <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="个人博客"
            description="This is my blog"
        />
    </Card>
);

export default IndexUserInfo;