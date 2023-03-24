import React from 'react';

import classes from './Button.module.css';

const Button = ({
    className = '',
    style,
    outline = false,
    text = '',
    children
}) => {
    const fetchClassName = (className, outline) => (`${className} ${(outline) ? classes.outline : classes.button}`).trim(' ');
    const customClassName = fetchClassName(className, outline);

    return <button  style={style} className={customClassName}>
        {text ? text : children}
    </button>
}

export default Button;