import { useMemo } from "react"

export const usePagination = (totalPages: number) => {
    const pagesArray = useMemo(() => {
        if (totalPages < 0 || !totalPages) return [];
        return [...Array(totalPages).keys()].map(x => ++x);
    }, [totalPages])

    return pagesArray;
}