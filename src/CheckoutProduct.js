import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating, hiddenButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        // Remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        });
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating" >
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><StarIcon /></p>
                            ))
                    }
                </div>
                {!hiddenButton && (
                    <button onClick={removeFromBasket} type="">Remove From Basket</button>
                )}

            </div>
        </div>
            
    )
}

export default CheckoutProduct;
