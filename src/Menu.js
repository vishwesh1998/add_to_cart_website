import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Menu()
{
    const cart = useSelector(state=>state.myCart.value)
    return <div className="row">
    <div className='col-xl-10 col-lg-10'>
      <h1 className='alert-success text-center'>Shopping Website</h1>
    </div>
    <div className='col-xl-1 col-lg-1'>
      <Link to='/'><h6 className='text-primary text-center'>Home</h6></Link>
    </div>
    <div className='col-xl-1 col-lg-1'>
    <Link to='/cart'><h6 className='text-primary text-center'>Cart: {cart.length}</h6></Link>
    </div>
  </div>
}