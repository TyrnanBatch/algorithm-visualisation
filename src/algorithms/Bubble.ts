import {Algorithm} from './Algorithm';

export default class Bubble extends Algorithm {
    public static sort(array: number[]): number[] {
        while (!this.check(array)) {
            for (let i: number = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) { // Checks if elements need to be swapped
                    this.swap(array, i, i + 1);
                }
            }
        }
        return array;
    }
}
