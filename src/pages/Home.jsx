import React from 'react'
import Hero from '../components/Hero'
import HeroCtg from '../components/HeroCtg'
import Products from '../components/Products'
import Brends from '../components/Brends'
import More from '../components/More'
import MainCtg from '../components/MainCtg'
import MainText from '../components/MainText'

function Home() {
  return (
    <>
    <Hero/>
    <HeroCtg/>
    <Products/>
    <Brends/>
    <More/>
    <MainCtg/>
    <MainText/>
    </>
  )
}

export default Home