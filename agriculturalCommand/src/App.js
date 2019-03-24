/**
 * @field 自适应,路由拦截
 */

import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import './Style/test.less';
import AgriculturalCommand from './AgriculturalCommand/AgriculturalCommand';
import Login from './Login/Login'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
      <Route
          {...rest}
          render={props =>
              (window.sessionStorage.getItem('isLogin')) ? (
                  <Component {...props} />
              ) : (
                      <Redirect
                          to={{
                              pathname: '/login',
                              state:{ from: props.location }
                          }}
                      />
                  )
          }
      />
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth < 1440 ? 1440 : window.innerWidth, //宽度
      height: window.innerHeight < 800 ? 800 : window.innerHeight,//高度
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize) //监听窗口大小改变
  }

  //监听屏幕变化
  handleResize = () => {
    this.setState({
      width: window.innerWidth < 1440 ? 1440 : window.innerWidth,
      height: window.innerHeight < 800 ? 800 : window.innerHeight,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div className="App" style={{ width: this.state.width, height: this.state.height }}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' exact render={() => (<Redirect to='/main' />)} />
          <PrivateRoute path='/' component={AgriculturalCommand} />
        </Switch>
      </div >
    );
  }
}

export default App;
