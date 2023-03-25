import React from 'react';

import headerImage from '../../assets/images/Home/header.png';

import classes from './Home.module.css';

const Home = () => {
    return <>
        <header>
            <img className={classes.header_image} src={headerImage} alt='header' />
        </header>
        <main className={classes.main}>
            
        </main>
    </>;
}

export default Home;