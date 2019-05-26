import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import ArticleCard from '../../components/article-card'

const serviceTop = require('../../static/serviceTop.png')
const serviceBottom = require('../../static/serviceBottom.png')
const back = require('../../static/back.png')
const spread = require('../../static/spread.png')



export default class ServiceDetail extends Component {

  render() {
    return (
      <View className="service">
        <View className="article-header">
          <Image 
            src={back}
            className="header-back"
            onClick={() => {Taro.navigateBack()}}
          />
          <Image 
            src={spread}
            className="header-spread"
          />
        </View>
        <Image
          src={serviceTop}
          className="service-top"
        />
        <Image
          src={serviceBottom}
          className="service-bottom"
          onClick={() => {
            Taro.navigateTo({
            url: '/pages/my-order/index'
          })}}
        />
      </View>
    )
  }
}
