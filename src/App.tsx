import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@realsee/vapor'
import React, { useState } from 'react'
import './App.scss'
import ComponentsDemo from './components/ComponentsDemo'
import VRScene from './components/VRScene'
import RealseeDemo from './realsee/RealseeDemo'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vr' | 'components' | 'realsee'>('vr')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Vapor 示例项目</h1>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'vr' ? 'active' : ''}`}
            onClick={() => setActiveTab('vr')}
          >
            VR演示
          </button>
          <button
            className={`tab ${activeTab === 'components' ? 'active' : ''}`}
            onClick={() => setActiveTab('components')}
          >
            组件演示
          </button>
          <button
            className={`tab ${activeTab === 'realsee' ? 'active' : ''}`}
            onClick={() => setActiveTab('realsee')}
          >
            Realsee示例
          </button>
        </div>
      </header>

      <main className="app-content">
        {activeTab === 'vr' ? (
          <VRScene />
        ) : activeTab === 'components' ? (
          <ComponentsDemo />
        ) : (
          <RealseeDemo />
        )}
      </main>

      <footer className="app-footer">
        <Button type="primary" onClick={toggleModal}>显示Vapor Modal示例</Button>
      </footer>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ModalHeader>
          <h3>这是一个Vapor Modal组件</h3>
        </ModalHeader>
        <ModalBody>
          <p>您正在查看由@realsee/vapor提供的Modal组件示例。</p>
          <p>Vapor是如视提供的一套基于React的业务组件库，可以帮助开发者快速构建VR看房相关的应用。</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleModal}>关闭</Button>
          <Button type="primary" onClick={toggleModal}>确认</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default App
