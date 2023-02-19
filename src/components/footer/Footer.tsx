import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = memo(() => {
    return (
        <>
            <footer className={classes['footer']}>
                <div className={[classes['footer__container'], '_container'].join(' ')}>
                    <div className={classes['footer__row']}>
                        <div className={classes['footer__column']}>
                            <div className={classes['footer__label']}>MyReact info</div>
                            <nav>
                                <ul>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={classes['footer__column']}>
                            <div className={classes['footer__label']}>MyReact info</div>
                            <nav>
                                <ul>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={classes['footer__column']}>
                            <div className={classes['footer__label']}>MyReact info</div>
                            <nav>
                                <ul>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                    <li className={'menu__footer__item'}>
                                        <Link to='#' className={classes['menu-footer__link']}>Example</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={classes['footer__column']}>
                            <div className={classes['footer__label']}>MyReact Contact</div>
                            <nav className={classes['contacts-footer']}>
                                <a href="tel:4805550103" className={[classes['contacts-footer__item'], classes['contacts-footer__item_phone']].join(' ')}>
                                    (480) 555-0103
                                </a>
                                <a href="#" className={[classes['contacts-footer__item'], classes['contacts-footer__item_map']].join(' ')}>
                                    888 Space State, Magic Street
                                </a>
                                <a href="mailto:myReact@example.com"
                                    className={[classes['contacts-footer__item'], classes['contacts-footer__item_email']].join(' ')}>
                                    myReact@example.com
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
})

export default Footer;