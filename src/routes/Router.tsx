import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import {Item} from "../core/types";
import CardFromRoute from "../hocs/CardFromRoute";

const RouterComponent = ({ list }: RouterComponentProps) => {
    const routesAmount = list.length;
    const routes = Array(routesAmount).fill('/').map((elem, index) => `${elem}${index+1}`);

    console.log(routes)
    return (
            <Routes>
                <Route path="/" element={<Homepage list={list}/>}/>
                {routes.map(route =>
                    <Route path={route} element={<CardFromRoute route={route}/>}/>
                )}
            </Routes>
    )
}

export default RouterComponent;

interface RouterComponentProps {
    list: Item[],
}
