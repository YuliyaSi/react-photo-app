import React from 'react';
import {Data} from "../../../core/types";
import Checkbox from "../../atoms/checkbox";
import "../../../styles/organism/list/index.scss"
import DataItem from "../../molecules/data-item";

const DataList = ({ list, counter }: DataListProps) => {
    return (
        <div className='list'>
            {list.map(elem =>
                <DataItem key={elem.id} {...elem}>
                    <Checkbox onChange={counter}/>
                </DataItem>)}
        </div>
    );
}

export default DataList;

interface DataListProps {
    list: Data[],
    counter: (v: boolean) => void;
}
