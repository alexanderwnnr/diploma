const authReducer = (state, action) => {
    
    if(state === undefined){
        return {
            token: localStorage.getItem('token'),
            isAuthenticated: null,
            isLoading: false,
            user: null
        }
    }

    switch (action.type) {
        case 'USER_LOADING':
            return {
                token: localStorage.getItem('token'),
                isAuthenticated: null,
                isLoading: true,
                user: null
            }
        case 'USER_LOADED':
            return {
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', action.payload.token)
            return {
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT_SUCCESS':
        case 'REGISTER_FAIL':
            localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            }
        default:
            return state.authState
    }
}

export default authReducer