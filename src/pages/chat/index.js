import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput } from 'taro-ui'
import './index.scss'

const chatImg = require('../../static/chat.png')
const chatBar = require('../../static/chatbar.png')

export default class Search extends Component {

  config = {
    navigationBarTitleText: '私聊'
  }

  handleClick = () => {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="chat-container">
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#fff'
          title='田小花'
          leftIconType='chevron-left'
        />
        <Image
          className="chat-img"
          mode='widthFix'
          src={chatImg}
        />
        <Image
          className="chat-bar"
          mode='widthFix'
          src={chatBar}
        />
      </View>
    )
  }
}
