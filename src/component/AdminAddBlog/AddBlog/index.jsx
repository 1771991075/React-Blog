import { Button, Form, Input } from 'antd';
import AddTag from '../AddTag';
import { useState } from 'react';

export default function AdminAddBlog(props) {
    let [tag,setTag] = useState([])
    const onFinish = (values) => {
        values.tag = tag.join(',');
        props.getBlogInfo(values)
        props.nextBtn()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    //获取标签数组
    const getTag = (tags) =>{
        setTag(tags)
    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="博客标题"
                    name="title"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="博客类别"
                    name="cate"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="博客概述"
                    name="summary"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="博客标签"
                    name="tag"
                >
                    <AddTag getTag={getTag} tag={tag}></AddTag>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        下一步
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}