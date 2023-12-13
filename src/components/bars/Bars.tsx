import './Bars.css'
import React from "react";
import Bar from '../bar/Bar'

let data: number[] = [
    100, 150, 200, 100, 123, 400, 314, 54, 31, 1, 300
];

export default class Bars extends React.Component {

    getGreatestValue = () => {
        let greatestValue: number = 0;
        for (let i: number = 0; i < data.length; i++) {
            if (data[i] > greatestValue) {
                greatestValue = data[i];
            }
        }
        return greatestValue;
    }

    render() {
        let bars: JSX.Element = (
            <>
                {
                    data.map(function (val: number) {
                        return <Bar width={100 / data.length} height={val}/>
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
};