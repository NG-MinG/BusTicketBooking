import React, { useState } from 'react';

import busLogo from '../../assets/images/logo.png';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import classes from './LoginForm.module.css';

const LoginForm = ({ closeForm }) => {

    const [hasAccount, setHasAccount] = useState(true);

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
                    <input type='text' name='phonenumber' placeholder='Nhập số điện thoại' required />
                </label>
                <label className={classes.login_group}> 
                    <b>Mật khẩu</b>
                    <input type='password' name='password' placeholder='Nhập mật khẩu' required />
                </label>
                {
                    !hasAccount && <label className={classes.login_group}> 
                        <b>Xác nhận mật khẩu</b>
                        <input type='password' name='confirm-password' placeholder='Xác nhận mật khẩu' required />
                    </label>
                }
                <label className={classes.login_group_checkbox}>
                    <input type='checkbox' value='register' checked={!hasAccount} onChange={(e) => setHasAccount(!e.target.checked)} />
                    <span>Chưa có tài khoản</span>
                </label>
                <Button type='submit' className={classes.submit_btn}>Tiếp tục</Button>
            </form>
            <div className={classes.login_form_footer}>
                <strong>* Lưu ý: <br />Hệ thống sẽ tự động đăng ký tài khoản nếu khách hàng chưa có tài khoản !</strong>
            </div>
        </div>
    </>
};

export default LoginForm;