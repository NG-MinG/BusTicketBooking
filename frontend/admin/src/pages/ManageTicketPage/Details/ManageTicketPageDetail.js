import React, { useEffect, useState } from 'react';

import classes from './ManageTicketPageDetail.module.css';
import AnalystCard from '../../../components/Dashboard/AnalystCard';
import ChairLayout from '../../../components/BusLayout/ChairLayout/ChairLayout';
import TicketCard from '../../../components/TicketCard/TicketCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ManageTicketPageDetail = () => {

    const ticketId = useParams().id;
    const [ticket, setTicket] = useState({});

    useEffect(() => {
    
        axios.get(`${process.env.REACT_APP_API_HOST}/admin/ticket-managing/details/${ticketId}`)
        .then((res) => {
            setTicket(res.data.ticket);
        })
        .catch(err => console.log(err));
    
    }, [ticketId]);

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
                    <table className={classes.ticket_info_table}>
                        <thead>
                            <th>Thời gian</th>
                            <th>Họ tên</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>10 : 14</div>
                                    <div>24 / 03 / 2022</div>
                                </td>
                                <td>Nguyễn Văn An</td>
                                <td>3 vé</td>
                                <td className={classes.green_price}>+ 495.000 VND</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.ticket_info_seats}>
                    <div className={classes.seats_title}>
                        <span>Tầng dưới</span>
                        <span>Tầng trên</span>
                    </div>
                    { Object.keys(ticket).length > 0 && <ChairLayout bookedSeats={ticket.booked_seats} choosingSeats={[]} /> }
                </div>
            </div>
        </div>
    </>);
};

export default ManageTicketPageDetail;