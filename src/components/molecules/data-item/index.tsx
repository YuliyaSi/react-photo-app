import React, {ReactNode} from 'react';
import {Data} from "../../../core/types";
import "../../../styles/molecules/listitem/index.scss"
import {Link} from "react-router-dom";

const DataItem = ({ id, thumbnailUrl, url, albumId, title, fullsize, children }: DataItemProps) => {
    if (fullsize) return (
        <div className='list-item-full-size'>
            <h5 className="list-item-full-size__subtitle">Album: {albumId}</h5>
            <h3 className="list-item-full-size__title">Title: {title}</h3>
            <div className='list-item-full-size__image'>
                <img src={url} alt="item"/>
            </div>
        </div>
    )
    return (
            <div key={id} className='list-item'>
                <div className="list-item__content">
                    <div>
                        {children}
                    </div>
                    <div className='list-item__image'>
                        <img src={thumbnailUrl} alt="item"/>
                    </div>
                    <h3 className="list-item__title">{title}</h3>
                </div>
                <Link to={`/${id}`} className='list-item__link'>Show more</Link>
            </div>
    );
}

export default DataItem;

interface DataItemProps extends Data {
    fullsize?: boolean,
    children?: ReactNode,
}