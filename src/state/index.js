import { combineReducers } from 'redux';
import nav from './reducers/nav';
import scorm from './reducers/scorm';

export default combineReducers({ nav , scorm });