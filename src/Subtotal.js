import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}
            {/* <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{ value }</strong>
                        </p>
                        <small classNamesubtotal_gift>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                dispayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            /> */}
            Sustotal ({basket.length} items)): ₹{getBasketTotal(basket)} 
            <button onClick={e => history.push('/payment') }>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;