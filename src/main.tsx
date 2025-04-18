import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

// 引入vapor样式
import '@realsee/vapor/dist/vapor.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
