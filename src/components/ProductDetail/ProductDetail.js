import React from 'react';
import Products from '../Products/Products';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
const {id}=useParams();

    return (
        <div>
           {id} Product Detail coming soon
        </div>
    );
};

export default ProductDetail;