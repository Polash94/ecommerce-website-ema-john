import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const [product, setProduct] = useState(10);
    const [cart,setCart]=useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProduct(data.slice(20,30)));
    }, []);

    const handleAddProduct=(product)=>{
        console.log(product)
        setCart([...cart,product])
    }

    return (
        <div class='flex'>

            <div class="product-container w-3/4 mx-3 border-r-4 border-black">
            {product.map(product => <Products product={product} handleAddProduct={handleAddProduct}></Products>)}
            </div>

            <div className="product-cart">
                <h1>This is Cart</h1>
                <h1>Summary:{cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;