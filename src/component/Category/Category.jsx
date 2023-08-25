import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Category.css'
const Category = () => {
    const cartData = JSON.parse(sessionStorage.getItem('cart')) || [];
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(d => setData(d));
    }, [])
    return (
        <div className='container'>
            <h2>Categories</h2>
            <Link to='/cart'><button className='cart-button'>View Cart ({cartData ? (cartData.length) : ""})</button></Link>

            {data && <ul className='container-list'>
                {data.map((item, i) => (
                    <li key={i}>
                        <Link to={`productdetails/${data[i]}`}>{data[i]}</Link>
                    </li>
                ))}
            </ul>
            }
            {!data && <div className='loading-spinner'>
                <div className='spinner'></div>
                <p>...Loading</p>
            </div>}
        </div>
    )
}
export default Category;