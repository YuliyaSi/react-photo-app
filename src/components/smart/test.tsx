import React, {useEffect, useState} from 'react';
import {makeApiRequest} from "../../core/api";
import {Item} from "../../core/types";
import List from "./list";

const Test = () => {
    const [list, setList] = useState<Item[] | null>(null);

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    return (
        <>
            {list && <List list={list}/>}
        </>
    )
};

export default Test;