import React, {useContext} from "react";
import {Routes, Route} from "react-router-dom";
import PageFromRoute from "../pages/pageFromRoute";
import Homepage from "../pages/homepage";
import {ContextProps} from "../core/types";
import {AppContext} from "../core/context/contextProvider";

const Router = () => {
    const {dataList} = useContext(AppContext) as ContextProps;
    const routesAmount = dataList.length;
    const routes = Array(routesAmount).fill('').map((elem, index) => index + 1);

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            {routes.map(route =>
                <Route key={route} path={'/' + route}
                       element={<PageFromRoute route={route} shownListItem={dataList[route - 1]}/>}/>
            )}
        </Routes>
    )
}

export default Router;
