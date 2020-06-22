import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'

// const stringMiddleware = () => (next) => (action) => {
//     if(typeof action === 'string'){
//         return next({
//             type: action
//         })
//     }
// }

const logMiddleware = ({getState}) => (dispatch) => (action) => {
    console.log(action.type, getState())
    return dispatch(action)
}

const store = createStore(reducer, applyMiddleware(logMiddleware, thunkMiddleware))

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(()=> dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
}
store.dispatch(delayedActionCreator(3000))

export default store