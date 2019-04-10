/**
 * @field  事件库容器组建
 */

import React, { Component } from 'react';
import './style.less';
import { Menu, Input, DatePicker, Select, Button,Pagination,Spin, Icon, notification } from 'antd';
import EventsList from '../../Componment/Events/EventsList/EventsList';
import EventModal from '../../Componment/Events/EventModal/EventModal';
import moment from 'moment'

const Option = Select.Option;
notification.config({
    placement: 'bottomRight',
    bottom: 50,
    duration: 2,
  });

class EventsContain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventsList: [],             //查询到的所有事件
            currentMenu: '1',            //默认选中的或查询的事件列表
            eventType: '',               //事件类型
            eventTime: '',               //选择的报警时间
            eventAddress: '',            //报警地点  
            eventAlarm: '',              //报警人姓名 
            eventProcess:'',            //当前事件进程   
            total:101,                   //查询到的总数 
            currentPage:1,               //当前页数 
            loading:true,                //加载状态
            visible: false,               //新增modal框是否可见
            modalKey: '',                //事件录入modal唯一key值
            addOrEditFlag:true,          //事件录入还是事件编辑
            currentEditData:{},          //点击编辑时编辑的数据
        }
    }

    componentDidMount() {
        let data = [];
        for (let index = 0; index < 20; index++) {
            data.push({
                key: index,
                eventId:index,
                eventCode:`2019000${index+1}`,
                eventType: `${index%2 == 0 ? '1' : '2'}`,
                eventProcess:`${index%2 == 0 ? '1' : '2'}`,
                eventTime:`${moment().valueOf()}`,
                eventAddress:'济南',
                eventAlarm:'刘小玉',
                eventDescript:'发生重大火灾！',
                eventPosition:'117.23, 35.82',
            })
        }
        const _this = this;
        setTimeout(function () {
            _this.setState({
                eventsList: data,
                loading:false,
            })
        }, 3000)

    }

    //根据不同条件查询事件列表
    querEvents = () => {

    }

    //导航栏触发,查询不同的事件
    handleClick = (e) => {
        this.setState({
            currentMenu: e.key,
        });
    }

    //事件类型变化回调
    eventTypeChange = (value) => {
        this.setState({
            eventType: value,
        })
    }

    //选择报警时间回调
    timeChange = (date, dateString) => {
        console.log(date, dateString);
    }

    //报警地址输入框
    addressChange = (e) => {
        this.setState({
            eventAddress: e.target.value,
        })
    }

    //报警人输入框
    alarmChange = (e) => {
        this.setState({
            eventAlarm: e.target.value,
        })
    }

    /**
     * 分页改变时调用该函数
     * @param page  当前页码
     * @param pageSize 每页的规格
     */
    pageChange = (page) => {
        this.setState({
            currentPage: page,
        })
    }

    //清空所有输入框
    clearAll = () => {
        this.setState({
            eventType: '',               //事件类型
            eventTime: '',               //选择的报警时间
            eventAddress: '',            //报警地点  
            eventAlarm: '',              //报警人姓名
        })
    }

    //弹出事件录入modal框
    addEvents = () => {
        this.setState({
            visible: true,
            modalKey: (new Date()).valueOf(),
            addOrEditFlag:true,
        })
    }

    //编辑事件modal框
    showEventInfo = (data) => {
        this.setState({
            visible: true,
            modalKey: (new Date()).valueOf(),
            addOrEditFlag:false,
            currentEditData:data,
        })
    }
    //确定添加事件
    addData = () => {
        this.setState({
            visible: false,
            modalKey: '',
            addOrEditFlag:true,
        })
        notification.success({
            message: '事件录入成功',
            description: '成功添加一条数据',
        })
    }

    //确定编辑事件
    editData = () => {
        this.setState({
            visible: false,
            modalKey: '',
            addOrEditFlag:true,
        })
        notification.success({
            message: '事件编辑成功',
            description: '成功编辑一条数据',
        })

    }

    //关闭modal框
    colseModal= () => {
        this.setState({
            visible: false,
            modalKey: '',
            addOrEditFlag:true,
        })
    }

    //删除某个事件
    deleteEventOk = (data) => {
        
    }

    render() {
        const { eventsList, currentMenu, eventAddress, eventAlarm,total,currentPage ,loading ,visible,modalKey, addOrEditFlag,currentEditData} = this.state;
        return (
            <div className='EventsContainBox'>
                <div className='EventsContainBox-header'>
                    <div className='EventsContainBox-header-menu'>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[currentMenu]}
                            mode="horizontal"
                        >
                            <Menu.Item key="0">全部</Menu.Item>
                            <Menu.Item key="1">待确认</Menu.Item>
                            <Menu.Item key="2">处理中</Menu.Item>
                            <Menu.Item key="3">处理完成</Menu.Item>
                        </Menu>
                    </div>
                    <div className='EventsContainBox-header-query'>
                        <div className='EventsContainBox-header-query-type'>
                            <div className='eventsQuerySpan'>事件类型：</div>
                            <div className='eventsQueryInput'>
                                <Select placeholder="请选择事件类型" style={{ width: 200 }} onChange={this.eventTypeChange}>
                                    
                                    <Option value="1">森林灾情</Option>
                                    <Option value="2" >农作物灾情</Option>
                                    <Option value="3">人员报警</Option>
                                    <Option value="4">其他灾情</Option>
                                </Select></div>
                        </div>
                        <div className='EventsContainBox-header-query-type'>
                            <div className='eventsQuerySpan'>报警时间：</div>
                            <div className='eventsQueryInput'><DatePicker placeholder="请选择报警时间" renderExtraFooter={() => ''} showTime onChange={this.timeChange} /></div>
                        </div>
                        <div className='EventsContainBox-header-query-type'>
                            <div className='eventsQuerySpan'>  事件地点：</div>
                            <div className='eventsQueryInput'><Input placeholder="请输入事件地点" value={eventAddress} onChange={this.addressChange} /></div>
                        </div>
                        <div className='EventsContainBox-header-query-type'>
                            <div className='eventsQuerySpan'> 报警人：</div>
                            <div className='eventsQueryInput'><Input placeholder="请输入上报人姓名" value={eventAlarm} onChange={this.alarmChange} /></div>
                        </div>
                        <Button type="primary" onClick={this.querEvents} style={{float:'right',marginRight:'20px',marginTop:'10px'}}>查询</Button>
                        <Button onClick={this.addEvents} style={{float:'right',marginRight:'10px',marginTop:'10px'}}><Icon type="plus-circle" theme="twoTone" />事件录入</Button>
                    </div>
                </div >
                <div className='EventsContainBox-events'>
                <Spin spinning={loading} size='large' tip="正在加载中......">

                    {eventsList.map((item,index) => (
                        <div className='event' key={index}>
                            <EventsList 
                            event={item}
                            key={index}
                            showEventInfo={this.showEventInfo}
                            deleteEventOk={this.deleteEventOk}
                            />
                             </div>
                    ))
                    }

                </Spin>
                </div>
                <div className='EventsContainBox-footer'>
                <Pagination
                                className='EventsContainBox-footer-Pagination'
                                total={total}
                                current={currentPage}
                                showTotal={total => `共 ${total} 条`}
                                onChange={this.pageChange}
                            />
                </div>
                {visible && <EventModal
                    visible={visible}
                    addOrEditFlag={addOrEditFlag}
                    modalKey={modalKey}
                    addData={this.addData}
                    editData={this.editData}
                    colseModal={this.colseModal}
                    currentEditData={currentEditData}
                />
                }
            </div >
        )
    }
}

export default EventsContain;