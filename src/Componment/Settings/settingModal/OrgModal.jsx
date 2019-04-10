/**
 * @field  组织管理modal框
 */

import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import './style/OrgModal.less';

const { TextArea } = Input;

class OrgModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orgName: '',     //组织名称
            orgAddress: '',  //组织地点
            orgDescript: '', //组织描述
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
                orgName: record.orgName,        //组织名称
                orgAddress: record.orgAddress,  //组织地点
                orgDescript: record.orgDescript,//组织描述
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

    //组织名称改变
    orgNameChange = (e) => {
        this.setState({
            orgName: e.target.value,
        })
    }

    //组织地点改变
    orgAddressChange = (e) => {
        this.setState({
            orgAddress: e.target.value,
        })
    }

    //组织描述改变
    orgDescriptChange = (e) => {
        this.setState({
            orgDescript: e.target.value,
        })
    }

    //清空所有输入的值
    clearAllInput = () => {
        this.setState({
            orgName: '',     //组织名称
            orgAddress: '',  //组织地点
            orgDescript: '', //组织描述
        })
    }

    render() {
        const { orgName, orgAddress, orgDescript } = this.state;
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
                <div className='OrgModalBox'>
                    <div className='OrgModalBox-Name'>
                        <div className='OrgModalBox-Name-span'>
                        <span style={{ color: 'red' }}>*</span>组织名称:
                        </div>
                        <div className='OrgModalBox-Name-input'>
                            <Input placeholder='请输入组织名称' value={orgName} onChange={this.orgNameChange} />
                        </div>
                    </div>
                    <div className='OrgModalBox-Name'>
                        <div className='OrgModalBox-Name-span'>
                        <span style={{ color: 'red' }}>*</span>组织地点:
                        </div>
                        <div className='OrgModalBox-Name-input'>
                            <Input placeholder='请输入组织名称' value={orgAddress} onChange={this.orgAddressChange} />
                        </div>
                    </div>
                    <div className='OrgModalBox-Name'>
                        <div className='OrgModalBox-Name-span'>
                        <span style={{ color: 'red' }}>*</span>组织描述:
                        </div>
                        <div className='OrgModalBox-Name-input'>
                            <TextArea rows={3.5} placeholder='请输入组织名称' value={orgDescript} onChange={this.orgDescriptChange} />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default OrgModal;