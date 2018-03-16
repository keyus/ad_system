import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import globalReducer from './global/reducer'        //登录状态

const store = createStore(
    combineReducers({ globalReducer }),
    applyMiddleware(thunk)
);
export default store;