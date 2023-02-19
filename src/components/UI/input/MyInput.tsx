import React, { FC, InputHTMLAttributes, memo } from 'react';
import classes from './MyInput.module.css';

interface MyModalProps extends InputHTMLAttributes<HTMLInputElement> {
    classAdd?: string
}

const MyInput: FC<MyModalProps> = memo(({ classAdd, ...props }) => {

    const rootClasses = [classes.myInput]
    rootClasses?.push(classAdd);

    return (
        <>
            <input className={rootClasses.join(' ')} {...props} />
        </>
    )
})

export default MyInput;