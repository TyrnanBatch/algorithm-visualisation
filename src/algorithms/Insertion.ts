import { Algorithm } from './Algorithm';

export default class Insertion extends Algorithm {
    public static sort(array: number[]): number[][] {
        let data_history: number[][] = [];

        for (let i: number = 1; i < array.length; i++) {
            let current_element: number = array[i];
            let j: number = i - 1;

            while (j >= 0 && array[j] > current_element) {
                array[j + 1] = array[j];
                j--;
            }

            array[j + 1] = current_element;
            data_history.push([...array]);
        }

        return data_history;
    }
}