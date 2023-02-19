import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import About from '../pages/About';
import Login from '../pages/Login';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';
import Loader from './UI/loader/Loader';

const AppRouter = () => {

    const isAuth = useAppSelector(state => state.auth.auth);
    const isLoading = useAppSelector(state => state.auth.isLoading);

    if (isLoading) {
        return (<Loader />);
    }

    return (
        isAuth
            ?
            <Routes>
                <Route path='/posts' element={<Posts />} />
                <Route path='/about' element={<About />} />
                <Route path='/posts/:id' element={<PostPage />} />
                <Route path="/*" element={<Navigate replace to="/posts" />} />
            </Routes>
            :
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path="/*" element={<Navigate replace to="/login" />} />
            </Routes>
    )
}

export default AppRouter;