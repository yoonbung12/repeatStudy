import {createStore} from 'redux'
import subscribersReducer from './Subscribers/reducers';
import rootReducer from './rootReducer';
// store
const store = createStore(rootReducer);

export default store; 