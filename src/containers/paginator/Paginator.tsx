import ReactPaginate from "react-paginate";
import React, {useContext} from "react";
import {ContextProps} from "../../core/types";
import "../../styles/containers/paginator/index.scss"
import DataList from "../../components/organism/data-list";
import {UsePagination} from "../../core/hooks/UsePagination";
import {AppContext} from "../../core/context/contextProvider";

const Paginator = ({ itemsPerPage = 20 }: PaginatorProps) => {

    const { dataList }  = useContext(AppContext) as ContextProps;
    const { currentItems, handlePageClick, pageCount} = UsePagination(itemsPerPage, dataList)

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
            <DataList list={currentItems}/>
        </>
    );
}

export default Paginator;

interface PaginatorProps {
    itemsPerPage?: number,
}
