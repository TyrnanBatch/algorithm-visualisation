import './Bars.css';
import React, {useState} from "react";
import Bar from '../bar/Bar';
import Bogo from "../../algorithms/Bogo";

export default function Bars(): React.ReactElement {
    // Temporary data to test with as no input for data has been made
    let data: number[] = [
        367, 872, 654, 123, 409, 789, 234, 567, 890, 432, 678, 987, 321, 555, 876, 234, 456, 789, 100, 888
    ];

    // Gets the largest value in the given data
    const getGreatestValue = (): number => {
        let greatest_value: number = 0;
        for (let i: number = 0; i < data.length; i++) {
            if (data[i] > greatest_value) {
                greatest_value = data[i];
            }
        }
        return greatest_value;
    };

    // Renders given data into a JSX Component
    const renderData = () => {
        return (
            data.map((val: number, index: number) => (
                <Bar key={index} width={100 / data.length} height={(val / getGreatestValue()) * 100}/>
            ))
        );
    };

    const [bars, setBars] = useState(renderData);

    // Async function allowing a delay without halting the entire site
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Handles the click of a testing button
    const handleButtonClick = async () => {
        let sorted_data: number[][] = Bogo.sort(data);

        for (let i: number = 0; i < sorted_data.length; i++) {
            data = sorted_data[i];
            setBars(renderData);
            await delay(100);
        }
    };

    return (
        <>
            <button onClick={handleButtonClick} style={{position: "absolute"}}>Sort Data</button>
            <div className={"main-container"}>
                {bars}
            </div>
        </>
    );
};
