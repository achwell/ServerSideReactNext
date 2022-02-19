import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducers from './reducers'
const store = createStore(
    appReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store