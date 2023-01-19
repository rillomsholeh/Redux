import { combineReducers, createStore } from "redux";
import counterReducer from "./features/counterFeatuer/reducer";




let rootReducers = combineReducers({
    counter: counterReducer
});


let store = createStore(rootReducers)
export default store;