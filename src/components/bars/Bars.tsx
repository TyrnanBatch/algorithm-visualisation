import './Bars.css'
import React from "react";
import Bar from '../bar/Bar'

let data: number[] = [
    0,0,0,100,0,100,0,0,0
];

export default function Bars(): React.ReactElement {

    const getGreatestValue = () => {
        let greatestValue: number = 0;
        for (let i: number = 0; i < data.length; i++) {
            if (data[i] > greatestValue) {
                greatestValue = data[i];
            }
        }
        console.log(greatestValue)
        return greatestValue;
    };

    let bars: React.ReactElement = (
        <>
            {
                data.map((val: number) => {
                    return <Bar width={100 / data.length} height={(val/getGreatestValue())*100}/>
                })
            }
        </>
    );

    return (
        <div className={"main-container"}>
            {bars}
        </div>
    );
};