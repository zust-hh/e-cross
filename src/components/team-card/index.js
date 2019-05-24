import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'


// const slider1 = require('../../static/slider1.png')
// const locationImg = require('../../static/location.png')

export default class TeamCard extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className="container">
        <AtCard
          title="标题"
        >
            <Text className="team-name">111</Text>
        </AtCard>
      </View>
    )
  }
}
