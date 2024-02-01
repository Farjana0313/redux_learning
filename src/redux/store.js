import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
// create our first middleware
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));

export default store;
