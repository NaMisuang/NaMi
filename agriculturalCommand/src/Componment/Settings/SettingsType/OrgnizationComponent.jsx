/**
 * @field  组织管理展示性组建
 */

import React, { Component } from 'react';
import OrgnizationTree from '../OrgnizationTree/OrgnizationTree';
import '../../../Style/settingTypes.less';
import { Button, Table, Pagination, Spin } from 'antd';
import OrgModal from '../settingModal/OrgModal';

class OrgnizationComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,      //新增modal框是否可见
            addOrEditFlag: true, //新增还是编辑,
            modalKey: '',        //modal框唯一的key值
            currentEditData: {}, //点击编辑时的数据
            scrollY:window.innerHeight-300,           //table初始大小
        }
        this.columns = [{
            title: '组织名称',
            dataIndex: 'orgName',
            width: 150
        }, {
            title: '组织地点',
            dataIndex: 'orgAddress',
            width: 180
        }, {
            title: '组织描述',
            dataIndex: 'orgDescript',
            width: 200
        }, {
            title: '操作',
            dataIndex: 'orgData',
            width: 120,
            render: (text, record) => {
                return (
                    <span>
                        <p onClick={() => this.showEdit(record)} >编辑</p>
                        <p onClick={() => this.deleteData(record)} style={{ marginLeft: 8 }}>删除</p>
                    </span>
                )
            }
        }];
    }

    componentDidMount() {
        //监听窗口大小改变,改变table页
        window.addEventListener('resize', this.handleResize)        
    }

    //监听table变化
    handleResize = () => {
        this.setState({
            scrollY:window.innerHeight-300,
        })
    }

    //打开新增modal
    showAdd = () => {
        this.setState({
            visible: true,
            addOrEditFlag: true,
            modalKey: (new Date()).valueOf(),
        })
    }

    //确定新增数据
    addData = (data) => {
        this.setState({
            visible: false,
            addOrEditFlag: true,
            modalKey: (new Date()).valueOf(),
        }, () => {
            this.props.addData(data);
        })
    }

    //编辑modal框展示
    showEdit = (record) => {
        this.setState({
            visible: true,
            addOrEditFlag: false,
            modalKey: (new Date()).valueOf(),
            currentEditData: record,
        })
    }

    //确定编辑数据
    editData = (data) => {
        this.setState({
            visible: false,
            addOrEditFlag: true,
            modalKey: (new Date()).valueOf(),
            currentEditData: {},
        }, () => {
            this.props.editData(data);
        })
    }

    //单条删除
    deleteData = (record) => {
        let data = {}
        this.props.deleteData(data);
    }

    //刷新数据
    updataData = () => {
        this.props.updataData();
    }

    /**
     * 表格数据勾选
     */
    selectedChange = (selectedRowKeys, selectedRows) => {
        console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows)
    }

    //关闭modal框
    colseModal = () => {
        this.setState({
            visible: false,
            addOrEditFlag: true,
            modalKey: '',
            currentEditData: {},
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }

    render() {

        const { visible, addOrEditFlag, modalKey, currentEditData,scrollY } = this.state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.selectedChange(selectedRowKeys, selectedRows);
            }
        }

        return (
            <div className='SettingCommom'>
                <div className='SettingCommom-Tree'>
                    <OrgnizationTree />
                </div>
                <Spin spinning={this.props.loading} size='large' tip="Loading...">
                    <div className='SettingCommom-Content'>
                        <div className='SettingCommom-Content-Button'>
                            <Button className='setting-button' onClick={this.showAdd} style={{ 'marginLeft': '0' }}>新增</Button>
                            <Button className='setting-button' onClick={this.deleteData}>删除</Button>
                            <Button className='setting-button' onClick={this.updataData}>刷新</Button>
                        </div>
                        <div className='SettingCommom-Content-Table'>
                            <Table
                                rowSelection={rowSelection}
                                columns={this.columns}
                                dataSource={this.props.table}
                                pagination={false}
                                scroll={{ y: scrollY }}
                            />
                        </div>
                        <div className='SettingCommom-Content-Footer'>
                            <Pagination
                                className='setting-Pagination'
                                showSizeChanger
                                total={this.props.total}
                                current={this.props.current}
                                pageSize={this.props.pageSize}
                                pageSizeOptions={['10', '20', '40', '60', '100']}
                                showTotal={total => `共 ${this.props.total} 条`}
                                onChange={this.props.pageChange}
                                onShowSizeChange={this.props.pageSizeChange}
                            />
                        </div>
                    </div>
                </Spin>
                {visible && <OrgModal
                    visible={visible}
                    addOrEditFlag={addOrEditFlag}
                    modalKey={modalKey}
                    addData={this.addData}
                    editData={this.editData}
                    colseModal={this.colseModal}
                    currentEditData={currentEditData}
                />
                }
            </div>
        )
    }
}

export default OrgnizationComponent;