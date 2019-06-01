import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput, AtTabBar } from 'taro-ui'
import ArticleCard from '../../components/article-card'
import './index.scss'

const groupDetailTop1 = require('../../static/group-detail-top1.png')
const groupDetailTop2 = require('../../static/group-detail-top2.png')
const groupDetailBottom1 = require('../../static/group-detail-bottom1.png')
const articleCover1 = require('../../static/articleCover1.png')
const articleCover2 = require('../../static/articleCover2.png')

const groupDetailTopArr = [groupDetailTop1, groupDetailTop2]

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

export default class GroupDetail extends Component {

  config = {
    navigationBarTitleText: '团队详情'
  }

  constructor(props) {
    super(props);
    this.state = {
      groupType: 0
    }
  }

  componentDidMount() {
    const type = localStorage.getItem('userType');
    this.setState({
      groupType: type
    })
  }

  rendergroupDetailTop = () => {
      return <Image
        src={groupDetailTop1}
        className="group-detail-top"
      />
  }

  handleClick = () => {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="group-container">
        {
          this.setState == 0 ? null : <View>
            <AtNavBar
              onClickLeftIcon={this.handleClick}
              color='#fff'
              title='团队详情'
              leftIconType='chevron-left'
            />
            {
              this.rendergroupDetailTop()
            }
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
              src={groupDetailBottom1}
              className="group-detail-bottom"
            />
          </View>
        }
      </View>
    )
  }
}
