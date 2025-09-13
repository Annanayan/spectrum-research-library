import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './routes/App'
import './index.css'
import { preloadImages } from './utils/imageOptimization'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// 预加载首屏关键图片
preloadImages([
  '/assets/Home Hero.png',
  '/assets/Coming Out Anxiety Header.png',  
  '/assets/Support & Lifelines Header.png',
  '/assets/Books & Journals Header.png'
])
