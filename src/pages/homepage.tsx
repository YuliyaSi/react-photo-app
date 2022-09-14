import React, { useState } from 'react';
import {Item} from "../core/types";
import "../styles/homepage/index.scss"
import Paginator from "../containers/paginator/Paginator";

const Homepage = ({ list }: HomepageProps) => {
    const [count, setCount] = useState(0);
    const countChecks = (value: boolean) => value ?
        setCount(prevState => prevState + 1) : setCount(prevState => prevState - 1)

    return (
        <div className='homepage'>
            <header className='homepage__header'>
                <h2 className='homepage__header--box'>Items: {list.length}</h2>
                <h2 className='homepage__header--box'>Checked: {count}</h2>
            </header>
            <Paginator items={list} counter={countChecks}/>
        </div>
    );
}

export default Homepage;

interface HomepageProps {
    list: Item[];
}
