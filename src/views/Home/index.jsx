import { Col, Row, Anchor } from 'antd';
import IndexBlog from '../../component/Home/IndexBlog';
import IndexUserInfo from '../../component/Home/IndexUserInfo';
import IndexCate from '../../component/Home/IndexCate';
import { DownCircleOutlined } from '@ant-design/icons';

function Home() {

    return (
        <div>
            <div className='homebgbtn' style={{ width: '100%', height: 'calc(100vh - 50px)'}}>
                {/* <Anchor
                    className='btmbtn'
                    affix={true}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    items={[
                        {
                            key: 'part-2',
                            href: '#con',
                            title: <DownCircleOutlined style={{ fontSize: '20px', color: 'white' }} />,
                        },
                    ]}
                /> */}
            </div>
            <Row>
                <Col id='con' flex="1 1 200px">
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

export default Home