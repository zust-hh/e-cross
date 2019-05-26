import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput, AtTabBar } from 'taro-ui'
import ArticleCard from '../../components/article-card'
import './index.scss'

const orderTop = require('../../static/orderTop.png')
const articleCover1 = require('../../static/articleCover1.png')
const articleCover2 = require('../../static/articleCover2.png')

const articleList = [
  {
    articleCover: articleCover1,
    articleSort: '【服装设计】服装整体设计包括面料挑选及版衣设计',
    articlePrice: 2000,
    link: '/pages/service-detail/index'
  },
  {
    articleCover: articleCover2,
    articleSort: '【服装设计】品牌全案logo/自制手工包/面料挑选等',
    articlePrice: 1350,
    link: '/pages/service-detail/index'
  }
]

export default class OrderDetail extends Component {

  config = {
    navigationBarTitleText: '订单详情'
  }

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="order">
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#fff'
          title='订单详情'
          leftIconType='chevron-left'
        />
        <Image
          src={orderTop}
          className="order-top"
        />
         <View className="card-wrap">
          {
            articleList.map(item => 
              <ArticleCard 
                className="article-card"
                data={item} />
            )
          }
        </View>
      </View>
    )
  }
}
