/**
 * @field  中间
 */

import React, { Component } from 'react';
import './Main.less';
import { Switch , Route } from 'react-router-dom';
import MapOrder from '../../View/MapOrder/MapOrder';
import Events from '../../View/Events/Events';
import Settings from '../../View/Settings/Settings';



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='MainBox'>
                <Switch >
                    <Route path='/main/mapOrder' component={MapOrder} />
                    <Route path='/main/events' component={Events} />
                    <Route path='/main/setting' component={Settings} />
                </Switch>
            </div>
        )
    }
}

export default Main;