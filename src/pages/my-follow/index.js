import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput, AtTabBar } from 'taro-ui'
import TeamCard from '../../components/team-card'
import './index.scss'

const avatar1 = require('../../static/avatar1.png')
const teamCover1 = require('../../static/teamCover1.png')

const listData = [{
  teamAvatar: avatar1,
  teamName: '衣之家设计团队',
  teamContry: '中国',
  teamCity: '杭州',
  teamTags: ['已实名认证', '会俄语', '定制', '提供面料资源', '活跃'],
  teamCover: teamCover1
}, {
  teamAvatar: avatar1,
  teamName: '衣之家设计团队',
  teamContry: '中国',
  teamCity: '杭州',
  teamTags: ['已实名认证', '会俄语', '定制', '提供面料资源', '活跃'],
  teamCover: teamCover1
}, {
  teamAvatar: avatar1,
  teamName: 'Tenaj',
  teamContry: '坦桑尼亚',
  teamCity: '',
  teamTags: ['已实名认证', '会英语', '定制', '自主品牌设计', '活跃'],
  teamCover: teamCover1
}, {
  teamAvatar: avatar1,
  teamName: 'Tenaj',
  teamContry: '坦桑尼亚',
  teamCity: '',
  teamTags: ['已实名认证', '会英语', '定制', '自主品牌设计', '活跃'],
  teamCover: teamCover1
}];

export default class MyFollow extends Component {

  config = {
    navigationBarTitleText: '我的订单'
  }

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="follow-container">
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#fff'
          title='我的关注'
          leftIconType='chevron-left'
        />
        <View className="follow-list">
          {
            listData.map(data => <View className="follow-item"><TeamCard data={data} /></View>)
          }
        </View>
      </View>
    )
  }
}
