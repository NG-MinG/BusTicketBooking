import React from 'react';

import busLogo from '../../assets/images/logo.png';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import classes from './LoginForm.module.css';

const LoginForm = ({ closeForm }) => {
    return <>
        <div className={classes.login_form_backdrop}></div>
        <div className={classes.login_form}>
            <button type='button' className={classes.close_btn} onClick={closeForm}><FontAwesomeIcon icon={faClose} /></button>
            <div className={classes.login_form_heading}>
                <img src={busLogo} alt="logo" width={22} />
                <span>Bus ticket booking</span>
            </div>
            <form className={classes.login_form_main} action='' method='POST'>
                <label className={classes.login_group}>
                    <b>Số điện thoại</b>
                    <input type='text' name='phonenumber' placeholder='Nhập số điện thoại' />
                </label>
                <label className={classes.login_group}>
                    <b>Mật khẩu</b>
                    <input type='password' name='password' placeholder='Nhập mật khẩu' />
                </label>
                <Button className={classes.submit_btn}>Tiếp tục</Button>
            </form>
        </div>
    </>
};

export default LoginForm;