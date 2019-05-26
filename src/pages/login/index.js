import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Input } from '@tarojs/components'
import { AtButton, AtTabBar, AtInput } from 'taro-ui'
import './index.scss'

var avatar1 = require('../../static/userHead.png')
var avatar2 = require('../../static/assets/default-avatar.png')
const userIcon = require('../../static/loginUser.png')
const psdIcon = require('../../static/loginPsd.png')


export default class Login extends Component {

  config = {
    navigationBarTitleText: '登录'
  }
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      avatar: avatar2
    }
  }

  handleUserChange= (value) => {
    this.setState({
      userName: value
    }, () => {
      if(this.state.userName.length >= 4) {
        this.setState({
          avatar: avatar1
        })
      } else {
        this.setState({
          avatar: avatar2
        })
      }
    })
  }

  handleSubmit = () => {
    let mapUser = {
      user: 1,
      group: 2,
      proxy: 3,
      qiaoma: 4
    }
    if(mapUser[this.state.userName]){
      localStorage.setItem('userType', mapUser[this.state.userName])
      Taro.navigateTo({
        url: '/pages/user/index'
      })
      this.setState({
        userName: '',
        password: '',
        avatar: avatar2
      })
    } 
  }

  render() {
    return (
      <View className="login">
        <Image
          src={this.state.avatar}
          className="login-avatar"
        />
        <View className="login-input">
          <Image
            src={userIcon}
            className="input-icon"
          />
          <AtInput
            name="username"
            className="input-text"
            value={this.state.userName}
            onChange={this.handleUserChange}
            placeholder="请输入用户名"
          />
        </View>
        <View className="login-input">
          <Image
            src={psdIcon}
            className="input-icon"
          />
          <AtInput
            name="password"
            className="input-text"
            type="password"
            placeholder="请输入密码"
          />
        </View>
        <Text className="login-btn" onClick={this.handleSubmit}>登录</Text>
      </View>
    )
  }
}
