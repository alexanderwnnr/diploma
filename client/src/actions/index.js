
const itemsLoaded = (newItems) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItems
    }
}
const itemsRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUEST'
    }
}
const itemsError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    }
}
const orderLoaded = (userId) => {
    return {
        type: 'ORDER_SECCUSS',
        payload: userId
    }
}
const orderRequested = () => {
    return {
        type: 'ORDER_REQUEST'
    }
}

// fetchItems has itemsLoaded, itemsRequested, itemsError

// without thunk

// const fetchItemsOld = (myService, dispatch) => () => {
//     dispatch(itemsRequested())

//     myService.getItem()
//         .then((data) => 
//         // dispatch action to store
//         dispatch(itemsLoaded(data)))
//         .catch((err) => dispatch(itemsError(err)))
// }


// for thunk
const dataLoaded = (newItems) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: newItems
    }
}
const dataRequested = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}
const dataError = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: error
    }
}
const fetchItems = (myService) => () => (dispatch) => {
    dispatch(itemsRequested())

    myService.getItems()
        .then((res) => 
        // dispatch action to store
        dispatch(itemsLoaded(res.data)))
        // .catch((err) => dispatch(itemsError(err)))
}
const fetchAItems = (myService) => () => (dispatch) => {
    dispatch(dataRequested())

    myService.getAItems()
        .then((res) => 
        // dispatch action to store
        dispatch(dataLoaded(res.data)))
        // .catch((err) => dispatch(itemsError(err)))
}
const fetchItem = (myService) => (_id) => (dispatch) => {
    dispatch(itemsRequested())

    myService.getItem(_id)
        .then((res) => 
        // dispatch action to store
        dispatch(itemsLoaded(res.data)))
        .catch((err) => dispatch(itemsError(err)))
}
const orderTo = (myService) => () => (dispatch) => {
    dispatch(orderRequested())

    myService.postOrder()
        .then(res => dispatch(orderLoaded(res.data)));
        
        
} 

// const fetchItems = (myService) => () => (dispatch) => {
//     dispatch(itemsRequested())
//     axios.get('/api/items')
//         .then((res) => 
//         // dispatch action to store
//         dispatch({
//             type: 'FETCH_ITEMS_SUCCESS', 
//             payload: res.data
//     }))
//         .catch((err) => dispatch(itemsError(err)))
// }



//////////////////////////////////////////////////////
export const orderSubmit = (itemId) => {
    return {
        type: 'ORDER_SUBMIT'
    }
}

export const itemAddedToCart = (itemId) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: itemId
    }
}

export const itemRemovedFromCart = (itemId) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: itemId
    }
}


export const allItemsRemovedFromCart = (itemId) => {
    return {
        type: 'ALL_ITEMS_REMOVED_FROM_CART',
        payload: itemId
    }
}

export {
    fetchItems,
    fetchAItems,
    fetchItem
}