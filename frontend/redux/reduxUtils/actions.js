import { REGISTER_FAILED, REGISTER_SUCESS, REGISTER_REQUEST } from "./types"
import { LOGIN_REQUEST, LOGIN_SUCESS, LOGIN_FAILED } from "./types"


//* register Actions
export const registerActionRequest = () => {
    return  {
        type: REGISTER_REQUEST
    }
}


export const registerActionSuccess = (responseData) => {
    return  {
        type: REGISTER_SUCESS,
        payload: responseData
    }
}

export const registerActionFailed = (errorMessage) => {
    return  {
        type: REGISTER_FAILED,
        payload: errorMessage
    }
}


//* Login Actions
export const loginActionReq = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginActionSucess = (responseData) => {
    return {
        type: LOGIN_SUCESS,
        payload: responseData
    }
}

export const loginActionFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        payload: error
    }
}