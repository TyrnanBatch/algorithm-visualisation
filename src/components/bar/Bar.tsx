import './Bar.css';
import React from 'react';

export default function Bar(props: any) {
    return (
        <>
            <div
                style={{width: `${props.width}px`, height: `${props.height}px`}}
            />
        </>
    )
}