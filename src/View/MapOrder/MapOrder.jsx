/**
 * @field  地图指挥
 */

import React, { Component } from 'react';
import './MapOrder.less';
import MapOrderContainers from '../../Containers/MapOrder/MapOrderContainers';



class MapOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='MapOrderBox'>
                <MapOrderContainers/>
            </div>
        )
    }
}

export default MapOrder;