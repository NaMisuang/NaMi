/**
 * @field  单条事件信息
 */

import React, { Component } from 'react';
import './style.less';
import { Icon, Modal } from 'antd';
import forest from '../../../Images/forest.png';
import shuidao from '../../../Images/shuidao.png';
import EventModal from '../EventModal/EventModal';




class EventsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventCode: '',                //事件编号
            eventType: '',               //事件类型
            eventTime: '',               //选择的报警时间
            eventAddress: '',            //报警地点  
            eventAlarm: '',              //报警人姓名 
            eventProcess: '',               //当前进程 
            visible: true,               //新增modal框是否可见
            modalKey: '',                //事件录入modal唯一key值
            addOrEditFlag: true,          //事件录入还是事件编辑
            currentEditData: {},          //点击编辑时编辑的数据
            visible: false,               //删除modal框是否可见
            key: '',                         //删除modal框唯一key值
        }
    }

    componentDidMount() {
        const date = this.props.event;
        this.setState({
            eventType: date.eventType,               //事件类型
            eventTime: date.eventTime,               //选择的报警时间
            eventAddress: date.eventAddress,            //报警地点  
            eventAlarm: date.eventAlarm,              //报警人姓名 
            eventProcess: date.eventProcess,             //当前进程
            eventCode: date.eventCode,               //事件编号
        })
    }
    //图标
    whatIamg(id) {
        switch (id) {
            case '1':
                return forest;
            case '2':
                return shuidao;
            default:
                return forest;
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

    //当前进程
    whatProcess(id) {
        switch (id) {
            case '1':
                return '待确认';
            case '2':
                return '处理中';
            case '3':
                return '处理完成';
            default:
                return '处理完成';
        }
    }

    //进程背景颜色
    whtaColor(id) {
        switch (id) {
            case '1':
                return 'yellow';
            case '2':
                return '#ADFF2F';
            case '3':
                return 'green';
            default:
                return '处理完成';
        }
    }

    //转化时间
    changeTime(time) {
        let unixTimestamp = new Date(time * 1000)
        return unixTimestamp.toLocaleString()
    }

    //展示事件详情
    showEvnetDetail = () => {
        this.props.showEventInfo(this.props.event);
    }

    //删除modal框可见
    showDeleteModal = () => {
        this.setState({
            visible: true,
            key: new Date().valueOf(),
        })
    }
    //删除事件
    deleteEvnet = () => {
        this.setState({
            visible: false,
            key: '',
        }, () => {
            this.props.deleteEventOk(this.props.event);
        })
    }
    //取消删除
    cancleDelete = () => {
        this.setState({
            visible: false,
            key: '',
        })
    }

    render() {

        const { eventCode, eventType, eventTime, eventAlarm, eventAddress, eventProcess, visible,key } = this.state;

        return (
            <div className='EventsListBox'>
                <img src={this.whatIamg(eventType)} alt="" className='EventsListBox-img' />
                <span className='EventsListBox-type eventFont'>{this.whatType(eventType)}</span>
                <span className='EventsListBox-user eventFont'><Icon type="user" />{eventAlarm}</span>
                <span className='EventsListBox-time eventFont'><Icon type="dashboard" />{this.changeTime(eventTime)}</span>
                <span className='EventsListBox-address eventFont'><Icon type="thunderbolt" />  {eventAddress}</span>
                <span className='EventsListBox-status' style={{ background: this.whtaColor(eventProcess) }}>{this.whatProcess(eventProcess)}</span>
                <span className='EventsListBox-delete' onClick={this.showDeleteModal}><Icon type="delete" /> &nbsp;删除</span>
                <span className='EventsListBox-detail' onClick={this.showEvnetDetail}><Icon type="zoom-in" />&nbsp;查看详情</span>
                <Modal
                    key={key}
                    visible={visible}
                    onOk={this.deleteEvnet}
                    onCancel={this.cancleDelete}
                >
                    是否删除事件编号为<span style={{color:'red',fontSize:'16px'}}>{eventCode}</span>的数据？
                </Modal>
            </div>
        )
    }
}

export default EventsList;