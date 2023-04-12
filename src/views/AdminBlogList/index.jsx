import { Space, Table, Tag, Button, Pagination, Modal, message } from 'antd';
import { getBlogList, deleteBlog } from '../../api/login';
import { useEffect, useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;
export default function AdminBlogList() {
    let [blogList, setBlogList] = useState([])
    //当前选中的博客id
    let [blogId, setBlogId] = useState('')
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            width: 400
        },
        {
            title: '发布时间',
            dataIndex: 'timer',
            width: 200
        },
        {
            title: '分类',
            dataIndex: 'cate',
            width: 150,
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
                    <Button type='primary' onClick={()=>{
                        setBlogId(record.id)
                    }}>查看</Button>
                    <Button type='primary' danger onClick={() => {
                        showPropsConfirm(record.id)
                    }}>删除</Button>
                </Space>
            ),
        },
    ];
    //删除模态框
    const showPropsConfirm = (id) => {
        confirm({
            title: '提示',
            icon: <ExclamationCircleFilled />,
            content: '您真的要删除当前博客吗',
            okText: '是的',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                console.log('OK');
                delBlog(id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    //切换分页
    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };
    //删除博客
    const delBlog = async (id) => {
        let res = await deleteBlog({id})
        if(res.data.code === 200){
            message.success(res.data.msg)
            getblog()
        }else{
            message.error(res.data.msg)
        }
    }
    const getblog = async () => {
        let res = await getBlogList()
        console.log(res);
        res.data.data.bloglist.forEach((item, index) => {
            item.tag = item.tag.split(',')
        });
        setBlogList(res.data.data.bloglist)
    }

    useEffect(() => {
        getblog()
    }, [])

    return (
        <div>
            {
                blogList.length !== 0 && <Table columns={columns} dataSource={blogList} bordered={true} pagination={false} rowKey='id' />
            }
            <Pagination showQuickJumper defaultCurrent={1} total={blogList.length} pageSizeOptions={[5, 10, 20]} onChange={onChange} showSizeChanger style={{ marginTop: '20px' }} />
        </div>
    )
}
