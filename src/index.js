import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"
import {createStore, applyMiddleware} from "redux";
import getNewsApp from "./reducers/reducers";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(getNewsApp, applyMiddleware(thunk))

const mountNode = document.getElementById("app");

ReactDOM.render(
<Provider store={store}>    
<App/>
</Provider>, mountNode);