import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { decrementCounter, incrementByAmountCounter, incrementCounter } from '../../store/reducers/counterSlice'
import MyButton from '../UI/button/MyButton';
import classes from './Counter.module.css';

const Counter = memo(() => {

    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    function numberCounter() {
        const number = Number(prompt('Введите число'));
        isNaN(number)
            ? alert('Введите число')
            : dispatch(incrementByAmountCounter(number));

    }

    return (
        <div className={classes.counter}>
            <div className={[classes['counter-block'], '_container'].join(' ')}>
                <div className={classes['counter-block__count']}>{count}</div>
                <div className={classes['counter-block__buttons']}>
                    <MyButton classAdd={classes['counter-btn']} onClick={() => dispatch(incrementCounter())}>
                        increment
                    </MyButton>
                    <MyButton classAdd={classes['counter-btn2']} onClick={() => dispatch(decrementCounter())}>
                        decrement
                    </MyButton>
                    <MyButton onClick={numberCounter}>
                        increment by amount
                    </MyButton>
                </div>
            </div>
        </div>
    )
})

export default Counter;