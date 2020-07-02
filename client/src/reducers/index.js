import updateItemList from './itemListR'
import updateShoppingCart from './shoppingCartR'
import errorReducer from './errorR'
import authReducer from './authR'
import updateAdminList from './adminR' 

const reducer = (state, action) => {

    return {
        itemList: updateItemList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        errorReducer: errorReducer(state, action),
        authState: authReducer(state, action),
        adminList: updateAdminList(state, action)
    }
}

export default reducer