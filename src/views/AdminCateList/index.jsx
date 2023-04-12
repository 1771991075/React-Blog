import React, { useEffect, useState } from 'react';
import { Input, Button, Table, message, Modal } from 'antd';
import { getCateList, deleteCate,addCate } from '../../api/login';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;
export default function AdminCateList() {
    let [cateList, setCateList] = useState([])
    let [cate,setCate] = useState('')

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: '类名',
            dataIndex: 'name',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Button type="primary" danger onClick={() => {
                    showPropsConfirm(record.id)
                }}>删除</Button>
            ),
        },
    ];

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = async () => {
        if(cate){
            let index = cateList.findIndex(item=>item.name === cate)
            if(index!==-1){
                message.error('该类名已存在')
            }else{
                let res = await addCate({name:cate})
                if(res.data.status === 200){
                    message.success(res.data.msg)
                    setCate('')
                    getCate()
                    setOpen(false);
                    return
                }
                message.error(res.data.msg)
            }
        }
        message.error('请输入类名')
    };
    const handleCancel = () => {
        setCate('')
        setOpen(false);
    };

    //删除模态框
    const showPropsConfirm = (id) => {
        confirm({
            title: '提示',
            icon: <ExclamationCircleFilled />,
            content: '您真的要删除当前分类吗',
            okText: '是的',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                delCate(id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    //删除分类
    const delCate = async (id) => {
        let res = await deleteCate({ id })
        console.log(res);
        if (res.data.status === 200) {
            message.success(res.data.msg)
            getCate()
            return
        }
        message.error(res.data.msg)
    }
    //获取分类列表
    const getCate = async () => {
        let res = await getCateList()
        setCateList(res.data.data.cateList)
    }

    useEffect(() => {
        getCate()
    }, [])

    return (
        <div>
            <div>
                <Input placeholder="请输入类别" style={{ width: '300px', margin: '0px 20px 20px 0px' }} />
                <Button type='primary' onClick={showModal}>添加分类</Button>
                <Modal
                    title="添加分类"
                    open={open}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText='确定添加'
                    cancelText='取消'
                >
                    <Input placeholder='请输入类别名称' value={cate} onChange={(e)=>{
                        setCate(e.target.value)
                    }}></Input>
                </Modal>
            </div>
            {
                cateList.length !== 0 && <Table columns={columns} dataSource={cateList} bordered={true} pagination={false} rowKey='id' />
            }
        </div>
    )
}
