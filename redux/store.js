import { createStore } from 'redux';
import rootReducer from './reducers/countReducer';
// const store = createStore(rootReducer,{})

const store = createStore(rootReducer);
export default store