
const initState = {
    isLoading: false,
    products:[],
    newOrders: [],
    confirmedOrders: [],
    completedOrders: [],
    orderDetails: {},
    dashboardCount: {},
    confirmloader: false,
    success: false
}

const farmersReducer = (state=initState, action) => {
    switch(action.type){
        case 'FarmersProducts':
            return{
                ...state,
                products: action.data
            }
        case 'NewOrders':
            return{
                ...state,
                newOrders: action.data,
                success: false
            }
        case 'confirm_Loader':
            return{
                ...state,
                confirmloader: true
            }
        case 'Confirm_Success':
            return{
                ...state,
                confirmloader: false,
                success: true
            }
        case 'NewOrderFilter':
            let newOrder = state.newOrders.find(pro=> pro.id === action.id)
            return{
                ...state,
                orderDetails: {
                    ...newOrder,
                    orderStatus: action.name
                }
            }
        case 'ConfirmedOrders':
            return{
                ...state,
                confirmedOrders: action.data
            }
        case 'ConfirmedOrderFilter':
            let confirmOrder = state.confirmedOrders.find(pro=> pro.id === action.id)
            return{
                ...state,
                orderDetails: {
                    ...confirmOrder,
                    orderStatus: action.name
                }
            }
        case 'CompletedOrders':
            return{
                ...state,
                completedOrders: action.data
            }
        case 'CompletedOrderFilter':
            let completeOrder = state.completedOrders.find(pro=> pro.id === action.id)
            return{
                ...state,
                orderDetails: {
                    ...completeOrder,
                    orderStatus: action.name
                }
            }
        case 'DashboardCount':
            return{
                ...state,
                dashboardCount: action.data
            }
        default:
            return state
    }
}

export default farmersReducer