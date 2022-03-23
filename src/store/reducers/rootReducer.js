import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./authReducer";
import { cardReducer } from "./cardReducer";


const rootReducer = combineReducers({
    user: authReducer,
    card: cardReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
