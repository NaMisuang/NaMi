/**
 * @field  头部
 */

import React, { Component } from 'react';
import './Header.less';
import logo from '../../Images/sAgricultural.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='HeaderBox'>
                <div className='HeaderBox-Logo'>
                    <img src={logo} alt='/' />
                </div>
                <div className='HeaderBox-Name'>
                    农灾害指挥调度系统
                </div>
                <div className='HeaderBox-Route'>
                    <ul>
                        <li>
                            <NavLink  to='/main/mapOrder' activeClassName="activeStyle"> <span className='li-span'>地图指挥</span> </NavLink >
                        </li>
                        <li>
                            <NavLink  to='/main/events' activeClassName="activeStyle"><span className='li-span'>事件库</span></NavLink >
                        </li>
                        <li>
                            <NavLink  to='/main/setting' activeClassName="activeStyle"><span className='li-span'>系统配置</span></NavLink >
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;