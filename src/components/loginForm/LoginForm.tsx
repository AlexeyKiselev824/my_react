import React, { memo } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setAuthTrue } from '../../store/reducers/AuthSlice';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import classes from './LoginForm.module.css';

const LoginForm = memo(() => {

    const dispatch = useAppDispatch();

    const signIn = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setAuthTrue());
        localStorage.setItem('auth', 'true');
    }

    return (
        <>
            <div className={classes['auth']}></div>
            <div className={[classes['auth__container'], '_container'].join(' ')}>
                <h1 className={classes['auth-title']}>Welcome to the MyReact</h1>
                <form className={classes['auth__form']} onSubmit={signIn}>
                    <MyInput classAdd={classes['form__input']} placeholder='Login' type='text' required />
                    <MyInput classAdd={classes['form__input']} placeholder='Password' type='password' required />
                    <MyButton classAdd={classes['form__button']}>Sign in</MyButton>
                </form>
            </div>
        </>
    )
})

export default LoginForm;