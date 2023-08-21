import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Cart from './Cart'
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function App()
{
  const [product,setProduct] = useState([])
  useEffect(()=>{
    loadData()
  },[])

  let loadData = async ()=>{
    const result = await axios.get('https://dummyjson.com/products') 
    // console.log(result)
    setProduct(result.data.products)
  }

  return <div className="container">
    <Menu/>
    <hr/>
    <Routes>
      <Route path='/' element={<Home product={product}/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
  </div>
}