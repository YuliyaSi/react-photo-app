import React, {createContext, useEffect, useState} from 'react';
import {ContextProps, Data, Item} from "./core/types";
import {makeApiRequest} from "./core/api";
import Router from "./routes/Router";

export const AppContext = createContext<ContextProps | null>(null);

const App = () => {
    const [list, setList] = useState<Data[] | undefined>();
    const [dataList, setDataList] = useState<Item[] | undefined>();
    const [count, setCount] = useState(0);

    const countChecks = (value: boolean) => value ?
        setCount(prevState => prevState + 1) : setCount(prevState => prevState - 1)

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    useEffect(() => {
        list && setDataList(list.map(elem => ( { ...elem, checkbox: false})))
    }, [list])

    if (!dataList) return null;

    return (
        <AppContext.Provider value={{ dataList, count, countChecks }}>
            <Router/>
        </AppContext.Provider>
    );
}

export default App;
