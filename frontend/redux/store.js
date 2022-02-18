import { createStore } from "redux";
import { setLogin } from "./reduxUtils/reducers";


const store = createStore(setLogin); //create a store and give it the reducer we imported above
export default store;