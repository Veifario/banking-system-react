import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { auth } from "../reducers";

const rootReducer = combineReducers({ auth });

export const store = createStore(rootReducer, applyMiddleware(thunk));
