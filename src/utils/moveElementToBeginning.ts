import { MovieType } from "../common/types";

export const moveElementToBeginning = (array: MovieType[], elementId: string) => {
    const index = array.findIndex(element => element.Id === elementId);

    if (index !== -1) {
        const element = array[index];

        if (element) {
            // Create a new array with the desired order
            array = [element, ...array.slice(0, index), ...array.slice(index + 1)];
        }
    }

    return array;
}
