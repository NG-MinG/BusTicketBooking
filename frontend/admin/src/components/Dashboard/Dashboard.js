import React from 'react';

import classes from './Dashboard.module.css';
import Calendar from '../Calendar';

const Dashboard = () => {
    return <div className={classes.main_content}>
      <h1 className={classes.dashboard_title}>Dashboard</h1>
      <div style={{display: 'flex'}}>
      <Calendar />
      </div>
    </div>;
  };
  
  export default Dashboard;
  