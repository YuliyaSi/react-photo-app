import React, {createContext, ReactNode, useEffect, useState} from "react";
import {ContextProps, Data, Item} from "../types";
import {changeCheckbox} from "../utils/mappers/change-checkbox";
import {makeApiRequest} from "../api";
import {addCheckbox} from "../utils/mappers/add-checkbox";
import {countChecked} from "../utils/mappers/count-checked";

export const AppContext = createContext<ContextProps | null>(null);

export const ContextProvider = ({children}: UseContextProviderProps) => {

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
        <AppContext.Provider value={{dataList, count, changeDataList}}>
            {children}
        </AppContext.Provider>
    );
}

interface UseContextProviderProps {
    children?: ReactNode
}
