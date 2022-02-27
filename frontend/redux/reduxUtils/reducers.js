import { REGISTER_FAILED, REGISTER_SUCESS, REGISTER_REQUEST } from "./types"
import { LOGIN_REQUEST, LOGIN_SUCESS, LOGIN_FAILED } from "./types"



//* register Reducer
const initState = {
    isLoading: false,
    response: [],
    error: ''
}

export const setRegister =  ( state = initState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        
        case REGISTER_SUCESS:
            return {
                isLogin: false,
                response: action.payload,
                error: ''
            }

        case REGISTER_SUCESS:
            return {
                isLogin: false,
                response: [],
                error: action.payload
            }
    
        default:
            return state
    }
}



//*login reducer


const loginState = {
    isLoading: false,
    response: [],
    error: ''
}

export const setLogin = (state = loginState, action ) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
    

        case LOGIN_SUCESS:
            return {
                isLoading: false,
                response: action.payload,
                error: ''
            }

        case LOGIN_FAILED: 
            return {
                isLoading: false,
                response: [],
                error: action.payload
            }
        default: 
            return state
    }
}