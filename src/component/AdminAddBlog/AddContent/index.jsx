import { useEffect, useImperativeHandle, useState } from 'react';
import E from 'wangeditor';
import { forwardRef } from 'react';
import { Button } from 'antd';

function AddContent(props, ref) {

    let [myEditor, setMyEditor] = useState();

    const prev = ()=>{
        props.prevBtn()
    }
    const next = ()=>{
        props.nextBtn()
    }

    useEffect(() => {
        //创建wangeditor实例
        let myEditor = new E('#box');
        // 修改上船图片为base64
        myEditor.config.uploadImgShowBase64 = true;
        // 创建富文本编辑器
        myEditor.create();
        setMyEditor(myEditor)
    }, [])

    useImperativeHandle(ref, () => {
        return {
            myEditor: myEditor
        }
    })

    return (
        <div>
            <div id='box' style={{ width: '100%', minHeight: '400px' }}></div>
            <div>
                <Button onClick={prev} style={{ marginRight: '10px' }}>上一步</Button>
                <Button type='primary' onClick={next}>完成</Button>
            </div>
        </div>
    )
}

export default forwardRef(AddContent)
