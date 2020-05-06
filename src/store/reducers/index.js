import { combineReducers } from 'redux'
import allClasses from './allClasses'

const reducer = combineReducers({
  allClasses
})

export default reducer
export {default as allClasses} from './allClasses'