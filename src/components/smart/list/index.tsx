import React from 'react';
import {Item} from "../../../core/types";
import ListItem from "../../ui/listitem";
import Checkbox from "../../ui/checkbox";
import "../../../styles/list/index.scss"

const List = ({ list, counter }: ListProps) => {
    return (
        <div className='list'>
            { list.map(elem => <ListItem {...elem}>
                <Checkbox onChange={counter}/>
            </ListItem>)}
        </div>
    );
}

export default List;

interface ListProps {
    list: Item[],
    counter: (v: boolean) => void;
}
