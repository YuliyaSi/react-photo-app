import React, {useContext} from 'react';
import {ContextProps, Item} from "../../../core/types";
import Checkbox from "../../atoms/checkbox";
import "../../../styles/organism/list/index.scss"
import DataItem from "../../molecules/data-item";
import {AppContext} from "../../../App";

const DataList = ({ list }: DataListProps) => {
    const { changeDataList } = useContext(AppContext) as ContextProps;
    return (
        <div className='list'>
            {list.map(elem =>
                <DataItem key={elem.id} {...elem}>
                    <Checkbox id={elem.id} onChange={changeDataList} value={elem.checkbox}/>
                </DataItem>)}
        </div>
    );
}

export default DataList;

interface DataListProps {
    list: Item[],
}
