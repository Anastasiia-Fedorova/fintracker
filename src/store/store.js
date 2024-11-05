import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { promiseReducer } from './reducers/promiceReducer';
import {all} from 'redux-saga/effects';
import { promiseWatcher } from './saga';
import { authReducer } from './reducers/authReducer';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({authReducer, promiseReducer}), applyMiddleware(sagaMiddleware));


function* rootSaga(){ 
    yield all([ 
        promiseWatcher()
    ])
}

sagaMiddleware.run(rootSaga);