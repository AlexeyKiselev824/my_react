import React, { FC, PropsWithChildren } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='_main'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;