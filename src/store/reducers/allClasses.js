// INITIAL STATE
const initialState = {
  '202005041800': {
    name: 'Core Conditioning',
    description: 'This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class.',
    price: 15,
    link: 'zoom/j/123456789'
  },
  '202005071400': {
    name: 'Floor Fluidity',
    description: 'This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class.',
    price: 25,
    link: 'zoom/j/987654321'
  }
} 

// REDUCER
const reducer = (state = initialState, action) => {
  console.log('ACTION:',action)
  switch(action.type) {
    case 'DISPLAY_CLASSES_ON_SCHEDULE':
      console.log('HERE!', state)
      return state
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
