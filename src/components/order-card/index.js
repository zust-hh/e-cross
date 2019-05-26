import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

var statusMap = {
  1: '待接单',
  2: '进行中',
  3: '待评价'
}

export default class TeamCard extends Component {

  constructor(props) {
      super(props)
     
  }
  handleClick() {
    Taro.navigateTo({
      url: this.props.data.link
    })
  }

  render() {
    return (
        <View
          className="order-card"
          onClick={handleClick}
        >
          <View className="order-header">
            <Text className="">{this.props.data.orderDate}</Text>
            <View>
              <Text>订单编号</Text>
              <Text className="order-num">{this.props.data.orderNum}</Text>
            </View>
          </View>
          <View className="order-content">
            <Image
              className="content-left"
              src={this.props.data.orderCover}>
            ></Image>
            <View className="content-center">
              <Text className="order-sort">{this.props.data.orderSort}</Text>
              <Text className="order-cate">{this.props.data.orderCate}</Text>
            </View>
            <View className="content-right">
              <Text className="order-price">￥{this.props.data.orderPrice}</Text>
              <Text className="order-amount">×{this.props.data.orderAmount}</Text>
            </View>
          </View>
          <View className="order-footer">
            <Text className="order-desc">共{this.props.data.orderAmount}件服务，合计：￥{this.props.data.orderPrice}</Text>
            <View className="order-btn">{statusMap[this.props.data.orderStatus]}</View>
          </View>
        </View>
    )
  }
}
