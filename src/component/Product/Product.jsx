import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Product.css'
const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const [btn, setBtn] = useState(false);
    const products = JSON.parse(sessionStorage.getItem('products'));
    useEffect(() => {
        if (productId) {
            const fetchProduct = products.find(p => p.id == productId);
            if (fetchProduct) {
                setProduct(fetchProduct)
            }
        }
    }, [])
    function addCart() {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        cart.push(product);
        setBtn(true);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    return (
        <div className='product'>
            {product && <div><h2>{product.title}</h2>
                <div className='image-container'>
                    {product.images.map((image, i) => (
                        <img key={i} src={image} alt={i} />
                    ))}
                </div>
                <p>{product.description}</p>
                <p>Brand : {product.brand}</p>
                <button className="buttons" disabled={btn} onClick={() => addCart()}>{btn ? "Added to Cart" : "Add to Cart"}</button>
                <Link to='/cart'>
                    <button className="buttons">View Cart</button>
                </Link>
            </div>}
            {!product && <div>...Loading</div>}
        </div>
    )
}
export default Product;