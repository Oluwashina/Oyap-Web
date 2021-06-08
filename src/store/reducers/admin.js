
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
    order_cancelled: false
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
        default:
            return state
    }
}

export default adminReducer