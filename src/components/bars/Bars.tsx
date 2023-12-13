import './Bars.css'
import React from "react";
import Bar from '../bar/Bar'

let data: number[][] = [
    [20, 200],
    [12, 100]
]

export default class Bars extends React.Component {
    render() : JSX.Element {

        let bars  : JSX.Element = (
            <>
                {
                    data.map(function (val : number[]) {
                        return <Bar width={val[0]} height={val[1]}/>
                    })
                }
            </>
        )

        return (
            <div className={"main-container"}>
                {bars}
            </div>
        );
    }
}