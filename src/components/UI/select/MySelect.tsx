import React, { FC, memo, SelectHTMLAttributes } from 'react';
import classes from './MySelect.module.css';


interface OptionsState {
    value: string | number;
    name: string;
}

interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    classAdd?: string;
    options: OptionsState[];
    onChange: any;
    valueDef: string | number;
}

const MySelect: FC<MySelectProps> = memo(({ options, defaultValue, value, onChange, classAdd, valueDef }) => {

    const rootClasses = [classes.mySelect]
    rootClasses.push(classAdd);

    return (
        <>
            <select
                className={rootClasses.join(' ')}
                value={value}
                onChange={e => onChange(e.target.value)}
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