import React, {useEffect, useRef, useState} from 'react';
import {Item} from "../core/types";
import {makeApiRequest} from "../core/api";
import List from "../components/smart/list";

const Homepage = () => {
    const [list, setList] = useState<Item[] | null>(null);
    const [count, setCount] = useState(0);

    const countChecks = (value: boolean) => value ?
        setCount(prevState => prevState + 1) : setCount(prevState => prevState - 1)

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    return (
        <div>
            <header>
                <h2>Items: {list?.length}</h2>
                <h3>Checked: {count}</h3>
            </header>
            {list && <List list={list?.slice(0, 50)} counter={countChecks}/>}
        </div>
    );
}

export default Homepage;