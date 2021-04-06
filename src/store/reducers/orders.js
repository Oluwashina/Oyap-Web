
const initState = {
    orders: []
}

const orderReducer = (state=initState, action) => {
    switch(action.type){        
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
        default:
            return state
    }
}

export default orderReducer