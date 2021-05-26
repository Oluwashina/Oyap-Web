
const initState = {
    dashboardCount: {},
    recentUsers: [],
    recentOrders: [],
    usersCount: {},
    users: [],
    stats: {},
    userOrder: [],
    order:{},
    order_fetched: false
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
                recentUsers: action.data
            }
        case 'AdminRecentOrders':
            return{
                ...state,
                recentOrders: action.data
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
        default:
            return state
    }
}

export default adminReducer