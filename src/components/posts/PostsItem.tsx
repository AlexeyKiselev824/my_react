import React, { FC, memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_POSTS } from '../../constants/api';
import { useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/types';
import { postsAPI } from '../../services/PostsService';
import EditorForm from '../EditorForm/EditorForm';
import MyButton from '../UI/button/MyButton';
import { HightLightingSyntax } from '../UI/highlighting/HighlightingSyntax';
import MyModal from '../UI/myModal/MyModal';
import classes from './Posts.module.css';

interface IPostItemProps {
    post: IPost
    remove: (post: IPost) => void
}


const PostItem: FC<IPostItemProps> = memo(({ post, remove }) => {
    const router = useNavigate();
    const [modal, setModal] = useState(false);
    const [modalEditor, setModalEditor] = useState(false);
    const searchDelay = useAppSelector(state => state.filter.delay);
    const [updatePost] = postsAPI.useUpdatePostMutation();

    const highlight = useCallback((str: string) => {
        return <HightLightingSyntax filter={searchDelay} str={str} />
    }, [searchDelay])

    const handleRemove = (event: React.MouseEvent, post: IPost) => {
        event.stopPropagation();
        remove(post);
        setModal(false);
    }

    const handlerUpdate = async (post: IPost) => {
        await updatePost(post);
        setModalEditor(false);
    }

    const handlerOpenModalEditor = () => {
        setModalEditor(true);
        setModal(false);
    }

    const editPost = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModal(true);
    }

    const openPost = (id: number) => {
        router(URL_POSTS + id);
    }

    return (
        <>
            <div className={classes['posts']}>
                <div className={classes['posts__body']} onClick={() => openPost(post.id)}>
                    <div className={classes['posts__content']}>
                        <h3 className={classes['posts__title']}>{post.id}. {highlight(post.title)}</h3>
                        <div className={classes['posts__text']}>{post.body}</div>
                    </div>
                    <div className={classes['posts__btn']}>
                        <MyButton
                            classAdd={[classes['postItem-btn'], classes['postItem-btn_main']].join(' ')}
                            onClick={editPost}
                        >
                            Edit
                        </MyButton>
                    </div>
                </div>
                <MyModal visible={modal} setVisible={setModal}>
                    <div className={classes['postItem-btn-group']}>
                        <MyButton classAdd={classes['postItem-btn']} onClick={handlerOpenModalEditor}>
                            Edit post
                        </MyButton>
                        <MyButton classAdd={classes['postItem-btn']} onClick={e => handleRemove(e, post)}>
                            Delete
                        </MyButton>
                    </div>
                </MyModal>
                <MyModal
                    classAdd={classes['editor-form']}
                    visible={modalEditor}
                    setVisible={setModalEditor}
                >
                    <EditorForm post={post} update={handlerUpdate} modal />
                </MyModal>
            </div>
        </>
    )
})

export default PostItem;