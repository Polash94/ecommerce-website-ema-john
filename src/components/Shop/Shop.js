import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [product,setProduct]=useState();
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res=>res.json())
    .then(data=>setProduct(data.slice(0,10)));
    },[]);

    return (
         <div>
            <ul>
                {product.map(product => <li>{product.name}</li>)}
            </ul>
        </div>
    );
};

export default Shop;