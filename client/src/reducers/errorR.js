const errorReducer = (state, action) => {

    if(state === undefined){
        return {
            msg: {},
            status: null,
            id: null
        }
    }

    switch (action.type) {
        case 'GET_ERRORS':
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case 'CLEAN_ERRORS':
            return {
                msg: {},
                status: null,
                id: null
            }
    
        default:
            return state.errorReducer;
    }
}

export default errorReducer