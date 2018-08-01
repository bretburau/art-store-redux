import { combineReducers } from 'redux';
import piecesReducer from './pieces_reducer'

const rootReducer = combineReducers({
    pieces: piecesReducer
})

export default rootReducer;