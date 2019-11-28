import { combineReducers } from "redux"
import restaurantReducer from "./restaurantReducer"
import userReducer from "./userReducer.signin."


export default combineReducers ({
    userReducer,
    restaurantReducer
});
