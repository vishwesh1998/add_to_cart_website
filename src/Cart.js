import {useSelector,useDispatch} from 'react-redux'
import {delCart,IncQty,DecQty,ClrCart} from './cartSlice'

export default function Cart()
{
    const cart = useSelector(state=>state.myCart.value)
    const dispatch = useDispatch()
    let SumAll = cart.reduce((a,b)=>{
            return (b.price * b.qty + a)
        },0)

    return <div>
        <h2 className='alert-danger'>Cart List</h2>
        <div>
            <b className='text-success'>Total Bill : $
            {SumAll}
            </b> 
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className='btn-sm btn-info' onClick={()=>dispatch(ClrCart())}>Clear Cart</button>
        </div>
        <table className='table mt-3'>
        <thead>
            <tr>
                <th>S. No.</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Operation</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((ob,index)=><tr>
                <td>{index+1}</td>
                <img src={ob.thumbnail} width={100} heigth={100}/>
                <td>
                    <b>{ob.title}</b> <br/> <br/>
                    {ob.brand} - {ob.category}
                </td>
                <td>${ob.price}</td>
                <td>
                    <button className='btn-sm btn-secondary' onClick={()=>dispatch(DecQty(ob))}>-</button> &nbsp; 
                    <b>{ob.qty}</b> &nbsp;
                    <button className='btn-sm btn-secondary' onClick={()=>dispatch(IncQty(ob.id))}>+</button>
                </td>
                <td>${ob.price * ob.qty}</td>
                <td><button className='btn-sm btn-danger' onClick={()=>dispatch(delCart(ob.id))}>Delete</button></td>
            </tr>)}
        </tbody>
        </table>
    </div>
}