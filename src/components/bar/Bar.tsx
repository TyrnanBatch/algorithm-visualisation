import './Bar.css';
import React from 'react';

interface BarProps {
    height: string;
    width: string;
}

export default function Bar (props : BarProps) {
    return (
        <>
            <div
                style={{width: `${props.width}px`, height: `${props.height}px`}}
            />
        </>
    )
}