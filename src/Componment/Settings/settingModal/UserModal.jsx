/**
 * @field  组织管理modal框
 */

import React, { Component } from 'react';
import { Modal, Input, Table } from 'antd';
import './style/UserModal.less'

class UserModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userCode: '',       //用户编码
            userName: '',       //用户名称
            userOrg: '',        //用户所属组织
            userRole: '',        //用户角色
            password: '',        //密码
            repPassword: '',     //再次输入密码
            other: '',           //备注
        }
        this.columns = [{
            title: '角色',
            dataIndex: 'roleName',
            width: 150
        }, {
            title: '描述',
            dataIndex: 'roleDescript',
            width: 150
        }];
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
            this.setState({
                userCode: record.userCode,      //用户编码
                userName: record.userName,      //用户名称
                userOrg: record.userOrg,        //用户所属组织
                userRole: record.userRole,       //用户角色
                password: '',                    //密码  
                repPassword: '',                 //再次输入密码
                other: record.other,                       //备注
                roletTable: {},                  //角色列表
            })
        }

        //查询角色列表，这里写死
        const data = [{
            key: 1,
            roleName: `超级管理员`,
            roleDescript: `超级管理员`,
        }, {
            key: 2,
            roleName: `管理员`,
            roleDescript: `管理员`,
        }, {
            key: 3,
            roleName: `志愿者`,
            roleDescript: `志愿者`,
        },{
            key: 4,
            roleName: `其他`,
            roleDescript: `其他`,
        },{
            key: 5,
            roleName: `其他01`,
            roleDescript: `其他01`,
        },];
        this.setState({
            roletTable: data,
        })


    }

    //新增modal确定按钮
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

    //用户编码改变
    userCodeChange = (e) => {
        this.setState({
            userCode: e.target.value,
        })
    }

    //用户名称改变
    userNameChange = (e) => {
        this.setState({
            userName: e.target.value,
        })
    }

    //输入密码改变
    passwordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    //再次输入密码改变
    repPasswordChange = (e) => {
        this.setState({
            repPassword: e.target.value,
        })
    }

    otherChange = (e) => {
        this.setState({
            other: e.target.value,
        })
    }

    //清空所有输入的值
    clearAllInput = () => {
        this.setState({
            userCode: '',       //用户编码
            userName: '',       //用户名称
            userOrg: '',        //用户所属组织
            userRole: '',        //用户角色
            password: '',        //密码
            repPassword: '',   //再次输入密码
            other: '',           //备注
        })
    }

    /**
     * 角色表格数据勾选
     */
    selectedChange = (selectedRowKeys, selectedRows) => {
        console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows)
    }

    render() {
        const { userCode, userName, password, repPassword, other, roletTable } = this.state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.selectedChange(selectedRowKeys, selectedRows);
            },
            type:'radio'
        }
        return (
            <Modal
                key={this.props.modalKey}
                visible={this.props.visible}
                title={this.props.addOrEditFlag ? '新增用户' : '编辑用户'}
                maskClosable={false}
                cancelText='取消'
                okText='确定'
                onOk={this.modalOk}
                onCancel={this.colseModal}
                width='650px'
            >
                <div className='UserModalBox'>
                    <div className='UserModalBox-Left'>
                        <div className='UserModalBox-Left-span'>
                            <span style={{ color: 'red' }}>*</span> 用户编码:
                        </div>
                        <div className='UserModalBox-Left-input'>
                            <Input placeholder='请输入用户编码' value={userCode} onChange={this.userCodeChange} />
                        </div>
                    </div>
                    <div className='UserModalBox-Right'>
                        <div className='UserModalBox-Right-span'>
                            <span style={{ color: 'red' }}>*</span>用户名称:
                        </div>
                        <div className='UserModalBox-Right-input'>
                            <Input placeholder='请输入用户名称' value={userName} onChange={this.userNameChange} />
                        </div>
                    </div>
                    <div className='UserModalBox-Left'>
                        <div className='UserModalBox-Left-span'>
                            <span style={{ color: 'red' }}>*</span>密码:
                        </div>
                        <div className='UserModalBox-Left-input'>
                            <Input.Password placeholder='请输入密码' value={password} onChange={this.passwordChange} />
                        </div>
                    </div>
                    <div className='UserModalBox-Right'>
                        <div className='UserModalBox-Right-span'>
                            <span style={{ color: 'red' }}>*</span>确认密码:
                        </div>
                        <div className='UserModalBox-Right-input'>
                            <Input.Password placeholder='请再次输入密码' value={repPassword} onChange={this.repPasswordChange} />
                        </div>
                    </div>
                    <div className='UserModalBox-Other'>
                        <div className='UserModalBox-Other-span'>
                            &nbsp;备注:
                        </div>
                        <div className='UserModalBox-Other-input'>
                            <Input placeholder='请输入备注' value={other} onChange={this.otherChange} />
                        </div>
                    </div>
                    <div className='UserModalBox-Role'>
                        <div className='UserModalBox-Role-span'>
                            <span style={{ color: 'red' }}>*</span> 角色:
                        </div>
                        <div className='UserModalBox-Role-table'>
                            <Table
                                rowSelection={rowSelection}
                                columns={this.columns}
                                dataSource={roletTable}
                                pagination={false}
                                scroll={{ y: '200px' }}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default UserModal;