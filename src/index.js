import React from 'react';
import { AppContainer } from 'react-hot-loader';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './App';
import './style/default.scss';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
