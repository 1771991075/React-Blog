import { Col, Divider, Row } from 'antd';
import IndexBlog from '../../component/Home/IndexBlog';
import IndexUserInfo from '../../component/Home/IndexUserInfo';
import IndexCate from '../../component/Home/IndexCate';

export default function Home() {
    return (
        <div>
            <Divider orientation="left">Raw flex style</Divider>
            <Row>
                <Col flex="1 1 200px">
                    <IndexBlog></IndexBlog>
                </Col>
                <Col flex="0 1 300px">
                    <IndexUserInfo></IndexUserInfo>
                    <IndexCate></IndexCate>
                </Col>
            </Row>
        </div>
    )
}
