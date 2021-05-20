
const initState = {
    isLoading: false,
    products:[],
    productImages: [],
    productZero: "",
    productOne: "",
    productTwo: "",
    productThree: "",
    newOrders: [],
    confirmedOrders: [],
    completedOrders: [],
    orderDetails: {},
    dashboardCount: {},
    confirmloader: false,
    success: false,
    transactions: [],
    withdrawsuccess: false,
    deleteBtn: false
}

const farmersReducer = (state=initState, action) => {
    switch(action.type){
        case 'FarmersProducts':
            return{
                ...state,
                products: action.data
            }
        case 'EditProduct':
            let product = state.products.find(product => product.id === action.id);
            let images = product.productImages
            return{
                ...state,
                productZero: images[0],
                productOne: images[1],
                productTwo: images[2],
                productThree: images[3]
            }
        case 'clearProductImages':
            return{
                ...state,
                productZero: "",
                productOne: "",
                productTwo: "",
                productThree: "",
        }
        case 'productZero':  
            return{
                ...state,
                productZero: action.image
            }
        case 'productOne':  
            return{
                ...state,
                productOne: action.image
            }
        case 'productTwo':  
            return{
                ...state,
                productTwo: action.image
            }
        case 'productThree':
            return{
                ...state,
                productThree: action.image
            }
        case 'Product_Created':
            return{
                ...state,
                productZero: "",
                productOne: "",
                productTwo: "",
                productThree: ""
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
        case 'Transactions':
            return{
                ...state,
                transactions: action.data
            }
        case 'Withdraw':
            return{
                ...state,
                withdrawsuccess: true
            }
        case 'WithdrawClose':
            return{
                ...state,
                withdrawsuccess: false
            }
        case 'StartDelete':
            return{
                ...state,
                deleteBtn: true
            }
        case 'DELETE_SUCCESS':
            return{
                ...state,
                deleteBtn: false
            }
        default:
            return state
    }
}

export default farmersReducer