/**
 * @field  地图指挥容器组建
 */

import React, { Component } from 'react';
import './MapOrderContainers.less'
import EventsContain from './Events/EventsContain';
import MapContain from './Map/MapContain';

class MapOrderContainers extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='MaporderCotainBox'>
                <div className='MaporderCotainBox-Events'>
                    <EventsContain />
                </div>
                <div className='MaporderCotainBox-Map'>
                    <MapContain/>
                </div>
            </div>
        )
    }
}

export default MapOrderContainers;