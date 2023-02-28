import React from 'react'


import List from '../../components/organism/lists/List'
import Header from '../../components/organism/header/Header'
import Footer from '../../components/organism/footer/Footer'


const Home = () => {
  return (
    <main>
        <Header name={"Mirichaquet's Romance"}/>
        <List />
        <Footer />
    </main>
  )
}

export default Home