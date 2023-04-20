import { Space, Tag, Badge } from 'antd';
import { useEffect, useState } from 'react';
const tagsData = ['-01', '-02', '-03', '-04','-05','-06','-07','-08','-09','-10','-11','-12'];

export default function Tag1(props) {
    let [month,setMonth] = useState()
    useEffect(()=>{
        
    },[])
    return (
        <div>
            <Space size={[0, 10]} wrap>
                {
                    tagsData.map((tag,index) => (
                        (
                            <div key={index} style={{margin:'0px 30px'}}>
                                <Tag color="#1677ff" style={{borderRadius:'0px',cursor:'pointer'}}>{props.year}{tag}</Tag>
                                <Tag>2</Tag>
                            </div>
                        )
                    ))
                }
            </Space>
        </div>
    );
}
