import { Space, Table, Tag, Button, Pagination } from 'antd';
import {getBlogList} from '../../api/login';
import { useEffect, useState } from 'react';
const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        width:400
    },
    {
        title: '发布时间',
        dataIndex: 'timer',
        width:200
    },
    {
        title: '分类',
        dataIndex: 'cate',
        width:150,
        render: (_, record) => (
            <Space size="middle">
                <Tag color='#1677ff'>{record.cate}</Tag>
            </Space>
        ),
    },
    {
        title: 'Tag',
        dataIndex: 'tag',
        render: (_, { tag }) => (
            <>
                {tag.map((tag) => {
                    let color = tag.length > 2 ? 'geekblue' : 'purple';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type='primary'>查看</Button>
                <Button type='primary' danger>删除</Button>
            </Space>
        ),
    },
];

export default function AdminBlogList() {
    let [blogList,setBlogList] = useState([])
    //切换分页
    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };
    const getblog = async()=>{
        let res = await getBlogList()
        console.log(res);
        res.data.data.bloglist.forEach((item,index) => {
            item.tag = item.tag.split(',')
        });
        setBlogList(res.data.data.bloglist)
    }

    useEffect(()=>{
        getblog()
    },[])

    return (
        <div>
            {
                blogList.length !== 0 && <Table columns={columns} dataSource={blogList} bordered={true} pagination={false} rowKey='id'/> 
            }
            <Pagination showQuickJumper defaultCurrent={1} total={blogList.length} pageSizeOptions={[5, 10, 20]} onChange={onChange} showSizeChanger style={{marginTop:'20px'}} />
        </div>
    )
}
