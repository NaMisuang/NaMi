/**
 * @field  地图模块容器组建
 */

import React, { Component } from 'react';
import UnvMap from '../../../Componment/MapOrder/Map/UnvMap';

class MapContain extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',position:'relative'}}>
                <UnvMap />
            </div>
        )
    }
}

export default MapContain;