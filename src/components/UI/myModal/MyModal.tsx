import React, { FC, ReactNode } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { setBodyPost, setTitlePost } from '../../../store/reducers/postFormSlice';
import classes from './MyModal.module.css';

interface MyModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: any;
    backgroundGreen?: true;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible, backgroundGreen }) => {

    const dispatch = useAppDispatch();

    const rootClasses = [classes.myModal];
    if (visible) {
        rootClasses.push(classes.active)
    }

    const invisible = () => {
        setVisible(false);
        dispatch(setTitlePost(''));
        dispatch(setBodyPost(''));
    }

    return (
        <div className={rootClasses.join(' ')} onClick={invisible}>
            <div className={backgroundGreen ? classes.myModalContent_green : classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.myModal__container}>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default MyModal;