import { Card, Pagination } from 'antd';

export default function IndexBlog() {
  //切换分页
  const onChange = (pageNumber) => {
      console.log('Page: ', pageNumber);
  };
  return (
    <div style={{paddingRight:'50px',boxSizing:'border-box'}}>
      <Card title="所有博客">
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
        <Pagination showQuickJumper defaultCurrent={1} total={20} pageSizeOptions={[5,10,20]} onChange={onChange} showSizeChanger/>
      </Card>
    </div>
  )
}
