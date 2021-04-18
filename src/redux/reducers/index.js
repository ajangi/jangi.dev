import { combineReducers } from 'redux';
import resume from './resume';

const appReducer = combineReducers({
    resume
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;
