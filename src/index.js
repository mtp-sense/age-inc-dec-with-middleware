import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import AppWithReducer from "./AppWithReducer";
import AppWithReducerAndMiddleware from "./AppWithReducerAndMiddleware";
import AppWithReducerAndThunk from "./AppWithReducerAndThunk";
import AppWithReducerAndSaga from "./AppWithReducerAndSaga";
import { Provider } from "react-redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {watchAgeUp} from "./sagas/saga.js";

const sagaMiddleware = createSagaMiddleware();


// const logActionMiddleware = store =>{
//   return next=>{
//     return action=>{
//         console.log("dispatching the action:",action);
//         const result = next(action);
//         console.log("New State:",store.getState());
//         return result;
//     }
//   }
// }
// const logActionMiddleware = storeAPI=>next=>action=>{
//   console.log("Dispatching action:",action);
//    const result = next(action);
//    console.log("Next state:",storeAPI.getState());
//    return result;
// }
// const store = createStore(reducer,applyMiddleware(logActionMiddleware));

//const store = createStore(reducer,applyMiddleware(thunk));

const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      {/* <App /> */}
      {/* <AppWithReducer /> */}
      {/* <AppWithReducerAndMiddleware /> */}
      {/* <AppWithReducerAndThunk /> */}
      <AppWithReducerAndSaga />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
