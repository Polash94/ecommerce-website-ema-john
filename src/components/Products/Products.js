import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
   

    const { name, img, price, stock, seller } = props.product;
    return (
        <div class='flex justify-around'>

            <div class="product-image w-1/4">
                <img src={img} alt="" class='' />
            </div>

            <div className="product-details">
                <p class='text-blue-600'>{name}</p>
                <br />
                <p class=''>By:{seller}</p>
                <br />
                <p>${price}</p>
                <br />
                <p>In Stock:{stock}</p>
                <button onClick={()=> props.handleAddProduct(props.product)} class='border border-4 border-solid border-gray-600 bg-orange-400 rounded-lg p-2'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add to Cart
                    </button>
                
            </div>

        </div>
    );
};

export default Products;