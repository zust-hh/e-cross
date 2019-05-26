import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

const watch = require('../../static/watch.png')
const zan = require('../../static/zan.png') 

export default class TeamCard extends Component {

  constructor(props) {
      super(props)
  }

  render() {
    return (
        <View
          className="coll-card"
        >
          <Image
            src={this.props.data.collCover}
            className="coll-cover"
          ></Image>
          <View
            className="coll-right"
          >
            <View className="coll-title">
              <Text>{this.props.data.collTitle}</Text>
            </View>
            <View className="coll-content">
              <View className="coll-watch-wrap">
                <Image
                  src={watch}
                  className="coll-watch-icon"
                ></Image>
                <Text className="coll-watch-text">{this.props.data.collWatch}</Text>
              </View>
              <View className="coll-watch-wrap">
                <Image
                  src={zan}
                  className="coll-watch-icon"
                ></Image>
                <Text className="coll-watch-text">{this.props.data.collZan}</Text>
              </View>
            </View>
            <View className="coll-footer">
              <Text>作者：{this.props.data.collAuthor}</Text>
              <Text>{this.props.data.collDate}</Text>
            </View>
          </View>
        </View>
    )
  }
}
