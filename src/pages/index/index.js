import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'
import HomeItem from '../../components/homeItem/index.js'
import CollectionCard from '../../components/collection-card'
import './index.scss'

const slider1 = require('../../static/slider1.png')
const locationImg = require('../../static/location.png')
const searchIcon = require('../../static/search.png')
const service1 = require('../../static/service1.png')
const serviceText1 = require('../../static/serviceText1.png')
const avatar1 = require('../../static/avatar1.png')
const teamCover1 = require('../../static/teamCover1.png')

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
    teamCover: teamCover1
  }, {
    type: 2,
    teamAvatar: avatar1,
    teamName: '衣之家设计团队',
    teamContry: '中国',
    teamCity: '杭州',
    teamTags: ['已实名认证', '会俄语', '定制', '提供面料资源', '活跃'],
    teamCover: teamCover1
  }],
  readMore: true
}, {
  name: '行业资讯',
  listData: [{
    type: 3,
    newsAvatar: slider1,
    newsTitle: "YOKA时尚精选",
    newsDate: "2019/4/9",
    newsBtn: "关注",
    newsIntro: "干货|2019服饰流行趋势完全解读干货|2019服饰流行趋势完全解读",
    newsCover: slider1,
    likeNum: "145",
    commentNum: "200",
    collectNum: "123",
    sendNum: "321",
  }],
  readMore: true
}, {
  name: '成功案例',
  listData: [{
    type: 4,
    caseCover: slider1,
    caseSort: '服装设计',
    caseIntro: '按照先流行趋势结合面料特点进行设计',
    caseWatchNum: 123,
    caseDate: '04-18'
  }],
  readMore: true
}];
const collData = {
  collCover: slider1,
  collTitle: '广州的厂商，去年的业绩亮眼，今年又将有怎样的变化',
  collWatch: 123,
  collZan: 15,
  collAuthor: '张三lvy',
  collDate: '04-18',
}
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  handleClick = (data) => {
    console.log(data);
    this.setState({
      current: data
    })
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
        <CollectionCard data={collData}></CollectionCard>
        {/* <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'bullet-list' },
            { title: '论坛', iconType: 'camera' },
            { title: '发布需求', iconType: 'folder' },
            { title: '消息', iconType: 'camera' },
            { title: '个人中心', iconType: 'folder' },
          ]}
          onClick={this.handleClick}
          current={this.state.current}
          iconSize={24}
          fontSize={14}
        /> */}
      </View>
    )
  }
}
