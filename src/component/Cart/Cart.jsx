import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = () => {
    const cartData = JSON.parse(sessionStorage.getItem('cart'));

    return (
        <div className='cart-container'>
            {cartData && <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {cartData.map(item => (
                        <li key={item.id}>
                            <img src={item.thumbnail} alt={item.title} width='50' height='50' />
                            <span className='textCart'>{item.title}</span>
                        </li>
                    ))}
                </ul>
                <Link to='/'><button className="buttons-cart">Home Page</button></Link>
            </div>}
            {!cartData && <div>
                <h2>Cart is Empty</h2>
            </div>}
        </div>
    )
}

export default Cart