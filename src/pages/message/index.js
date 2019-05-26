import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import MessageCard from '../../components/msg-card'
import './index.scss'

const avatar = require('../../static/avatar1.png')

const data = {
  userAvatar: avatar,
  userName: '系统消息',
  msgTime: '11:20',
  msgContent: '我们已经成功接受到您的需求，这边为您提供...',
  msgNum: 1
}

export default class Search extends Component {

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
        <MessageCard data={data} />
        <MessageCard data={data} />
      </View>
    )
  }
}
