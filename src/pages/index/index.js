import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import HomeItem from '../../components/homeItem'
import './index.scss'
import TeamCard from '../../components/team-card'
import NewsCard from '../../components/news-card'

const slider1 = require('../../static/slider1.png')
const locationImg = require('../../static/location.png')
const searchIcon = require('../../static/search.png')
const service1 = require('../../static/service1.png')
const serviceText1 = require('../../static/serviceText1.png')

const list = [{
  name: '提供服务',
  listData: [{
    type: 1,
    logoImg: service1,
    name: '设计团队',
    textImg: serviceText1
  }, {
    type: 1,
    logoImg: service1,
    name: '包装推广',
    textImg: serviceText1
  }, {
    type: 1,
    logoImg: service1,
    name: '代理顾问',
    textImg: serviceText1
  }],
  readMore: true
}]

const tagArr1 =  ['已实名认证', '会俄语', '定制', '提供面料资源', '活跃']
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

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
              src={searchIcon}
            />
            <Text>输入关键字搜索</Text>
          </AtButton>
        </View>
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
        <View className="home-list">
          {
            list.map(item =>
              <HomeItem listData={item.listData} readMore={item.readMore} name={item.name} />
            )
          }
        </View>
      </View>
    )
  }
}
