import React, { FC, memo, useMemo, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import classes from './EditorForm.module.css';
import { setInvisibleEditor } from '../../store/reducers/pagePostEditor';
import { resetForm, setBodyPost, setTitlePost } from '../../store/reducers/postFormSlice';
import { IPost } from '../../models/types';

interface IEditorFormProps {
    post: IPost;
    update: (post: IPost) => void;
    modal?: boolean;
}

const EditorForm: FC<IEditorFormProps> = memo(({ post, update, modal }) => {
    const title = useAppSelector(state => state.formCreate.title);
    const body = useAppSelector(state => state.formCreate.body);
    const [disabled, setDisabled] = useState(true);
    const dispatch = useAppDispatch();

    const closeForm = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setInvisibleEditor());
    }

    const handlerUpdatePost = (e: React.FormEvent, title: string, body: string, post: IPost) => {
        e.preventDefault();

        update({
            ...post,
            title: title ? title : post.title,
            body: body ? body : post.body
        })

        dispatch(setInvisibleEditor());
    }

    useMemo(() => {
        if (title || body) setDisabled(false);
    }, [title, body]);

    useEffect(() => {
        return () => {
            dispatch(resetForm())
        }
    }, [])

    return (
        <>
            <form className={classes['form']} onSubmit={e => handlerUpdatePost(e, title, body, post)}>
                <h1 className={classes['form__name']}>Post Editor</h1>
                <textarea
                    onChange={e => dispatch(setTitlePost(e.target.value))}
                    className={classes['form__area']}
                    name="title"
                    defaultValue={post.title}
                >
                </textarea>
                <textarea
                    onChange={e => dispatch(setBodyPost(e.target.value))}
                    className={[classes['form__area'], classes['form__area-body']].join(' ')}
                    name="body"
                    defaultValue={post.body}
                >
                </textarea>
                <input
                    disabled={disabled}
                    className={classes['form-btn']}
                    type="submit"
                    value="Save changes"
                />
                {!modal &&
                    <button onClick={closeForm} className={classes['form-close']}>x</button>
                }
            </form>
        </>
    )
})

export default EditorForm;