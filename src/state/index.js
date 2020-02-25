import { combineReducers } from 'redux';
import preloader from './reducers/preloader';
import nav from './reducers/nav';
import scorm from './reducers/scorm';

export default combineReducers({ preloader, nav , scorm });