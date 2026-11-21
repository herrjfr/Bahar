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
import Details from './components/Details'
import Blogs from './components/Blogs'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/campaigns' element={<Campaigns />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/all-brends' element={<BrendsPage />} />
        <Route path='/best-seller' element={<TopThree />} />
        <Route path='/new' element={<TopThree />} />
        <Route path='/discount' element={<TopThree />} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='products/:ID' element={<Details/>}/>
      </Route>
    </Routes>
  )
}

export default App