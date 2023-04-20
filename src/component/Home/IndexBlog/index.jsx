import { Card, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { getBlogList } from '../../../api/login';
import { Link } from 'react-router-dom';
import { FieldTimeOutlined, HeartTwoTone } from '@ant-design/icons';
import './index.css';

export default function IndexBlog() {
  let [blogList, setBlogList] = useState([])
  //获取博客列表
  let getBlog = async () => {
    let res = await getBlogList()
    console.log(res);
    setBlogList(res.data.data.bloglist.splice(0, 6))
  }
  useEffect(() => {
    getBlog()
  }, [])
  return (
    <div style={{ paddingRight: '50px', boxSizing: 'border-box' }}>
      <Card title="最新博客">
        {
          blogList.length === 0 ? <Skeleton /> : blogList.map(item => {
            return (
              <Card key={item.id} type="inner" title={item.title} extra={<Link>阅读</Link>}
                style={{ marginBottom: 16 }}>
                <p>{item.summary}</p>
                <div className='blogbtm'>
                  <div>
                    <span><FieldTimeOutlined style={{marginRight:'5px'}}/>{item.timer}</span>
                  </div>
                  <div>
                    <span><HeartTwoTone twoToneColor="#eb2f96" style={{marginRight:'5px'}}/>{item.star}</span>
                  </div>
                </div>
              </Card>
            )
          })
        }
      </Card>
    </div>
  )
}
