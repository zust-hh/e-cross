import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtNavBar, AtInput, AtIcon, AtTextarea, AtMessage } from 'taro-ui'
import './index.scss'

const searchIcon = require('../../static/search.png')

export default class ReleaseDemand extends Component {

  config = {
    navigationBarTitleText: '发布需求'
  }

  handleClick = () => {
    Taro.atMessage({
      'message': '添加成功',
      'type': 'success',
    });
  }

  render() {
    return (
      <View className="demand-container">
        <AtMessage />
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          color='#fff'
          title='发布需求'
          rightFirstIconType='add'
        />
        <View className="prompt-view">
          <Text className="prompt-text">点击添加图片/长按排序</Text>
        </View>
        <View className="add-img-list">
          {
            Array(3).fill().map(() => <View className="add-img-item">
              <View>
                <AtIcon value='add' size='30' color='rgb(174,176,185)'></AtIcon>
              </View>
            </View>)
          }
        </View>
        <View>
          <AtInput
            clear
            type='text'
            maxLength='10'
            placeholder='请输入标题'
          >
            <Text>0/50</Text>
          </AtInput>
          <AtInput
            clear
            type='number'
            maxLength='11'
            placeholder='请输入联系手机号'
          >
          </AtInput>
          <AtInput
            clear
            type='text'
            maxLength='10'
            placeholder='需求分类'
          >
          </AtInput>
          <AtInput
            clear
            type='number'
            maxLength='10'
            placeholder='需求预算'
          >
          </AtInput>
          <AtTextarea
            value={this.state.value}
            maxLength={2000}
            placeholder='请输入详细说明'
          />
        </View>
      </View>
    )
  }
}
