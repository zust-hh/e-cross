import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import './index.scss'

const slider1 = require('../../static/slider1.png')

export default class Forum extends Component {

  config = {
    navigationBarTitleText: '论坛'
  }

  render() {
    return (
      <View className="container">
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          indicatorDots
          className="swiper"
        >
          <SwiperItem key={1}>
            <Image mode='widthFix'
              src={slider1}
            />
          </SwiperItem>
          <SwiperItem key={2}>
            <Image mode='widthFix'
              src={slider1}
            />
          </SwiperItem>
          <SwiperItem key={3}>
            <Image mode='widthFix'
              src={slider1}
            />
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}
