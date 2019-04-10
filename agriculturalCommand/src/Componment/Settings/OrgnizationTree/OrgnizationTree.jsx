/**
 * 系统配置公共组织树
 */

import React, { Component } from 'react';
import { Tree } from 'antd';
import './OrgnizationTree.less';
import china from '../../../Images/china.png';
import sheng from '../../../Images/sheng.png';
import shi from '../../../Images/shi.png';
import qu from '../../../Images/qu.png';

const { TreeNode } = Tree;

class OrgnizationTree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            treeData: [],  //传入的组织树数据
        }
    }

    componentDidMount() {
        let a = [{
            key: 0,
            name: '中国',
            level: 1,
            childern: [{
                key: 1,
                name: '北京',
                level: 2,
            }, {
                key: 2,
                name: '山东',
                level: 2,
                childern: [{
                    key: '2_1',
                    name: '济南',
                    level: 3,
                }, {
                    key: '2_2',
                    name: '德州',
                    level: 3,
                    childern: [{
                        key: '2_2_1',
                        name: '禹城',
                        level: 4,
                    }]
                },]
            }, {
                key: 3,
                name: '广州',
                level: 2,
                childern: [{
                    key: '3_1',
                    name: '杭州',
                    level: 3,
                }, {
                    key: '3_2',
                    name: '广东',
                    level: 3,
                },]
            }, {
                key: 4,
                name: '四川',
                level: 2,
            }]
        }]

        this.setState({
            treeData: a,
        })
    }

    /**
     * @param {组织树数据} treeData 
     */
    renderTree = (treeData) => {
        return (
            treeData.map((item, index) => {
                if (item.childern !== null && item.childern !== undefined) {
                    return (
                        <TreeNode
                            icon={this.showIcon(item)}
                            key={item.key}
                            title={item.name}
                        >
                            {this.renderTree(item.childern)}
                        </TreeNode>
                    )
                }
                else {
                    return (
                        <TreeNode
                            icon={this.showIcon(item)}
                            key={item.key}
                            title={item.name}
                        />
                    )
                }
            })
        )
    }


    /**
     * @param item 组织节点
     */
    showIcon = (item) => {
        switch (item.level) {
            case 1:
                return <img src={china} alt="" />
            case 2:
                return <img src={sheng} alt="" />
            case 3:
                return <img src={shi} alt="" />
            default:
                return <img src={qu} alt="" />
        }
    }

    /**
     * 点击组织树触发
     */
    onSelect = () => {

    }

    render() {
        const { treeData } = this.state;
        return (
            <div className='OrgnizationTreeBox'>
                <Tree
                    showIcon
                    onSelect={this.onSelect}
                >
                    {this.renderTree(treeData)}
                </Tree>
            </div>
        )
    }
}

export default OrgnizationTree;