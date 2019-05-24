import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

export default class TeamCard extends Component {

  constructor(props) {
      super(props)
  }

  render() {
    return (
        <View
          className="team-card"
        >
          <View className="team-info">
            <Image className="team-avatar" 
              src={this.props.teamAvatar}
            ></Image>
            <View className="team-text">
              <Text className="team-name">{this.props.teamName}</Text>
              <View className="team-desc">
                <Text className="team-contry">{this.props.teamContry}</Text>
                <Text >{this.props.teamCity}</Text>
              </View>
            </View>
          </View>
          <View className="team-tags">
              {
                this.props.teamTags.map((tag) => 
                  <View className="team-tag-item">{tag}</View>
                )
              }
          </View>
          <Image className="team-cover" 
              src={this.props.teamCover}
              mode="widthFix"
            ></Image>   
        </View>
    )
  }
}
