import { SIGNIN, SIGNUP } from "./types";


const initState = {
    isLogin: 'homePage'
}

export const setLogin =  ( state = initState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                isLogin: SIGNIN
            }
        
        case SIGNUP:
            return {
                isLogin: SIGNUP
            }
    
        default:
            return state
    }
}
