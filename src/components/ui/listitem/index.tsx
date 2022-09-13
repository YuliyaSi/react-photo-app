import React, {ReactNode} from 'react';
import {Item} from "../../../core/types";
import "../../../styles/listitem/index.scss"

const ListItem = ({ id, thumbnailUrl, title, children }: ListItemProps) => {
    return (
        <div key={id} className='list-item'>
            <div>
                {children}
            </div>
            <div className='list-item__image'>
                <img src={thumbnailUrl} alt="item"/>
            </div>
            <h3 className="list-item__title">{title}</h3>
        </div>
    );
}

export default ListItem;

interface ListItemProps extends Item{
    children: ReactNode,
}
