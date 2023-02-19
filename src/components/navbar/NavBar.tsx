import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setAuthFalse } from '../../store/reducers/AuthSlice';
import MyButton from '../UI/button/MyButton';
import MyModal from '../UI/myModal/MyModal';
import classes from './NavBar.module.css'

const NavBar = memo(() => {

    const [modal, setModal] = useState(false);
    const isAuth = useAppSelector(state => state.auth.auth);
    const dispatch = useAppDispatch();

    const signOut = () => {
        setModal(true)
    }

    const yesExit = () => {
        dispatch(setAuthFalse());
        localStorage.removeItem('auth');
    }

    return (
        <>
            <nav className={[classes['header__menu'], classes['menu']].join(' ')}>
                <ul className={classes['menu__list']}>
                    <li className={classes['menu__item']}>
                        <Link to="/posts" className={classes['menu__link']}>
                            Home
                        </Link>
                    </li>
                    <li className={classes['menu__item']}>
                        <Link to="/about" className={classes['menu__link']}>
                            About
                        </Link>
                    </li>
                    {isAuth &&
                        <li className={classes['menu__item']}>
                            <Link onClick={signOut} to="#" className={classes['menu__link']}>
                                Exit
                            </Link>
                        </li>
                    }
                </ul>
            </nav>
            <MyModal visible={modal} setVisible={setModal}>
                <div className={classes['exit-form']}>
                    <h1 className={classes['exit-form__title']}>Are you sure you want to go out?</h1>
                    <MyButton classAdd={classes['exit-form__btn']} onClick={yesExit}>
                        Yes
                    </MyButton>
                    <MyButton classAdd={classes['exit-form__btn']} onClick={() => setModal(false)}>
                        No
                    </MyButton>
                </div>
            </MyModal>
        </>
    )
})

export default NavBar;