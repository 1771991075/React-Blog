import { Button, message, Steps, theme, Result } from 'antd';
import { useState, useRef } from 'react';
import AddBlog from '../../component/AdminAddBlog/AddBlog';
import AddContent from '../../component/AdminAddBlog/AddContent';
import moment from 'moment/moment';
import { nanoid } from 'nanoid';
import { setBlog } from '../../api/login';
import { useNavigate } from 'react-router-dom';

const AdminAddBlog = () => {
    let navigate = useNavigate()
    let [blogInfo, setBlogInfo] = useState(null)
    //商品富文本标签
    let contentRef = useRef();
    //传给子组件下一步回调
    const nextBtn = () => {
        next()
    }
    //收集博客数据
    const getBlogInfo = (value) => {
        setBlogInfo(value)
    }
    //保存博客
    const addBlogInfo = async () => {
        if (!contentRef.current.myEditor.txt.html()) {
            message.error('请输入正文')
            return
        }
        //博客信息
        let obj = blogInfo;
        obj.content = contentRef.current.myEditor.txt.html()
        //获取当前时间
        let time = Date.now()
        time = moment(time).format('YYYY-MM-DD HH:mm:ss')
        obj.time = time
        obj.id = nanoid()
        obj.star = 0
        //发送请求保存到数据库
        let res = await setBlog(obj)
        if (res.data.status === 200) {
            message.success(res.data.msg)
            next()
        }
    }
    const steps = [
        {
            title: '填写博客信息',
            content: <AddBlog nextBtn={nextBtn} getBlogInfo={getBlogInfo}></AddBlog>,
        },
        {
            title: '撰写博客',
            content: <div>
                <AddContent ref={contentRef} ></AddContent>
                <div>
                    <Button onClick={() => prev()} style={{ marginRight: '10px' }}>上一步</Button>
                    <Button type='primary' onClick={() => addBlogInfo()}>完成</Button>
                </div>
            </div>,
        },
        {
            title: '发表博客',
            content: <div>
                <Result
                    status="success"
                    title="恭喜您,博客发表成功!"
                    extra={[
                        <Button type="primary" key="console" onClick={()=>{
                            navigate('/admin/adminaddblog')
                        }}>
                            重新撰写
                        </Button>,
                        <Button key="buy" onClick={()=>{
                            navigate('/admin/adminbloglist')
                        }}>博客列表</Button>,
                    ]}
                />
            </div>,
        },
    ];
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        paddingTop: 30,
    };

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
        </>
    );
};
export default AdminAddBlog;