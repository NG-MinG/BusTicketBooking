import React, { useEffect, useState } from 'react';

import classes from './Dashboard.module.css';
import Calendar from '../Calendar';
import {toPriceFormat} from '../../utils/format'
import AnalystCard from './AnalystCard';
import Activities from './Activities';
import Chart from 'react-apexcharts'
import axios from 'axios';

const Dashboard = () => {

  const [series, setSeries] = useState([
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]);
  
  const [options, setOption] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  });

  const [analystData, setAnalystData] = useState({
    total_price: 0,
    total_bus_type: 0,
    total_customer: 0,
    total_ticket: 0
  });

  const [queryDate, setQueryDate] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_HOST}/admin/analyst?q=${queryDate}`)
    .then (res => {
      setAnalystData(res.data);
    })
    .catch(err => console.log(err));
  }, [queryDate]);

  // console.log(queryDate);

    return <div className={classes.main_content}>
      {/* <h1 className={classes.dashboard_title}>Dashboard</h1> */}
      <div className={classes.dashboard_section}>
        <Calendar onChange={setQueryDate} />
        <div className={classes.dashboard_analyst}>
          <div className={classes.dashboard_analyst_container}>
            <AnalystCard title={'Doanh thu'} value={`${toPriceFormat(analystData.total_price)}đ`} yellow />
            <AnalystCard title={'Loại xe'} value={`${analystData.total_bus_type}`} blue />
          </div>
          <div className={classes.dashboard_analyst_container}>
            <AnalystCard title={'Khách hàng'} value={`${analystData.total_customer}`} green />
            <AnalystCard title={'Số vé bán ra'} value={`${analystData.total_ticket}`} red />
          </div>
        </div>
      </div>
      <div className={classes.dashboard_section}>
        <Activities />
        <Chart options={options} series={series} type="area" height={350} width={710} />
      </div>
    </div>;
  };
  
  export default Dashboard;
  