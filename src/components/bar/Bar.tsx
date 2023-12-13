import './Bar.css';
import React from 'react';

interface BarProps {
    height: number;
    width: number;
}

export default function Bar(props: BarProps): JSX.Element {
    return (
        <>
            <div
                style={{width: `${String(props.width)}%`, height: `${String(props.height)}px`}}
            />
        </>
    )
}