
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
const fetchItems = (myService) => () => (dispatch) => {
    dispatch(itemsRequested())

    myService.getItems()
        .then((res) => 
        // dispatch action to store
        dispatch(itemsLoaded(res.data)))
        // .catch((err) => dispatch(itemsError(err)))
}
const fetchItem = (myService) => () => (dispatch) => {
    dispatch(itemsRequested())

    myService.getItem()
        .then((res) => 
        // dispatch action to store
        dispatch(itemsLoaded(res.data)))
        .catch((err) => dispatch(itemsError(err)))
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
    fetchItem
}