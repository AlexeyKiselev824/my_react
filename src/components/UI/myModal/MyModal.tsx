import React, { FC, ReactNode } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { resetForm } from '../../../store/reducers/postFormSlice';
import classes from './MyModal.module.css';

interface IMyModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    backgroundGreen?: true;
    classAdd?: string;
}

const MyModal: FC<IMyModalProps> = ({ children, visible, setVisible, backgroundGreen, classAdd }) => {

    const dispatch = useAppDispatch();
    const modalClasses = [classes.myModalContent]
    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active)
    }

    modalClasses.push(classAdd);

    const invisible = () => {
        setVisible(false);
        dispatch(resetForm());
    }

    return (
        <div className={rootClasses.join(' ')} onClick={invisible}>
            <div className={backgroundGreen ? classes.myModalContent_green : modalClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )

}

export default MyModal;