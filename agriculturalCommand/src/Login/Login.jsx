/**
 * @field  主页面
 */

import React, { Component } from 'react';
import './Login.less';
import { Button, Input, Checkbox } from 'antd';



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',       //用户名
            passwd: '',          //密码
            remberPasswdFlag: false, //是否记住密码
        }
    }

    componentDidMount() {
        /**
         * 从缓存中读出记住的用户名和密码
         */
        this.setState({
            userName: this.getCookie('userName'),       //用户名
            passwd: this.getCookie('passwd'),          //密码
            remberPasswdFlag: this.getCookie('remberPasswdFlag'), //是否记住密码
        })
    }

    //用户名改变
    userNameChange = (e) => {
        this.setState({
            userName: e.target.value,
        })
    }

    //密码改变
    passwdChange = (e) => {
        this.setState({
            passwd: e.target.value,
        })
    }

    //记住密码改变
    remberPasswdChange = (e) => {
        let remberPasswdFlag = !this.state.remberPasswdFlag
        this.setState({
            remberPasswdFlag: remberPasswdFlag,
        })
    }

    //确定登陆
    login = () => {
        /**
         * 首先根据是否选中记住密码然后选择是否将用户名以及密码放到缓存中
         */
        this.setCookie('userName',this.state.userName,30);
        this.setCookie('passwd',this.state.passwd,30);
        this.setCookie('remberPasswdFlag',this.state.remberPasswdFlag,30);
        window.sessionStorage.setItem('isLogin', true);
        this.props.history.push('./main/mapOrder');
    }

    //重置用户名和密码
    resetAll = () => {
        this.setState({
            userName: '',       //用户名
            passwd: '',          //密码
        })
    }

    //创建cookie
    setCookie = (c_name, value, expiredays) => {
        let exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    }

    //读取cookie
    getCookie = (c_name) => {
        if (document.cookie.length > 0) {
            let c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                let c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }
    render() {
        const { userName, passwd, remberPasswdFlag } = this.state;
        return (
            <div className='LoginBox'>
                <div className='LoginBox-login'>
                    <div className='LoginBox-login-img' />
                    <div className='LoginBox-login-settingName'>
                        农灾害指挥调度系统
                    </div>
                    <div className='LoginBox-login-common' style={{ marginTop: '40px' }}>
                        <div className='LoginBox-login-common-span'>
                            用户名：
                        </div>
                        <div className='LoginBox-login-common-input'>
                            <Input value={userName} onChange={this.userNameChange} placeholder='请输入用户名' />
                        </div>
                    </div>
                    <div className='LoginBox-login-common'>
                        <div className='LoginBox-login-common-span'>
                            密码：
                        </div>
                        <div className='LoginBox-login-common-input'>
                            <Input.Password value={passwd} onChange={this.passwdChange} placeholder='请输入密码' />
                        </div>
                    </div>
                    <Checkbox checked={remberPasswdFlag} onChange={this.remberPasswdChange} className='LoginBox-login-checkbox'>记住密码</Checkbox>
                    <Button onClick={this.login} type="primary" className='LoginBox-login-button'>登陆</Button>
                    <Button onClick={this.resetAll} className='LoginBox-login-button'>重置</Button>
                    <div className='LoginBox-login-tip'>
                        <span>注：首次登陆请使用admin账号！</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;