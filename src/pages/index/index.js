import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'
import HomeItem from '../../components/homeItem/index.js'
import './index.scss'

const slider1 = require('../../static/slider1.png')
const locationImg = require('../../static/location.png')
const searchIcon = require('../../static/search.png')
const service1 = require('../../static/service1.png')
const service2 = require('../../static/service2.png')
const service3 = require('../../static/service3.png')
const serviceText1 = require('../../static/serviceText1.png')
const avatar1 = require('../../static/avatar1.png')
const avatar2 = require('../../static/avatar2.png')
const avatar3 = require('../../static/avatar3.png')
const teamCover1 = require('../../static/teamCover1.png')
const teamCover2 = require('../../static/teamCover2.png')
const favorite2 = require('../../static/favorite2.png')
const success1 = require('../../static/success1.png')
const success2 = require('../../static/success2.png')


const list = [{
  name: '提供服务',
  listData: [{
    type: 1,
    logoImg: service1,
    name: '设计团队',
    textImg: serviceText1
  }, {
    type: 1,
    logoImg: service2,
    name: '包装推广',
    textImg: serviceText1
  }, {
    type: 1,
    logoImg: service3,
    name: '代理顾问',
    textImg: serviceText1
  }],
  readMore: false
}, {
  name: '金牌团队',
  listData: [{
    type: 2,
    teamAvatar: avatar1,
    teamName: '衣之家设计团队',
    teamContry: '中国',
    teamCity: '杭州',
    teamTags: ['已实名认证', '会俄语', '定制', '提供面料资源', '活跃'],
    teamCover: teamCover1,
    link: '/pages/group-detail/index'
  }, {
    type: 2,
    teamAvatar: avatar2,
    teamName: 'Tenaj',
    teamContry: '坦桑尼亚',
    teamCity: '',
    teamTags: ['已实名认证', '会俄语', '定制', '提供面料资源', '活跃'],
    teamCover: teamCover2,
    link: '/pages/group-detail/index'
  }],
  readMore: true
}, {
  name: '行业资讯',
  listData: [{
    type: 3,
    newsAvatar: avatar3,
    newsTitle: "YOKA时尚精选",
    newsDate: "2019/4/9",
    newsBtn: "关注",
    newsIntro: "干货|2019服饰流行趋势完全解读干货|2019服饰流行趋势完全解读",
    newsCover: favorite2,
    likeNum: "145",
    commentNum: "200",
    collectNum: "123",
    sendNum: "321",
    link: '/pages/article-detail/index'
  }],
  readMore: true
}, {
  name: '成功案例',
  listData: [{
    type: 4,
    caseCover: success1,
    caseSort: '服装设计',
    caseIntro: '按照先流行趋势结合面料特点进行设计',
    caseWatchNum: 123,
    caseDate: '04-18',
    link: '/pages/service-detail/index'
  }, {
    type: 4,
    caseCover: success2,
    caseSort: '包装推广',
    caseIntro: '对已有的资源进行再加工创造出新的市',
    caseWatchNum: 123,
    caseDate: '04-18',
    link: '/pages/service-detail/index'
  }],
  readMore: true
}];

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
          <AtButton onClick={() => Taro.navigateTo({
            url: '/pages/search/index'
          })}>
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
