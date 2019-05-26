import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput, AtTabBar } from 'taro-ui'
import OrderCard from '../../components/order-card'
import './index.scss'

const order1 = require('../../static/order1.png')
const order2 = require('../../static/order2.png')

const orderData = [{
  orderDate: '2018-5-20',
  orderNum: '1234567',
  orderCover: order1,
  orderSort: '服装设计',
  orderCate: '手工包制作',
  orderPrice: 1690,
  orderAmount: 1,
  orderStatus: 2,
  link: '/pages/order-detail/index'
}, {
  orderDate: '2019-2-20',
  orderNum: '2224567',
  orderCover: order2,
  orderSort: '包装推广',
  orderCate: '产品logo及宣传海报设计',
  orderPrice: 2330,
  orderAmount: 1,
  orderStatus: 3,
  link: '/pages/order-detail/index'

}]

export default class MyOrder extends Component {

  config = {
    navigationBarTitleText: '我的订单'
  }

  constructor(props) {
    super(props);
    this.state = {
      current: 2,
    }
  }

  handleClick = () => {
    Taro.navigateBack();
  }

  handleTabClick = (index) => {
    this.setState({
      current: index
    })
  }

  render() {
    return (
      <View className="order-container">
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#fff'
          title='我的订单'
          leftIconType='chevron-left'
        />
        <AtTabBar
          tabList={[
            { title: '全部' },
            { title: '待接单' },
            { title: '进行中', dot: true },
            { title: '待评价' },
          ]}
          onClick={this.handleTabClick}
          current={this.state.current}
        />
        <View className="order-list">
          {
            orderData.map(data => <OrderCard data={data} />)
          }
        </View>
      </View>
    )
  }
}
