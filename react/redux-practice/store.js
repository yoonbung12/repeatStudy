const redux = require("redux");
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


// actions
// action-types 
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';
const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}

const addViewCount = () => {
    return {
        type: ADD_VIEWCOUNT
    }
}

// reducers
const initialState = {
    subscribers: 365
}
const subscriberReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
            default: return state;
    }

} 

const viewState = {
    viewCount: 100
}
const viewReducer = (state=viewState, action) => {
    switch(action.type) {
        case ADD_VIEWCOUNT:
            return {
                ...state,
                viewCount: state.viewCount + 1
            }
            default: return state;
    }

}

// reducer들을 묶기 위해서 combineReducers 사용
const rootReducers = combineReducers({
    view: viewReducer,
    subscribers: subscriberReducer
})


// store
const store = createStore(rootReducers, applyMiddleware(logger));

// subscribe - view - dispathc
// store.subscribe(() => {
//     console.log('subscribe ==>>', store.getState());
// })

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());


// ------ 테스트용으로 찍어본거 subscribe 사용전
// console.log(store.getState());

// store.dispatch(addSubscriber());
// console.log(store.getState());