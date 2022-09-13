import React, {useEffect, useState} from 'react';
import {makeApiRequest} from "../../core/api";
import {Item} from "../../core/types";

const Test = () => {
    const [list, setList] = useState<Item[] | null>(null);

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    return (
        <>
            {list && list.map(item => <div key={item.id}>
                <h2>{item.title}</h2>
                <div>
                    <img src={item.url} alt='item'/>
                    <img src={item.thumbnailUrl} alt="item"/>
                </div>

            </div>)}
        </>
    )
};

export default Test;