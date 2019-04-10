/**
 * @field  组织管理容器组建
 */

import React, { Component } from 'react';
import OrgnizationComponent from '../../../Componment/Settings/SettingsType/OrgnizationComponent';

class Orgnization extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,   //数据加载状态
            data: [],        //查询到的所有的数据类型
            table: [],       //table展示所用到的数据
            total: 103,      //查询到的数据总量
            current: 1,      //当前页码
            pageSize: 20,    //每页规格
        }
    }

    /**
     * 根据初始条件查询数据
     * 将数据转化为table所需要的数据格式
     */
    componentDidMount() {
        const data = [];
        for (let i = 0; i < 30; i++) {
            data.push({
                key: i,
                orgName: `德州-${i}`,
                orgAddress: '德州市测试数据',
                orgDescript: `德州市的假数据001-${i}`
            })
        }

        const _this = this;
        setTimeout(function () {
            _this.setState({
                loading: false,
                table: data,
            })
        }, 3000)
    }

    /**
     * 分页改变时调用该函数
     * @param page  当前页码
     * @param pageSize 每页的规格
     */
    pageChange = (page, pageSize) => {
        this.setState({
            current: page,
            pageSize: pageSize,
        })
    }

    /**
     * 页码规格改变时调用该函数
     * @param current 当前页码
     * @param size 每页的规格
     */
    pageSizeChange = (current, size) => {
        this.setState({
            current: current,
            pageSize: size,
        })
    }

    /**
     * 新增数据
     * @param data 条件
     */
    addData = (data) => {

    }

    /**
     * 编辑数据
     * @param data 条件
     */
    editData = (data) => {

    }

    /**
     * 删除数据
     * @param data 条件
     */
    deleteData = (data) => {

    }

    /**
     * 刷新数据
     */
    updataData = () => {

    }

    render() {
        const { loading, data, table, total, current, pageSize } = this.state;
        return (
            <div className='OrgnizationBox' style={{ width: '100%', height: '100%' }}>
                <OrgnizationComponent
                    loading={loading}
                    data={data}
                    table={table}
                    total={total}
                    current={current}
                    pageSize={pageSize}
                    pageChange={this.pageChange}
                    pageSizeChange={this.pageSizeChange}
                    addData={this.addData}
                    editData={this.editData}
                    deleteData={this.deleteData}
                    updataData={this.updataData}
                />
            </div>
        )
    }
}

export default Orgnization;