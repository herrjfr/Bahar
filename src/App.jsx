import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Campaigns from './components/Campaigns'
import Login from './components/Login'
import Wishlist from './components/Wishlist'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/campaigns' element={<Campaigns/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
      </Route>
    </Routes>
  )
}

export default App