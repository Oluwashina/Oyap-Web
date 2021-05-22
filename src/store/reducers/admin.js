
const initState = {
    dashboardCount: {},
    recentUsers: [],
    recentOrders: []
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
        default:
            return state
    }
}

export default adminReducer