import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from './Redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore()
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
