import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { footerData, headerData, mainData } from './data/data'


const App = () => {

  return (
    <div className="App">
      <Header title={headerData}/>
      <Main prop={mainData}/>
    </div>
  )
}

export default App
