import { Card,Button } from 'antd';
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
          marginRight: '20px'
        }}
      >
        {
          cateList.length !== 0 && cateList.map((item,index)=>{
            return <Button type='primary' key={index} style={{margin:'0px 10px 10px 0px',borderRadius:'0px'}}>{item}</Button>
          })
        }
      </Card>
    </div>
  )
}