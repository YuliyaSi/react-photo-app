import {Item} from "../../types";

export const countChecked = (arr: Item[]) => arr!.map(elem => elem.checkbox).filter(item => item).length;
