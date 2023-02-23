import React, { memo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/types';
import { postsAPI } from '../../services/PostsService';
import { setInvisibleEditor, setVisibleEditor } from '../../store/reducers/pagePostEditor';
import EditorForm from '../EditorForm/EditorForm';
import MyButton from '../UI/button/MyButton';
import Loader from '../UI/loader/Loader';
import classes from './PostById.module.css';

const PostById = memo(() => {
    const params = useParams();
    const router = useNavigate();
    const visibleEditor = useAppSelector(state => state.pagePostEditor.visible);
    const dispatch = useAppDispatch();
    const { data: post, isLoading, isError } = postsAPI.useGetPostByIdQuery(String(params.id));
    const [updatePost] = postsAPI.useUpdatePostMutation();

    const handlerUpdate = async (post: IPost) => {
        await updatePost(post)
    }

    useEffect(() => {
        return () => {
            dispatch(setInvisibleEditor());
        }
    }, [])

    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (isError) {
        return (
            <h1 className={classes['post-error']}>Post page loading error...</h1>
        )
    }

    return (
        <>
            <div className={classes['postId']}>
                <div className='_container'>
                    <MyButton
                        onClick={() => router('/posts')}
                        classAdd={classes['postId__btn-back']}>
                        &lt;
                    </MyButton>
                    {post &&
                        <div className={classes['postId__body']}>
                            <h1 className={classes['postId__title']}>{post.id}. {post.title}</h1>
                            <div className={classes['postId__content']}>{post.body}</div>
                        </div>
                    }
                    {!visibleEditor &&
                        <MyButton
                            onClick={() => dispatch(setVisibleEditor())}
                            classAdd={classes['postId__btn-edit']}>
                            Edit post
                        </MyButton>
                    }
                </div>
            </div>
            {post &&
                <div className={visibleEditor ? classes['form-visible'] : classes['form-invisible']}>
                    <div className='_container'>
                        <EditorForm post={post} update={handlerUpdate} />
                    </div>
                </div>
            }
        </>
    )
})

export default PostById;