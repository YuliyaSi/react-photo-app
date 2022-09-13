import React from 'react';
import {Item} from "../../core/types";
import ListItem from "../listitem";
import Checkbox from "../checkbox";
import "../../styles/list/index.scss"

const List = ({list, counter}: ListProps) => {
    return (
        <div className='list'>
            {list.map(elem =>
                <ListItem key={elem.id} {...elem}>
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
