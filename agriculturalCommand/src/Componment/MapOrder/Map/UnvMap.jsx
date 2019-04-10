/**
 * @field  基础地图
 */

import React, { Component } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
// import OSM from 'ol/source/OSM';
import './UnvMap.less';

const mapUrl = 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0';

class UnvMap extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.map = null;  //地图对象
    }

    componentDidMount() {
        this.map = new Map({
            // 设置地图图层
            layers: [
                // 创建一个使用Open Street Map地图源的瓦片图层
                new TileLayer({
                    // source: new OSM()
                    source: 
                    new XYZ({
                        url: mapUrl
                      })
                })
            ],
            // 设置显示地图的视图
            view: new View({
                center: [117.23, 35.82],    // transforms([117.23, 35.82],'EPSG:4326', 'EPSG:3857'),定义地图显示中心于经度0度，纬度0度处
                zoom: 10,            // 并且定义地图显示层级为2
                projection: 'EPSG:4326',
            }),
            // 让id为map的div作为地图的容器
            target: 'UnvMap'
        });
    }


    render() {
        return (
            <div className='UnvMapBox' >
                <div id='UnvMap'/>
            </div>
        )
    }
}

export default UnvMap;