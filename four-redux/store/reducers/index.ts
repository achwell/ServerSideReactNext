import { combineReducers } from 'redux'
import posts from './posts.reducer'
const appReducers = combineReducers({posts})
export default appReducers