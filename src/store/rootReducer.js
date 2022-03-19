import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cardReducer } from "./cardReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { authReducer } = require("./authReducer");

const rootReducer = combineReducers({
    authenticated: authReducer,
    cardData: cardReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
