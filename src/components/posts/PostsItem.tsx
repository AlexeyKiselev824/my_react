import React, { FC, memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/IPost';
import MyButton from '../UI/button/MyButton';
import { HightLightingSyntax } from '../UI/highlighting/HighlightingSyntax';
import MyModal from '../UI/myModal/MyModal';
import classes from './Posts.module.css';

interface PostItemProps {
    post: IPost
    remove: (post: IPost) => void
    update: (post: IPost) => void
}


const PostItem: FC<PostItemProps> = memo(({ post, remove, update }) => {
    const router = useNavigate();
    const [modal, setModal] = useState(false);
    const searchDelay = useAppSelector(state => state.filter.delay);

    const highlight = useCallback((str: string) => {
        return <HightLightingSyntax filter={searchDelay} str={str} />
    }, [searchDelay])

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post);
        setModal(false);
    }

    const handlerUpdate = (event: React.MouseEvent) => {
        event.stopPropagation()
        const title = prompt('Title post') || "";
        const body = prompt('Conent post') || "";
        if (!title && body) {
            update({ ...post, body });
        }
        if (title && !body) {
            update({ ...post, title });
        }
        if (title && body) {
            update({ ...post, title, body });
        }
        setModal(false);
    }


    const editPost = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModal(true);
    }

    const openPost = () => {
        router(`/posts/${post.id}`);
        console.log(post)
    }

    return (
        <>
            <div className={classes['posts']}>
                <div className={classes['posts__body']} onClick={openPost}>
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
                        <MyButton classAdd={classes['postItem-btn']} onClick={handlerUpdate}>
                            Edit post
                        </MyButton>
                        <MyButton classAdd={classes['postItem-btn']} onClick={handleRemove}>
                            Delete
                        </MyButton>
                    </div>
                </MyModal>
            </div>
        </>
    )
})

export default PostItem;