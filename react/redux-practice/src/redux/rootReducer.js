import { combineReducers } from "redux";
import subscribersReducer from "./Subscribers/reducers";
import viewReducer from "./views/reducers";

const rootReducer = combineReducers({
    view: viewReducer,
    subscribe: subscribersReducer
})

export default rootReducer;