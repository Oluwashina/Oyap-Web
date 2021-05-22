
const initState = {
    dashboardCount: {},
}

const adminReducer = (state=initState, action) => {
    switch(action.type){
        case 'AdminDashboardCount':
            return{
                ...state,
                dashboardCount: action.data
            }
        default:
            return state
    }
}

export default adminReducer