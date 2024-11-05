export let promiseReducer =  (state = {}, action) => {
    if (action.type === 'PROMISE_START'){
            return {
                ...state,
                [action.name]: action
            }
    }
    return state;
}
