import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import AddBlog from '../../component/AdminAddBlog/AddBlog';
import AddContent from '../../component/AdminAddBlog/AddContent';

const AdminAddBlog = () => {
    //传给子组件下一步回调
    const nextBtn = ()=>{
        next()
    }
    //传给子组件上一步回调
    const prevBtn = ()=>{
        prev()
    }
    const steps = [
        {
            title: '填写博客信息',
            content: <AddBlog nextBtn={nextBtn}></AddBlog>,
        },
        {
            title: '撰写博客',
            content: <div>
                <AddContent nextBtn={nextBtn} prevBtn={prevBtn}></AddContent>
            </div>,
        },
        {
            title: '发表博客',
            content: '',
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
        paddingTop: 30
    };

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('发表成功!')}>
                        完成
                    </Button>
                )}
            </div>
        </>
    );
};
export default AdminAddBlog;