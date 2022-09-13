import React from 'react';
import {Link} from "react-router-dom";
import {Item} from "../core/types";
import ListItem from "../components/ui/listitem";

function PageFromRoute({ shownListItem }: CardFromRouteProps) {

    return (
        <div>
            <h2>
                <Link to='/'>Back</Link>
            </h2>
            <ListItem {...shownListItem}/>
        </div>
    );
}

export default PageFromRoute;

interface CardFromRouteProps {
    route: number,
    shownListItem: Item
}
