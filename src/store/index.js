import { combineReducers, createStore } from 'redux'
import classes from './classes'

const reducer = combineReducers({classes})

const store = createStore(reducer)

export default store
export * from './classes'