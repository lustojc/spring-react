import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./authReducer";
import { cardReducer } from "./cardReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  user: authReducer,
  card: cardReducer,
  errors: errorReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
