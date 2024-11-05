import { call, put, takeEvery } from "redux-saga/effects"

const actionPromise = (name, promise) =>
    ({type: 'PROMISE_START', name, promise})

const actionPending   =       name      => ({type:'PROMISE',name, status: 'PENDING'})
const actionResolved =  (name,payload) => ({type:'PROMISE',name, status: 'FULFILLED', payload})
const actionRejected  =   (name,error)  => ({type:'PROMISE',name, status: 'REJECTED', error})


export function* promiseWatcher(){
    yield takeEvery('PROMISE_START', promiseWorker)
}

function* promiseWorker(action){ 
    const {name, promise} = action
    yield put(actionPending(name)) 
    try {
        let data = yield promise 
        yield put(actionResolved(name, data))
        return data 
    }
    catch (error) {
        yield put(actionRejected(name, error))
    }
}


// export const backendURL = 'http://player-api/api';

    const getGQL = (backendURL) =>
    (plusurl) => fetch(backendURL+plusurl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            ...(localStorage.authToken ? {"Authorization": "Bearer " + localStorage.authToken} : {})
        }
    }).then(res => res.json())
        .then(data => {
            return data;
            
        })


// export const gql = getGQL(backendURL);

// export const actionAllPlaylists = () =>
//     actionPromise('allPlaylists', gql('/playlists'))