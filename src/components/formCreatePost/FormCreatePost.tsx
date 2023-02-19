import React, { FC, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/IPost';
import { postsAPI } from '../../services/PostsService';
import { setBodyPost, setTitlePost } from '../../store/reducers/postFormSlice';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import classes from './FormCreatePost.module.css'

interface FormCreatePostProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const FormCreatePost: FC<FormCreatePostProps> = memo(({ setVisible }) => {

    const post = useAppSelector(state => state.formCreate);
    const dispatch = useAppDispatch();
    const [createPost, { }] = postsAPI.useCreatePostMutation();

    const handleCreatePost = async (e: React.FormEvent<HTMLButtonElement>) => {
        if (post.title && post.body) {
            e.preventDefault();
            await createPost({ title: post.title, body: post.body } as IPost);
            setVisible(false);
            dispatch(setTitlePost(''));
            dispatch(setBodyPost(''));
        }
    }


    return (
        <>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => dispatch(setTitlePost(e.target.value))}
                    required
                    type="text"
                    classAdd={classes['input-title']}
                    placeholder="Title post"
                />
                <MyInput
                    value={post.body}
                    onChange={e => dispatch(setBodyPost(e.target.value))}
                    required
                    type="text"
                    classAdd={classes['input-body']}
                    placeholder="Body post"
                />
                <MyButton
                    onClick={handleCreatePost}
                    classAdd={classes['form-btn']}
                >
                    Create Post
                </MyButton>
            </form>
        </>
    )
})

export default FormCreatePost;