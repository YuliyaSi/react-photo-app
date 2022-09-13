import React from 'react';
import {Item} from "../../../core/types";
import ListItem from "../../ui/listitem";
import Checkbox from "../../ui/checkbox";
import "../../../styles/list/index.scss"

const List = ({ list }: ListProps) => {
    return (
        <div className='list'>
            { list.slice(0, 50).map(elem => <ListItem {...elem}>
                <Checkbox/>
            </ListItem>)}
        </div>
    );
}

export default List;

interface ListProps {
    list: Item[],
}
