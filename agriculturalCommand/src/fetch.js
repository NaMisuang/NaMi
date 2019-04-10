import axios from 'axios';
import { notification } from 'antd';
import * as fetchType from './fetchType';

/**
 * 全局配置
 */
notification.config({
    placement: 'bottomRight',
    bottom: 50,
    duration: 3,
  });


function fetch (fetchType, fetchObj) {
    let {
        method='GET',
        params = {},
        data = {},
        timeout = 120000,
    } = fetchObj;
    return new Promise(function (resolve, eject) {
        axios({
            url:fetchType,
            method:method,
            params:params,
            data:data,
            timeout:timeout,
            withCredentials:true,
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : window.sessionStorage.getItem('token')  || '',
                'cache-control' : 'no-cache',
                'Pragma' : 'no-cache',
            }
        }).then(function (response) {
            if(response) {
                if(response.data && response.data.code) {
                    let errorCode = response.data.code;
                    if(errorCode === 200) {
                        resolve(response);
                    } else {
                        notification.error({
                            key:1,
                            message:`错误码：${errorCode}`,
                            description:'网络异常'
                        })
                    }
                } else {
                    notification.error({
                        key:2,
                        message:`错误`,
                        description:'网络异常'
                    })
                }
            }
        }).catch((response)=>{
            notification.error({
                key:3,
                message:`错误`,
                description:'网络异常'
            })
        })
    })
}

/**
 * 
 * @param {登陆模块} 参数 
 */

 //获取验证码
export  function getAuthod (fetchObj) {
    return fetch(fetchType.GET_AUTHOD,fetchObj);
}

//登陆
export  function login (fetchObj) {
    return fetch(fetchType.LOGIN,fetchObj);
}