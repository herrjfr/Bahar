import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Campaigns from './components/Campaigns'
import Login from './components/Login'
import Wishlist from './components/Wishlist'
import ShoppingCart from './components/ShoppingCart'
import Registration from './components/Registration'
import ForgetPassword from './components/ForgetPassword'

import BrendsPage from './components/BrendsPage'
import TopThree from './components/TopThree'

function App() {

  return (
    <Routes>

<<<<<<< HEAD
=======
    

>>>>>>> fdcff877cd60691d4f90ebc68c0425fbacedb2a9
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/campaigns' element={<Campaigns/>}/>
        <Route path='/login' element={<Login/>}/>
<<<<<<< HEAD
             <Route path='/registration' element={<Registration />} />
=======
          <Route path="/registration" element={<Registration />} />
>>>>>>> fdcff877cd60691d4f90ebc68c0425fbacedb2a9
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path='/all-brends' element={<BrendsPage/>}/>
        <Route path='/best-seller' element={<TopThree/>}/>
        <Route path='/new' element={<TopThree/>}/>
        <Route path='/discount' element={<TopThree/>}/>

      </Route>
    </Routes>
  )
}

export default App