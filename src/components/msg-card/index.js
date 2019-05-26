import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

export default class TeamCard extends Component {

  constructor(props) {
      super(props)
  }
  handleClick() {
    Taro.navigateTo({
      url: this.props.data.link
    })
  }
  render() {
    return (
        <View
          className="msg-card"
          onClick={this.handleClick}
        >
          <Image
            src={this.props.data.userAvatar}
            className="user-avatar"
          ></Image>
          <View className="msg-right">
            <View className="msg-line">
              <Text className="user-name">{this.props.data.userName}</Text>
              <Text className="msg-time">{this.props.data.msgTime}</Text>
            </View>
            <View className="msg-line">
              <Text className="msg-content">{this.props.data.msgContent}</Text>
              <Text className="msg-num">{this.props.data.msgNum}</Text>
            </View>
          </View>
        </View>
    )
  }
}
