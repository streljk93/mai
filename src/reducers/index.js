import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import entities from './entities';
import edges from './edges';
import tables from './tables';

export default combineReducers({
    routing: routerReducer,
    entities,
    edges,
    tables,
});