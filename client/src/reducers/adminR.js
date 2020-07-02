const updateAdminList = (state, action) => {

    if(state === undefined){
        return {
            items: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {
                items: [],
                loading: true,
                error: null
            }
        case 'FETCH_DATA_SUCCESS':
            return {
                items: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_DATA_FAILURE':
            return {
                items: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.adminList
    }
}

export default updateAdminList