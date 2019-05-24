import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Slider, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'


const slider1 = require('../../static/slider1.png')
const locationImg = require('../../static/location.png')

const like1 = require('../../static/slider1.png')
const like2 = require('../../static/slider1.png')

export default class TeamCard extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
      super(props)
      
  }


  render() {
    return (
      <View className="news-card">
        <View className="news-user">
          <Image
            className="user-avatar" 
            src={this.props.newsAvatar}
          ></Image>
          <View className="news-info">
            <Text className="news-title">{this.props.newsTitle}</Text>
            <Text className="news-date">{this.props.newsDate}</Text>
          </View>
          <View className="news-btn" type='primary'>{this.props.newsBtn}</View>
        </View>
        <View className="news-intro">
          <Text className="news-intro">{this.props.newsIntro}</Text> 
        </View>
        <Image
          className="news-cover"
          mode="widthFix"
          src={this.props.newsCover}
        ></Image>
        <View className="news-options">
          <View className="option-item">
            
            <View className="item-icon">{this.props.isLike ? locationImg : Slider}</View>
            <View className="item-num"></View>
          </View>
          <View className="option-item">
            <View className="item-icon"></View>
            <View className="item-num"></View>
          </View>
          <View className="option-item">
            <View className="item-icon"></View>
            <View className="item-num"></View>
          </View>
          <View className="option-item">
            <View className="item-icon"></View>
            <View className="item-num"></View>
          </View>
        </View>
      </View>
    )
  }
}
