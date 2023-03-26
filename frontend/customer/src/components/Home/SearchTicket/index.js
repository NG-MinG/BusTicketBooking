import React from 'react';

import classes from './SearchTicket.module.css';
import RadioButton from '../../RadioButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TimePicker from '../../TimePicker';

const SearchTicket = () => { 
    return <form className={classes.search_form} autoComplete='off'>
        <div className={classes.radio_group}>
            <RadioButton name='ticket_type' defaultChecked value='1d' text='Một chiều' />
            <RadioButton name='ticket_type' value='2d' text='Khứ hồi' />
        </div>
        <div className={classes.trip_group}>
            <div className={classes.location_group}>
                <div className={classes.departure_location}>
                    <div className={classes.choose_title}>Điểm đi</div>
                    <div className={classes.dropdown}>
                        <input name='departure_location' type="text" className={classes.drop_input} placeholder='Chọn điểm đi' />
                    </div>
                </div>
                <div className={classes.swap_icon}>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </div>
                <div className={classes.arrival_location}>
                    <div className={classes.choose_title}>Điểm đến</div>
                    <div className={classes.dropdown}>
                        <input name='arrival_location' type="text" className={classes.drop_input} placeholder='Chọn điểm đến' />
                    </div>
                </div>
            </div>
            <div className={classes.time_group}>
                <div className={classes.time_group_child}>
                    <div className={classes.departure_time}>
                        <div className={classes.choose_title}>Ngày đi</div>
                        <div className={classes.time_choosen}>
                            <TimePicker />
                        </div>
                    </div>
                    <div className={classes.line_spec}></div>
                    <div className={classes.arrival_time}>
                        <div className={classes.choose_title}>Ngày về</div>
                        <div className={classes.time_choosen}>
                            <TimePicker disable />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </form>
}

export default SearchTicket;