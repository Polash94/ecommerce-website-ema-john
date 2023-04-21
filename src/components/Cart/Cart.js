import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let pd = cart[i];
        total = total + pd.price;
    }

    let shipping = 0;
    if (total > 0 && total < 400) {
        shipping = 15;
    }
    else if (total > 400) {
        shipping = 5;
    }

    let tax = (total + shipping) / 10;
    let orderTotal = total + shipping + tax;



    return (
        <div>
            <h1>Order Summary</h1>
            <br />
            <h3>Items Ordered:</h3>
            <br />
            <p class='text-left'><small>Iteams:{cart.length}</small></p>
            <p class='text-left'><small>Total:{total}</small></p>
            <p class='text-left'><small>Shipping:{shipping}</small></p>
            <p class='text-left'><small>Tax:{tax}</small></p>
            <h2 class='text-left'>Order Total:{orderTotal}</h2>
        </div>
    );
};

export default Cart;