import React from 'react';

import classes from './Activities.module.css';

const Activities = () => {

    const activities_list = [
        {
            name: 'Jonas Schemdsakdkwad',
            from: 'Thành phố Hồ Chí Minh',
            to: 'Bến Tre',
            time: '5h',
            seat: '23',
            price: '100.000đ',
            date: '14 - 03 - 2022'
        },
        {
            name: 'Jonas Schemdsakdkwad',
            from: 'Thành phố Hồ Chí Minh',
            to: 'Bến Tre',
            time: '5h',
            seat: '23',
            price: '100.000đ',
            date: '14 - 03 - 2022'
        },
        {
            name: 'Jonas Schemdsakdkwad',
            from: 'Thành phố Hồ Chí Minh',
            to: 'Bến Tre',
            time: '5h',
            seat: '23',
            price: '100.000đ',
            date: '14 - 03 - 2022'
        },
        {
            name: 'Jonas Schemdsakdkwad',
            from: 'Thành phố Hồ Chí Minh',
            to: 'Bến Tre',
            time: '5h',
            seat: '23',
            price: '100.000đ',
            date: '14 - 03 - 2022'
        },
        {
            name: 'Jonas Schemdsakdkwad',
            from: 'Thành phố Hồ Chí Minh',
            to: 'Bến Tre',
            time: '5h',
            seat: '23',
            price: '100.000đ',
            date: '14 - 03 - 2022'
        }
    ]

    return <div className={classes.activities}>
        <div className={classes.header}>
            <b>Hoạt động gần đây</b>
        </div>
        <div className={classes.main_content}>
        {
            activities_list.map((item, index) => {
                return <div key={`activity_${index}`} className={classes.sub_item}>
                    <div className={classes.details}>
                        <b>{item.name}</b>
                        <span>{item.from} -&gt; {item.to}</span>
                        <span>{ item.time } - Ghế { item.seat } - { item.price }</span>
                        <i>{ item.date }</i>
                    </div>
                    <div className={classes.control}>
                        <button type='button'>Đã đặt</button>
                    </div>
                </div>
            })
        }
        </div>
    </div>
};

export default Activities;