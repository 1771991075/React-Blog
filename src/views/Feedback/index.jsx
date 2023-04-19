import { Col, Divider, Row, Timeline } from 'antd';
import Feed from '../../component/Feedback/Feed';
import IndexCalendar from '../../component/Home/Calendar';
export default function Feedback() {
    return (
        <div>
            <Divider orientation="left">归档</Divider>
            <Row>
                <Col flex="0 1 300px" style={{marginRight:'30px'}}>
                    <IndexCalendar></IndexCalendar>
                </Col>
                <Col flex="1 1 300px">
                    <Timeline
                        items={[
                            {
                                children: <Feed></Feed>,
                            },
                            {
                                children: <Feed></Feed>,
                            },
                            {
                                children: <Feed></Feed>,
                            },
                            {
                                children: <Feed></Feed>,
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    )
}
