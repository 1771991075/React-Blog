import { Card } from 'antd';

export default function IndexBlog() {
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
      </Card>
    </div>
  )
}
