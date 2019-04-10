/**
 * @field  系统配置
 */

import React, { Component } from 'react';
import './Settings.less';
import SettingRoute from '../../Containers/Settings/SettingRoute/SettingRoute';



class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='SettingsBox'>
                <SettingRoute />
            </div>
        )
    }
}

export default Settings;