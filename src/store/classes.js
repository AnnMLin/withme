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

// ACTION TYPES
const ADD_CLASS = 'ADD_CLASS'
const REMOVE_CLASS = 'REMOVE_CLASS'

// ACTION CREATOR
export const addClass = (classObj) => ({type: ADD_CLASS, classObj})
export const removeClass = (classDate) => ({type: REMOVE_CLASS, classDate})

// REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CLASS:
      return {...state, ...action.classObj}
    case REMOVE_CLASS:
      const newState = {...state}
      delete newState[action.classDate] 
      return {...state, ...newState}
    default:
      return state
  }
}

export default reducer
