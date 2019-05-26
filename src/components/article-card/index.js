import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

const like1 = require('../../static/like1.png')
const like2 = require('../../static/like2.png')


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
          className="article-card"
          onClick={this.handleClick}
        >
          <Image 
            src={this.props.data.isLike ? like1 : like2}
            className="article-like"
          />
          <Image
            src={this.props.data.articleCover}
            className="article-cover"
          ></Image>
          <View className="article-sort">
            <Text>{this.props.data.articleSort}</Text>
          </View>
          <View className="price-line">
            <Text className="article-price">￥{this.props.data.articlePrice}</Text>
            <Text className="article-other">起</Text>
          </View>
        </View>
    )
  }
}
