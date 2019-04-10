/**
 * @field  事件库
 */

import React, { Component } from 'react';
import './Events.less';
import EventsContain from '../../Containers/Events/EventsContain';



class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='EventsBox'>
                <EventsContain/>
            </div>
        )
    }
}

export default Events;