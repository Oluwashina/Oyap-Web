import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//store
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./store/reducers/rootReducer"
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
 


import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from "react-redux-firebase";
import firebase from "firebase/app";
import fbConfig from "./config/firebase";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div className="center">loading...</div>;
  return children;
}


// const store = createStore(
//   rootReducer,    
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
//     reduxFirestore(firebase, fbConfig)
//   )
// );
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	}) : compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
  reduxFirestore(firebase, fbConfig))
  
)

const rrfProps = {
  firebase: fbConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
