
const initState = {
    isLoading: false,
    products:[]
}

const farmersReducer = (state=initState, action) => {
    switch(action.type){
        case 'FarmersProducts':
            return{
                ...state,
                products: action.data
            }
        default:
            return state
    }
}

export default farmersReducer