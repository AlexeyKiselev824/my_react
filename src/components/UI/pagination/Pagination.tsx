import React, { FC, memo } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { usePagination } from '../../../hooks/usePagination';
import { setPage } from '../../../store/reducers/apiParamSlice';
import classes from './Pagination.module.css';

interface IPaginationProps {
    totalPages: number;
    page: number;
}

const Pagination: FC<IPaginationProps> = memo(({ totalPages, page }) => {
    const dispatch = useAppDispatch();
    const pagesArray: number[] = usePagination(totalPages);

    return (
        <>
            <div className={classes['pagination__wrapper']}>
                {pagesArray.map((p: number) =>
                    <span
                        key={p}
                        defaultValue={p}
                        onClick={() => dispatch(setPage(p))}
                        className={p === page
                            ? classes['pagination__item_current']
                            : classes['pagination__item']
                        }
                    >
                        {p}
                    </span>
                )}
            </div>
        </>
    )
})

export default Pagination;