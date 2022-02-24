import {GetApi, PutApi, PostApi, DeleteApi} from '../helpers'
import cogoToast from "cogo-toast";
// import axios from 'axios';



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// get product type
export const getProductType = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("category/product", getToken());
      if (res.status === 200) {
        dispatch({ type: "ProductType", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "TypeError", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// get product category by product type id
export const getProductCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("subcategory/product/"+id, getToken());
      if (res.status === 200) {
        dispatch({ type: "ProductCategory", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "CategoryError", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


// get all products API
export const getFarmersProducts = () => {
  return async (dispatch, getState) => {
      const id = getState().auth.id;
    try {
      const res = await GetApi("sellerproducts/"+id, getToken());
      if (res.status === 200) {
        dispatch({ type: "FarmersProducts", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "ErrorProduct", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


// Upload a product image
export const UploadProductImage = (value, index) => {
  return async (dispatch, getState) => {
    // show a spinner or progress bar
    dispatch({ type: "StartProductLoader"});
      let formdata = new FormData()
      formdata.append("file", value);
    try {
      const res = await PostApi("image", formdata, getToken(), "multipart/form-data");
      if (res.status === 201) {
            var image = res.data.imageUrl
            // stop loader after success
            cogoToast.success('Product image uploaded successfully!')
                 // check for index and upload
            switch(index){
              case 0:
                dispatch({type: "productZero", image, index})
                break;
              case 1:
                dispatch({type: "productOne", image, index})
                break;
              case 2:
                dispatch({type: "productTwo", image, index})
                break;
              case 3:
                dispatch({type: "productThree", image, index})
                break;
              default:
                break;
            }
       
           
        }
        if(res.status === 400 || res.status === 404){
          // stop loader for error
          cogoToast.error('Error while uploading image!')
          dispatch({ type: "StopProductLoader"});
        }
    } catch (err) {
      // var message = err.response.data
        console.log(err)
    }
  };
};

// add a farmers product functionality
export const addProduct = (val) => {
  return async (dispatch, getState) => {
    let image = [];
    let stock;
    // let isLogistics;
    var result = [
      ...image,
      getState().farmers.productZero,
      getState().farmers.productOne,
      getState().farmers.productTwo,
      getState().farmers.productThree
    ]
    if(val.quantity <= 0){
      stock = false
    }
    else{
      stock = true
    }
    // if(val.isLogistics === "Yes"){
    //   isLogistics = true
    // }
    // else{
    //   isLogistics = false
    // }
      const data = {
        productName: val.name,
        productCategory: val.type,
        productSubcategory: val.category,
        productPrice: val.price,
        displayPrice: (0.1 * parseFloat(val.price)) + (parseFloat(val.price)),
        productQuantity: val.quantity,
        productDescription: val.description,
        productInStock: stock,
        productImages: result,
        productWeight: parseFloat(val.weight),
        isLogistics: false
      }
    try {
      const res = await PostApi("product", {...data}, getToken(), "application/json")
      if (res.status === 201) {
        dispatch({ type: "Product_Created" });
        cogoToast.success('Product added successfully!')
      }
      if(res.status === 400){
        dispatch({ type: "Order_Error", err: res.data});
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// filter a product by id
export const EditProduct = (id) =>{
  return dispatch =>{
      dispatch({type: 'EditProduct', id})
  }
}

// clear the product images
export const clearProductImages = (id, qty) =>{
  return dispatch =>{
      dispatch({type: 'clearProductImages'})
  }
}

// update a product
export const updateProduct = (val) => {
  return async (dispatch, getState) => {
    let image = [];
    let stock;
    // let isLogistics;
    var result = [
      ...image,
      getState().farmers.productZero,
      getState().farmers.productOne,
      getState().farmers.productTwo,
      getState().farmers.productThree
    ]
    if(val.quantity <= 0){
      stock = false
    }
    else{
      stock = true
    }

    // if(val.isLogistics === "Yes"){
    //   isLogistics = true
    // }
    // else{
    //   isLogistics = false
    // }
    const data = {
      productName: val.name,
      productCategory: val.type,
      productSubcategory: val.category,
      productPrice: val.price,
      displayPrice: (0.1 * parseFloat(val.price)) + (parseFloat(val.price)),
      productQuantity: val.quantity,
      productDescription: val.description,
      productInStock: stock,
      productImages: result,
      productWeight: parseFloat(val.weight),
      isLogistics: false
    }
    try {
      const res = await PutApi("products/"+val.id, {...data}, getToken())
      if (res.status === 200) {
        dispatch({ type: "Update_Success", err: res.data });
        cogoToast.success("Product updated successfully!");
      }
      if(res.status === 400){
        dispatch({ type: "Update_Error", err: res.data });
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// delete a farmers product
export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    dispatch({type: 'StartDelete'})
    try {
      const res = await DeleteApi("products/"+id, getToken());
      if (res.status === 200) {
        dispatch({ type: "DELETE_SUCCESS"});
        cogoToast.success(`Product deleted successfully`); 
      }
      if(res.status === 400){
        dispatch({ type: "PRODUCT_ERROR", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

  // get new orders of a seller
  export const getNewOrders = () => {
    return async (dispatch, getState) => {
      try {
        const id = getState().auth.id
        const res = await GetApi("new/orders/seller/"+id+"?limit=5", getToken());
        if (res.status === 200) {
          dispatch({ type: "NewOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get all new Orders with offset and limit
  export const getNewOrdersLimit = (values) => {
    return async (dispatch, getState) => {
      try {
        const id = getState().auth.id
        const limit = values.limit
        const offset = values.offset
        const res = await GetApi("new/orders/seller/"+id+"?limit="+limit+"&offset="+offset, getToken());
        if (res.status === 200) {
          dispatch({ type: "NewOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get all confirmed orders of a farmer with limit and offset
  export const getConfirmedOrders = (values) => {
    return async (dispatch, getState) => {
      try {
        const limit = values.limit
        const offset = values.offset
        const res = await GetApi("seller/order/Confirmed/?limit="+limit+"&offset="+offset, getToken());
        if (res.status === 200) {
          dispatch({ type: "ConfirmedOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };


  // get all completed orders of a farmer with limit and offset
  export const getCompletedOrders = (values) => {
    return async (dispatch, getState) => {
      try {
        const limit = values.limit
        const offset = values.offset
        const res = await GetApi("seller/order/Completed/?limit="+limit+"&offset="+offset, getToken());
        if (res.status === 200) {
          dispatch({ type: "CompletedOrders", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Order_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  
  // filter Order
  export const orderbyId = (name, id) =>{
    return dispatch =>{
      switch(name){
        case 'new':
          dispatch({ type: "NewOrderFilter", id: id, name: name});
          break;
        case 'confirmed':
          dispatch({ type: "ConfirmedOrderFilter", id: id, name: name});
          break;
        case 'completed':
          dispatch({ type: "CompletedOrderFilter", id: id, name: name});
          break;
        default:
          break;
      }
    }
}

// get farmers dashboard Count
export const getDashboardCount = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("dashboard/seller/count", getToken());
      if (res.status === 200) {
        dispatch({ type: "DashboardCount", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Count_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};
  

// confirm new order
export const confirmMyOrder = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "confirm_Loader", });
    try {
      const res = await PutApi("confirm/orders/"+id, "", getToken())
      if (res.status === 200) {
        dispatch({ type: "Confirm_Success", err: res.data });
        cogoToast.success("Order confirmed successfully!");
      }
      if(res.status === 400){
        dispatch({ type: "Confirm_Error", err: res.data });
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// get the transactions for a farmer
export const getFarmersTransactions = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("transactions/seller", getToken());
      if (res.status === 200) {
        dispatch({ type: "Transactions", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Transact_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// get the transactions for a farmer
export const getBanks = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("bank/code", getToken());
      if (res.status === 200) {
        dispatch({ type: "Banks", data: res.data.bankCode.data});
      }
      if(res.status === 400){
        dispatch({ type: "Banks_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// withdraw functionality
export const WithdrawAmount = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("withdraw", {
                      amount: val.amount,
                      accountName: val.accountName,
                      accountNumber: val.accountNumber,
                      bankName: val.bankName,
                      bankCode: val.bank,
                      narration: val.narration
                     }, getToken(), "application/json")
      if (res.status === 200) {  
        dispatch({ type: 'Withdraw' });
      }
      if(res.status === 400){
        // error while making withdraw
        dispatch({ type: 'Withdraw_Error' });
        cogoToast.error(`${res.data.message}`);
      }
      if(res.status === 500){
        cogoToast.error(`${res.data.message}`);
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// close withdraw modal
export const CloseWithdrawModal = (id, qty) =>{
  return dispatch =>{
      dispatch({type: 'WithdrawClose'})
  }
}

  