import React from 'react';
import {Link} from "react-router-dom";
import {Item} from "../core/types";
import ListItem from "../components/listitem";
import "../styles/route-page/index.scss"

function PageFromRoute({ shownListItem }: CardFromRouteProps) {

    return (
        <div className='route-page'>
                <Link to='/' className='route-page__link'>&#8592; Back</Link>
            <ListItem {...shownListItem} fullsize/>
        </div>
    );
}

export default PageFromRoute;

interface CardFromRouteProps {
    route: number,
    shownListItem: Item
}
