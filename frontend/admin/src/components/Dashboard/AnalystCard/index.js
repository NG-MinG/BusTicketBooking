import React from 'react';

import classes from './AnalystCard.module.css';

const AnalystCard = ({ title, value, yellow, blue, green, red }) => {

    const classArr = [classes.analyst_card];
    const classStr = () => {

        if (yellow) {
            classArr.push(classes.yellow);
        }
        
        if (blue) {
            classArr.push(classes.blue);
        }
        
        if (green) {
            classArr.push(classes.green);
        }
        
        if (red) {
            classArr.push(classes.red);
        }

        return classArr.join(' ');
    };

    return <div className={classStr()}>
        <b>{ title }</b>
        <div>{ value }</div>
    </div>
};

export default AnalystCard;