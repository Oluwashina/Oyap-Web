import * as actionTypes from '../actions/actionTypes'

const initState = {
    count: 1,
    cartItems: [],
    cartCount: 0
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
        case 'CARTITEMS':
            return{
                ...state,
                cartItems: action.data
            }
        case 'CARTCOUNT':
            return{
                ...state,
                cartCount: action.data.cartcount
            }
            
        case actionTypes.ADD_TO_CART:
            
            // check if product exist in cart, if true adjust quantity
            const inCart = state.cartItems.find((item) =>
            item.id === action.id ? true : false)
            
            // adding a new product to cart
            let addedItem = action.product.find(pro=> pro.id === action.id)
            let result = {
                ...addedItem,
                cartQty: state.count,
                subTotal: state.count * addedItem.productPrice
            }

            let newCartItems =  inCart ? state.cartItems.map((item)=> item.id === action.id ? {...item, cartQty: item.cartQty + state.count, subTotal: (item.cartQty + state.count) * item.productPrice } : item) : [...state.cartItems, result]
                
            return{
                ...state,
                cartItems: newCartItems
            }
        case actionTypes.REMOVE_FROM_CART:
            let removedItem = state.cartItems.filter(item=> item.id !== action.id)
        
            return{
                ...state,
                cartItems: removedItem,
    
            }
        case actionTypes.ADJUST_QTY:
            let cartItems = state.cartItems.map((item => item.id === action.id ? {...item, cartQty: action.qty, subTotal: action.qty * item.productPrice} : item))
            return{
                ...state,
                cartItems: cartItems
            }
        default:
            return state
    }
}

export default cartReducer