import React, {useEffect, useState} from 'react';
import {makeApiRequest} from "../../core/api";
import {Item} from "../../core/types";
import Checkbox from "../ui/checkbox";
import ListItem from "../ui/listitem";

const Test = () => {
    const [list, setList] = useState<Item[] | null>(null);

    useEffect(() => {
        makeApiRequest(setList);
    }, [])

    return (
        <>
            {list && <ListItem {...list[0]}>
                <Checkbox/>
            </ListItem>}
        </>
    )
};

export default Test;