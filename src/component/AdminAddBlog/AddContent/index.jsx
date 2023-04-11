import { useEffect, useImperativeHandle, useState } from 'react';
import E from 'wangeditor';
import { forwardRef } from 'react';

function AddContent(props, ref) {

    let [myEditor, setMyEditor] = useState();

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
        </div>
    )
}

export default forwardRef(AddContent)
