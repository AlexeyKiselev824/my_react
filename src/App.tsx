import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter
} from "react-router-dom";
import AppRouter from './components/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { setAuthLoadingFalse, setAuthTrue } from './store/reducers/AuthSlice';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setAuthTrue());
    }
    dispatch(setAuthLoadingFalse());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
