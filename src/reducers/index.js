import { combineReducers } from 'redux';
import citasReducer from './citasReducers'
import errorReducers from './errorReducers'

export default combineReducers({
    citas: citasReducer,
    error: errorReducers
});


//aca se combinas todos los reducers