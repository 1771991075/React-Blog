import { Card, Tag } from 'antd';
import { useEffect, useState } from 'react';

export default function IndexCate() {
  let[cateList, setCateList] = useState([])

  useEffect(()=>{
    setCateList(['Linux','React','Vue','Webpack','JavaScript','TypeScript','Redux'])
  },[])

  return (
    <div>
      <Card
        style={{
          width: 300,
          marginBottom: '20px'
        }}
      >
        {
          cateList.length !== 0 && cateList.map((item,index)=>{
            return <Tag color="#1677ff" key={index} style={{marginBottom:'10px'}}>{item}</Tag>
          })
        }
      </Card>
    </div>
  )
}