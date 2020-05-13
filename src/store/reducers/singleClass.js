// INITIAL STATE
const initialState = {}

// REDUCER
const reducer = (state = initialState, action) => {
  console.log('ACTION:', action)
  switch(action.type) {
    case 'DISPLAY_SINGLE_CLASS':
      return action.singleClass
    default:
      console.log('DEFAULT', state)
      return state
  }
}

export default reducer