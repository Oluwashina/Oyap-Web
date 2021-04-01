import * as actionTypes from '../actions/actionTypes'

const initState = {
    isLoading: false,
    products: [
        {
            id:"PaAZ8BhMfYoxUeIzRoa6",
            name:"Corn",
            quantity:1,
            price:10000,
            sellerId:"G4LUsAAkXPNteobmqcGscUdjUOl1",
            sellerLastName:"Ademola",
            category:"Grain",
            description:"This belongs to the category of grain",
            sellerFirstName:"Johnson",
            createdAt: {seconds:1614317100,nanoseconds:235000000},
            images: [
                "https://firebasestorage.googleapis.com/v0/b/oyap-web-f7f5b.appspot.com/o/products%2Fitem5.png?alt=media&token=f3c81727-c4f9-4b14-a4d2-01612f2229ef"
            ]
        },
        {
            id:"0ERgGyEDXZingwWuJcZh",
            name:"Green Beans",
            quantity:1,
            price:10000,
            sellerId:"G4LUsAAkXPNteobmqcGscUdjUOl1",
            sellerLastName:"Ademola",
            category:"Grain",
            description:"To be very honest, I love consuming beans",
            sellerFirstName:"Johnson",
            createdAt: {seconds:1614317279,nanoseconds:92000000},
            images: [
                "https://firebasestorage.googleapis.com/v0/b/oyap-web-f7f5b.appspot.com/o/products%2Fitem1.png?alt=media&token=c2848761-0ecb-43bb-9cc8-b67fbfbbeee6"
            ]   
        },
        {
            id:"Qzx1xPJUgBCylO8n5tdW",
            name:"Rice",
            quantity:1,
            price:20000,
            sellerId:"G4LUsAAkXPNteobmqcGscUdjUOl1",
            sellerLastName:"Ademola",
            category:"Grain",
            description:"This belongs to the category of grain too",
            sellerFirstName:"Johnson",
            createdAt: {seconds:1614317436,nanoseconds:622000000},
            images: [
                "https://firebasestorage.googleapis.com/v0/b/oyap-web-f7f5b.appspot.com/o/products%2Fitem3.png?alt=media&token=1c40bcd6-9400-4a96-ba01-6ccf3f1df4ca"
            ]    
        },
        {
            id:"CeE9anzfU0EBcGXYn8ZC",
            name:"Long pepper",
            quantity:1,
            price:20000,
            sellerId:"G4LUsAAkXPNteobmqcGscUdjUOl1",
            sellerLastName:"Ademola",
            category:"Unknown",
            description:"A very nice pepper",
            sellerFirstName:"Johnson",
            createdAt: {seconds:1614317572,nanoseconds:644000000},
            images: [
                "https://firebasestorage.googleapis.com/v0/b/oyap-web-f7f5b.appspot.com/o/products%2Fitem4.png?alt=media&token=a68f14a6-607c-4422-bf79-940cf838103b"
            ]   
        },
        {
            id:"lWjZd6682xpgkFDhV25B",
            name:"Pepper",
            quantity:1,
            price:30000,
            sellerId:"2GOCBgHIAkfWHpFc5yKsCv3mKyN2",
            sellerLastName:"Ojo",
            category:"Unknown",
            description:"I can't think of anyone at the moment",
            sellerFirstName:"Oluwashina",
            createdAt: {seconds:1614318038,nanoseconds:998000000},
            images: [
                "https://firebasestorage.googleapis.com/v0/b/oyap-web-f7f5b.appspot.com/o/products%2Fitem6.png?alt=media&token=67c28741-8b9b-4ec2-b61a-5016606a77b1"
            ] 
        },
        {
            id:"xnf0TVW1PRcd3DrfXE54",
            name:"Maize",
            quantity:1,
            price:10000,
            sellerId:"2GOCBgHIAkfWHpFc5yKsCv3mKyN2",
            sellerLastName:"Ojo",
            category:"Grain",
            description:"This belongs to the category of grain",
            sellerFirstName:"Oluwashina",
            createdAt: {seconds:1614318309,nanoseconds:431000000},
            images: [
                "https://firebasestorage.googleapis.com/v0/b/oyap-web-f7f5b.appspot.com/o/products%2Fitem5.png?alt=media&token=f3c81727-c4f9-4b14-a4d2-01612f2229ef"
            ]  
        },
        {
            id:"bydnDc6BGVkpe9R8BvNi",
            name:"Green Beans",
            quantity:1,
            price:10000,
            sellerId:"2GOCBgHIAkfWHpFc5yKsCv3mKyN2",
            sellerLastName:"Ojo",
            category:"Grain",
            description:"I can talk about Beans all day.....lol, just kidding.",
            sellerFirstName:"Oluwashina",
            createdAt: {seconds:1614318579,nanoseconds:342000000},
            images: [
                "https://firebasestorage.googleapis.com/v0/b/oyap-web-f7f5b.appspot.com/o/products%2Fitem1.png?alt=media&token=c2848761-0ecb-43bb-9cc8-b67fbfbbeee6"
            ]  
        }
    ]
}

const productsReducer = (state=initState, action) => {
    switch(action.type){
        case actionTypes.CREATE_PRODUCT_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case actionTypes.CREATE_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default productsReducer