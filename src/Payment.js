import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import "./Payment.css";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generate the pecial stripe secrete which allow us to charge a customer

        const getClientSecrete = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expacts the total in a currencies subunits
                url: `/payment/create?total=${ getBasketTotal(basket) * 100 }`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecrete();
    }, [basket])


    console.log('The Secret Is >>>', clientSecret);

    const handleSubmit = async event => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) => {
 
            // PaymentIntent payment confimation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            history.replace('/orders');
        })
    }
    const handleChange = event => {
        // listen for changes in the CardElement
        // and display any errord as the customer typed their chard detail
        setDisabled(event.empty);
        setError(event.error ? event.error.message :"");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    checkout (
                        <Link to="/checkout">{basket.length} Items</Link>   
                    )
                </h1>
                {/* Payment section delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{ user?.email }</p>
                        <p>123 React Lane</p>
                        <p>Los Angeless CA</p>
                    </div>
                </div>
                {/* Payment section Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment_items">
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
                </div>
                {/* Payment section Payment Method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe code here */}
                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText ={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix="₹ "                                
                                />
                                <button disabled={processing || disabled || succeeded }>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
