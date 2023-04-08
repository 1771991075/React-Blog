import { Card } from 'antd';

export default function IndexBlog() {
  return (
    <div>
      <Card title="最新博客">
        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>} 
          style={{ marginBottom: 16 }}>
          <p>Inner Card content</p>
          <span>2023-04-08 12:00:00</span>
        </Card>
        <Card
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          <p>Inner Card content</p>
          <span>2023-04-08 12:00:00</span>
        </Card>
      </Card>
    </div>
  )
}
