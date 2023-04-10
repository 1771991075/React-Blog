import { Space, Table, Tag, Button, Pagination } from 'antd';
const columns = [
    {
        title: '标题',
        dataIndex: 'title',
    },
    {
        title: '发布时间',
        dataIndex: 'time',
    },
    {
        title: '分类',
        dataIndex: 'cate',
        render: (_, record) => (
            <Space size="middle">
                <Tag color='#1677ff'>{record.cate}</Tag>
            </Space>
        ),
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
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
let data = [
    {
        key: '1',
        title: 'John Brown',
        time: '1681133051159',
        cate: 'React',
        tags: ['nice', 'developer'],
    },
];

export default function AdminBlogList() {
    //切换分页
    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    return (
        <div>
            <Table columns={columns} dataSource={data} bordered={true} pagination={false} />
            <Pagination showQuickJumper defaultCurrent={1} total={20} pageSizeOptions={[5, 10, 20]} onChange={onChange} showSizeChanger style={{marginTop:'20px'}} />
        </div>
    )
}
