import { SIGNIN, SIGNUP } from "./types";


export const goLogin = () => {
    return{
        type: SIGNIN,
        payload : 'login'
    }
}

export const goRegister = () => {
    return{
        type: SIGNUP,
        payload: 'register'
    }
}