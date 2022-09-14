import React, {createContext, useEffect, useState} from 'react';
import {ContextProps, Data, Item} from "./core/types";
import {makeApiRequest} from "./core/api";
import Router from "./routes/Router";
import {addCheckbox} from "./core/utils/mappers/add-checkbox";
import {changeCheckbox} from "./core/utils/mappers/change-checkbox";
import {countChecked} from "./core/utils/mappers/count-checked";

export const AppContext = createContext<ContextProps | null>(null);

const App = () => {
    const [list, setList] = useState<Data[] | undefined>();
    const [dataList, setDataList] = useState<Item[] | undefined>();
    const [count, setCount] = useState(0);

    const changeDataList = (id: number, value: boolean) => setDataList(changeCheckbox(dataList as Item[], id, value))

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    useEffect(() => {
        list && setDataList(addCheckbox(list));
    }, [list])

    useEffect(() => {
        dataList && setCount(countChecked(dataList))
    }, [dataList])

    if (!dataList) return null;

    return (
        <AppContext.Provider value={{ dataList, count, changeDataList }}>
            <Router/>
        </AppContext.Provider>
    );
}

export default App;
