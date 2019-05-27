import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Slider, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'


const slider1 = require('../../static/slider1.png')
const locationImg = require('../../static/location.png')

const like1 = require('../../static/like1.png')
const like2 = require('../../static/like1.png')
const comment1 = require('../../static/comment2.png')
const comment2 = require('../../static/comment2.png')
const collect1 = require('../../static/collect2.png')
const collect2 = require('../../static/collect2.png')
const send1 = require('../../static/send2.png')
const send2 = require('../../static/send2.png')


export default class TeamCard extends Component {

  constructor(props) {
      super(props)
      
  }
  handleClick = () => {
    Taro.navigateTo({
      url: this.props.data.link
    })
  }

  render() {
    return (
      <View
        className="news-card"
        onClick={this.handleClick}
      >
        <View className="news-user">
          <Image
            className="user-avatar" 
            src={this.props.data.newsAvatar}
          ></Image>
          <View className="news-info">
            <Text className="news-title">{this.props.data.newsTitle}</Text>
            <Text className="news-date">{this.props.data.newsDate}</Text>
          </View>
          <View className="news-btn" type='primary'>{this.props.data.newsBtn}</View>
        </View>
        <View className="news-intro">
          <Text className="news-intro">{this.props.data.newsIntro}</Text> 
        </View>
        <Image
          className="news-cover"
          mode="widthFix"
          src={this.props.data.newsCover}
        ></Image>
        <View className="news-options">
          <View className="option-item">
            <Image 
              className="item-icon"
              src={this.props.data.isLike ? like1 : like2}
            ></Image>
            <View className="item-num">{this.props.data.likeNum}</View>
          </View>
          <View className="option-item">
            <Image 
              className="item-icon"
              src={this.props.data.isComment ? comment1 : comment2}
            ></Image>
            <View className="item-num">{this.props.data.commentNum}</View>
          </View>
          <View className="option-item">
            <Image
              className="item-icon"
              src={this.props.data.isCollect ? collect1 : collect2}
            ></Image>
            <View className="item-num">{this.props.data.collectNum}</View>
          </View>
          <View className="option-item">
            <Image
              className="item-icon"
              src={this.props.data.isSend ? send1 : send2}
              ></Image>
            <View className="item-num">{this.props.data.sendNum}</View>
          </View>
        </View>
      </View>
    )
  }
}
