import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter , Routes , Route} from 'react-router-dom'
import GlobalSongList from './components/pages/GlobalSongList/GlobalSongList'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index path='/global-songlist' element={<GlobalSongList/>} />


        </Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
