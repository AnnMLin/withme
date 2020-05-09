// INITIAL STATE
const initialState = {} 

// REDUCER
const reducer = (state = initialState, action) => {
  console.log('ACTION:',action)
  switch(action.type) {
    case 'DISPLAY_CLASSES_ON_SCHEDULE':
      return action.classes
    case 'ADD_CLASS_TO_SCHEDULE':
      return {...state, ...action.classObj}
    case 'REMOVE_CLASS_FROM_SCHEDULE':
      const newState = {...state}
      delete newState[action.classDate] 
      return {...state, ...newState}
    default:
      console.log('DEFAULT', state)
      return state
  }
}

export default reducer
