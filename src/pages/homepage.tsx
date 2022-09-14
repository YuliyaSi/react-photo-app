import React, {useContext, useState} from 'react';
import "../styles/pages/homepage/index.scss"
import Paginator from "../containers/paginator/Paginator";
import {AppContext} from "../App";
import {ContextProps} from "../core/types";

const Homepage = () => {
    const { list, count }  = useContext(AppContext) as ContextProps;

    return (
        <div className='homepage'>
            <header className='homepage__header'>
                <h2 className='homepage__header--box'>Total items: {list.length}</h2>
                <h2 className='homepage__header--box'>Items selected: {count}</h2>
            </header>
            <Paginator/>
        </div>
    );
}

export default Homepage;
