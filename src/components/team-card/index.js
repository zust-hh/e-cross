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
              src={this.props.data.teamAvatar}
            ></Image>
            <View className="team-text">
              <Text className="team-name">{this.props.data.teamName}</Text>
              <View className="team-desc">
                <Text className="team-contry">{this.props.data.teamContry}</Text>
                <Text >{this.props.data.teamCity}</Text>
              </View>
            </View>
          </View>
          <View className="team-tags">
              {
                this.props.data.teamTags.map((tag) => 
                  <View className="team-tag-item">{tag}</View>
                )
              }
          </View>
          <Image className="team-cover" 
              src={this.props.data.teamCover}
              mode="widthFix"
            ></Image>   
        </View>
    )
  }
}
