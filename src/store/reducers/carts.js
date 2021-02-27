import * as actionTypes from '../actions/actionTypes'

const initState = {
    count: 1,
    cartItems: [],
    total: 0
}

const cartReducer = (state=initState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                count: state.count - 1    
            }
        case actionTypes.ADD_TO_CART:
            let addedItem = action.product.find(pro=> pro.id === action.id)
            var result = {
                ...addedItem,
                cartQty: state.count,
                subTotal: state.count * addedItem.price
            }
            let newTotal = state.total + (state.count * addedItem.price)
                
            return{
                ...state,
                cartItems: [...state.cartItems, result],
                total: newTotal
            }
        case actionTypes.REMOVE_FROM_CART:
            let removedItem = state.cartItems.filter(item=> item.id !== action.id)
            let item = state.cartItems.find(item=> item.id === action.id)
            let removedTotal = state.total - (item.cartQty * item.price)
            return{
                ...state,
                cartItems: removedItem,
                total: removedTotal
            }
        default:
            return state
    }
}

export default cartReducer