import { createStore, combineReducers, applyMiddleware } from "redux";
import { setLogin, setRegister } from "./reduxUtils/reducers";
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk, logger]
const rootReducer = combineReducers({
    register: setRegister,
    login: setLogin,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares))); //create a store and give it the reducer we imported above
export default store;