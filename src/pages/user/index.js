import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

const star = require('../../static/star.png')
const orderIcon = require('../../static/orderIcon.png')
const followIcon = require('../../static/followIcon.png')
const needsIcon = require('../../static/needsIcon.png')
const msgIcon = require('../../static/msgIcon.png')
const collectIcon = require('../../static/collectIcon.png')
const csIcon = require('../../static/csIcon.png')
const couponIcon = require('../../static/couponIcon.png')
const nextIcon = require('../../static/next.png')
const gOrderIcon = require('../../static/gOrderIcon.png')
const gInfoIcon = require('../../static/gInfoIcon.png')
const gManageIcon = require('../../static/gManageIcon.png')
const gSpreadIcon = require('../../static/gSpreadIcon.png')
const gMsgIcon = require('../../static/gMsgIcon.png')
const gArticleIcon = require('../../static/gArticleIcon.png')
const gIncomeIcon = require('../../static/gIncomeIcon.png')
const gCSIcon = require('../../static/gCSIcon.png')


const userType = localStorage.getItem('userType') || 1

const user = {
  avatar: require('../../static/userHead.png'),
  name: '小苹果',
  tags: [
    '已实名认证',
    '有工商执照',
    '企业'
  ],
  score: 5
}

const centerArr = [
  {
    icon: orderIcon,
    text: '我的订单',
    link: '/pages/my-order/index'
  },
  {
    icon: msgIcon,
    text: '我的关注',
    link: '/pages/my-follow/index'
  },
  {
    icon: needsIcon,
    text: '我的需求',
    link: ''
  }
]

const optionArr = [
  {
    icon: msgIcon,
    text: '我的消息',
    link: '/pages/message/index'
  },
  {
    icon: collectIcon,
    text: '我的收藏',
    link: '/pages/my-favorite/index'
  },
  {
    icon: csIcon,
    text: '客服中心',
    link: ''
  },
  {
    icon: couponIcon,
    text: '我的优惠券',
    link: ''
  }
]

const groupOptionArr = [
  {
    icon: gOrderIcon,
    text: '我的订单',
    link: '/pages/my-order/index'
  },
  {
    icon: gInfoIcon,
    text: '团队信息',
    link: '/pages/group-detail/index'
  },
  {
    icon: gManageIcon,
    text: '团队管理',
    link: ''
  },
  {
    icon: gSpreadIcon,
    text: '推广',
    link: ''
  },
  {
    icon: gMsgIcon,
    text: '消息',
    link: ''
  },
  {
    icon: gArticleIcon,
    text: '我的文章',
    link: ''
  },
  {
    icon: gIncomeIcon,
    text: '收入',
    link: ''
  },
  {
    icon: gCSIcon,
    text: '帮助中心',
    link: ''
  }
]

export default class User extends Component {

  config = {
    navigationBarTitleText: '用户中心'
  }

  renderSelfUser() {

    return (
      <View>
        <View className="user-center">
          {
            centerArr.map(item => {
              return (
                <View className="item-wrap" onClick={() => Taro.navigateTo({
                  url: item.link
                })}>
                  <Image
                    src={item.icon}
                    className="center-icon"
                  />
                  <Text className="center-text">{item.text}</Text>
                </View>

              )
            })
          }

        </View>
        <View className="user-footer">
          {
            optionArr.map(item => {
              return (
                <View className="item-wrap" onClick={() => Taro.navigateTo({
                  url: item.link
                })}>
                  <Image
                    src={item.icon}
                    className="item-icon"
                  />
                  <Text className="item-text">{item.text}</Text>
                  <Image
                    src={nextIcon}
                    className="item-next"
                  />
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  renderGroupUser() {
    return <View className="group-center">
      {
        groupOptionArr.map(item =>
          <View className="group-item" onClick={() => Taro.navigateTo({
            url: item.link
          })}>
            <Image
              src={item.icon}
              className="option-icon"
            />
            <Text className="option-text">{item.text}</Text>
          </View>
        )
      }
      <View className="group-item" onClick={() => Taro.navigateTo({
        url: '/pages/group-detail/index'
      })}>
        <Text className="option-text">团队主页>></Text>
      </View>
    </View>

  }

  renderScore(score) {
    var arr = []
    for (let i = 0; i < score; i++) {
      arr.push(i)
    }
    return arr.map((num) => <Image className="score-icon" src={star} ></Image>)
  }

  render() {
    return (
      <View className="user">
        <View className="user-header">
          <View className="header-back">
            <View className="header-wrap">
              <Image
                src={user.avatar}
                className="user-avatar"
              ></Image>
              <Text className="user-name">{user.name}</Text>
              <View className="user-tags">
                {
                  user.tags.map(tag => {
                    return <Text className="tag-item">{tag}</Text>
                  })
                }
                <Text className="tag-add">+</Text>
              </View>
              {
                userType == 1 &&
                <View className="user-score">
                  <Text className="score-text">综合评分：</Text>
                  <View>
                    {
                      this.renderScore(user.score)
                    }
                  </View>
                </View>
              }
            </View>
          </View>
        </View>
        {
          userType == 1 ? this.renderSelfUser() : this.renderGroupUser()
        }
      </View>
    )
  }
}
