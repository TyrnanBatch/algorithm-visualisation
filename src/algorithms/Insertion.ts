import { Algorithm } from './Algorithm';

export default class Insertion extends Algorithm {
    public static sort(array: number[]): number[][] {
        let dataHistory: number[][] = [];

        for (let i: number = 1; i < array.length; i++) {
            let currentElement: number = array[i];
            let j: number = i - 1;

            while (j >= 0 && array[j] > currentElement) {
                array[j + 1] = array[j];
                j--;
            }

            array[j + 1] = currentElement;
            dataHistory.push([...array]);
        }

        return dataHistory;
    }
}