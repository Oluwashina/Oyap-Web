
const initState = {
    dashboardCount: {},
    recentUsers: [],
    recentOrders: [],
    adminOrders: [],
    usersCount: {},
    users: [],
    stats: {},
    userOrder: [],
    order:{},
    order_fetched: false,
    order_cancelled: false,
    requests: [],
    declinedLoader: false,
    orderLoader: false
}

const adminReducer = (state=initState, action) => {
    switch(action.type){
        case 'AdminDashboardCount':
            return{
                ...state,
                dashboardCount: action.data
            }
        case 'AdminRecentUsers':
            return{
                ...state,
                recentUsers: action.data,
                users: action.data
            }
        case 'AdminRecentOrders':
            return{
                ...state,
                recentOrders: action.data
            }
        case 'AdminOrders':
            return{
                ...state,
                adminOrders: action.data
            }
        case 'AdminUsersCount':
            return{
                ...state,
                usersCount: action.data
            }
        case 'AdminUsers':
            return{
                ...state,
                users: action.data
            }
        case 'Statistics':
            return{
                ...state,
                stats: action.data
            }
        case 'UserOrder':
            return{
                ...state,
                userOrder: action.data
            }
        case 'OrderById':
            return{
                ...state,
                order: action.data,
                order_fetched: true
            }
        case 'cleanOrderStatus':
            return{
                ...state,
                order_fetched: false
            }
        case 'OrderCancelled':
            return{
                ...state,
                order_cancelled: true
            }
        case 'clearCancelStatus':
            return{
                ...state,
                order_cancelled: false
            }
        case 'CancelOrder_Error':
            return{
                ...state,
                order_cancelled: false
            }
        case "WithdrawalRequests":
            return{
                ...state,
                requests: action.data
            }
        case "Declined_Start":
            return{
                ...state,
                declinedLoader: true
            }
        case "Declined_Success":
            return{
                ...state,
                declinedLoader: false
            }
        case "Declined_Error":
            return{
                ...state,
                declinedLoader: false
            }
        case "Order_Start":
            return{
                ...state,
                orderLoader: true
            }
        case "Order_Success":
            return{
                ...state,
                orderLoader: false
            }
        case "Order_Error":
            return{
                ...state,
                orderLoader: false
            }
        default:
            return state
    }
}

export default adminReducer