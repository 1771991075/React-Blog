import { Card, Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import blogTitleActions from '../../../redux/actions/blogTitleActions';
export default function IndexBlog() {
  let disPatch = useDispatch();
  let blogTitle = useSelector((state) => {
    return state.blogTitleReducer.blogTitle
  })
  //切换分页
  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };
  useEffect(() => {
    //重置博客顶部tag
    disPatch(blogTitleActions({
      blogTitle: '所有博客'
    }))
  },[])
  return (
    <div style={{ paddingRight: '50px', boxSizing: 'border-box' }}>
      <Card title={blogTitle}>
        <Card type="inner" title="Inner Card title" extra={<span>More</span>}
          style={{ marginBottom: 16 }}>
          <p>Inner Card content</p>
          <span>2023-04-08 12:00:00</span>
        </Card>
        <Card type="inner" title="Inner Card title" extra={<span>More</span>}
          style={{ marginBottom: 16 }}>
          <p>Inner Card content</p>
          <span>2023-04-08 12:00:00</span>
        </Card>
        <Card type="inner" title="Inner Card title" extra={<span>More</span>}
          style={{ marginBottom: 16 }}>
          <p>Inner Card content</p>
          <span>2023-04-08 12:00:00</span>
        </Card>
        <Card type="inner" title="Inner Card title" extra={<span>More</span>}
          style={{ marginBottom: 16 }}>
          <p>Inner Card content</p>
          <span>2023-04-08 12:00:00</span>
        </Card>
        <Card type="inner" title="Inner Card title" extra={<span>More</span>}
          style={{ marginBottom: 16 }}>
          <p>Inner Card content</p>
          <span>2023-04-08 12:00:00</span>
        </Card>
        <Pagination showQuickJumper defaultCurrent={1} total={20} pageSizeOptions={[5, 10, 20]} onChange={onChange} showSizeChanger />
      </Card>
    </div>
  )
}
