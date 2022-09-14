import ReactPaginate from "react-paginate";
import React, {useContext, useEffect, useState} from "react";
import {ContextProps, Data} from "../../core/types";
import "../../styles/containers/paginator/index.scss"
import DataList from "../../components/organism/data-list";
import {AppContext} from "../../App";

interface PaginatedItemsP {
    counter: (v: boolean) => void;
    itemsPerPage?: number,
}

function Paginator({ itemsPerPage = 20, counter }: PaginatedItemsP) {
    const { list }  = useContext(AppContext) as ContextProps;
    const [currentItems, setCurrentItems] = useState<Data[] | undefined>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);


    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = event.selected * itemsPerPage % list.length;
        console.log(`User requested page number ${event.selected + 1}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    if (!currentItems) return null;

    return (
        <>
            <ReactPaginate
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
            <DataList list={currentItems} counter={counter}/>
        </>
    );
}

export default Paginator;
