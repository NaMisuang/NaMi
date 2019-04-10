import React, { Component } from 'react';
import './style.less';
import { Modal, Input, Select, DatePicker } from 'antd';
import moment from 'moment';

const Option = Select.Option;
const { TextArea } = Input;

class EventModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            type: '',
            time: '',
            user: '',
            address: '',
            position: '',   //坐标
            descript: '',
        }
    }

    componentDidMount() {
        /**
         * 首先判断是新增还是编辑
         * 如果是新增弹出框,则正常显示
         * 否则显示编辑框
         */
        if (this.props.addOrEditFlag) {
            this.clearAllInput();
        } else {
            const record = this.props.currentEditData;
            console.log(record)
            this.setState({
                code: record.eventCode,
                type: record.eventType,
                time: moment(record.eventTime),
                // time:moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                user: record.eventAlarm,
                address: record.eventAddress,
                position: record.eventPosition,   //坐标
                descript: record.eventDescript,
            })
        }
    }

    //事件编号输入框
    codeChange = (e) => {
        this.setState({
            code: e.target.value,
        })
    }

    //事件类型变化回调
    eventTypeChange = (value) => {
        this.setState({
            type: value,
        })
    }

    //选择报警时间回调
    timeChange = (date, dateString) => {
        console.log(date, dateString);
    }

    //报警人输入框
    userChange = (e) => {
        this.setState({
            user: e.target.value,
        })
    }

    //地址输入框
    addressChange = (e) => {
        this.setState({
            user: e.target.value,
        })
    }

    //描述人输入框
    descriptChange = (e) => {
        this.setState({
            descript: e.target.value,
        })
    }

    //确定按钮
    modalOk = () => {
        if (this.props.addOrEditFlag) {
            let data = {}
            this.props.addData(data)
        } else {
            let data = {}
            this.props.editData(data)
        }
        this.clearAllInput();
    }

    //modal取消按钮
    colseModal = () => {
        this.props.colseModal();
        this.clearAllInput();
    }

    clearAllInput = () => {
        this.setState({
            code: '',
            type: '',
            time: '',
            user: '',
            address: '',
            position: '',   //坐标
            descript: '',
        })
    }
    render() {
        const { code, type, time, user, address, position, descript, } = this.state;
        return (
            <Modal
                key={this.props.modalKey}
                visible={this.props.visible}
                title={this.props.addOrEditFlag ? '事件录入' : '编辑事件'}
                maskClosable={false}
                cancelText='取消'
                okText='确定'
                onOk={this.modalOk}
                onCancel={this.colseModal}
                width='610px'
            >
                <div className='EventsModalBox'>
                    <div className='EventsModalBox-left'>
                        <div className='EventsModalBox-left-span'>
                            事件编号：
                        </div>
                        <div className='EventsModalBox-left-input'>
                            <Input placeholder='请输入事件编号' value={code} onChange={this.codeChange} />
                        </div>
                    </div>
                    <div className='EventsModalBox-right'>
                        <div className='EventsModalBox-right-span'>
                            事件类型：
                        </div>
                        <div className='EventsModalBox-right-input'>
                            <Select placeholder="请选择事件类型" style={{ width: 200 }} value={type} onChange={this.eventTypeChange} style={{width:'100%'}}>
                                <Option value="1">森林灾情</Option>
                                <Option value="2" >农作物灾情</Option>
                                <Option value="3">人员报警</Option>
                                <Option value="4">其他灾情</Option>
                            </Select>
                        </div>
                    </div>
                    <div className='EventsModalBox-left'>
                        <div className='EventsModalBox-left-span'>
                            报警时间：
                        </div>
                        <div className='EventsModalBox-left-input'>
                            <DatePicker placeholder="请选择报警时间" renderExtraFooter={() => ''} value={time} showTime onChange={this.timeChange} style={{width:'100%'}}/>
                        </div>
                    </div>
                    <div className='EventsModalBox-right'>
                        <div className='EventsModalBox-right-span'>
                            报警人：
                        </div>
                        <div className='EventsModalBox-right-input'>
                            <Input placeholder='请输入报警人' value={user} onChange={this.userChange} />
                        </div>
                    </div>
                    <div className='EventsModalBox-address'>
                        <div className='EventsModalBox-address-span'>
                            事件地址：
                        </div>
                        <div className='EventsModalBox-address-input'>
                            <Input placeholder='请输入事件地址' value={address} onChange={this.addressChange} />
                        </div>
                    </div>
                    <div className='EventsModalBox-map'>
                        这里是地图
                    </div>
                    <div className='EventsModalBox-descript'>
                        <div className='EventsModalBox-descript-span'>
                            事件描述：
                        </div>
                        <div className='EventsModalBox-descript-input'>
                            <TextArea placeholder='请输入事件描述' value={descript} onChange={this.descriptChange}  rows={3.5}/>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default EventModal;