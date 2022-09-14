import React, {createContext, useEffect, useState} from 'react';
import {ContextProps, Data} from "./core/types";
import {makeApiRequest} from "./core/api";
import Router from "./routes/Router";

export const AppContext = createContext<ContextProps | null>(null);

const App = () => {
    const [list, setList] = useState<Data[] | undefined>();
    const [count, setCount] = useState(0);
    const countChecks = (value: boolean) => value ?
        setCount(prevState => prevState + 1) : setCount(prevState => prevState - 1)

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    if (!list) return null;

    return (
        <AppContext.Provider value={{list, count, countChecks}}>
            <Router/>
        </AppContext.Provider>
    );
}

export default App;
