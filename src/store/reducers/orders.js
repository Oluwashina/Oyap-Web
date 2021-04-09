
const initState = {
    customerOrders: []
}

const orderReducer = (state=initState, action) => {
    switch(action.type){        
        case 'CustomerOrders':
            return{
                ...state,
                customerOrders: action.data
            }
        default:
            return state
    }
}

export default orderReducer