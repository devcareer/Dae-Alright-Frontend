import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./Redux/reducers/rootReducer"


function configureStore(initialState= {} ) {
    return createStore (
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export default configureStore