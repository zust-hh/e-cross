import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import NewsCard from '../../components/news-card';
import './index.scss'

const forumCover = require('../../static/forumCover.png')
const forum1 = require('../../static/forum1.png')
const forum2 = require('../../static/forum2.png')
const forum3 = require('../../static/forum3.png')
const forum4 = require('../../static/forum4.png')
const favorite2 = require('../../static/favorite2.png')
const avatar3 = require('../../static/avatar3.png')

const likebar = [
  { icon: forum1, name: '流行趋势' },
  { icon: forum2, name: '服饰文化' },
  { icon: forum3, name: '经验分享' },
  { icon: forum4, name: '成功案例' },
]

const data = {
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
}

export default class Forum extends Component {

  config = {
    navigationBarTitleText: '论坛'
  }

  render() {
    return (
      <View className="forum-container">
        <AtNavBar
          color='#fff'
          title='论坛'
        />
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          indicatorDots
          className="swiper"
        >
          <SwiperItem key={1}>
            <Image mode='widthFix'
              src={forumCover}
            />
          </SwiperItem>
          <SwiperItem key={2}>
            <Image mode='widthFix'
              src={forumCover}
            />
          </SwiperItem>
          <SwiperItem key={3}>
            <Image mode='widthFix'
              src={forumCover}
            />
          </SwiperItem>
        </Swiper>
        <View className="like-bar">
          {
            likebar.map(item => <View className='like-item'>
              <Image
                src={item.icon}
              />
              <Text>{item.name}</Text>
            </View>)
          }
        </View>
        <NewsCard data={data} />
        <NewsCard data={data} />
      </View>
    )
  }
}
