import React, {useEffect, useState} from 'react';
import './styles/App.css';
import RouterComponent from "./routes/Router";
import {Item} from "./core/types";
import {makeApiRequest} from "./core/api";

function App() {
    const [list, setList] = useState<Item[] | undefined>();

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    if (!list) return null;

    return <RouterComponent list={list}/>;
}

export default App;
