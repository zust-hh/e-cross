import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import MessageCard from '../../components/msg-card'
import './index.scss'

const avatar = require('../../static/avatar1.png')
const messageAvatar = require('../../static/messageAvatar.png')

const data = [{
  userAvatar: messageAvatar,
  userName: '系统消息',
  msgTime: '11:20',
  msgContent: '我们已经成功接受到您的需求，这边为您提供...',
  msgNum: 1,
  link: '/pages/chat/index'
}, {
  userAvatar: avatar,
  userName: '田小花',
  msgTime: '11:20',
  msgContent: '好的，没问题...',
  msgNum: 1,
  link: '/pages/chat/index'
},]

export default class Message extends Component {

  config = {
    navigationBarTitleText: '信息'
  }

  handleClick = () => {
    // Taro.navigateBack();
  }

  render() {
    return (
      <View className="message-container">
        <AtNavBar
          color='#fff'
          title='消息'
        />
        <MessageCard data={data[0]} />
        <MessageCard data={data[1]} />
      </View>
    )
  }
}
