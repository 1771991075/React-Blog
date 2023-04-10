import { Card,Button } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import blogTitleActions from '../../../redux/actions/blogTitleActions';

export default function IndexCate() {
  let disPatch = useDispatch();
  let[cateList, setCateList] = useState([])
  //点击标签修改状态
  let changeTag = (item)=>{
    disPatch(blogTitleActions({
      blogTitle:item
    }))
  }

  useEffect(()=>{
    setCateList(['Linux','React','Vue','Webpack','JavaScript','TypeScript','Redux'])
  },[])

  return (
    <div>
      <Card
        style={{
          width: 300,
          marginRight: '20px'
        }}
      >
        {
          cateList.length !== 0 && cateList.map((item,index)=>{
            return <Button onClick={()=>changeTag(item)} type='primary' key={index} style={{margin:'0px 10px 10px 0px',borderRadius:'0px'}}>{item}</Button>
          })
        }
      </Card>
    </div>
  )
}