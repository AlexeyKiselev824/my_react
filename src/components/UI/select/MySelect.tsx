import React, { FC, memo, SelectHTMLAttributes } from 'react';
import classes from './MySelect.module.css';

interface IOptionsState {
    value: string | number;
    name: string;
}

interface IMySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    classAdd?: string;
    options: IOptionsState[];
    onChange: (item: any) => void;
    valueDef: string | number;
}

const MySelect: FC<IMySelectProps> = memo(({ options, defaultValue, value, onChange, classAdd, valueDef }) => {

    const rootClasses = [classes.mySelect]
    rootClasses.push(classAdd);

    return (
        <>
            <select
                className={rootClasses.join(' ')}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
            >
                <option disabled value={valueDef}>{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </>
    )
})

export default MySelect;