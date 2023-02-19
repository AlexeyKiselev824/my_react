import React, { FC } from 'react';
import classes from './HighlightingSyntax.module.css';

interface HightLightingSyntaxProps {
    filter: string;
    str: string;
}

export const HightLightingSyntax: FC<HightLightingSyntaxProps> = ({ filter, str }) => {

    if (!filter) return (<>{str}</>);

    const regexp = new RegExp(filter, 'ig');
    const matchValue = str.match(regexp);

    if (matchValue) {
        return (
            <>
                {
                    str.split(regexp).map((item: string, index: number, arr: string[]) => {
                        if (index < arr.length - 1) {
                            const valueSearch = matchValue.pop();
                            return <React.Fragment key={index}>
                                {item}
                                <span key={index} className={classes['highlight']}>
                                    {valueSearch}
                                </span>
                            </React.Fragment>
                        }
                        return item;
                    })
                }
            </>
        )
    }

    return (
        <>
            {str}
        </>
    )

}