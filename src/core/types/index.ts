export interface Data {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string,
}

export interface ContextProps {
    list: Data[]
}
