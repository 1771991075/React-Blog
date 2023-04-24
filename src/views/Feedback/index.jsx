import { Col, Divider, Row, Timeline } from 'antd';
import Feed from '../../component/Feedback/Feed';
import IndexCalendar from '../../component/Home/Calendar';
import './index.css';
export default function Feedback() {
    return (
        <div>
            <Divider orientation="left">归档</Divider>
            <Row>
                <Col flex="0 1 300px" style={{marginRight:'30px'}}>
                    <IndexCalendar></IndexCalendar>
                </Col>
                <Col flex="1 1 300px" className='timeline1'>
                    <Timeline
                        items={[
                            {
                                children: <Feed year={2023}></Feed>,
                            },
                            {
                                children: <Feed year={2022}></Feed>,
                            },
                            {
                                children: <Feed year={2021}></Feed>,
                            },
                            {
                                children: <Feed year={2020}></Feed>,
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    )
}
