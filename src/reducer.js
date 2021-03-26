export const initialState = {
    basket: [],
    user: null,
}
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            // Logic for add item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
            };  
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }

        case "REMOVE_FROM_BASKET":
            // Logic for add item to basket
            
            //  clone the basket
            let newBasket = [...state.basket];

            // we check to see if product exist 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if(index >= 0){
                // Item exist in basket remove IT...
                newBasket.splice(index, 1);
            }else{
                console.warn(  
                    "Cant move product (id: $ {action.id}) as its not in basket"
                )
            }

            return { ...state, basket:newBasket };
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        default:
            return state;

    }
}

export default reducer;