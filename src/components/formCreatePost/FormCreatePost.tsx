import React, { FC, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/IPost';
import { postsAPI } from '../../services/PostsService';
import { resetForm, setBodyPost, setTitlePost } from '../../store/reducers/postFormSlice';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import classes from './FormCreatePost.module.css'

interface IFormCreatePostProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type PostNoId = IPost & { id?: number }

const FormCreatePost: FC<IFormCreatePostProps> = memo(({ setVisible }) => {

    const post = useAppSelector(state => state.formCreate);
    const dispatch = useAppDispatch();
    const [createPost] = postsAPI.useCreatePostMutation();

    const handleCreatePost = async (e: React.FormEvent<HTMLButtonElement>, { title, body }: PostNoId) => {
        e.preventDefault();
        if (!title || !body) return null;

        await createPost({ title, body } as IPost);
        setVisible(false);
        dispatch(resetForm());
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
                    onClick={e => handleCreatePost(e, post as PostNoId)}
                    classAdd={classes['form-btn']}
                >
                    Create Post
                </MyButton>
            </form>
        </>
    )
})

export default FormCreatePost;