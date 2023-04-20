import React from 'react';
import Tag from '../Tag';

export default function Feed(props) {
    return (
        <div>
            <p>{props.year}年</p>
            <div style={{padding:'10px 0px 0px 0px'}}>
                <Tag year={props.year}></Tag>
            </div>
        </div>
    )
}
