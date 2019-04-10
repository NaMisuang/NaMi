/**
 * @field  事件卡片展示组建
 */

import React, { Component } from 'react';
import './style/EventsCard.less';

class EventsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addres: '', //时间地点
            descript: '',
            eventsType: '',
            alarmTime: '',
            alarmUser: '',
        }
    }

    componentDidMount() {
        const date = this.props.event;
        this.setState({
            addres: date.addres, //时间地点
            descript: date.descript,
            eventsType: date.eventsType,
            alarmTime: date.alarmTime,
            alarmUser: date.alarmUser,
        })
    }

    render() {
        const { addres, descript, eventsType, alarmTime, alarmUser, } = this.state;
        return (
            <div className='eventsCardBox'>
                <div className='eventsCardBox-adress'>
                    <span className='eventsCardBox-adress-color' style={{ background: `${this.whtaColor(eventsType)}` }} />
                    <span className='eventsCardBox-adress-span eventFont'>{addres}</span>
                </div>
                <div className='eventsCardBox-common eventFont' style={{ fontSize: '14px', fontWeight: '700' }}>
                    {descript}
                </div>
                <div className='eventsCardBox-common eventFont'>
                    事件类型：{this.whatType(eventsType)}
                </div>
                <div className='eventsCardBox-common eventFont'>
                    报警时间：{alarmTime}
                </div>
                <div className='eventsCardBox-common eventFont'>
                    报警人：{alarmUser}
                </div>
                <div className='eventsCardBox-process'>
                    <span className='eventsCardBox-process-span eventFont'>当前流程：带确认；</span>
                </div>
                <div className='eventsCardBox-fengexian'/>
                <div className='eventsCardBox-info'>
                    <span>查看详情</span>
                </div>
            </div>
        )
    }
    //进程背景颜色
    whtaColor(id) {
        switch (id) {
            case '1':
                return 'yellow';
            case '2':
                return 'blue';
            case '3':
                return 'orange';
            case '4':
                return 'green';
            default:
                return 'green';
        }
    }

    //事件类型
    whatType(id) {
        switch (id) {
            case '1':
                return '森林灾情';
            case '2':
                return '农作物灾情';
            case '3':
                return '人员报警';
            case '4':
                return '其他灾情';
            default:
                return '其他灾情';
        }
    }
}



export default EventsCard;