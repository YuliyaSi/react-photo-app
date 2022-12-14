export interface Data {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string,
}

export interface Item extends Data {
    checkbox: boolean,
}

export interface ContextProps {
    dataList: Item[],
    count: number,
    changeDataList: (id: number, v: boolean) => void,
}
