import React, { useState } from 'react';

import classes from './Dashboard.module.css';
import Calendar from '../Calendar';
import AnalystCard from './AnalystCard';
import Activities from './Activities';
import Chart from 'react-apexcharts'

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

    return <div className={classes.main_content}>
      {/* <h1 className={classes.dashboard_title}>Dashboard</h1> */}
      <div className={classes.dashboard_section}>
        <Calendar />
        <div className={classes.dashboard_analyst}>
          <div className={classes.dashboard_analyst_container}>
            <AnalystCard title={'Doanh thu'} value={'100.000.000 đồng'} yellow />
            <AnalystCard title={'Loại xe'} value={'50'} blue />
          </div>
          <div className={classes.dashboard_analyst_container}>
            <AnalystCard title={'Khách hàng'} value={'1000'} green />
            <AnalystCard title={'Số vé bán ra'} value={'5000'} red />
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
  