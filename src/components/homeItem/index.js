import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import TeamCard from '../team-card';
import NewsCard from '../news-card';
import CaseCard from '../case-card';
import './index.scss'

export default class HomeItem extends Component {
  constructor(props) {
    super(props);
  }

  renderListItem = (data) => {
    switch (data.type) {
      case 1: {
        return this.renderServiceCard(data)
      }
      case 2: {
        return <TeamCard data={data}/>
      }
      case 3: {
        return <NewsCard data={data}/>
      }
      case 4: {
        return <CaseCard data={data}/>
      }
    }
  }

  renderServiceCard = (data) => {
    return <View className="service-card-container">
      <Image
        className="logoImg"
        src={data.logoImg}
      />
      <View className="right">
        <Text>{data.name}</Text>
        <Image
          mode='aspectFit'
          src={data.textImg}
        />
      </View>
    </View>
  }

  render() {
    return (
      <View className="container">
        <View className="header">
          <View className="header-left">
            <View className="blue-line" />
            <Text>{this.props.name}</Text>
          </View>
          {
            this.props.readMore ? <View className="read-more">
              <Text>更多>></Text>
            </View> : null
          }
        </View>
        <View className="list">
          {
            this.props.listData.map(item => (
              this.renderListItem(item)
            ))
          }
        </View>
      </View>
    )
  }
}
