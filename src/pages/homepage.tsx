import React, {useContext, useState} from 'react';
import "../styles/pages/homepage/index.scss"
import Paginator from "../containers/paginator/Paginator";
import {AppContext} from "../App";
import {ContextProps} from "../core/types";

const Homepage = () => {
    const { list }  = useContext(AppContext) as ContextProps;
    const [count, setCount] = useState(0);
    const countChecks = (value: boolean) => value ?
        setCount(prevState => prevState + 1) : setCount(prevState => prevState - 1)

    return (
        <div className='homepage'>
            <header className='homepage__header'>
                <h2 className='homepage__header--box'>Total items: {list.length}</h2>
                <h2 className='homepage__header--box'>Items selected: {count}</h2>
            </header>
            <Paginator counter={countChecks}/>
        </div>
    );
}

export default Homepage;
