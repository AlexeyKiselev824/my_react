import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import classes from './Header.module.css';

const Header = memo(() => {

    return (
        <div className={classes['header']}>
            <div className={[classes['header-container'], '_container'].join(' ')}>
                <Link to="/posts" className={classes['header__logo']}>
                    MyReact
                </Link>
                <NavBar />
            </div>
        </div>
    )
})

export default Header;