import {useEffect, useState} from "react";
import {Item} from "../types";

export const UsePagination = (itemsPerPage: number, list: Item[] ) => {
    const [currentItems, setCurrentItems] = useState<Item[] | undefined>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list]);


    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = event.selected * itemsPerPage % list.length;
        console.log(`User requested page number ${event.selected + 1}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return {
        currentItems,
        pageCount,
        handlePageClick
    }
}
