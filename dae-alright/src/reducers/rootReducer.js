import { combineReducers } from "redux"
import simpleReducer from "./simpleReducer"
import restaurantReducer from "./restaurantReducer"


export default combineReducers ({
    simpleReducer,
    restaurantReducer
});