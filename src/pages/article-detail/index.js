import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import ArticleCard from '../../components/article-card'

const articleTop = require('../../static/articleTop.png')
const articleBottom = require('../../static/articleBottom.png')
const articleCover1 = require('../../static/articleCover1.png')
const articleCover2 = require('../../static/articleCover2.png')
const back = require('../../static/back.png')
const spread = require('../../static/spread.png')


const articleList = [
  {
    articleCover: articleCover1,
    articleSort: '【服装设计】服装整体设计包括面料挑选及版衣设计',
    articlePrice: 2000,
    link: '/pages/article-detail/index'
  },
  {
    articleCover: articleCover2,
    articleSort: '【服装设计】品牌全案logo/自制手工包/面料挑选等',
    articlePrice: 1350,
    link: '/pages/article-detail/index'
  }
]

export default class ArticleDetail extends Component {

  render() {
    return (
      <View className="article">
        <View className="article-header">
          <Image 
            src={back}
            className="header-back"
            onClick={() => {Taro.navigateBack()}}
          />
          <Image 
            src={spread}
            className="header-spread"
          />
        </View>
        <Image
          src={articleTop}
          className="article-content"
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
        
        
        <Image
          src={articleBottom}
          className="article-bottom"
        />
      </View>
    )
  }
}
