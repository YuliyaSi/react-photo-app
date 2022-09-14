import React from 'react';
import {Link} from "react-router-dom";
import {Data} from "../core/types";
import "../styles/pages/route-page/index.scss"
import DataItem from "../components/molecules/data-item";

const PageFromRoute = ({shownListItem}: CardFromRouteProps) => (
    <div className='route-page'>
        <Link to='/' className='route-page__link'>&#8592; Back</Link>
        <DataItem {...shownListItem} fullsize/>
    </div>
);

export default PageFromRoute;

interface CardFromRouteProps {
    route: number,
    shownListItem: Data
}
