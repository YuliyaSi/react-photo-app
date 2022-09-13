import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import {Item} from "../core/types";
import PageFromRoute from "../pages/PageFromRoute";

const RouterComponent = ({ list }: RouterComponentProps) => {
    const routesAmount = list.length;
    const routes = Array(routesAmount).fill('').map((elem, index) => index + 1);

    return (
            <Routes>
                <Route path="/" element={<Homepage list={list}/>}/>
                {routes.map(route =>
                    <Route key={route} path={'/' + route} element={<PageFromRoute route={route} shownListItem={list[route - 1]}/>}/>
                )}
            </Routes>
    )
}

export default RouterComponent;

interface RouterComponentProps {
    list: Item[],
}
