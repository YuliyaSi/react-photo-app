import ReactPaginate from "react-paginate";
import React, {useContext} from "react";
import {ContextProps} from "../../core/types";
import "../../styles/containers/paginator/index.scss"
import DataList from "../../components/organism/data-list";
import {AppContext} from "../../App";
import {UsePagination} from "../../core/hooks/UsePagination";

const Paginator = ({ itemsPerPage = 20, counter }: PaginatorProps) => {

    const { list }  = useContext(AppContext) as ContextProps;
    const { currentItems, handlePageClick, pageCount} = UsePagination(itemsPerPage, list)

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

interface PaginatorProps {
    counter: (v: boolean) => void;
    itemsPerPage?: number,
}
