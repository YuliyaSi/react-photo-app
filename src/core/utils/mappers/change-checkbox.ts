import {Item} from "../../types";

export const changeCheckbox = (arr: Item[], id: number, value: boolean) => arr.map(item => {
    if ( item.id === id ) {
        return {
            ...item,
            checkbox: value
        }
    } else {
        return item
    }
})