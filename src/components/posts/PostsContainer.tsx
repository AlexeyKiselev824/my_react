import React, { memo, useEffect, useState } from 'react';
import classes from './Posts.module.css';
import { IPost } from '../../models/IPost';
import { postsAPI } from '../../services/PostsService';
import MyButton from '../UI/button/MyButton';
import Loader from '../UI/loader/Loader';
import PostItem from './PostsItem';
import MyModal from '../UI/myModal/MyModal';
import FormCreatePost from '../formCreatePost/FormCreatePost';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import PostsFilter from '../postsFilter/PostsFilter';
import { sortedAndSearchedPosts } from '../../helpers/sortedAndSearchedPosts';
import Pagination from '../UI/pagination/Pagination';
import { getPagesCount } from '../../helpers/getPagesCount';
import { apiInitialState, setLimit, setPage } from '../../store/reducers/apiParamSlice';

const PostContainer = memo(() => {
    const searchDelay = useAppSelector(state => state.filter.delay);
    const [modal, setModal] = useState(false);
    const sort = useAppSelector(state => state.filter.sort);
    const page = useAppSelector(state => state.apiParam.page);
    const limit = useAppSelector(state => state.apiParam.limit);
    const { isLoading, error } = postsAPI.useFetchAllPostsQuery({ limit, page });
    const { data: posts, totalPages } = postsAPI.useFetchAllPostsQuery({ limit, page }, {
        selectFromResult: ({ data }) => ({
            data: data && sortedAndSearchedPosts(data.apiResponse, sort, searchDelay),
            totalPages: data?.totalCount && getPagesCount(data.totalCount, limit),
        })
    });
    const [, { isLoading: isLoadingCreate }] = postsAPI.useCreatePostMutation();
    const [removePost, { isLoading: isLoadingRemove }] = postsAPI.useRemovePostMutation();
    const [, { isLoading: isLoadingUpdate }] = postsAPI.useUpdatePostMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (searchDelay) {
            dispatch(setPage(1));
            dispatch(setLimit(-1));
        } else {
            dispatch(setLimit(apiInitialState.limit));
        }
    }, [searchDelay])

    const handleRemove = async (post: IPost) => {
        await removePost(post)
    }

    return (
        <>
            <div className={[classes['posts_container'], '_container'].join(' ')}>
                <div className={classes['search-sort']}>
                    <PostsFilter />
                </div>
                <MyButton onClick={() => setModal(true)} classAdd={classes['createPost-btn']}>
                    Add new post
                </MyButton>
                <MyModal
                    visible={modal}
                    setVisible={setModal}
                    backgroundGreen
                >
                    <FormCreatePost setVisible={setModal} />
                </MyModal>
                <div>
                    {(isLoading || isLoadingCreate || isLoadingRemove || isLoadingUpdate) &&
                        <Loader />
                    }
                    {error && <h1 className={classes['posts-error']}>Opps... something went wrong</h1>}
                    {posts?.map(post =>
                        <PostItem remove={handleRemove} key={post.id} post={post} />
                    )}
                </div>
                <Pagination page={page} totalPages={totalPages ? totalPages : 0} />
            </div>
        </>
    )
})

export default PostContainer;