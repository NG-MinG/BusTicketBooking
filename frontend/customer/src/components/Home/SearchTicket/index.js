import React, { useEffect, useState } from 'react';

import classes from './SearchTicket.module.css';
import RadioButton from '../../RadioButton';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SearchIcon } from '../../../assets/svg/SearchForm/search.svg';
import TimePicker from '../../TimePicker';

const SearchTicket = () => { 
    const list_location_suggest = [
        'An Giang (CHAUDOC)',
        'An Giang (LONGXUYEN)',
        'Bạc Liêu (BACLIEU)',
        'Bến Tre (BENTRE)',
        'Cà Mau (CAMAU)',
        'Cần Thơ (CANTHO)',
        'Cao Lãnh (CAOLANH)',
        'Đồng Tháp (DONGTHAP)',
        'Hà Tiên (HATIEN)',
        'Kiên Giang (KIENGIANG)',
        'Rạch Giá (RACHGIA)',
        'TP. Hồ Chí Minh (TPHCM)',
        'Trà Vinh (TRAVINH)',
        'Vũng Tàu (VUNGTAU)'
    ];

    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [suggess_active, setSuggessActive] = useState(false);

    const dispatcher_departure = (value) => {
        setDeparture(value);
    };

    const dispatcher_arrival = (value) => {
        setArrival(value);
    };

    let dispatcher = () => {};

    const swap_location = (departure, arrival) => { 
        setDeparture(arrival);
        setArrival(departure);
    };

    useEffect(() => {
        dispatcher = dispatcher_arrival;
    }, [arrival]);

    useEffect(() => {
        dispatcher = dispatcher_departure;
    }, [departure]);

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
                        <input name='departure_location' type="text" className={classes.drop_input} placeholder='Chọn điểm đi' onFocus={() => { dispatcher = dispatcher_departure; setSuggessActive(true); }} onChange={(e) => setDeparture(e.target.value)} value={departure} />
                    </div>
                </div>
                <div className={classes.swap_icon} onClick={() => swap_location(departure, arrival)}>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </div>
                <div className={classes.arrival_location}>
                    <div className={classes.choose_title}>Điểm đến</div>
                    <div className={classes.dropdown}>
                        <input name='arrival_location' type="text" className={classes.drop_input} placeholder='Chọn điểm đến' onFocus={() => { dispatcher = dispatcher_arrival; setSuggessActive(true); }} onChange={(e) => setDeparture(e.target.value)} value={arrival} />
                    </div>
                </div>
                {suggess_active && 
                <div className={classes.suggest_dropdown}>
                    {
                        list_location_suggest.map((item, index) => 
                                <div key={`${item}_${index}`} onClick={() => dispatcher(item.split(' (')[0])} className={classes.suggest_item}>{item}</div>
                            )
                    }
                </div>
                }
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
        <div className={classes.controls}>
            <Button type='submit' className={classes.search_btn}>
                <SearchIcon />
                <span>Tìm chuyến xe</span>
            </Button>
        </div>
    </form>
}

export default SearchTicket;