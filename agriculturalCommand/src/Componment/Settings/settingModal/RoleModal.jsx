/**
 * @field  组织管理modal框
 */

import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import './style/RoleModal.less';

const { TextArea } = Input;

class RoleModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roleName: '',    //角色名称
            roleDescript: '',    //角色描述
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
            this.setState({
                roleName: record.roleName,    //角色名称
                roleDescript: record.roleDescript,    //角色描述
            })
        }
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

    //角色名称改变
    roleNameChange = (e) => {
        this.setState({
            roleName: e.target.value,
        })
    }

    //角色描述改变
    roleDescriptChange = (e) => {
        this.setState({
            roleDescript: e.target.value,
        })
    }

    //清空所有输入的值
    clearAllInput = () => {
        this.setState({
            roleName: '',    //角色名称
            roleDescript: '',    //角色描述
        })
    }

    render() {
        const { roleName, roleDescript } = this.state;
        return (
            <Modal
                key={this.props.modalKey}
                visible={this.props.visible}
                title={this.props.addOrEditFlag ? '新增组织' : '编辑组织'}
                maskClosable={false}
                cancelText='取消'
                okText='确定'
                onOk={this.modalOk}
                onCancel={this.colseModal}
                width='480px'
            >
                <div className='RoleModalBox'>
                    <div className='RoleModalBox-Name'>
                        <div className='RoleModalBox-Name-span'>
                        <span style={{ color: 'red' }}>*</span>角色名称:
                        </div>
                        <div className='RoleModalBox-Name-input'>
                            <Input placeholder='请输入角色名称' value={roleName} onChange={this.roleNameChange} />
                        </div>
                    </div>
                    <div className='RoleModalBox-Name'>
                        <div className='RoleModalBox-Name-span'>
                        <span style={{ color: 'red' }}>*</span>角色描述:
                        </div>
                        <div className='RoleModalBox-Name-input'>
                            <TextArea rows={3.5} placeholder='请输入角色描述' value={roleDescript} onChange={this.roleDescriptChange} />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default RoleModal;