/**
 * @field  主页面
 */

import React, { Component } from 'react';
import './AgriculturalCommand.less';
import Header from '../Layouts/Header/Header';
import Main from '../Layouts/Main/Main';
import Footer from '../Layouts/Footer/Footer';



class AgriculturalCommand extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='AgriculturalCommandBox'>
                <div className='AgriculturalCommandBox-Header'>
                <Header />
                </div>
                <div className='AgriculturalCommandBox-Main'>
                <Main />
                </div>
                <div className='AgriculturalCommandBox-Footer'>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default AgriculturalCommand;