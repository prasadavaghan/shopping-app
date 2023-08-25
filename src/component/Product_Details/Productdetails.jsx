import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Productdetails.css'
const Productdetails = () => {
    const { productname } = useParams();
    const [productData, setProductData] = useState()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${productname}`)
            .then(res => res.json())
            .then(d => {
                setProductData(d.products);
                sessionStorage.setItem("products", JSON.stringify(d.products))
            });
    }, [])
    console.log(productData)
    return (
        <div className='product-container'>
            <h2>Product List</h2>
            {productData && <ul>
                {productData.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.brand}</p>
                        </Link>
                    </li>
                ))}
            </ul>}
            {!productData && <div>...Loading </div>}
        </div>
    )
}

export default Productdetails