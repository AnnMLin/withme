import { combineReducers } from 'redux'
import allClasses from './allClasses'
import singleClass from './singleClass'

const reducer = combineReducers({
  allClasses, 
  singleClass
})

export default reducer
// export {default as allClasses} from './allClasses'