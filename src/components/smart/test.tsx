import React, {useEffect, useState} from 'react';
import {makeApiRequest} from "../../core/api";
import {Item} from "../../core/types";
import Checkbox from "../ui/checkbox";

const Test = () => {
    const [list, setList] = useState<Item[] | null>(null);

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    return (
        <>
            <Checkbox/>
            {/*{list && list.map(item => <div key={item.id}>*/}
            {/*    <Checkbox/>*/}
            {/*    <h2>{item.title}</h2>*/}
            {/*    <div>*/}
            {/*        <img src={item.url} alt='item'/>*/}
            {/*    </div>*/}

            {/*</div>)}*/}
        </>
    )
};

export default Test;