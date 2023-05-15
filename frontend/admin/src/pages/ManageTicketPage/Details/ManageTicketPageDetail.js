import React from 'react';

import classes from './ManageTicketPageDetail.module.css';
import AnalystCard from '../../../components/Dashboard/AnalystCard';
import ChairLayout from '../../../components/BusLayout/ChairLayout/ChairLayout';
import TicketCard from '../../../components/TicketCard/TicketCard';

const ManageTicketPageDetail = () => {

    const ticket ={
        "_id": "645f6d0ba6a76dbf24387f4c",
        "date": new Date("2023-04-28T07:14:05.738Z"),
        "departure_time": "16:30",
        "arrival_time": "21:29",
        "departure_city": "TP.Hồ Chí Minh",
        "arrival_city": "Tri Tôn",
        "ticket_type": 1,
        "price": 180000,
        "travel_time": 17940,
        "distance": 232000,
        "departure_depot": "BX Miền Tây",
        "arrival_depot": "BX Tri Tôn",
        "bus_type": "Giường",
        "booked_seats": [
            "A01",
            "A02",
            "A01",
            "A02",
            "A03",
            "A06",
            "A05",
            "A04",
            "A09",
            "A08",
            "A07",
            "A10",
            "A11",
            "A12"
        ],
        "reserved_seats": 0,
        "total_seats": 34,
    }

    return (<>
        <div className={classes.main_content}>
            <div className={classes.list_analyst}>
                <AnalystCard title='Số vé bán ra' value='23 / 34 VÉ' yellow className={classes.analyst_card} />
                <AnalystCard title='Doanh thu' value='3.795.000 vnd' blue className={classes.analyst_card} />
                <AnalystCard title='Khách hàng' value='14 KH' green className={classes.analyst_card} />
                <AnalystCard title='Số vé bị hủy / trả' value='03 vé' red className={classes.analyst_card} />
            </div>
            <div className={classes.ticket_info}>
                <div className={classes.ticket_info_left}>
                    <TicketCard ticket={ticket} />
                </div>
                <div className={classes.ticket_info_seats}>
                    <div className={classes.seats_title}>
                        <span>Tầng dưới</span>
                        <span>Tầng trên</span>
                    </div>
                    <ChairLayout bookedSeats={ticket.booked_seats} choosingSeats={[]} />
                </div>
            </div>
        </div>
    </>);
};

export default ManageTicketPageDetail;