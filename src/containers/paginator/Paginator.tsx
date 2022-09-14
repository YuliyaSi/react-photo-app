import ReactPaginate from "react-paginate";
import React, {useEffect, useState} from "react";
import {Item} from "../../core/types";
import List from "../../components/list";

interface PaginatedItemsP {
    itemsPerPage?: number,
    items: Item[],
    counter: (v: boolean) => void;
}

function Paginator({ itemsPerPage = 20, items, counter }: PaginatedItemsP) {

    const [currentItems, setCurrentItems] = useState<Item[] | undefined>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);


    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    if (!currentItems) return null;

    return (
        <>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
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
            <List list={currentItems} counter={counter}/>
        </>
    );
}

export default Paginator;
