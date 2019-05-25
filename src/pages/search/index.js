import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput } from 'taro-ui'
import './index.scss'

const searchIcon = require('../../static/search.png')

export default class Search extends Component {

  config = {
    navigationBarTitleText: '搜索'
  }

  handleClick = () => {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="container">
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#fff'
          title='搜索'
          leftIconType='chevron-left'
        />
        <View className="search-input">
          <Image
            src={searchIcon}
          />
          <AtInput
            name='value'
            type='text'
            placeholder='请输入搜索内容'
          />
        </View>
      </View>
    )
  }
}
