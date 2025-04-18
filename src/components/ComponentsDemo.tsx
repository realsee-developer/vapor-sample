import {
  Alert,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Icon,
  Input,
  Popover,
  Switch,
  Tabs,
  TabsPane,
  Tooltip
} from '@realsee/vapor'
import React, { useState } from 'react'
import './ComponentsDemo.scss'

const ComponentsDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('基础组件')
  const [switchValue, setSwitchValue] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [popoverVisible, setPopoverVisible] = useState(false)

  return (
    <div className="components-demo">
      <h2>Vapor 组件示例</h2>

      <Tabs value={activeTab} onChange={setActiveTab}>
        <TabsPane label="基础组件" value="基础组件">
          <div className="demo-section">
            <h3>按钮 Button</h3>
            <div className="demo-row">
              <Button>默认按钮</Button>
              <Button type="primary">主要按钮</Button>
              <Button type="success">成功按钮</Button>
              <Button type="warning">警告按钮</Button>
              <Button type="danger">危险按钮</Button>
              <Button disabled>禁用按钮</Button>
            </div>

            <h3>图标 Icon</h3>
            <div className="demo-row">
              <div className="icon-container">
                <Icon type="close" />
                <span>关闭</span>
              </div>
              <div className="icon-container">
                <Icon type="check" />
                <span>选中</span>
              </div>
              <div className="icon-container">
                <Icon type="user" />
                <span>用户</span>
              </div>
              <div className="icon-container">
                <Icon type="home" />
                <span>首页</span>
              </div>
              <div className="icon-container">
                <Icon type="setting" />
                <span>设置</span>
              </div>
            </div>

            <h3>输入框 Input</h3>
            <div className="demo-row">
              <Input
                placeholder="请输入内容"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input placeholder="禁用状态" disabled />
              <Button type="primary" onClick={() => setInputValue('')}>清空</Button>
            </div>

            <h3>开关 Switch</h3>
            <div className="demo-row">
              <Switch
                checked={switchValue}
                onChange={setSwitchValue}
              />
              <span>当前状态: {switchValue ? '开启' : '关闭'}</span>
            </div>
          </div>
        </TabsPane>

        <TabsPane label="反馈组件" value="反馈组件">
          <div className="demo-section">
            <h3>提示 Tooltip</h3>
            <div className="demo-row">
              <Tooltip title="这是一个提示信息">
                <Button>鼠标悬停查看提示</Button>
              </Tooltip>
            </div>

            <h3>警告 Alert</h3>
            <div className="demo-row">
              <Alert type="info" message="这是一条普通信息提示" />
              <Alert type="success" message="这是一条成功信息提示" />
              <Alert type="warning" message="这是一条警告信息提示" />
              <Alert type="error" message="这是一条错误信息提示" />
            </div>

            <h3>弹出框 Popover</h3>
            <div className="demo-row">
              <Popover
                visible={popoverVisible}
                onVisibleChange={setPopoverVisible}
                content={
                  <div>
                    <p>这是弹出内容</p>
                    <Button size="small" onClick={() => setPopoverVisible(false)}>关闭</Button>
                  </div>
                }
              >
                <Button onClick={() => setPopoverVisible(!popoverVisible)}>
                  点击显示/隐藏
                </Button>
              </Popover>
            </div>
          </div>
        </TabsPane>

        <TabsPane label="容器组件" value="容器组件">
          <div className="demo-section">
            <h3>卡片 Card</h3>
            <div className="demo-row">
              <Card className="demo-card">
                <CardHeader>
                  <h4>卡片标题</h4>
                </CardHeader>
                <CardContent>
                  <p>这是卡片内容区域，可以放置任何内容。</p>
                  <p>Vapor组件库提供了丰富的组件，可以快速构建VR看房应用。</p>
                </CardContent>
                <CardFooter>
                  <Button size="small">取消</Button>
                  <Button type="primary" size="small">确定</Button>
                </CardFooter>
              </Card>

              <Card className="demo-card">
                <CardHeader>
                  <h4>功能卡片</h4>
                </CardHeader>
                <CardContent>
                  <p>这是另一个卡片示例，展示不同的样式和内容。</p>
                  <div className="demo-card-switch">
                    <span>启用功能</span>
                    <Switch checked={switchValue} onChange={setSwitchValue} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="primary" size="small" block>确认设置</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsPane>
      </Tabs>
    </div>
  )
}

export default ComponentsDemo
