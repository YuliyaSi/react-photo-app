import React, {useContext} from "react";
import {Routes, Route} from "react-router-dom";
import PageFromRoute from "../pages/pageFromRoute";
import Homepage from "../pages/homepage";
import {AppContext} from "../App";
import {ContextProps} from "../core/types";

const Router = () => {
    const {list} = useContext(AppContext) as ContextProps;
    const routesAmount = list.length;
    const routes = Array(routesAmount).fill('').map((elem, index) => index + 1);

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            {routes.map(route =>
                <Route key={route} path={'/' + route}
                       element={<PageFromRoute route={route} shownListItem={list[route - 1]}/>}/>
            )}
        </Routes>
    )
}

export default Router;
