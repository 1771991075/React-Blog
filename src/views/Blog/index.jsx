import { Col, Divider, Row } from 'antd';
import AllBlog from '../../component/Blog/AllBlog';
import AllCate from '../../component/Blog/AllCate';
import CateProgress from '../../component/Blog/Progress';

export default function Blog() {
    return (
        <div>
            <Divider orientation="left">Tag</Divider>
            <Row>
                <Col flex="0 1 300px">
                    <AllCate></AllCate>
                    <CateProgress></CateProgress>
                </Col>
                <Col flex="1 1 300px">
                    <AllBlog></AllBlog>
                </Col>
            </Row>
        </div>
    )
}
