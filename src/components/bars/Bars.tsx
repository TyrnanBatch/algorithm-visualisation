import './Bars.css';
import React, { useState } from "react";
import Bar from '../bar/Bar';

export default function Bars(): React.ReactElement {
    let initialData: number[] = [
        100, 300, 450, 250, 100, 300, 350, 50, 150, 450
    ];

    let nextData: number[] = [
        450, 300, 150, 350, 300, 100, 250, 50, 450, 100
    ];

    const getGreatestValue = (): number => {
        let greatestValue: number = 0;
        for (let i: number = 0; i < initialData.length; i++) {
            if (initialData[i] > greatestValue) {
                greatestValue = initialData[i];
            }
        }
        return greatestValue;
    };

    const renderData = () => {
        return (
            initialData.map((val: number, index: number) => (
                <Bar key={index} width={100 / initialData.length} height={(val / getGreatestValue()) * 100} />
            ))
        );
    };

    const [bars, setBars] = useState(renderData);

    const handleButtonClick = () => {
        console.log(initialData, 3);
        initialData = nextData
        setBars(renderData);
        console.log(initialData, 4);
    };

    return (
        <>
            <button onClick={handleButtonClick} style={{ position: "absolute" }}>Update Data</button>
            <div className={"main-container"}>
                {bars}
            </div>
        </>
    );
};
