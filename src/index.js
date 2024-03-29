import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//store
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./store/reducers/rootReducer"
import { Provider } from "react-redux";
import thunk from "redux-thunk";



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	}) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

export const store = createStore(
  rootReducer,
  enhancer
);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
