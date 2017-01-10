import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import store from "./store"

import Layout from "./layout/Layout"
import MainPage from "./pages/MainPage"
import NotFound from "./pages/NotFound"

import toastr from "../css/toastr.css"
import app_css from "../css/app.css"

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={MainPage} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>, app);
