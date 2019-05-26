import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput, AtTabBar } from 'taro-ui'
import CollectionCard from '../../components/collection-card'
import './index.scss'

const favorite1 = require('../../static/favorite1.png')
const favorite2 = require('../../static/favorite2.png')
const favorite3 = require('../../static/favorite3.png')

const listData = [{
  collCover: favorite1,
  collTitle: '广州的厂商，去年业绩亮眼年又将有怎样的变化？',
  collWatch: '123',
  collZan: '15',
  collAuthor: '张三lvy',
  collDate: '04-18'
}, {
  collCover: favorite2,
  collTitle: '广州的厂商，去年业绩亮眼年又将有怎样的变化？',
  collWatch: '123',
  collZan: '15',
  collAuthor: '张三lvy',
  collDate: '04-18'
}, {
  collCover: favorite3,
  collTitle: '广州的厂商，去年业绩亮眼年又将有怎样的变化？',
  collWatch: '123',
  collZan: '15',
  collAuthor: '张三lvy',
  collDate: '04-18'
}];

export default class MyFavorite extends Component {

  config = {
    navigationBarTitleText: '我的收藏'
  }

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="favorite-container">
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#fff'
          title='我的收藏'
          leftIconType='chevron-left'
        />
        <View className="favorite-list">
          {
            listData.map(data => <View className="favorite-item"><CollectionCard data={data} /></View>)
          }
        </View>
      </View>
    )
  }
}
