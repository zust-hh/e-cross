import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
import TeamCard from '../../components/team-card'

const slider1 = require('../../static/slider1.png')
const locationImg = require('../../static/location.png')
const searchIcon = require('../../static/search.png')

export default class Index extends Component {

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
        <View className="searchBar">
          <Image
            mode='widthFix'
            src={locationImg}
          />
          <AtButton onClick={() => console.log('click')}>
            <Image
              mode='widthFix'
              src={searchIcon}
            />
            按钮文案
          </AtButton>
        </View>
        <AtButton type='primary' size='normal'>按钮文案</AtButton>
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
