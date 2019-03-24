/**
 * @field  主页面
 */

import React, { Component } from 'react';
import './Login.less';
import { Button } from 'antd';



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    login = () => {
        window.sessionStorage.setItem('isLogin',true);
        this.props.history.push('./main');
    }
    render() {
        return (
            <div className='LoginBox'>
                hello
                <Button onClick={this.login} >登陆</Button>
            </div>
        )
    }
}

export default Login;