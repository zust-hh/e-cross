import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Slider, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

const watch = require('../../static/watch.png')

export default class TeamCard extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
      super(props)
      
  }


  render() {
    return (
      <View className="case-card">
        <Image
          className="case-cover"
          src={this.props.data.caseCover}></Image>
        <View className="case-right">
          <View className="case-desc">
            <Text >
              <Text className="case-sort">
                [{this.props.data.caseSort}]
                </Text>
              {this.props.data.caseIntro}
            </Text>
          </View>
          <View className="case-other">
            <Image 
              className="case-watch"
              src={watch}></Image>
            <Text className="case-num">{this.props.data.caseWatchNum}</Text>
            <Text className="case-date">{this.props.data.caseDate}</Text>
          </View>
        </View>

      </View>
    )
  }
}
