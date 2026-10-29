// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RealseeApp from './App'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RealseeApp />
  </StrictMode>,
)
