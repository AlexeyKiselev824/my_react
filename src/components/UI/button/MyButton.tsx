import React, { ButtonHTMLAttributes, FC } from 'react';
import classes from "./MyButton.module.css"

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classAdd?: string
}

const MyButton: FC<MyButtonProps> = ({ children, classAdd, ...props }) => {

    const rootClasses = [classes.myBtn]

    rootClasses?.push(classAdd);

    return (
        <button className={rootClasses.join(' ')} {...props}>
            {children}
        </button>
    )
}

export default MyButton;