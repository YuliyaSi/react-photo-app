import React, {useContext} from 'react';
import "../styles/pages/homepage/index.scss"
import Paginator from "../containers/paginator/Paginator";
import {ContextProps} from "../core/types";
import {AppContext} from "../core/context/contextProvider";

const Homepage = () => {
    const { dataList, count }  = useContext(AppContext) as ContextProps;

    return (
        <div className='homepage'>
            <header className='homepage__header'>
                <h2 className='homepage__header--box'>Total items: {dataList.length}</h2>
                <h2 className='homepage__header--box'>Items selected: {count}</h2>
            </header>
            <Paginator/>
        </div>
    );
}

export default Homepage;
