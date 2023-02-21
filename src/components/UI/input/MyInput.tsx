import React, { FC, InputHTMLAttributes, memo } from 'react';
import classes from './MyInput.module.css';

interface IMyModalProps extends InputHTMLAttributes<HTMLInputElement> {
    classAdd?: string
}

const MyInput: FC<IMyModalProps> = memo(({ classAdd, ...props }) => {

    const rootClasses = [classes.myInput]
    rootClasses?.push(classAdd);

    return (
        <>
            <input className={rootClasses.join(' ')} {...props} />
        </>
    )
})

export default MyInput;