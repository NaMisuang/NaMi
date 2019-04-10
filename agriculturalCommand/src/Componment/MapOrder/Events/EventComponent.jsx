/**
 * @field  事件列表展示组建
 * 作为一个中间件将父组件查询到的数据进行处理；
 */

import React, { Component } from 'react';
import './style/EventsComponent.less'
import EventsCard from './EventCard';

class EventsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sum: 10, //今日报警数
            eventData: [],   //事件列表
        }
    }

    componentDidMount() {

    }




    componentWillReceiveProps(nextProps) {
        if (nextProps.eventData != this.state.eventData) {
            this.setState({
                eventData: nextProps.eventData
            })
        }
    }

    render() {
        const { sum, eventData } = this.state;
        return (
            <div className='EventList'>
                <div className='EventList-Header'>
                    <span> 事件列表（今日报警数：{sum}）</span>
                </div>
                <div className='EventList-Content'>
                    {
                        eventData.length > 0 ? eventData.map((item, index) => (
                            <div className='EventList-Content-events' key={index}>
                            <EventsCard
                                key={index}
                                event={item}
                            />
                            </div>
                        )) : '今日暂无报警记录'
                    }
                </div>
                <div className='EventList-Footer'>
                    <span> 更多报警记录 ></span>
                </div>
            </div>
        )
    }
}

export default EventsComponent;