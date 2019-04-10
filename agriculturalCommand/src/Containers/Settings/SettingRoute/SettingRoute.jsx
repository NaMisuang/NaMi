import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './SettingRoute.less';
import Orgnization from '../SettingType/Orgnization';
import UserManage from '../SettingType/UserManange';
import RoleManage from '../SettingType/RoleManage';
import orgnazition from '../../../Images/orgnazition.png';
import usermanage from '../../../Images/usermanage.png';
import rolemanage from '../../../Images/rolemanage.png';

class SettingRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='SettingRouteBox'>
                <div className='SettingRouteBox-SettingMenu'>
                    <ul>
                        <li>
                            <NavLink to='/main/setting/orgnization' > <img src={orgnazition} alt=""/> <span className='li-span'>组织管理</span> </NavLink >
                        </li>
                        <li>
                            <NavLink to='/main/setting/userManage' ><img src={usermanage} alt=""/><span  className='li-span'>用户管理</span></NavLink >
                        </li>
                        <li>
                            <NavLink to='/main/setting/roleManage' ><img src={rolemanage} alt=""/><span className='li-span'>角色管理</span></NavLink >
                        </li>
                    </ul>
                </div>
                <div className='SettingRouteBox-SettingBox'>
                    <Switch >
                        <Route path='/main/setting' exact component={Orgnization}></Route>
                        <Route path='/main/setting/orgnization' component={Orgnization} />
                        <Route path='/main/setting/userManage' component={UserManage} />
                        <Route path='/main/setting/roleManage' component={RoleManage} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default SettingRoute;