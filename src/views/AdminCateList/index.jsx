import React from 'react';
import { Input, Button, Table } from 'antd';

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
    },
    {
        title: 'name',
        dataIndex: 'name',
        render: (_, record) => (
            <Button>{record.name}</Button>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Button type="primary" danger>删除</Button>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
];

export default function AdminCateList() {
    return (
        <div>
            <div>
                <Input placeholder="Basic usage" />
                <Button>添加分类</Button>
            </div>
            {
                <Table columns={columns} dataSource={data} bordered={true} pagination={false} rowKey='id' />
            }
        </div>
    )
}
