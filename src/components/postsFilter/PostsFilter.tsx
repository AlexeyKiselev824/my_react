import React, { memo } from 'react';
import classes from './PostsFilter.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setDelay, setSearch, setSort } from '../../store/reducers/filterSlice';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import useDebounce from '../../hooks/useDebounce';
import { TSort, TLimit } from '../../models/types';
import { apiInitialState, setLimit } from '../../store/reducers/apiParamSlice';


const selectSort = [
    { value: 'title', name: 'Title' },
    { value: 'body', name: 'Content' },
];

const selectLimit = [
    { value: 5, name: '5' },
    { value: 10, name: '10' },
    { value: 25, name: '25' },
    { value: -1, name: 'All posts' },
];

const PostsFilter = memo(() => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.filter);
    const limit = useAppSelector(state => state.apiParam.limit);


    const debounceSearch = useDebounce(delay, 500);

    function delay(query: string) {
        dispatch(setDelay(query));
    }

    function search(e: React.ChangeEvent<HTMLInputElement>): void {
        dispatch(setSearch(e.target.value))
        debounceSearch(e.target.value);
    }

    return (
        <>
            <MyInput
                value={filter.search}
                onChange={search}
                placeholder='Search query by title...'
                type='text'
                classAdd={classes['filter__input']}
            />
            <div className={classes['filter__selectors']}>
                <MySelect
                    classAdd={classes['filter__selectors__sort']}
                    value={filter.sort}
                    valueDef=""
                    onChanges={e => dispatch(setSort(e as TSort))}
                    defaultValue="Sort by"
                    options={selectSort}
                />
                <MySelect
                    value={limit}
                    valueDef={apiInitialState.limit}
                    onChanges={e => dispatch(setLimit(e as TLimit))}
                    defaultValue="Limit posts"
                    options={selectLimit}
                />
            </div>
        </>
    )
})

export default PostsFilter;