/**
 * @field  事件列表容器组建
 */

import React, { Component } from 'react';
import EventsComponent from '../../../Componment/MapOrder/Events/EventComponent';
import './style.less';

class EventsContain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventData:[],   //查询到的事件列表
        }
    }

    componentDidMount () {
        /**
         * 默认查询当天十条数据
         */
        //假数据
        let data = [];
        for(let i=0;i<10;i++) {
            data.push({
                eventsId:i,
                addres:`泰安-${i}`,
                descript:'现场伤亡重大，请速速支援',
                eventsType:`${i%2===0?'1':'2'}`,
                alarmTime:`${new Date().toString()}`,
                alarmUser:'小刘',
            })
        }
        this.setState({
            eventData:data,
        })
    }

    render() {
        const { eventData } = this.state;
        return (
            <div className='EventsContainBOX'>
                <EventsComponent
                eventData={eventData}
                />
            </div>
        )
    }
}

export default EventsContain;