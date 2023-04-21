import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = (props) => {

       props.setProduct(20);

    //Product State//
    const [product, setProduct] = useState([]);

    //Cart State//
    const [cart, setCart] = useState([]);

    //Fetching Product Data//

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProduct(data.slice(20, 30)));
    }, []);



    const handleAddProduct = (product) => {
        setCart([...cart, product])
    }

    //sending product data to app
 
    

    return (
        <div class='flex'>
        

            <div class="product-container w-3/4 mx-3 border-r-4 border-black">
                {product.map(product => <Products product={product} handleAddProduct={handleAddProduct}></Products>)}
            </div>

            <div className="product-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;