import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">                
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/OPPO_Watch/Band/Ingress/6th/oppo_1500x300.jpg" alt="" />

                {basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no item in your basket. To buy one more item, click "Add To Basket" next to item</p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>

                        {/* List of all of the checkout products */}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}

        </div>
    );
}

export default Checkout;
