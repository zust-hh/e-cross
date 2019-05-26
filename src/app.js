import Taro, { Component, navigateTo } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import Index from './pages/index'

import './app.scss'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/search/index',
      'pages/forum/index',
      'pages/user/index',
      'pages/article-detail/index',
      'pages/service-detail/index',
      'pages/release-demand/index',
      'pages/message/index',
      'pages/chat/index',
      'pages/user/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#555",
      selectedColor: "#45b5ed",
      backgroundColor: "white",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./static/assets/tab-bar/home.png",
        selectedIconPath: "./static/assets/tab-bar/home-active.png",
        text: "首页"
      }, {
        pagePath: "pages/forum/index",
        iconPath: "./static/assets/tab-bar/cate.png",
        selectedIconPath: "./static/assets/tab-bar/cate-active.png",
        text: "论坛"
      }, {
        pagePath: "pages/release-demand/index",
        iconPath: "./static/assets/tab-bar/cate.png",
        selectedIconPath: "./static/assets/tab-bar/cate-active.png",
        text: "发布需求"
      }, {
        pagePath: "pages/message/index",
        iconPath: "./static/assets/tab-bar/cart.png",
        selectedIconPath: "./static/assets/tab-bar/cart-active.png",
        text: "消息"
      }, {
        pagePath: "pages/user/index",
        iconPath: "./static/assets/tab-bar/user.png",
        selectedIconPath: "./static/assets/tab-bar/user-active.png",
        text: "个人中心"
      }]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
        <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
